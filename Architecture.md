# Chatbot Platform – Architecture

## Overview
This project is a minimal Chatbot Platform MVP that supports:
- User authentication
- Project/agent creation
- Chat interaction with an AI agent

The system is designed with a modular and scalable REST API architecture.

---

## Architecture Diagram (Logical)

Client (Postman / UI)
        |
        v
API Gateway (Express.js)
        |
        +-------------------+
        |                   |
 Authentication Service   Chat Service
 (JWT, bcrypt)            (LLM Interface)
        |                   |
        v                   v
 User Store           Project / Prompt Store
 (In-memory)          (In-memory)

---

## Components

### 1. Client
- Uses Postman or frontend UI
- Sends HTTP requests to backend APIs

### 2. Authentication Service
- Handles user registration and login
- Uses JWT for stateless authentication
- Passwords are hashed using bcrypt

### 3. Project / Agent Service
- Allows users to create projects (agents)
- Each project stores a system prompt
- Projects are linked to authenticated users

### 4. Chat Service
- Accepts user messages
- Designed to integrate with OpenAI Responses API or OpenRouter
- Currently returns mock AI responses for MVP

---

## Scalability
- Stateless JWT authentication
- Can be horizontally scaled
- In-memory storage can be replaced with a database

## Security
- JWT-based authentication
- Password hashing
- Protected API endpoints

## Extensibility
- Can add database (MongoDB/PostgreSQL)
- Can integrate OpenAI Files API
- Can add analytics and logging
