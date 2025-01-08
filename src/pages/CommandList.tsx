import { Layout } from "@/components/Layout";
import { CommandSearch } from "@/components/CommandSearch";
import { CommandCategories } from "@/components/CommandCategories";
import { CommandOfTheDay } from "@/components/CommandOfTheDay";
import { TableOfContents } from "@/components/TableOfContents";
import { Helmet } from "react-helmet";

// Define all commands for SEO purposes
const ALL_COMMANDS = {
  basics: [
    { name: "pwd", description: "Print working directory", usage: "pwd", longDescription: "The pwd command in Termux displays the current working directory path, helping users navigate the file system." },
    { name: "ls", description: "List directory contents", usage: "ls [options] [directory]", longDescription: "The ls command in Termux lists files and directories, showing detailed information about file permissions, sizes, and modification dates." },
    { name: "cd", description: "Change directory", usage: "cd [directory]", longDescription: "The cd command in Termux allows users to navigate between directories in the file system." },
  ],
  files: [
    { name: "cp", description: "Copy files/directories", usage: "cp [options] source destination", longDescription: "The cp command in Termux copies files and directories from one location to another, preserving file attributes." },
    { name: "mv", description: "Move/rename files", usage: "mv [options] source destination", longDescription: "The mv command in Termux moves or renames files and directories within the filesystem." },
    { name: "rm", description: "Remove files", usage: "rm [options] file", longDescription: "The rm command in Termux removes files and directories from the system permanently." },
    { name: "scp", description: "Secure copy files", usage: "scp [options] source destination", longDescription: "The scp command in Termux securely copies files between hosts on a network using SSH protocol." },
  ],
  network: [
    { name: "ping", description: "Test connectivity", usage: "ping [options] host", longDescription: "The ping command in Termux tests network connectivity by sending ICMP echo requests to network hosts." },
    { name: "curl", description: "Transfer data", usage: "curl [options] URL", longDescription: "The curl command in Termux transfers data using various protocols, supporting downloads, uploads, and API requests." },
    { name: "wget", description: "Download files", usage: "wget [options] URL", longDescription: "The wget command in Termux downloads files from the internet, supporting recursive downloads and resume capability." },
  ]
};

const CommandList = () => {
  // Generate structured data for all commands
  const generateCommandStructuredData = () => {
    const commandsData = Object.values(ALL_COMMANDS).flat().map(cmd => ({
      "@type": "SoftwareSourceCode",
      "name": `${cmd.name} command in Termux`,
      "programmingLanguage": "Shell",
      "description": cmd.longDescription,
      "codeRepository": "https://termuxapps.com",
      "codeSampleType": "code snippet",
      "sampleType": "command",
      "text": cmd.usage
    }));

    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": commandsData
    };
  };

  return (
    <Layout>
      <Helmet>
        <title>Termux Commands List - Complete Guide to Linux Commands in Termux</title>
        <meta
          name="description"
          content="Comprehensive guide to Termux commands including file operations (cp, mv, rm), networking (ping, curl, wget), and system commands. Learn how to use essential Linux commands in Termux."
        />
        <meta
          name="keywords"
          content="termux commands, linux commands termux, cp command termux, mv command termux, rm command termux, scp command termux, ping command termux, curl command termux, wget command termux"
        />
        <link rel="canonical" href="https://termuxapps.com/commands" />
        <script type="application/ld+json">
          {JSON.stringify(generateCommandStructuredData())}
        </script>
        {/* Open Graph tags */}
        <meta property="og:title" content="Complete Termux Commands Guide - Essential Linux Commands for Android" />
        <meta property="og:description" content="Master Termux with our comprehensive command guide. Learn file operations, networking, and system commands for effective terminal usage on Android." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://termuxapps.com/commands" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Termux Commands - Complete Linux Command Reference" />
        <meta name="twitter:description" content="Comprehensive guide to Linux commands in Termux. Learn file management, networking, and system administration commands." />
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-8">
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-mono font-bold">
            Termux Command List – Comprehensive Guide for Beginners and Experts
          </h1>
          <p className="text-lg text-terminal-light/80">
            Explore, Learn, and Master the Most Useful Termux Commands to Unlock Endless Possibilities
          </p>
        </section>

        {/* Add semantic HTML for better SEO */}
        <article className="prose prose-invert max-w-none">
          <p className="lead">
            Welcome to our comprehensive guide to Termux commands. Whether you're a beginner or an experienced user,
            this guide covers everything from basic file operations to advanced networking commands.
            Each command comes with detailed explanations and practical examples.
          </p>
        </article>

        <CommandSearch />
        <CommandOfTheDay />
        <TableOfContents />
        <CommandCategories />

        {/* Add detailed command explanations for SEO */}
        <section className="mt-12 space-y-8">
          {Object.entries(ALL_COMMANDS).map(([category, commands]) => (
            <article key={category} className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-mono font-bold mb-4" id={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)} Commands
              </h2>
              {commands.map((cmd) => (
                <div key={cmd.name} className="mb-8">
                  <h3 className="text-xl font-mono" id={cmd.name}>
                    {cmd.name} Command in Termux
                  </h3>
                  <p>{cmd.longDescription}</p>
                  <pre className="bg-terminal-gray p-3 rounded">
                    <code>{cmd.usage}</code>
                  </pre>
                </div>
              ))}
            </article>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default CommandList;
