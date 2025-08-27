import React from "react";

export default function VibeCast() {
  const createRoom = () => {
    alert("Redirecting to create room...");
    window.location.href = "/create-room";
  };

  const joinRoom = () => {
    alert("Redirecting to join room...");
    window.location.href = "/join-room";
  };

  return (
    <div className="app">
      {/* Navbar */}
      <header>
        <div className="logo">
          <img
            src="C:/Users/Harshini.Paluri/Downloads/logos.png"
            alt="VibeCast Logo"
          />
          <h2>VibeCast</h2>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Vibe Together</h1>
        <p>Watch videos with friends, anytime, anywhere.</p>
        <div className="buttons">
          <button className="btn btn-primary" onClick={createRoom}>
            Create Room
          </button>
          <button className="btn btn-secondary" onClick={joinRoom}>
            Join Room
          </button>
        </div>
      </section>

      {/* Trending Section */}
      <section className="trending">
        <h2>🔥 Trending Watch Parties 🔥</h2>
        <div className="cards">
          <div className="card">Party 1</div>
          <div className="card">Party 2</div>
          <div className="card">Party 3</div>
          <div className="card">Party 4</div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        &copy; 2025 VibeCast. All rights reserved.
      </footer>
    </div>
  );
}
