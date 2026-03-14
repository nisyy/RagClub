'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { newsItems } from '../_data';

const ITEMS_PER_PAGE = 5;
const TOTAL_PAGES = 3; // 見た目上のページ数（UIデモ）

// ─── 矢印アイコン ──────────────────────────────
function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

// ─── ニュースリスト ────────────────────────────
export default function NewsListClient() {
  const [currentPage, setCurrentPage] = useState(1);

  // ページに応じてアイテムをスライス（page 1 = items 1–5）
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems = newsItems.slice(start, start + ITEMS_PER_PAGE);

  return (
    <>
      {/* ── ニュースリスト ── */}
      <section className="bg-cream pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          {pageItems.length > 0 ? (
            <ul>
              {pageItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/news/${item.id}`}
                    className="flex items-center gap-5 py-7 group"
                  >
                    {/* サムネイル */}
                    <div className="relative w-20 h-20 shrink-0 overflow-hidden">
                      <Image
                        src={item.thumbSrc}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* 日付 + タイトル */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-semibold text-accent tracking-wider mb-1.5">
                        {item.date}
                      </p>
                      <h2 className="text-base font-semibold text-charcoal leading-snug group-hover:text-accent transition-colors duration-200">
                        {item.title}
                      </h2>
                    </div>

                    {/* 矢印 */}
                    <ChevronRight className="text-accent/60 shrink-0 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200" />
                  </Link>

                  {/* ボーダーライン */}
                  <div className="h-px bg-charcoal/10" />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-400 text-center py-20">
              このページには記事がありません。
            </p>
          )}
        </div>
      </section>

      {/* ── ページネーション ── */}
      <section className="bg-cream pb-20 lg:pb-28">
        <div className="flex items-center justify-center gap-2">
          {/* ページ番号ボタン */}
          {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              aria-label={`${page}ページ目`}
              aria-current={currentPage === page ? 'page' : undefined}
              className={`w-10 h-10 rounded-full text-sm font-semibold transition-colors duration-200 ${
                currentPage === page
                  ? 'bg-charcoal text-white'
                  : 'bg-white text-charcoal border border-charcoal/20 hover:border-charcoal/50'
              }`}
            >
              {page}
            </button>
          ))}

          {/* 次へボタン */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, TOTAL_PAGES))}
            aria-label="次のページ"
            className="w-10 h-10 rounded-full bg-white text-charcoal border border-charcoal/20 hover:border-charcoal/50 text-sm font-semibold flex items-center justify-center transition-colors duration-200"
          >
            <ChevronRight />
          </button>
        </div>
      </section>
    </>
  );
}
