
```markdown
# 🔐 Simple Admin Login Page

A minimal **login system** built using **HTML**, **Tailwind CSS**, and **JavaScript** that reads user credentials from a `cred.json` file and protects admin access using `localStorage`.

---

## 🚀 Features

- 🎨 Beautiful UI using [Tailwind CSS](https://tailwindcss.com)
- 🔐 Validates credentials from `cred.json`
- 🛑 Prevents unauthorized access to `admin.html`
- 📦 Stores session using `localStorage`
- 🔓 Logout functionality

---

## 📁 Project Structure

```
/your-project-folder
│
├── login.html          # Login interface
├── admin.html          # Protected admin page
├── cred.json           # JSON file with credentials
└── README.md           # Project documentation
```

---

## 🔧 How It Works

1. User enters username and password.
2. On submit, JavaScript reads and checks `cred.json`.
3. If valid, sets a flag in `localStorage` and redirects to `admin.html`.
4. `admin.html` checks `localStorage` — if not logged in, user is redirected to login.

---

## 📂 Sample `cred.json`

```json
{
  "user": "admin",
  "password": "admin"
}
```

---

## ✋ Security Note

This is a **frontend-only login** system — not secure for production use!  
Anyone can view the credentials using browser dev tools.  
For production, use backend-based authentication (Node.js + Express + JWT or sessions).

---

## 📸 Screenshots

> *Coming soon!* Add screenshots of your `login.html` and `admin.html` interface here.

---

## 📤 To Run the Project

1. Clone or download the repo.
2. Open with **Live Server** (VS Code extension) or any local server.
3. Ensure all files are in the correct paths (especially `cred.json`).
4. Try to access `/admin.html` directly — it should redirect you back to login unless authenticated!

---

## 🧠 Author

**Anshul Kumar**  
🎓 BCA Student | 💻 Full-Stack Developer | 🛡️ Cybersecurity Enthusiast  
📍 GLA University, Mathura  
📫 [LinkedIn](#) | [GitHub](#) | [Portfolio](#)

---

## 💡 License

This project is for **educational purposes only**. Feel free to use or modify!

```

---

Let me know if you want:
- The README exported as a file
- Screenshots inserted
- GitHub deploy instructions added
- Or backend version with Express server auth too!
