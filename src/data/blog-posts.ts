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
    id: "3",
    title: "How to Install Truecaller in Termux: Advanced Guide 2024",
    slug: "install-truecaller-termux",
    content: `# How to Install and Use Truecaller in Termux

Truecaller functionality in Termux allows you to perform phone number lookups directly from your terminal. This guide will show you how to set up and use Truecaller features safely and effectively.

## Understanding Truecaller CLI

Truecaller CLI is a command-line interface that allows you to:
- Look up phone numbers
- Get caller information
- Access Truecaller's database
- Perform batch queries

## Prerequisites

Before installation, ensure you have:
- Updated Termux
- Python installed
- Git installed
- Internet connection

### Update Your System

First, update Termux:

\`\`\`bash
pkg update && pkg upgrade
\`\`\`

### Install Required Packages

Install Python:

\`\`\`bash
pkg install python
\`\`\`

Install Git:

\`\`\`bash
pkg install git
\`\`\`

## Installation Process

### Step 1: Clone the Repository

Get the Truecaller CLI code:

\`\`\`bash
git clone https://github.com/TheSpeedX/TrueCaller-CLI.git
\`\`\`

### Step 2: Navigate to Directory

Change to the project directory:

\`\`\`bash
cd TrueCaller-CLI
\`\`\`

### Step 3: Install Dependencies

Install required Python packages:

\`\`\`bash
pip install -r requirements.txt
\`\`\`

## Using Truecaller CLI

### Basic Usage

Run the script:

\`\`\`bash
python3 truecaller.py
\`\`\`

### Login Process

Authenticate with your account:

\`\`\`bash
python3 truecaller.py login
\`\`\`

### Number Lookup

Search for a phone number:

\`\`\`bash
python3 truecaller.py -s <phone_number>
\`\`\`

## Advanced Features

### Bulk Number Search

Search multiple numbers:

\`\`\`bash
python3 truecaller.py -f numbers.txt
\`\`\`

### Output Formatting

Save results to file:

\`\`\`bash
python3 truecaller.py -s <number> -o result.txt
\`\`\`

## Safety and Ethics

Important considerations:
1. Respect privacy laws
2. Use responsibly
3. Follow terms of service
4. Protect personal data

## Troubleshooting

### Common Issues

1. Authentication Problems:
\`\`\`bash
python3 truecaller.py --force-login
\`\`\`

2. API Rate Limits:
\`\`\`bash
python3 truecaller.py --delay 5
\`\`\`

Remember to use this tool ethically and in accordance with local laws and regulations.`,
    meta_description: "Step-by-step guide to installing and using Truecaller features in Termux. Learn the proper setup, usage, and ethical considerations of TrueCaller-CLI.",
    meta_keywords: ["termux", "truecaller", "CLI", "phone number lookup", "python", "android", "number search", "caller ID"],
    reading_time: 8,
    created_at: "2024-03-10T00:00:00Z",
    updated_at: "2024-03-10T00:00:00Z"
  }
];