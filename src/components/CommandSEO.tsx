import { Helmet } from "react-helmet";

interface Command {
  name: string;
  description: string;
  category: string;
  usage: string;
  examples: string[];
}

interface CommandSEOProps {
  commands: Command[];
}

export const CommandSEO = ({ commands }: CommandSEOProps) => {
  // Generate keywords from commands
  const commandKeywords = commands
    .map(cmd => `${cmd.name} command, ${cmd.name} linux command, ${cmd.name} termux, how to use ${cmd.name}, ${cmd.name} examples`)
    .join(", ");

  return (
    <Helmet>
      <title>Linux Commands Guide - Complete Termux Command Reference</title>
      <meta 
        name="description" 
        content="Comprehensive guide to Linux and Termux commands. Learn how to use ls, cd, pkg, and other essential commands with examples and usage instructions." 
      />
      <meta 
        name="keywords" 
        content={`termux commands, linux commands, terminal commands, command line, ${commandKeywords}`}
      />
      
      {/* OpenGraph tags */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Linux Commands Guide - Complete Command Reference" />
      <meta 
        property="og:description" 
        content="Complete reference for Linux and Termux commands with examples and detailed explanations." 
      />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Linux Commands Guide - Complete Command Reference" />
      <meta 
        name="twitter:description" 
        content="Complete reference for Linux and Termux commands with examples and detailed explanations." 
      />

      {/* Schema.org structured data for commands */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "Linux Commands Guide - Complete Command Reference",
          "description": "Comprehensive guide to Linux and Termux commands",
          "keywords": commandKeywords,
          "mainEntity": commands.map(cmd => ({
            "@type": "SoftwareSourceCode",
            "codeSampleType": "command-line",
            "programmingLanguage": "Shell",
            "name": cmd.name,
            "description": cmd.description,
            "text": cmd.usage,
            "codeRepository": "https://termuxapps.com/commands",
            "example": cmd.examples.map(example => ({
              "@type": "HowToStep",
              "text": example
            }))
          }))
        })}
      </script>

      {/* Individual command schemas for better search visibility */}
      {commands.map((cmd, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": `How to use the ${cmd.name} command in Linux/Termux`,
            "description": cmd.description,
            "tool": {
              "@type": "HowToTool",
              "name": "Terminal/Termux"
            },
            "step": [
              {
                "@type": "HowToStep",
                "name": "Basic Usage",
                "text": cmd.usage
              },
              ...cmd.examples.map((example, i) => ({
                "@type": "HowToStep",
                "name": `Example ${i + 1}`,
                "text": example
              }))
            ]
          })}
        </script>
      ))}
    </Helmet>
  );
};