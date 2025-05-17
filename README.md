# 🕵️‍♀️ Scavenger Hunt Game – Session-Based Web App

Welcome to the **Scavenger Hunt**! This interactive web game lets players play games to obtain 3 keys — behind the scenes, the main focus of this project is handling variables through sessions.

---

## 🎯 Introduction

In this scavenger hunt game, players hunt for keys in order to open the secret magic door. This project stores these keys on the player's side with cookies!

This is where **sessions** come in.

Sessions allow web applications to **store user-specific data** across multiple pages or requests — enabling each player to have a unique, continuous experience.

---

## 🧠 What Are Sessions?

When a user visits a website, their browser sends a request to the server. HTTP itself is *stateless*, meaning the server forgets everything after responding. Sessions solve this by storing information (for this project, it is whether you have a key or not) **on the server side**, associated with a **unique session ID** stored in the user’s cookies.

### ✅ Sessions help you:
- Track login/authentication state
- Preserve game or form progress
- Store temporary user data (e.g., keys)

In this project, we use sessions to:
- Store progress through use of keys
- Prevent skipping steps or cheating

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

---

## 📚 Further Reading: Sessions in Web Apps

If you’d like to learn more about how sessions work and best practices for using them securely and effectively, check out these resources:

- [Microsoft Docs – Session and App State in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/app-state?view=aspnetcore-7.0)
- [MDN: HTTP Cookies and Session Management](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

---

Last updated: 5/17/25
