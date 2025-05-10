#Netlify link:- 'https://ornate-bavarois-7987a6.netlify.app/'
# RenderLink:- 'https://s85-nishant-capstone-skill-grind-1.onrender.com/'
# 💻 SkillGrind - Master Programming, One Level at a Time 🚀

Welcome to **SkillGrind**, your personalized Learning Management System (LMS) to grind through programming skills step by step — from beginner to pro. Whether you're just starting out or looking to quickly level up, SkillGrind is your all-in-one coding journey companion.

---

## 🧭 Website Flow

### 🔐 1. Login Page
- Secure login to begin your learning journey.
- Simple, clean UI to sign in or sign up.
- (Future: Google/GitHub login integration)

---

### 🎯 2. Choose What You Want to Learn
- Select from categories:
  - **Frontend**
  - **Backend**
  - **Programming Languages** (like Python, C++, JavaScript, etc.)

---

### 📘 3. Language Overview Page
After your selection, get:
- 📖 A brief intro about the selected language/tech.
- 🧠 Wikipedia summary integration.
- 👨‍💻 Creator/Author of the language.
- 🎓 At the bottom, choose your **Learning Level**:
  - 🟢 Beginner  
  - 🟡 Intermediate  
  - 🔴 Advanced  
  - ⚡ Crash Course

---

### 🎥 4. Level-Based Content Page
Based on your selected level:
- ✅ Handpicked **YouTube videos** to learn step-by-step.
- 📝 Downloadable **practice sheets**.
- ⚖️ **Pros & Cons** listed for each video:
  - Which is best for theory?
  - Which covers projects?
  - Which explains concepts clearly?
- 🔗 Final redirect to a **YouTube playlist** to start learning.

---

### 👤 5. Profile & Progress Tracker
- 📊 Track your course completion by level.
- 📅 Daily, weekly, and monthly streak tracking.
- 🔄 Revisit or jump ahead to other levels.
- 🚀 (Coming Soon) Certificates, badges & leaderboard.

---

## 🧱 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS / CSS Modules

### Backend
- Node.js
- Express.js
- MongoDB
- JWT (for authentication)

### Others
- Multer (for uploads)
- YouTube Data API (Planned)
- Wikipedia API (Planned)

---

                       Workflow for my project
📌 Idea Brief – SkillGrind

SkillGrind is a guided Learning Management System (LMS) designed for students and self-learners to explore programming topics (Frontend, Backend, or Programming Languages) in a structured way. Users log in, choose what they want to learn, get an overview of that technology, and select their preferred level (Beginner, Intermediate, Advanced, Crash Course). Based on their level, they are guided with YouTube videos, practice sheets, and progress tracking.

---

📅 Weekly Plan – MVP (4 Weeks)

✅ Each week focuses on small functional components of the full idea. Feedback from the tech mentor will be used to iterate on each phase.

---

🔹 Week 1 – User Interface & Navigation (Frontend only)

Goal:
- Build basic structure and routing

Tasks:
- Login Page UI (no backend yet)
- Track Selection Page (Frontend / Backend / Languages)
- Language Detail Page (static)
- Level Selection Page (Beginner, Intermediate, Advanced, Crash Course)

Deliverables:
- React setup with routing (react-router-dom)
- Navbar/Footer components
- Static navigation flow working

---

🔹 Week 2 – Language Info & Level Breakdown

Goal:
- Show relevant content based on user selection

Tasks:
- Display language overview (creator, brief description, Wikipedia content - dummy)
- 4 levels shown with selection options
- Upon selecting a level, show:
  - YouTube video placeholders (static)
  - Downloadable practice sheet link (PDF)
  - Pros and Cons (static text)

Deliverables:
- Functional Level page
- Dummy JSON used for rendering content dynamically

---

🔹 Week 3 – Authentication + Basic Backend Integration

Goal:
- Add login functionality and track user choices

Tasks:
- Backend setup (Node.js + Express + MongoDB)
- JWT-based login/register system
- Store selected language, level, and progress
- Create User schema in MongoDB

Deliverables:
- Login/Register connected to backend
- Save and retrieve user selections
- Basic progress saved per user

---

🔹 Week 4 – YouTube Integration + Profile Page

Goal:
- Complete the learning loop and allow tracking

Tasks:
- Embed YouTube videos based on selected level (static for now)
- “Start Journey” button redirects to YouTube playlist
- Profile Page shows:
  - Selected track, level, progress
  - Days active (streak tracker - dummy logic)
  - Option to reset progress or revisit content

Deliverables:
- End-to-end working flow
- Functional Profile Page
- Polished UI and transitions

---

📝 Note:

This is a basic MVP structure. After feedback from the tech mentor, further features can be added like:
- Admin dashboard for uploading videos
- Certificate generation
- Daily quiz module
- Streak-based gamification


