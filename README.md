# RTL Vibe Coding Starter Kit (with Lovable)

This starter kit enables fast, AI-assisted, principle-aligned development using:
- **C# (backend)** with Clean Architecture & Vertical Slices
- **TypeScript/React (frontend)** using **Lovable**
- **Zod** for validation
- **Cursor** for flow-based coding with AI
- **DevContainers** for zero-setup environments
- **AI prompts and engineering principles** built-in

---

## 🚀 Getting Started

### 1. Prerequisites
- VS Code with the **Dev Containers** extension
- GitHub Codespaces (optional)
- Node.js 20+
- .NET SDK 8.0

---

### 2. Setup in VS Code (with DevContainer)

```bash
git clone <this-repo>
cd rtl-vibe-coding-starter
code .
```

When prompted, **"Reopen in Container"**.

This installs:
- .NET SDK
- Node.js
- ESLint, Prettier, C# and TypeScript extensions

---

### 3. Frontend (Lovable) Structure

Located in: `Frontend/src/features/todo/`

Files:
- `CreateTodo.lovable.tsx` – Main screen using `useLovableRoute` and `useAction`
- `createTodo.schema.ts` – Zod schema for validation
- `createTodo.api.ts` – API call
- `CreateTodo.test.tsx` – Example test
- `ErrorBoundary.tsx` – Custom error boundary

---

### 4. Backend (C#) Structure

Located in: `Backend/Features/Todo/`

Files:
- `CreateTodo.cs` – Handler
- `CreateTodoValidator.cs` – Input validation
- `TodoDomainModel.cs` – Domain logic
- `CreateTodoTests.cs` – xUnit test example

---

## 🤖 Using Cursor AI

### Prompt Examples

- Generate a new Lovable screen:
  ```
  Create a Lovable screen component called CreateTodo.
  Use useAction with a Zod schema. Submit using createTodo API.
  Align with RTL principles: validation, observability, simplicity.
  ```

- Backend slice:
  ```
  Generate a vertical slice in C# for CreateTodo using Clean Architecture.
  Add validation, logging, and test it with xUnit.
  ```

---

## ✅ Pull Request Checklist

When submitting code:
- Follow [rtl-engineering-principles.md](../rtl-engineering-principles.md)
- Run all tests (C# + React)
- Include meaningful logs and error handling
- Keep code readable and domain-aligned

---

For questions, ask Cursor:
> "Review this code for RTL’s principles: Secure by Default, Observable, Domain-Aligned."

Enjoy the vibe. 🎧