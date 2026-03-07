# AGENTS.md - Codebase Guidelines

**CORE IDENTITY - READ THIS FIRST**

This document establishes the foundational workflow and identity for AI coding agents in this repository. All skill-based guidance is supplementary to these core principles.

## Workflow Orchestration

### 1. Plan Node Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately - don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy
- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop
- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project

### 4. Verification Before Done
- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness

### 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes - don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing
- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests - then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

## Task Management

1. **Plan First**: Write plan to `tasks/todo.md` with checkable items
2. **Verify Plan**: Check in before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add review section to `tasks/todo.md`
6. **Capture Lessons**: Update `tasks/lessons.md` after corrections

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.

---

## Project Overview

Personal portfolio website built with Vite, React, TypeScript, shadcn/ui, and Tailwind CSS. Features theme switching (light/dark), React Router for navigation, and Supabase backend integration.

## Build, Lint, and Test Commands

```bash
# Development
npm run dev          # Start dev server on port 8080

# Build
npm run build        # Production build (outputs to dist/)
npm run build:dev    # Development build
npm run preview      # Preview production build locally

# Linting
npm run lint         # Run ESLint on all files
```

Note: No test framework configured. If tests are added, update this section.

## Code Style Guidelines

### Imports
- Use `@/*` path alias for imports from `src/` directory
- Example: `import { Button } from "@/components/ui/button"`
- Group imports logically: external packages first, then internal modules
- React imports: `import { useState } from "react"` (named imports preferred)

### TypeScript
- TypeScript is configured with relaxed strictness (`strict: false`)
- Unused variables/parameters are allowed (`noUnusedLocals: false`, `noUnusedParameters: false`)
- No implicit any errors disabled (`noImplicitAny: false`)
- Use explicit types for props and function returns when helpful for clarity
- File extension: `.tsx` for components, `.ts` for utilities

### React Components
- Use functional components with arrow function syntax: `const Component = () => { ... }`
- Default export at end of file
- Named exports for utility functions and hooks
- Use React.forwardRef for components that need ref forwarding (see shadcn/ui components)

### Styling
- Tailwind CSS with CSS variables for theming (defined in `src/index.css`)
- Use `cn()` utility from `@/lib/utils` for conditional class merging
- CSS variables follow shadcn/ui conventions: `--background`, `--foreground`, `--primary`, etc.
- Dark mode via `.dark` class (managed by next-themes)

### Component Structure
```
src/
├── pages/           # Page components (routes)
├── components/      # Reusable components
│   └── ui/          # shadcn/ui components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── integrations/    # External service integrations (Supabase)
```

### Naming Conventions
- Components: PascalCase (e.g., `Navigation.tsx`, `ThemeToggle.tsx`)
- Files: PascalCase for components, camelCase for utilities
- Hooks: camelCase with `use` prefix (e.g., `use-toast.ts`)
- CSS classes: Use Tailwind utility classes, avoid custom CSS when possible
- Types/Interfaces: PascalCase (e.g., `ButtonProps`)

### Error Handling
- Use shadcn/ui Toast/Sonner for user-facing notifications
- React Query handles API error states
- No global error boundary currently implemented

### Forms
- Use React Hook Form with Zod schemas via `@hookform/resolvers`
- shadcn/ui Form components for consistent styling

### Routing
- React Router v6 with `BrowserRouter`
- Routes defined in `src/App.tsx`
- Use `Link` component from `react-router-dom` for navigation
- `useLocation` hook for active route detection

### State Management
- React Query (`@tanstack/react-query`) for server state
- React context for theme state (`next-themes`)
- Local state with `useState` for component-level state

## Key Dependencies

- **UI**: shadcn/ui (Radix primitives + Tailwind)
- **Routing**: react-router-dom v6
- **State**: @tanstack/react-query
- **Forms**: react-hook-form + zod
- **Theme**: next-themes
- **Icons**: lucide-react
- **Backend**: @supabase/supabase-js
- **Styling**: tailwindcss + tailwindcss-animate

## Notes

- The project uses relaxed TypeScript settings to prioritize development speed
- shadcn/ui components should not be manually modified unless necessary
- Theme colors are defined via CSS variables in `src/index.css`
- Dev server runs on port 8080 by default
