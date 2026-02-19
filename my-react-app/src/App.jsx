import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";

export default function App() {
  const tabs = ["Tab A", "Tab B", "Tab C"];
  const [active, setActive] = useState(0);

  const SAMPLE_DATA = [
    [
      [
        {
          quote: "To be, or not to be",
          author: "Shakespeare",
          tags: ["classic", "play"],
        },
        {
          quote: "I think, therefore I am",
          author: "Descartes",
          tags: ["philosophy"],
        },
      ],
      [
        {
          quote: "Simplicity is the soul of efficiency",
          author: "Austin",
          tags: ["design"],
        },
      ],
      [
        {
          quote: "Less but better",
          author: "Dieter Rams",
          tags: ["design", "ux"],
        },
      ],
    ],
    [
      [
        {
          quote: "Read a thousand books",
          author: "Proverb",
          tags: ["reading"],
        },
      ],
      [
        {
          quote: "Walk slowly but never backward",
          author: "Someone",
          tags: ["advice"],
        },
      ],
      [
        {
          quote: "Curiosity fuels invention",
          author: "Inventor",
          tags: ["innovation"],
        },
      ],
    ],
    [
      [{ quote: "First card", author: "Author 1", tags: ["alpha"] }],
      [{ quote: "Second card", author: "Author 2", tags: ["beta"] }],
      [{ quote: "Third card", author: "Author 3", tags: ["gamma"] }],
    ],
  ];

  const data = SAMPLE_DATA[active];

  return (
    <div className="app-root">
      <Nav tabs={tabs} active={active} onChange={setActive} />

      <main className="container">
        <div className="cols">
          {data.map((col, colIdx) => (
            <section key={colIdx}>
              {col.map((card, idx) => (
                <Card key={idx} card={card} />
              ))}
            </section>
          ))}
        </div>
      </main>

      <footer>
        Template — replace SAMPLE_DATA with your own quotes & tags
      </footer>
    </div>
  );
}
