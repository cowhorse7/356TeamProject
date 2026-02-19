import React from "react";

export default function Nav({ tabs, active, onChange }) {
  return (
    <header className="nav-wrap">
      <nav className="nav" role="tablist" aria-label="Top navigation">
        {tabs.map((t, i) => (
          <button
            key={t}
            role="tab"
            aria-selected={i === active}
            className={i === active ? "active" : ""}
            onClick={() => onChange(i)}
          >
            {t}
          </button>
        ))}
      </nav>
    </header>
  );
}
