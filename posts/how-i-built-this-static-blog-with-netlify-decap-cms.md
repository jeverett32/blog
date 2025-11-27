---
title: How I Built This Static Blog with Netlify & Decap CMS
date: 2025-11-27T16:04:00.000-07:00
thumbnail: /assets/uploads/netlify.jpg
readTime: 4 min read
tags:
  - WebDev
description: A look under the hood at how I built this blog using plain HTML,
  Tailwind CSS, and Netlify's free tier without a traditional backend.
---
When I decided to add a blog to my portfolio, I had a choice: spin up a complex full-stack application with a database, or find a simpler, faster way. I chose the latter.

This blog is built entirely with **static HTML and JavaScript**, hosted for free on Netlify, and managed via **Decap CMS** (formerly Netlify CMS). Here is how it works under the hood.

## The Architecture

Most blogs use a database (like SQL or MongoDB) to store articles. When you visit a page, the server fetches the text and builds the page on the fly.

This site does the opposite. 
1. **Storage:** My posts are stored as simple Markdown (`.md`) files in a GitHub repository.
2. **Database:** There isn't one! I use a simple `posts.json` file as a directory to tell the homepage what articles exist.
3. **Rendering:** When you click an article, a small JavaScript script fetches the raw Markdown file and converts it to HTML instantly in your browser.

## The Tech Stack

* **Tailwind CSS:** For rapid, utility-first styling that matches my portfolio.
* **Marked.js:** A lightweight library that parses Markdown into HTML.
* **Prism.js:** For beautiful syntax highlighting on code blocks.
* **Netlify Identity:** Handles authentication so I can log in to the admin panel.
* **Decap CMS:** A git-based Content Management System.

## Setting Up the "Serverless" Admin Panel

The coolest part of this project is the `/admin` route. I didn't write any backend login code. Instead, I used Netlify's built-in Identity service.

### 1. The Config
I added a `config.yml` file that maps the CMS UI to my file structure:

```yaml
backend:
  name: git-gateway
  branch: main
collections:
  - name: "blog"
    folder: "posts"
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Body", name: "body", widget: "markdown"}
```

All in all, this site is a super simple way for me to make blog posts. It is free and it took very little effort. It might not be the best way to make a blog website, but I'm content with it.
