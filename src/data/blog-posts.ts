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
    title: "How to Create a Custom Termux Banner",
    slug: "termux-banner",
    content: `# Create a Custom Termux Banner

A custom banner in Termux can make your terminal more personalized and informative. Follow these steps to create your own banner:

\`\`\`bash
# Install required packages
pkg update && pkg upgrade
pkg install python figlet toilet

# Create banner directory
mkdir ~/.termux/
touch ~/.termux/banner.txt

# Edit banner.txt with your text
echo "Welcome to Termux!" > ~/.termux/banner.txt

# Add to bash.bashrc
echo "clear" >> ~/.bashrc
echo "figlet -f small 'Your Name'" >> ~/.bashrc
echo "toilet -f term -F border 'Welcome'" >> ~/.bashrc
\`\`\`

After following these steps, restart Termux to see your new banner!`,
    meta_description: "Learn how to create and customize your Termux banner with step-by-step instructions. Make your terminal more personalized and informative.",
    meta_keywords: ["termux", "banner", "customization", "terminal", "figlet", "toilet", "bash"],
    reading_time: 5,
    created_at: "2024-03-10T00:00:00Z",
    updated_at: "2024-03-10T00:00:00Z"
  },
  {
    id: "2",
    title: "How to Install Ubuntu in Termux",
    slug: "install-ubuntu-termux",
    content: `# Install Ubuntu in Termux

Follow this comprehensive guide to install Ubuntu in Termux:

\`\`\`bash
# Update packages
pkg update && pkg upgrade

# Install required packages
pkg install proot-distro

# Install Ubuntu
proot-distro install ubuntu

# Start Ubuntu
proot-distro login ubuntu
\`\`\`

After installation, you can customize your Ubuntu environment:

\`\`\`bash
# Update Ubuntu packages
apt update && apt upgrade

# Install basic tools
apt install nano wget curl git
\`\`\`

Remember to exit Ubuntu using the 'exit' command when done.`,
    meta_description: "Complete guide to installing Ubuntu in Termux. Learn how to set up and customize your Ubuntu environment on Android.",
    meta_keywords: ["termux", "ubuntu", "linux", "android", "proot-distro", "installation"],
    reading_time: 8,
    created_at: "2024-03-10T00:00:00Z",
    updated_at: "2024-03-10T00:00:00Z"
  },
  {
    id: "3",
    title: "Install Truecaller in Termux",
    slug: "install-truecaller-termux",
    content: `# Install Truecaller in Termux

Learn how to use Truecaller features in Termux:

\`\`\`bash
# Update packages
pkg update && pkg upgrade

# Install Python
pkg install python

# Install git
pkg install git

# Clone Truecaller script
git clone https://github.com/TheSpeedX/TrueCaller-CLI.git

# Navigate to directory
cd TrueCaller-CLI

# Install requirements
pip install -r requirements.txt

# Run the script
python3 truecaller.py
\`\`\`

Note: Use this tool responsibly and in accordance with Truecaller's terms of service.`,
    meta_description: "Step-by-step guide to installing and using Truecaller features in Termux. Learn the proper setup and usage of TrueCaller-CLI.",
    meta_keywords: ["termux", "truecaller", "CLI", "phone number lookup", "python", "android"],
    reading_time: 6,
    created_at: "2024-03-10T00:00:00Z",
    updated_at: "2024-03-10T00:00:00Z"
  },
  {
    id: "4",
    title: "Set Up Termux Box for Enhanced Terminal Experience",
    slug: "termux-box",
    content: `# Termux Box Setup Guide

Termux Box provides an enhanced terminal experience. Here's how to set it up:

\`\`\`bash
# Update packages
pkg update && pkg upgrade

# Install required packages
pkg install git python

# Clone Termux-Box
git clone https://github.com/Rajkumrdusad/Tool-X.git

# Navigate to directory
cd Tool-X

# Install Tool-X
chmod +x install.aex
./install.aex

# Start Termux Box
toolx
\`\`\`

This will give you access to hundreds of terminal tools and utilities.`,
    meta_description: "Learn how to install and configure Termux Box for an enhanced terminal experience. Access hundreds of useful tools and utilities.",
    meta_keywords: ["termux", "termux box", "tool-x", "terminal tools", "android", "hacking tools"],
    reading_time: 7,
    created_at: "2024-03-10T00:00:00Z",
    updated_at: "2024-03-10T00:00:00Z"
  },
  {
    id: "5",
    title: "Install PhoneInfoga in Termux",
    slug: "phoneinfoga-termux",
    content: `# Install PhoneInfoga in Termux

PhoneInfoga is a powerful phone number information gathering tool. Here's how to install it:

\`\`\`bash
# Update packages
pkg update && pkg upgrade

# Install required packages
pkg install git python

# Clone PhoneInfoga
git clone https://github.com/ExpertAnonymous/PhoneInfoga.git

# Navigate to directory
cd PhoneInfoga

# Install requirements
pip install -r requirements.txt

# Run PhoneInfoga
python3 phoneinfoga.py -n <phone_number>
\`\`\`

Remember to use this tool ethically and legally.`,
    meta_description: "Complete guide to installing and using PhoneInfoga in Termux. Learn phone number information gathering techniques responsibly.",
    meta_keywords: ["termux", "phoneinfoga", "OSINT", "phone number lookup", "information gathering"],
    reading_time: 6,
    created_at: "2024-03-10T00:00:00Z",
    updated_at: "2024-03-10T00:00:00Z"
  },
  {
    id: "6",
    title: "Install UserFinder in Termux",
    slug: "userfinder-termux",
    content: `# Install UserFinder in Termux

UserFinder helps you find usernames across various platforms. Here's the installation guide:

\`\`\`bash
# Update packages
pkg update && pkg upgrade

# Install required packages
pkg install git python

# Clone UserFinder
git clone https://github.com/mishakorzik/UserFinder.git

# Navigate to directory
cd UserFinder

# Install requirements
pip install -r requirements.txt

# Run UserFinder
python3 userfinder.py
\`\`\`

Use this tool responsibly and respect privacy guidelines.`,
    meta_description: "Learn how to install and use UserFinder in Termux. Find usernames across multiple platforms with this powerful tool.",
    meta_keywords: ["termux", "userfinder", "OSINT", "username search", "social media", "information gathering"],
    reading_time: 5,
    created_at: "2024-03-10T00:00:00Z",
    updated_at: "2024-03-10T00:00:00Z"
  }
];