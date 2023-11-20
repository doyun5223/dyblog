import { useState } from "react";
import JSConfetti from "js-confetti";
import "./index.css";

function App() {
  const [wait, setWait] = useState(true);
  const jsConfetti = new JSConfetti();

  const handleConfetti = async () => {
    setWait(false);
    await jsConfetti
      .addConfetti({
        emojis: ["🤩", "🎟️", "💚", "🎃", "🎄"],
        emojiSize: 80,
        comfettiNumber: 55,
      })
      .then(() => setWait(true));
  };
  //
  return (
    <div id="content">
      <button disabled={!wait} onClick={handleConfetti}>
        {wait ? "Wow" : ""}
      </button>
    </div>
  );
}

export default App;
