

## Overview

This is a full-stack web application built with React (frontend) and Express.js (backend) that serves as a personal portfolio website for a Computer Science student. The application features a modern, space-themed design with animations and interactive elements showcasing the student's background, projects, skills, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful API structure (routes prefixed with `/api`)
- **Server Structure**: Modular design with separate route handlers
- **Development**: Hot module replacement via Vite integration

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling and active section highlighting
- **Hero Section**: Animated landing section with floating particles and space imagery
- **About Section**: Personal information and career summary
- **Experience Section**: Timeline of hackathon participations and achievements
- **Projects Section**: Showcase of technical projects with descriptions and technologies
- **Skills Section**: Interactive skill bars with proficiency levels
- **Education Section**: Academic background and achievements
- **Contact Section**: Contact form with toast notifications
- **StarField**: Animated background star effect

### Backend Components
- **Storage Interface**: Abstract storage layer with in-memory implementation
- **Route Registration**: Centralized route management system
- **Error Handling**: Global error middleware for consistent error responses
- **Request Logging**: Middleware for API request logging with timing

## Data Flow

### Frontend Data Flow
1. React components use TanStack Query for server state management
2. API requests are made through a centralized `apiRequest` function
3. Toast notifications provide user feedback for form submissions
4. Intersection Observer API handles scroll-based animations

### Backend Data Flow
1. Express middleware processes requests (JSON parsing, logging)
2. Routes are registered through a centralized system
3. Storage interface abstracts data persistence
4. Error middleware provides consistent error handling

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **UI Components**: Radix UI primitives, Shadcn/ui components
- **Icons**: Lucide React icons
- **Animations**: CSS animations and transitions
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: TanStack Query

### Backend Dependencies
- **Runtime**: Node.js with Express.js
- **Database**: Drizzle ORM with PostgreSQL configuration
- **Session Management**: Connect-pg-simple for PostgreSQL session store
- **Development**: TSX for TypeScript execution, Vite for development server

### Database Schema
- **Users Table**: Basic user schema with id, username, and password fields
- **ORM**: Drizzle ORM with Zod schema validation
- **Database**: PostgreSQL with Neon serverless configuration

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds the React application to `dist/public`
2. **Backend**: ESBuild bundles the Express server to `dist/index.js`
3. **TypeScript**: Compilation checking via `tsc`

### Development Environment
- **Hot Reloading**: Vite dev server with HMR
- **Error Handling**: Runtime error overlay for development
- **Database**: Drizzle Kit for schema management and migrations

### Production Deployment
- **Server**: Express serves static files and API routes
- **Database**: PostgreSQL connection via environment variables
- **Static Assets**: Served from `dist/public` directory

### Environment Configuration
- **Development**: NODE_ENV=development with Vite middleware
- **Production**: NODE_ENV=production with static file serving
- **Database**: DATABASE_URL environment variable required
- **Replit Integration**: Special handling for Replit environment variables

