'use client';

import { useRef, useEffect, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  /** スタガーアニメーション用の遅延（ms） */
  delay?: number;
  /** 下からのスライド量（px） */
  translateY?: number;
}

/**
 * Intersection Observer を使ったスクロールフェードインコンポーネント。
 * 画面内に入ると opacity + translateY アニメーションが発動する。
 */
export default function FadeIn({
  children,
  className = '',
  delay = 0,
  translateY = 28,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${translateY}px)`,
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
