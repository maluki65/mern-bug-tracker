# mern-bug-tracker

A full-stack Bug Tracking application built with the MERN (MongoDB, Express, React, Node.js) stack, featuring testing and debugging best practices.

## 📌 Project Objective

- Develop a systematic approach to testing and debugging MERN applications.
- Implement unit, integration, and component tests for both backend and frontend.
- Identify and resolve issues using debugging tools and techniques.

## 🚀 Features

- Report new bugs via a form
- View a list of all reported bugs
- Update bug statuses (`open`, `in-progress`, `resolved`)
- Delete bugs
- Comprehensive backend and frontend testing
- Debugging via console logs, DevTools, and Node.js inspector
- Error boundaries and middleware for graceful error handling

---

## 🧱 Tech Stack

### Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- Jest + Supertest (for unit and integration testing)

### Frontend:
- React
- Axios
- React Testing Library + Jest
- Error Boundaries for UI crash handling

---

## 📁 Project Structure

```

mern-bug-tracker/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── tests/
│   ├── app.js
│   └── server.js
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── **tests**/
│   │   └── ErrorBoundary.jsx
│   └── package.json
│
├── README.md
└── package.json

````

---

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mern-bug-tracker.git
cd mern-bug-tracker
````

---

### 2. Backend Setup

```bash
cd server
npm install
npm run dev
```

Ensure MongoDB is running locally at `mongodb://localhost:27017/bugtracker`.

---

### 3. Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

Frontend will run on `http://localhost:5173` by default.

---

## 🧪 Running Tests

### Backend Tests

```bash
cd server
npm test
```

### Frontend Tests

```bash
cd client
npm test
```

---

## 🐞 Debugging Techniques Used

* **Console Logging**: Used to trace values and functions.
* **Chrome DevTools**: Used for inspecting network requests, state, and React components.
* **Node.js Inspector**: Debug server logic using `node --inspect server.js`.
* **Error Boundaries**: React components to catch and display error messages without crashing the app.
* **Express Middleware**: Handles all API errors gracefully and logs them.

---

## 🧪 Testing Approach

* Unit tests for:

  * Validation helpers
  * Button click behavior
  * React components
* Integration tests for:

  * API routes (create, update, delete bugs)
  * Full form submission workflows
* Mocks used for:

  * Database (in backend tests)
  * API responses (in frontend tests)

---

## 📚 Folder Highlights

| Folder         | Purpose                                    |
| -------------- | ------------------------------------------ |
| `controllers/` | Contains CRUD logic for bugs               |
| `models/`      | Mongoose schema for bug reports            |
| `routes/`      | API endpoint routing                       |
| `components/`  | React components for UI                    |
| `__tests__/`   | Component and integration tests (frontend) |
| `tests/`       | Unit/integration tests (backend)           |

---

## 📌 Future Enhancements

* User authentication with JWT
* Filter bugs by status or project
* Attachments or image uploads for bugs
* Role-based access (Admin/Reporter/Developer)

---

## 📃 License

MIT License
