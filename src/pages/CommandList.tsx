import { Layout } from "@/components/Layout";
import { useState } from "react";
import { CommandSEO } from "@/components/CommandSEO";
import { CommandSearchBar } from "@/components/CommandSearchBar";
import { CommandCard } from "@/components/CommandCard";

const commands = [
  {
    name: "ls",
    description: "List directory contents",
    category: "File Management",
    usage: "ls [options] [directory]",
    examples: ["ls", "ls -la", "ls /sdcard"],
  },
  {
    name: "cd",
    description: "Change directory",
    category: "File Management",
    usage: "cd [directory]",
    examples: ["cd Downloads", "cd ..", "cd ~"],
  },
  {
    name: "pkg",
    description: "Package management utility",
    category: "System",
    usage: "pkg [command] [package]",
    examples: ["pkg install python", "pkg update", "pkg list-installed"],
  },
  {
    name: "pwd",
    description: "Print working directory",
    category: "File Management",
    usage: "pwd",
    examples: ["pwd"],
  },
  {
    name: "cp",
    description: "Copy files/directories",
    category: "File Management",
    usage: "cp [options] source destination",
    examples: ["cp file.txt /sdcard/", "cp -r folder/ /sdcard/"],
  },
  {
    name: "mv",
    description: "Move/rename files",
    category: "File Management",
    usage: "mv [options] source destination",
    examples: ["mv oldname.txt newname.txt", "mv file.txt /sdcard/"],
  },
  {
    name: "rm",
    description: "Remove files",
    category: "File Management",
    usage: "rm [options] file",
    examples: ["rm file.txt", "rm -r folder/"],
  },
  {
    name: "ping",
    description: "Test connectivity",
    category: "Networking",
    usage: "ping [options] host",
    examples: ["ping google.com", "ping -c 4 192.168.1.1"],
  },
  {
    name: "curl",
    description: "Transfer data",
    category: "Networking",
    usage: "curl [options] URL",
    examples: ["curl http://example.com", "curl -O http://example.com/file.zip"],
  },
  {
    name: "wget",
    description: "Download files",
    category: "Networking",
    usage: "wget [options] URL",
    examples: ["wget http://example.com/file.zip", "wget -r http://example.com/"],
  },
  {
    name: "git",
    description: "Version control system",
    category: "Development",
    usage: "git [command]",
    examples: ["git clone [repository]", "git commit -m 'message'"],
  },
  {
    name: "python",
    description: "Run Python scripts",
    category: "Development",
    usage: "python [script.py]",
    examples: ["python script.py"],
  },
  {
    name: "node",
    description: "Run Node.js scripts",
    category: "Development",
    usage: "node [script.js]",
    examples: ["node script.js"],
  },
  {
    name: "termux-setup-storage",
    description: "Set up storage access for Termux",
    category: "System",
    usage: "termux-setup-storage",
    examples: ["termux-setup-storage"],
  },
  {
    name: "pkg upgrade",
    description: "Update all packages to their latest versions",
    category: "System",
    usage: "pkg upgrade && pkg update",
    examples: ["pkg upgrade"],
  },
  {
    name: "scp",
    description: "Secure copy files",
    category: "Networking",
    usage: "scp [options] source destination",
    examples: ["scp file.txt user@host:/path"],
  },
];

const CommandList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCommands = commands.filter(command =>
    command.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    command.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <CommandSEO commands={commands} />
      <div className="max-w-4xl mx-auto space-y-8 text-white">
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-mono font-bold">
            Termux Command List – Comprehensive Guide for Beginners and Experts
          </h1>
          <p className="text-lg opacity-80">
            Explore, Learn, and Master the Most Useful Termux Commands
          </p>
        </section>

        <CommandSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="space-y-6">
          {filteredCommands.map((command, index) => (
            <CommandCard key={index} {...command} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CommandList;
