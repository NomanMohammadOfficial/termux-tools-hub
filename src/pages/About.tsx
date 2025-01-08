import { Layout } from "@/components/Layout";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-mono font-bold text-terminal-light">
            About TermuxApps
          </h1>
          <p className="text-lg text-terminal-light/80">
            Your trusted resource for Termux tools, commands, and cybersecurity insights
          </p>
        </section>

        <section className="bg-terminal-gray/10 rounded-lg p-8 space-y-6">
          <h2 className="text-2xl font-mono font-bold text-terminal-light">About the Author</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-mono font-bold text-terminal-green">Noman Mohammad</h3>
            <p className="text-terminal-light/80 leading-relaxed">
              Noman Mohammad is a tech enthusiast who began mastering Linux at just 16 years old. 
              With a certification in cybersecurity from a renowned organization, he specializes in 
              ethical hacking, network defense, and secure IT practices. Noman's hands-on experience 
              and dedication make him a trusted authority in Linux systems and cybersecurity. Connect 
              with him for expert insights and solutions in today's digital world.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-mono font-semibold text-terminal-light">Connect with Noman</h4>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61561692724965"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-terminal-light hover:text-terminal-green transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a 
                href="https://x.com/noman_webb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-terminal-light hover:text-terminal-green transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span>Twitter</span>
              </a>
              <a 
                href="https://www.instagram.com/noman_mohammad_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-terminal-light hover:text-terminal-green transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/nomanmohammadofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-terminal-light hover:text-terminal-green transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:hello@termuxapps.com"
                className="inline-flex items-center space-x-2 text-terminal-light hover:text-terminal-green transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-mono font-bold text-terminal-light">Our Mission</h2>
          <p className="text-terminal-light/80 leading-relaxed">
            At TermuxApps, we're dedicated to providing high-quality resources, tools, and knowledge 
            to help users master Termux and enhance their cybersecurity skills. Our platform serves 
            as a bridge between beginners and advanced users, offering comprehensive guides, 
            carefully curated commands, and expert insights into the world of mobile terminal computing.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default About;