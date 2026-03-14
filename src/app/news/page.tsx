import type { Metadata } from 'next';
import NewsListClient from './_components/NewsListClient';

export const metadata: Metadata = {
  title: 'NEWS | RAGCLUB CAFE',
  description: 'Cafe RAGCLUBの最新ニュース・イベント情報をお届けします。',
};

// ─── ページヘッダー ────────────────────────────
function PageHeader() {
  return (
    <section className="bg-cream pt-14 pb-8 lg:pt-16 lg:pb-10">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold text-charcoal leading-none tracking-tight">
          NEWS
        </h1>
        {/* 赤い横線（短め・左寄せ） */}
        <div className="w-14 h-[2px] bg-accent mt-5" />
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────
export default function NewsPage() {
  return (
    <>
      <PageHeader />
      {/* useState を使うリスト+ページネーションはクライアントコンポーネントに委譲 */}
      <NewsListClient />
    </>
  );
}
