import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const useGeminiApi = () => {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('getGeminiKey');
        
        if (error) {
          console.error('Error fetching API key:', error);
          toast({
            title: "Configuration Error",
            description: "Failed to fetch API key. Please check your configuration.",
            variant: "destructive",
          });
          return;
        }

        if (data?.key) {
          setApiKey(data.key);
        } else {
          toast({
            title: "Configuration Error",
            description: "API key not found in configuration.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Error:', error);
        toast({
          title: "Error",
          description: "Failed to fetch API key. Please try again.",
          variant: "destructive",
        });
      }
    };

    fetchApiKey();
  }, [toast]);

  const generateBlogPost = async (prompt: string) => {
    if (!apiKey) {
      throw new Error("Gemini API key is not configured");
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a professional technical writer specializing in Termux tutorials. 
              Generate a blog post about: "${prompt}"
              
              IMPORTANT: Return a pure JSON object with NO markdown delimiters, NO code blocks, and NO additional formatting.
              Use this exact structure:
              {
                "title": "string (clear, SEO-friendly title)",
                "meta_description": "string (under 160 characters)",
                "keywords": ["string", "string", "string"],
                "content": "string (blog content with simple formatting)"
              }
              
              Rules:
              1. Do NOT include any markdown delimiters (```, etc.)
              2. Do NOT use any special formatting
              3. Escape all quotes and special characters in JSON strings
              4. Return ONLY the JSON object, nothing else
              5. Keep content formatting minimal, using only basic punctuation`
            }]
          }]
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  };

  const generateResponse = async (prompt: string) => {
    if (!apiKey) {
      throw new Error("Gemini API key is not configured");
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a Termux command expert. Provide a response in this exact format:

Step 1: [Brief description]
\`\`\`
[command]
\`\`\`

Step 2: [Brief description]
\`\`\`
[command]
\`\`\`

Note: [Add any relevant notes or warnings]

For this user request: "${prompt}"

If the request is unclear, respond only with the text: "Please provide a specific command or task you'd like help with in Termux."
Only provide Termux-related commands and information.`
            }]
          }]
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
    }

    return response.json();
  };

  const saveBlogPost = async (blogData: any) => {
    try {
      // Clean the response by removing any markdown delimiters or formatting
      const cleanContent = blogData.content.replace(/```[^`]*```/g, '')
        .replace(/`/g, '')
        .trim();

      const tempSlug = blogData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      const { data, error } = await supabase
        .from('ai_blog_posts')
        .insert({
          title: blogData.title,
          content: cleanContent,
          meta_description: blogData.meta_description,
          keywords: blogData.keywords,
          original_query: blogData.original_query,
          slug: tempSlug,
          status: 'pending'
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error saving blog post:', error);
      throw error;
    }
  };

  return { apiKey, generateResponse, generateBlogPost, saveBlogPost };
};