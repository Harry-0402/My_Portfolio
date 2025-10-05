# Overview

This is a personal portfolio website for Harish Chavan, an Actuarial Science student. The application is built as a full-stack web application using React for the frontend and Express.js for the backend. It showcases projects, education, and provides a contact form for visitors to reach out. The site features a modern, responsive design with dark/light theme support and smooth animations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight routing library that provides a simple API for navigation without the complexity of React Router.

**UI Components**: Built on shadcn/ui component library (New York style variant) with Radix UI primitives, providing accessible, customizable components. Uses Tailwind CSS for styling with CSS variables for theming.

**State Management**: React Query (TanStack Query) for server state management and data fetching. Local component state managed with React hooks.

**Theming**: Custom theme provider supporting light/dark modes with system preference detection. Theme state persisted to localStorage. Color schemes defined using HSL values with CSS custom properties.

**Design Patterns**:
- Component composition with reusable UI primitives
- Custom hooks for cross-cutting concerns (mobile detection, toast notifications)
- Intersection Observer pattern for scroll-based animations
- Context API for theme and toast state management

## Backend Architecture

**Server Framework**: Express.js with TypeScript, running in ESM module mode.

**API Design**: RESTful API endpoints with JSON request/response format. Error handling middleware for consistent error responses.

**Database Layer**: 
- Drizzle ORM for type-safe database operations
- PostgreSQL as the primary database (using Neon serverless driver)
- Dual storage implementation: in-memory storage for development/testing and PostgreSQL for production
- Schema defined in shared folder for type consistency between client and server

**Validation**: Zod schemas for runtime type validation on API requests, with schemas shared between frontend and backend.

**Development Setup**: 
- Vite dev server runs in middleware mode within Express during development
- Hot Module Replacement (HMR) enabled for rapid development
- Production builds serve static files from Express

**Logging**: Custom request logging middleware that tracks API response times and payloads (truncated for readability).

## Data Schema

**Users Table**: Basic user model with username and password (appears to be scaffolding for potential future authentication).

**Contact Messages Table**: Stores contact form submissions with name, email, subject, message, and timestamp fields.

**Type Safety**: Drizzle Zod integration generates Zod schemas from database schema, ensuring consistency between database models and validation rules.

## External Dependencies

**UI/Component Libraries**:
- Radix UI primitives for accessible components (dialogs, dropdowns, tabs, etc.)
- shadcn/ui for pre-built component patterns
- Tailwind CSS for utility-first styling
- Lucide React for icons

**Database & ORM**:
- Neon serverless PostgreSQL driver (@neondatabase/serverless)
- Drizzle ORM for database operations and migrations
- drizzle-zod for schema validation

**Form Handling**:
- React Hook Form for form state management
- @hookform/resolvers for Zod integration

**Development Tools**:
- Vite for build tooling and dev server
- esbuild for server-side bundling
- TypeScript for type safety
- Various Replit-specific plugins for development experience

**Fonts**: Google Fonts (Inter and Poppins families) loaded via CDN.

**Third-party Services**: None currently integrated, but structure supports adding email services, analytics, or authentication providers.