import React, { useState, useEffect } from "react";

// Load Google Fonts dynamically
const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

function App() {
  // Default personal reminders
  const [notices, setNotices] = useState([
    {
      title: "Assignment Reminder 💕",
      description: "Math assignment is due tomorrow. Don’t forget!",
      date: "Today",
    },
    {
      title: "Test Prep 💕",
      description: "Revise chapters 3 and 4 before Friday’s test.",
      date: "Yesterday",
    },
    {
      title: "Personal Goal 💕",
      description: "Study React for at least 1 hour today.",
      date: "2 days ago",
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [greeting, setGreeting] = useState("");

  // Time-based greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  // Random soft card colors
  const colors = ["#fff0f6", "#fce4ec", "#f3e5f5", "#fdeff2"];

  const addNotice = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    const newNotice = {
      title,
      description,
      date: "Just now",
    };

    setNotices([newNotice, ...notices]);
    setTitle("");
    setDescription("");
  };

  return (
    <div style={styles.container}>
      {/* Time-based greeting */}
      <p style={styles.greeting}>{greeting}</p>

      {/* Header */}
      <h1 style={styles.heading}>Personal Reminder Board 💕</h1>

      {/* Motivational text */}
      <p style={styles.motivation}>One step at a time</p>

      {/* Add Reminder Form */}
      <form onSubmit={addNotice} style={styles.form}>
        <input
          type="text"
          placeholder="Reminder title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />

        <textarea
          placeholder="Write it down before you forget"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Save reminder 💕
        </button>
      </form>

      {/* Notice Board */}
      <div style={styles.noticeBoard}>
        {notices.map((notice, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              backgroundColor: colors[index % colors.length],
            }}
          >
            <h3 style={styles.cardTitle}>{notice.title}</h3>
            <p style={styles.cardText}>{notice.description}</p>
            <small style={styles.date}>{notice.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#ffe6f0",
    padding: "20px",
    fontFamily: "'Playfair Display', serif",
  },
  greeting: {
    textAlign: "center",
    fontSize: "18px",
    color: "#cc3399",
    marginBottom: "5px",
  },
  heading: {
    textAlign: "center",
    color: "#cc0066",
    marginBottom: "5px",
    fontWeight: 700,
  },
  motivation: {
    textAlign: "center",
    color: "#a64d79",
    marginBottom: "25px",
  },
  form: {
    maxWidth: "450px",
    margin: "0 auto 30px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ff99cc",
  },
  textarea: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ff99cc",
    minHeight: "80px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#ff4da6",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 700,
  },
  noticeBoard: {
    maxWidth: "700px",
    margin: "0 auto",
  },
  card: {
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "15px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  cardTitle: {
    marginBottom: "5px",
    color: "#cc0066",
  },
  cardText: {
    marginBottom: "8px",
  },
  date: {
    color: "#999",
    fontSize: "12px",
  },
};

export default App;
