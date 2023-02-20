import React, { useState, useEffect } from "react";
import Quote from "./components/Quote";
import GameControls from "./components/GameControls";
import TypingArea from "./components/TypingArea";
import QuoteFetcher from "./components/QuoteFetcher";

function TypingGame() {
  const [quote, setQuote] = useState("");
  const [input, setInput] = useState("");
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setQuote("");
  }, []);

  const handleQuoteFetched = (data) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setQuote(data[randomIndex].text);
  };

  useEffect(() => {
    if (quote) {
      setTimer(180);
      setInput("");
    }
  }, [quote]);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    }
  }, [timer]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
    if (event.target.value === quote) {
      setTimer(0);
    }
  };

  const handleStartGame = () => {
    setQuote("");
  };

  return (
    <div>
      {quote ? (
        <div>
          <h2> Quote Typing Game</h2>
          <Quote quote={quote} />
          {timer === 0 ? (
            <GameControls handleStartGame={handleStartGame} />
          ) : (
            <TypingArea
              input={input}
              handleInputChange={handleInputChange}
              timer={timer}
            />
          )}
        </div>
      ) : (
        <QuoteFetcher handleQuoteFetched={handleQuoteFetched} />
      )}
    </div>
  );
}

export default TypingGame;


