export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  meta_description: string;
  meta_keywords: string[];
  reading_time: number;
  created_at: string;
  updated_at: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Install Ubuntu in Termux",
    slug: "how-to-install-ubuntu-termux",
    content: `Installing Ubuntu in Termux is a great way to experience a full Linux environment on your Android device. This guide will walk you through the process step by step.

First, make sure you have Termux installed from F-Droid or the official GitHub repository. Once installed, open Termux and update the package lists by running:

pkg update && pkg upgrade

Next, install the required packages:

pkg install wget curl proot-distro

Now you can install Ubuntu using proot-distro:

proot-distro install ubuntu

To start Ubuntu, simply run:

proot-distro login ubuntu

You now have a fully functional Ubuntu environment running in Termux! You can install additional packages using apt and customize your environment as needed.`,
    meta_description: "Learn how to install Ubuntu in Termux with our step-by-step guide. Get a full Linux environment on your Android device easily.",
    meta_keywords: ["termux", "ubuntu", "android", "linux", "installation guide", "proot-distro"],
    reading_time: 5,
    created_at: "2024-03-01T00:00:00Z",
    updated_at: "2024-03-01T00:00:00Z"
  },
  {
    id: "2",
    title: "Essential Termux Commands for Beginners",
    slug: "essential-termux-commands",
    content: `If you're new to Termux, learning these essential commands will help you get started quickly and efficiently.

Package Management:
- pkg update: Update package lists
- pkg upgrade: Upgrade installed packages
- pkg install <package>: Install a new package
- pkg uninstall <package>: Remove a package

File Navigation:
- pwd: Show current directory
- ls: List files and directories
- cd <directory>: Change directory
- mkdir <name>: Create a new directory
- rm <file>: Remove a file
- rm -rf <directory>: Remove a directory

Text Editing:
- nano <file>: Open text editor
- cat <file>: Display file contents
- less <file>: View file contents with scrolling

These basic commands will help you navigate and manage your Termux environment effectively.`,
    meta_description: "Master the most important Termux commands with our beginner's guide. Learn package management, file navigation, and text editing basics.",
    meta_keywords: ["termux", "commands", "terminal", "android", "linux", "beginner guide"],
    reading_time: 7,
    created_at: "2024-03-05T00:00:00Z",
    updated_at: "2024-03-05T00:00:00Z"
  }
];