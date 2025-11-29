---
title: How to Install & Use the Gemini CLI (Plus Claude, Copilot, & Codex)
date: 2025-11-28T18:20:00.000-07:00
thumbnail: /assets/uploads/geminicli.webp
readTime: 5 min read
tags:
  - CLI
description: This step-by-step guide walks you through installing the Gemini CLI
  to develop code directly from your terminal, with a quick setup comparison for
  Claude Code, GitHub Copilot, and OpenAI Codex.
---
# How to Install & Use the Gemini CLI (Plus Claude, Copilot, & Codex)

Let’s be honest, switching between your terminal and a web browser to chat with an AI is a step in the development process we all want to delete.

Here, I’m going to walk you through installing the **Gemini CLI**, Google’s new AI agent that lives right in your command line. I’ll also show you how to set up the other big players (**Claude Code**, **GitHub Copilot**, and **OpenAI Codex**) so you can choose the right agent for your workflow.

I'll be creating a simple calorie tracking project to demonstrate how to setup and use **Gemini CLI**.

## 1. Setting up the Gemini CLI

Google’s Gemini CLI is surprisingly robust. It doesn't just chat; it can read your files, understand your project context, and even make edits for you.

### Step 1: Prerequisites

You need **Node.js** (version 18 or higher) installed. If you don't have it, grab it from [nodejs.org](https://nodejs.org/).

### Step 2: Installation

Open your terminal. We are going to install the CLI globally so you can use it in any folder.

```bash
npm install -g @google/gemini-cli
```

### Step 3: The Setup & Authentication

Now, let’s actually use it. First, we'll create our example directory.

```bash
mkdir calorie-tracker
cd calorie-tracker
```

*Note: The `cd` command is crucial. AI agents need to know "where" they are working to read the right files.*

Now, launch Gemini:

```bash
gemini
```

The first time you run this, it will launch a browser window asking you to sign in with your **Google Account**. Once you approve it, you’ll be dropped right into a chat interface inside your terminal.

### Step 4: Making Magic Happen

Let's ask Gemini to write our script. Since we are already in the `calorie-tracker` folder, it knows exactly where to put it.

**Prompt:**

> "Create a python script called `tracker.py` that asks the user for a food name and calorie amount, then saves it to a CSV file with a timestamp."

Gemini will likely generate the code and might ask for permission to write the file. If you see a prompt like `[y/N]`, type `y` to confirm.

You can now run your new script right from the same window:

```bash
python tracker.py
```

### Pro Tip: `GEMINI.md`

If you want Gemini to always know specific context (e.g., "Always use Type hints" or "I am using Python 3.11"), create a file named `GEMINI.md` in the root of your folder. You can have Gemini do this by running the `/init` command in the chat. Gemini reads this automatically every time it starts.

- - -

## The Alternatives: Codex, Claude, and Copilot

Here is how to get the other agents up and running.

### Claude Code (Anthropic)

Claude is famous for its massive context window and "human" feel.

**Installation:**

```bash
# Via NPM
npm install -g @anthropic-ai/claude-code

# OR via Homebrew (Mac)
brew install --cask claude-code
```

**Usage:**
Run `claude` in your terminal. You'll need to authenticate via a browser.

```bash
cd calorie-tracker
claude
> "Analyze tracker.py and tell me if I missed any error handling."
```

### GitHub Copilot CLI

Copilot in the CLI is fantastic for explaining shell commands and git workflows.

**Installation:**

```bash
npm install -g @github/copilot
```

**Usage:**
Run ```copilot```. You can also use it for quick one-off explanations.

```bash
# Start an interactive session
copilot

# Or ask a quick question
copilot -p "How do I undo my last git commit but keep the changes?"
```

### OpenAI Codex CLI

*Note: Ensure you are using the official `@openai/codex` package, as there are many community wrappers.*

**Installation:**

```bash
npm install -g @openai/codex
```

**Usage:**
Run `codex`. It will ask you to log in with your ChatGPT account (Plus/Pro/Enterprise plans usually required).

```bash
codex
```

*Codex uses a concept similar to Gemini, where you can add an `AGENTS.md` file to your directory to give the AI custom instructions for that specific project.*

- - -

## Summary

* **Gemini CLI:** Best if you want deep integration with Google's ecosystem and a free tier to start.
* **Claude Code:** Best for complex reasoning and large codebases.
* **Copilot CLI:** Best for quick shell commands and git help.
* **Codex:** Best if you are already heavily invested in the ChatGPT Plus workflow.

Happy coding!

- - -

[How to Install and Use Gemini CLI — Complete Step-by-Step Tutorial](https://www.youtube.com/watch?v=71ht2rEx-NU)
