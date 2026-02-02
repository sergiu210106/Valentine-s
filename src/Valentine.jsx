import { useState } from "react";
import "./Valentine.css";

function Heart({ left, delay }) {
    return (
      <div
        className="heart"
        style={{ left, animationDelay: delay }}
      >
        ❤️
      </div>
    );
  }
  

export default function Valentine() {
  const [answer, setAnswer] = useState(null);

  return (
    <div className="container">
      {/* Background hearts */}
      {Array.from({ length: 15 }).map((_, i) => (
        <Heart
          key={i}
          left={`${Math.random() * 100}%`}
          delay={`${Math.random() * 5}s`}
        />
      ))}
  
      {/* Centered content */}
      <div className="content">
        <h1>💖 Will you be my Valentine? 💖</h1>
  
        {!answer && (
            <div className="buttons">
                    <div className="button-wrapper">
                        <button className="yes" onClick={() => setAnswer("yes")}>
                            Yes 💕
                        </button>
                    </div>

                    <div className="button-wrapper">
                        <button
                            className="no"
                            onClick={() => setAnswer("no")}
                            onMouseEnter={(e) => {
                            const btn = e.target;
                            btn.style.position = "absolute";
                            btn.style.left = Math.random() * 120 + "%";
                            btn.style.top = Math.random() * 120 + "%";
                            }}
                        >
                            No 💔
                        </button>
                    </div>
            </div>

        )}
  
        {answer === "yes" && (
          <p className="response yes-text">
            Te iubeeeeeesc ❤️
          </p>
        )}
  
        {answer === "no" && (
          <p className="response no-text">
            Oh no 😢 … eu tot te iubesc haha
          </p>
        )}
      </div>
    </div>
  );
  
  
}
