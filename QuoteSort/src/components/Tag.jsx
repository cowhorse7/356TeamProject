import React from "react";

function colorFor(tag) {
  const palette = [
    ["#e6f0ff", "#1f4db0"],
    ["#e8f7ed", "#1b8a4a"],
    ["#fff9e6", "#b36b00"],
    ["#ffecec", "#b02b2b"],
    ["#f3e8ff", "#6b2db0"],
    ["#fff0f6", "#b02b7a"],
    ["#eef2ff", "#3b4db0"],
    ["#e8fbfa", "#0b7b74"],
  ];
  let code = 0;
  for (let i = 0; i < tag.length; i++)
    code = (code * 31 + tag.charCodeAt(i)) >>> 0;
  return palette[code % palette.length];
}

export default function Tag({ tag }) {
  const [bg, fg] = colorFor(tag);
  return (
    <span className="tag" style={{ background: bg, color: fg }}>
      {tag}
    </span>
  );
}
