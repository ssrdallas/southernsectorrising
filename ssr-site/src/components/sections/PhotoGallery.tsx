'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import type { GalleryItem } from '@/data/galleryImages';
import styles from './PhotoGallery.module.css';

const GROUPS = ['all', 'kenya', 'rome', 'juneteenth', 'other'] as const;
const GROUP_LABELS: Record<string, string> = {
  all: 'All Photos',
  kenya: 'Kenya',
  rome: 'Rome, Italy',
  juneteenth: 'Juneteenth',
  other: 'Other',
};

interface Props {
  items: GalleryItem[];
}

export default function PhotoGallery({ items }: Props) {
  const [activeGroup, setActiveGroup] = useState<string>('all');
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filtered = activeGroup === 'all'
    ? items
    : items.filter((i) => i.group === activeGroup);

  const total = filtered.length;

  const go = useCallback((index: number) => {
    setCurrent(((index % total) + total) % total);
  }, [total]);

  const next = useCallback(() => go(current + 1), [current, go]);
  const prev = useCallback(() => go(current - 1), [current, go]);

  // Reset to 0 when group changes
  useEffect(() => {
    setCurrent(0);
  }, [activeGroup]);

  // Auto-advance
  useEffect(() => {
    if (paused || total === 0) return;
    timerRef.current = setTimeout(next, 5000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, next, total]);

  // Available groups based on items passed in
  const availableGroups = GROUPS.filter(
    (g) => g === 'all' || items.some((i) => i.group === g)
  );

  if (total === 0) return null;

  const item = filtered[current];

  return (
    <div
      className={styles.gallery}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Filter tabs */}
      {availableGroups.length > 2 && (
        <div className={styles.filters}>
          {availableGroups.map((g) => (
            <button
              key={g}
              className={`${styles.filterBtn} ${activeGroup === g ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveGroup(g)}
            >
              {GROUP_LABELS[g]}
            </button>
          ))}
        </div>
      )}

      {/* Slide */}
      <div className={styles.stage}>
        <div className={styles.slide}>
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 100vw, 90vw"
            className={styles.img}
            priority={current === 0}
          />
          <div className={styles.caption}>{item.alt}</div>
        </div>

        {/* Arrows */}
        <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={prev} aria-label="Previous photo">
          ‹
        </button>
        <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={next} aria-label="Next photo">
          ›
        </button>

        {/* Counter */}
        <div className={styles.counter}>{current + 1} / {total}</div>
      </div>

      {/* Dots — only show up to 20 to avoid overflow */}
      {total <= 20 && (
        <div className={styles.dots}>
          {filtered.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => go(i)}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
