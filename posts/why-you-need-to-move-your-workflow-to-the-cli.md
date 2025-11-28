---
title: Why You Need to Move Your Workflow to the CLI
date: 2025-11-28T14:00:00.000-07:00
thumbnail: /assets/uploads/geminicli.png
readTime: 3 min read
tags:
  - CLI
description: My experience using AI agents with the command line interface.
---
# Why You Need to Move Your AI Workflow to the CLI

If you program, you know about AI coding agents. You've used ChatGPT, Gemini, and Claude in your browser to string up code that you copy and paste into VS Code. You have probably used GitHub Copilot to autocomplete your lines or the Copilot extension to scaffold entire files. Maybe you've even dabbled with AI-integrated IDEs like Cursor or Windsurf. Whatever your experience, you know that coding is currently one of AI's greatest capabilities.

Like many of you, I started out using AI in the browser. It works well, but the workflow is clunky—copying, pasting, creating files manually, and testing everything yourself. Naturally, I moved to IDE extensions like Copilot. These are legit; they see your codebase, create files, and run terminal commands.

## The Problem: Usage Limits

Unfortunately, the best tools have the biggest limits. I found myself hitting usage caps after just 30 minutes to an hour of deep work. Sure, I could try to be "more efficient," but that kills the flow. I needed an agent with access to my codebase, my terminal, and—crucially—unlimited usage.

That’s when I found the solution: **The CLI (Command Line Interface).**

## The Game Changer: Visualizing Your Context

Before I get into the specific tools, I have to talk about the biggest reason to switch: **Context Management**.

Whenever you chat with an LLM, it has a "context window." Every question and response fills that window. As the chat gets longer, the LLM has to read more text every time it responds. This makes it slower, more expensive, and much more likely to hallucinate or make mistakes.

In browsers and IDE extensions, this context window is hidden. You have no idea when the model is about to get "confused." But in the CLI for tools like Claude Code and Gemini, you can actually see what percentage of your context window has been used.

When you hit a high percentage, you can run a command (like `/compact`) that summarizes your past chat history into just the essential information. It dumps the fluff and starts a fresh context window. This keeps the AI sharp, efficient, and hallucination-free. This feature alone is why you should be using the CLI.

## The Tools: Gemini, Claude, and Copilot

Most big AI players have a CLI now. OpenAI has **Codex**, Anthropic has **Claude Code**, and GitHub has **Copilot CLI**.

* **Claude Code:** This is probably the king of coding logic right now. **Claude 4.5 Sonnet** is an absolute monster. The only downside is the $20/mo subscription and the usage limits.
* **Gemini CLI:** Since I have the free Gemini Advanced subscription for students, I have practically unlimited usage with **Gemini 3 Pro**. It’s super legit and serves as the workhorse of my setup.

## The Strategy: Agent Chaining

Here is the unlock. You don't have to choose just one. One of the coolest things about the modern CLI tools is the agent capability. You can create specific agents that utilize different models and assign them different tasks.

For example, you can issue a prompt like this:

> "Scan through the codebase to find the section responsible for connecting to the database using @gemini.agent. Pass that location to @claude.agent who will determine the problem based on the error message I gave you and come up with 3 potential solutions for me to implement."

Since Claude is the more expensive "smart" model, you don't want to waste your credits having it search through thousands of lines of code. You pass the grunt work to Gemini (which does it for free), and save the complex reasoning for Claude.

I recently figured out you can do this with **GitHub Copilot CLI** as well. As a university student, I get Copilot Pro for free. Last week, I was working on a mobile app for the *Student Innovator of the Year* competition. I did 3 or 4 hours of straight "vibe coding," utilizing a Gemini agent for searching and Claude for the coding. I only burned about 20% of my monthly usage. With any other workflow, I would have been capped in an hour.

## A Word of Warning: Safety First

Moving to the CLI means giving an AI agent direct access to your terminal. This is powerful, but it comes with risks. These agents can execute shell commands. While they usually ask for permission before running a command, you need to pay attention.

**Do not just blindly hit "Y" or "Enter" when the agent suggests a command.** You don't want to accidentally let an agent run a script that wipes a directory or messes up your git history. Treat the agent like a junior developer—trust, but verify.

## How to Get Started

If you want to try this out, you will likely need to be comfortable with your terminal. Most of these tools require **Node.js (npm)** or **Homebrew (brew)** to install.

1. **If you have a Pro subscription:** Use the CLI matching your plan (Claude Code for Claude, Codex for ChatGPT).
2. **If you are a student:** You can get Gemini Advanced for free through August 2026 and GitHub Copilot Pro via the GitHub Student Developer Pack.
3. **If you are on a free tier:** Gemini’s CLI has surprisingly good usage limits for free users.

I’m going to put up specific tutorials on how to install and configure the CLI for these different models soon, so look out for those!
