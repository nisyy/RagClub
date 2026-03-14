import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { newsItems } from '../_data';

// ─── Static Params ────────────────────────────
export function generateStaticParams() {
  return newsItems.map(({ id }) => ({ id: String(id) }));
}

// ─── Dynamic Metadata ─────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = newsItems.find((n) => n.id === Number(id));
  if (!item) return { title: 'NEWS | RAGCLUB CAFE' };
  return {
    title: `${item.shortTitle} | RAGCLUB CAFE`,
    description: item.body[0]?.slice(0, 80),
  };
}

// ─── Page ─────────────────────────────────────
export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = newsItems.find((n) => n.id === Number(id));

  if (!item) notFound();

  return (
    <section className="bg-cream min-h-screen py-14 lg:py-16">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">

        {/* ← BACK TO LIST */}
        <Link
          href="/news"
          className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.25em] text-accent uppercase mb-14 hover:opacity-70 transition-opacity duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to List
        </Link>

        {/* カテゴリ + 日付ラベル */}
        <p className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase mb-3">
          {item.category} — {item.date}
        </p>

        {/* タイトル */}
        <h1 className="text-3xl md:text-4xl font-bold text-charcoal leading-snug mb-8">
          {item.shortTitle}
        </h1>

        {/* ヒーロー画像 */}
        <div className="relative aspect-[16/10] overflow-hidden mb-10">
          <Image
            src={item.heroSrc}
            alt={item.shortTitle}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 本文段落 */}
        <div className="space-y-6">
          {item.body.map((para, i) => (
            <p
              key={i}
              className="text-sm text-charcoal leading-[2] tracking-wide"
            >
              {para}
            </p>
          ))}
        </div>

        {/* ALL NEWS LIST → */}
        <div className="mt-20 pt-10 border-t border-charcoal/10">
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.25em] text-accent uppercase hover:opacity-70 transition-opacity duration-200"
          >
            All News List
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
