import { useState } from "react";

export function useReadMore(limit = 100) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded((prev) => !prev);

  const handleText = (children) => {
    const content = children.join(""); // Convert array of children to a single string
    return isExpanded
      ? content
      : content.slice(0, limit) + (content.length > limit ? "..." : "");
  };

  return { isExpanded, toggleReadMore, handleText };
}
