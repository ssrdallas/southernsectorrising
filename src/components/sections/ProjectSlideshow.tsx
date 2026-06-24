'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './ProjectSlideshow.module.css';

type Props = {
  images: { src: string; alt: string }[];
};

export default function ProjectSlideshow({ images }: Props) {
  const [index, setIndex] = useState(0);

  const prev = useCallback(() => setIndex(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div className={styles.root}>
      {images.map((img, i) => (
        <div key={img.src} className={`${styles.slide} ${i === index ? styles.active : ''}`}>
          <Image src={img.src} fill alt={img.alt} style={{ objectFit: 'cover' }} />
        </div>
      ))}
      <button className={`${styles.arrow} ${styles.prev}`} onClick={prev} aria-label="Previous">&#8249;</button>
      <button className={`${styles.arrow} ${styles.next}`} onClick={next} aria-label="Next">&#8250;</button>
      <span className={styles.counter}>{index + 1} / {images.length}</span>
    </div>
  );
}
