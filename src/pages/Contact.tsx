import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-terminal-black">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-2xl mx-auto space-y-8">
          <section className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-mono font-bold text-terminal-light">
              Contact Us
            </h1>
            <p className="text-lg text-terminal-light/80">
              Have questions or suggestions? We'd love to hear from you
            </p>
          </section>

          <form className="space-y-6 bg-terminal-gray p-8 rounded-lg">
            <div className="space-y-2">
              <label htmlFor="email" className="text-terminal-light">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="bg-terminal-black border-terminal-green/20 text-terminal-light"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-terminal-light">Subject</label>
              <Input
                id="subject"
                placeholder="How can we help?"
                className="bg-terminal-black border-terminal-green/20 text-terminal-light"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-terminal-light">Message</label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                className="bg-terminal-black border-terminal-green/20 text-terminal-light min-h-[150px]"
              />
            </div>

            <Button className="w-full bg-terminal-green hover:bg-terminal-green/90 text-terminal-black">
              <MessageSquare className="mr-2 h-4 w-4" />
              Send Message
            </Button>

            <div className="text-center text-terminal-light/60 pt-4">
              <p className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                support@termuxapps.com
              </p>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;