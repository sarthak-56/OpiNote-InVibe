import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">OpiNote InVibe</h1>
        <p className="subtitle">Share Opinions. Send Invitations.</p>
      </header>

      <main className="main">
        <img
          src="https://img.icons8.com/fluency/240/download.png"
          alt="Download Icon"
          className="download-icon"
        />
        <h2 className="section-title">Download OpiNote InVibe APK</h2>
        <p className="description">
          Experience a unique social space where you can share your opinions and send invitations
          easily. Built for connection, expression, and simplicity.
        </p>
        <a href="/OpiNote-InVibe.apk"  download="OpiNote-InVibe.apk" className="download-button">
          Download Now
        </a>
      </main>

      <footer className="footer">&copy; 2025 OpiNote InVibe. All rights reserved.</footer>
    </div>
  );
}
