import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";

export default function App() {
  const tabs = ["Author", "Length", "Topic"];
  const [active, setActive] = useState(0);

  // Flat list of all quotes
  const ALL_QUOTES = [
    {
      quote: "A loving heart is the truest wisdom",
      author: "Charles Dickens",
      tags: ["Love", "7 words"],
    },
    {
      quote: "We forge the chains we wear in life",
      author: "Charles Dickens",
      tags: ["Self Reflection", "8 words"],
    },
    {
      quote: "We do not remember days, we remember moments",
      author: "Cesare Pevese",
      tags: ["Life", "8 words"],
    },
    {
      quote:
        "The quality, not the longevity, of one's life is what is important",
      author: "Martin Luther King Jr.",
      tags: ["Life", "12 words"],
    },
    {
      quote:
        "All our dreams can come true, if we have the courage to pursue them",
      author: "Walt Disney",
      tags: ["Dreams", "14 words"],
    },
    {
      quote:
        "The only man who never makes a mistake is the man who never does anything",
      author: "Theodore Roosevelt",
      tags: ["Decisiveness", "15 words"],
    },
    {
      quote:
        "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that",
      author: "Martin Luther King Jr.",
      tags: ["Love", "20 words"],
    },
    {
      quote:
        "I'm a dreamer. I have to dream and reach for the stars, and if I miss a star then I grab a handful of clouds",
      author: "Mike Tyson",
      tags: ["Dreams", "25 words"],
    },
    {
      quote:
        "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month",
      author: "Theodore Roosevelt",
      tags: ["Self Reflection", "21 words"],
    },
  ];

  // Function to organize quotes into 3 columns based on active tab
  const organizeQuotes = () => {
    let sorted = [...ALL_QUOTES];

    if (active === 0) {
      // Author: sort by author name
      sorted.sort((a, b) => a.author.localeCompare(b.author));
    } else if (active === 1) {
      // Length: sort by word count
      sorted.sort((a, b) => {
        const aWords = parseInt(
          a.tags.find((t) => t.includes("words"))?.split(" ")[0] || 0
        );
        const bWords = parseInt(
          b.tags.find((t) => t.includes("words"))?.split(" ")[0] || 0
        );
        return aWords - bWords;
      });
    } else if (active === 2) {
      // Topic: sort by first topic tag
      sorted.sort((a, b) => {
        const aTopic = a.tags.find((t) => !t.includes("words")) || "";
        const bTopic = b.tags.find((t) => !t.includes("words")) || "";
        return aTopic.localeCompare(bTopic);
      });
    }

    // Divide sorted quotes into 3 columns
    const cols = [[], [], []];
    sorted.forEach((quote, idx) => {
      cols[idx % 3].push(quote);
    });

    return cols;
  };

  const data = organizeQuotes();

  return (
    <div className="app-root">
      <Nav tabs={tabs} active={active} onChange={setActive} />

      <main className="container">
        <div className="cols">
          {data.map((col, colIdx) => (
            <section key={colIdx}>
              {col.map((card, idx) => (
                <Card key={idx} card={card} activeTab={active} />
              ))}
            </section>
          ))}
        </div>
      </main>

      <footer>I am a friendly footer. Hello there!</footer>
    </div>
  );
}
