# 🕵️‍♀️ Scavenger Hunt Game – Session-Based Web App

Welcome to the **Scavenger Hunt**! This interactive web game challenges players to uncover hidden items step-by-step — all while learning about how **web sessions** keep track of player progress behind the scenes.

---

## 🎯 Introduction

In this scavenger hunt game, players are taken through a series of steps that depend on remembering what came before — just like a traditional scavenger hunt. But how does the website know where a player left off?

This is where **sessions** come in.

Sessions allow web applications to **store user-specific data** across multiple pages or requests — enabling each player to have a unique, continuous experience.

---

## 🧠 What Are Sessions?

When a user visits a website, their browser sends a request to the server. HTTP itself is *stateless*, meaning the server forgets everything after responding. Sessions solve this by storing information (like progress, score, username) **on the server side**, associated with a **unique session ID** stored in the user’s cookies.

### ✅ Sessions help you:
- Track login/authentication state
- Preserve game or form progress
- Store temporary user data (e.g., hunt steps)

In this project, we use sessions to:
- Track which scavenger clues the player has completed
- Prevent skipping steps or cheating
- Store user score or hints collected

---

## 🛠 Tools & Technologies

This project was built using:

| Tech              | Description                                         |
|------------------|-----------------------------------------------------|
| `ASP.NET Core`    | Web framework for handling pages and sessions      |
| `Razor Pages`     | Simplified web app architecture                    |
| `C#`              | Server-side logic and session handling             |
| `HTML + CSS`      | Front-end markup and styling                       |
| `JavaScript`      | Interactivity and client-side validation           |
| `Session Middleware` | Built-in ASP.NET feature for user session tracking |

---

## 📚 Further Reading: Sessions in Web Apps

If you’d like to learn more about how sessions work and best practices for using them securely and effectively, check out these resources:

- 📘 [Microsoft Docs – Session and App State in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/app-state?view=aspnetcore-7.0)
- 🔒 [OWASP: Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
- 📚 [MDN: HTTP Cookies and Session Management](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

---
