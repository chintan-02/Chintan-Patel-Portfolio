import { useEffect, useState } from 'react';
import { typewriterLines } from '../../data/siteMeta.js';

export function Typewriter() {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typewriterLines[lineIndex];
    const delay = deleting ? 40 : 75;
    const timer = window.setTimeout(() => {
      if (!deleting && text === current) {
        window.setTimeout(() => setDeleting(true), 1800);
        return;
      }
      if (deleting && text === '') {
        setDeleting(false);
        setLineIndex((lineIndex + 1) % typewriterLines.length);
        return;
      }
      setText(current.slice(0, deleting ? text.length - 1 : text.length + 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [deleting, lineIndex, text]);

  return (
    <span className="inline-block min-w-[2px]">
      {text}
      <span className="tw-cursor text-accent">|</span>
    </span>
  );
}
