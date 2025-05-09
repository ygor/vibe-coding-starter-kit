# RTL Vibe Coding Starter Kit (Lovable + Cursor)

This starter kit enables fast, AI-assisted, principle-aligned development using:
- **C# (backend)** with Clean Architecture & Vertical Slices
- **Lovable (frontend)** on top of React
- **Zod** for validation
- **Cursor IDE** for AI-native development
- **Built-in engineering principles and AI prompt helpers**

---

## 🚀 Getting Started

### 1. Prerequisites
- [Cursor IDE](https://cursor.sh)
- Node.js 20+
- .NET SDK 8.0

---

### 2. Setup

```bash
git clone <your-repo-url>
cd rtl-vibe-coding-starter
```

Open this folder in **Cursor**.

---

### 3. Using the Starter

#### Frontend (Lovable)
Located in: `Frontend/src/features/todo/`

Files:
- `CreateTodo.lovable.tsx` – Lovable screen using `useAction`
- `createTodo.schema.ts` – Input validation (Zod)
- `createTodo.api.ts` – API abstraction
- `CreateTodo.test.tsx` – Test using React Testing Library
- `ErrorBoundary.tsx` – Custom error boundary

#### Backend (C#)
Located in: `Backend/Features/Todo/`

Files:
- `CreateTodo.cs` – Handler logic
- `CreateTodoValidator.cs` – Input validation
- `TodoDomainModel.cs` – Domain logic
- `CreateTodoTests.cs` – Example unit test (xUnit)

---

## 🧠 Cursor AI Usage

### Prompt Suggestions
- Generate a Lovable screen:
  ```
  Create a Lovable screen for CreateTodo.
  Use useAction with Zod. Submit via createTodo API. Align with principles.
  ```

- Review code:
  ```
  Review this code for RTL’s engineering principles: security, observability, simplicity, and domain alignment.
  ```

### Autoloaded Context
Cursor will automatically load:
- `rtl-engineering-principles.md`
- `cursor_ai_review_prompt_csharp_ts.txt`

These files are defined in `.cursor-context.json`.

---

## ✅ Pull Request Checklist

- Follow [rtl-engineering-principles.md](./rtl-engineering-principles.md)
- Run all tests
- Provide meaningful logs and observability
- Ensure domain logic is aligned and decoupled

Enjoy the vibe 🎧