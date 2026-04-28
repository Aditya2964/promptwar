# 🌍 Global Election AI Guide

An interactive, user-friendly AI assistant designed to help users understand the election process in any country. This nonpartisan tool simplifies complex legal and political terms, providing step-by-step guidance on voting, eligibility, and democratic participation.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![Gemini AI](https://img.shields.io/badge/Powered%20By-Google%20Gemini-blue)

## ✨ Features

- **🤖 Conversational AI Assistant**: Ask anything about voter eligibility, registration, or candidate nominations. Powered by Google Gemini.
- **⏳ Interactive Election Timeline**: Visualize the journey from registration to result declaration.
- **✅ Voter Readiness Checklist**: Stay organized with a personalized to-do list for upcoming elections.
- **❓ Civic FAQ**: Simple explanations for complex terms like "First-Past-the-Post" or "Proportional Representation".
- **🏆 Civics Quiz**: Test your knowledge of democratic processes with an interactive quiz.
- **🎨 Premium UI**: A modern, high-performance dashboard with dark mode, glassmorphism, and smooth micro-animations.

## 🚀 Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **AI**: [Google Generative AI SDK (@google/genai)](https://ai.google.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- A Google Gemini API Key (Get one at [aistudio.google.com](https://aistudio.google.com/))

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Aditya2964/promptwar.git
   cd promptwar
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## ☁️ Deployment

### Google Cloud Run
This project is optimized for Google Cloud Run with a multi-stage `Dockerfile`.

**Option 1: Deploy from Source**
```bash
gcloud run deploy election-ai --source . --project astro-494711
```

**Option 2: Continuous Deployment**
Connect this GitHub repository to the Google Cloud Console for automatic builds and deployments on every push.

## ⚖️ Nonpartisan Policy
This assistant is designed to be strictly neutral and educational. It does not support any specific political party or candidate. It focuses entirely on the **process** of voting and democratic participation.

## 📄 License
This project is licensed under the MIT License.
