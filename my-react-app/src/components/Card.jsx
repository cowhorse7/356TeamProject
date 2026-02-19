import React from "react";
import Tag from "./Tag";

export default function Card({ card }) {
  return (
    <article className="card">
      <blockquote>“{card.quote}”</blockquote>
      <div className="author">— {card.author}</div>

      <div className="tags">
        {card.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </article>
  );
}
