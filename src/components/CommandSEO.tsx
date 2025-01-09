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
  return (
    <Helmet>
      <title>Linux Commands in Termux - Complete Command Reference Guide</title>
      <meta 
        name="description" 
        content="Comprehensive guide to Linux commands in Termux. Learn file management, networking, and system administration commands." 
      />
      <meta 
        name="keywords" 
        content="termux commands, linux commands, terminal commands, command line, pkg commands, file management, system administration"
      />
      <meta property="og:title" content="Linux Commands in Termux - Complete Command Reference Guide" />
      <meta 
        property="og:description" 
        content="Comprehensive guide to Linux commands in Termux. Learn file management, networking, and system administration commands." 
      />
      <meta name="twitter:title" content="Linux Commands in Termux - Complete Command Reference Guide" />
      <meta 
        name="twitter:description" 
        content="Comprehensive guide to Linux commands in Termux. Learn file management, networking, and system administration commands." 
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Linux Commands in Termux",
          "description": "Complete guide to using Linux commands in Termux",
          "step": commands.map(cmd => ({
            "@type": "HowToStep",
            "name": cmd.name,
            "text": cmd.description
          }))
        })}
      </script>
    </Helmet>
  );
};