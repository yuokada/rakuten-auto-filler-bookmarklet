import { useEffect, useRef } from 'react';

function BookmarkletLink({ href, text }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Clear existing children to prevent duplicates on re-renders
      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }

      const link = document.createElement('a');
      link.href = href;
      link.className = 'block mt-4 text-[1.1rem] text-green-600 no-underline hover:underline';
      link.textContent = text;
      link.style.cursor = 'pointer';
      link.id = 'bookmarklet'; // Keep the ID for styling if needed
      containerRef.current.appendChild(link);
    }
  }, [href, text]); // Re-run effect if href or text changes

  return <div ref={containerRef} />;
}

export default BookmarkletLink;
