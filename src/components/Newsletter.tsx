import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);

      if (error) throw error;

      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "This email might already be subscribed or is invalid.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-terminal-gray py-16">
      <div className="container mx-auto px-4 text-center">
        <Mail className="w-12 h-12 text-terminal-green mx-auto mb-4" />
        <h2 className="text-3xl font-mono font-bold text-terminal-light mb-4">
          Stay Updated with Termux News
        </h2>
        <p className="text-lg text-terminal-light/80 max-w-2xl mx-auto mb-8">
          Subscribe to our newsletter for the latest Termux updates, tips, and community highlights.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-terminal-black text-terminal-light border-terminal-green/20 focus:border-terminal-green"
            required
          />
          <Button 
            type="submit"
            disabled={isLoading}
            className="bg-terminal-green hover:bg-terminal-green/90 text-terminal-black font-mono whitespace-nowrap"
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </div>
  );
};