import React from "react";
import Tag from "./Tag";

export default function Card({ card, activeTab }) {
  // Filter tags based on active tab
  // Tab 0: Author (show no tags)
  // Tab 1: Length (show only word count tags)
  // Tab 2: Topic (show only non-word-count tags)
  const filterTags = (tags) => {
    if (activeTab === 0) {
      // Author tab: show no tags
      return [];
    } else if (activeTab === 1) {
      // Length tab: show only tags with "words"
      return tags.filter((tag) => tag.includes("words"));
    } else if (activeTab === 2) {
      // Topic tab: show only tags without "words"
      return tags.filter((tag) => !tag.includes("words"));
    }
    return tags;
  };

  const filteredTags = filterTags(card.tags);

  return (
    <article className="card">
      <blockquote>"{card.quote}"</blockquote>
      <div className="author">— {card.author}</div>

      <div className="tags">
        {filteredTags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </article>
  );
}
