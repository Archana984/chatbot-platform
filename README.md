# Minimal Chatbot Platform (MVP)

## Features

- User registration and login using JWT authentication
- Create projects/agents under a user
- Store prompts per project
- Chat interface to interact with an AI agent
- Designed as a scalable REST API

## Tech Stack

- Node.js, Express
- JWT Authentication
- In-memory storage (can be replaced with DB)
- OpenAI-compatible architecture

## How to Run

1. npm install
2. node index.js
3. Use Postman to test APIs

## Architecture

- Auth Service (JWT)
- Project/Agent Service
- Chat Service (LLM abstraction layer)

## Scalability & Security

- Stateless JWT authentication
- Modular services
- Can scale horizontally# chatbot-platform
Minimal chatbot platform MVP
