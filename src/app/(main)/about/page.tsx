import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import FadeIn from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'ABOUT',
  description: 'RUG CLUBのストーリーとコンセプト。日常と芸術表現の境界が溶け合う洗練された空間。',
};

// ─────────────────────────────────────────────
// 1. Hero
// ─────────────────────────────────────────────
function HeroSection() {
  return (
    // -mt-16 で layout の pt-16 を相殺 → 固定ヘッダーの背後までフルブリード
    <section className="relative -mt-16 h-[56vh] min-h-[360px] flex items-end">
      <Image
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200"
        alt="RUG CLUB カフェ店内"
        fill
        className="object-cover"
        priority
      />
      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />

      {/* テキストブロック：ヘッダー高さ分のパディングで文字が隠れないよう調整 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-12">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
          ABOUT{' '}
          <span className="text-accent">RUG CLUB</span>
        </h1>
        <p className="mt-4 text-[11px] font-semibold text-white/45 tracking-[0.45em] uppercase">
          Our Story &amp; Concept
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// 2. メインコンセプト
// ─────────────────────────────────────────────
function MainConceptSection() {
  return (
    <section className="bg-white pt-24 pb-0 lg:pt-32">
      {/* 中央テキスト */}
      <FadeIn>
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.3] mb-8">
            今日も、感性から
            <br />
            手づくりで仕込んで。
          </h2>
          <p className="text-sm text-gray-500 leading-[2] max-w-xl mx-auto">
            RUG CLUBは単なるカフェではありません。日常と芸術表現の境界が溶け合う、洗練された空間です。
            アートは静かなギャラリーの中だけに閉じ込められるべきではない、私たちはそう考えています。
          </p>
        </div>
      </FadeIn>

      {/* 横幅広めのコーヒー写真 */}
      <FadeIn delay={120}>
        <div className="max-w-5xl mx-auto px-6 lg:px-10 mt-16">
          <div className="relative aspect-[16/9] overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200"
              alt="コーヒーを注ぐバリスタ"
              fill
              className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

// ─────────────────────────────────────────────
// 3. 3カラム価値観セクション
// ─────────────────────────────────────────────
const values = [
  {
    title: 'Concept',
    body: 'すべてのテーブルが現代の美の集合点をつくるための特別な場所を組み合わせて仕上げています。',
  },
  {
    title: 'Vision',
    body: '場所の哲学は本来の定義からくれているように、新しいアートのコミュニティで、新たなアートが自然に巡り日を感じています。',
  },
  {
    title: 'Craft',
    body: '厳選された主主、環境知識、すべてのスペースにアートを感じるべてリー、細部にきっとどうの行き届いた作業ものを提供します。',
  },
];

function ValuesSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 120}>
              <div className="flex flex-col gap-4">
                <h3 className="text-base font-bold text-charcoal tracking-widest">
                  {v.title}
                </h3>
                {/* アクセントライン */}
                <div className="w-8 h-px bg-accent" />
                <p className="text-xs text-gray-500 leading-[2]">{v.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// 4. 左右2分割：アート写真(左) ＋ 深い緑テキスト(右)
// ─────────────────────────────────────────────
function SplitArtSection() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* 左：アート写真（縦長） */}
        <div className="relative min-h-[480px] md:min-h-[580px] lg:min-h-[640px] overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=1200"
            alt="ギャラリーアート作品"
            fill
            className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
          />
        </div>

        {/* 右：深い緑背景 ＋ 白テキスト */}
        <div className="bg-forest flex items-center px-8 sm:px-12 lg:px-16 py-20">
          <FadeIn>
            <div className="max-w-md">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-6">
                アートを、もっと身近に。
              </h2>
              <p className="text-sm text-white/65 leading-[2] mb-10">
                RUG CLUBのバリスタ・キュレーターが、日常のひとときを少しだけ特別なものにします。
                毎日でも通えるように、余計なものは入れず、豆の個性と空間の余白を丁寧に仕込んでお待ちいたします。
              </p>
              <Link
                href="/menu"
                className="text-[11px] font-bold tracking-[0.3em] text-white uppercase underline underline-offset-4 hover:text-white/60 transition-colors duration-200"
              >
                LEARN MORE
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// 5. 左右2分割逆配置：白テキスト(左) ＋ コーヒー写真(右)
// ─────────────────────────────────────────────
function SplitCoffeeSection() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* 左：白背景 ＋ 黒テキスト */}
        <div className="bg-white flex items-center px-8 sm:px-12 lg:px-16 py-20 order-2 md:order-1">
          <FadeIn>
            <div className="max-w-md">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal leading-snug mb-6">
                素材の味を、アートのように。
              </h2>
              <p className="text-sm text-gray-500 leading-[2] mb-10">
                私たちの場所は、ただコーヒーを飲む場所ではなく、新しい関係に出会うためのキャンバスです。
                五感と魂を呼び覚ます、豆達の体験を楽しんでください。
              </p>
              <Link
                href="/gallery"
                className="text-[11px] font-bold tracking-[0.3em] text-charcoal uppercase underline underline-offset-4 hover:text-accent transition-colors duration-200"
              >
                THE COLLECTION
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* 右：コーヒー写真 — モバイルでは先頭に */}
        <div className="relative min-h-[480px] md:min-h-[580px] lg:min-h-[640px] order-1 md:order-2 overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=800"
            alt="コーヒードリンク"
            fill
            className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// 6. オーナーコメント
// ─────────────────────────────────────────────
function OwnerCommentSection() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <FadeIn>
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          {/* 引用テキスト */}
          <blockquote className="text-xl md:text-2xl font-bold italic text-charcoal leading-[1.9] mb-14">
            「コーヒーを飲む環境は、カフェインそのものと同じくらい
            <span className="text-accent">刺激的</span>
            であるべきだというシンプルな考えからRUG CLUBを設立しました。
            <span className="text-accent">五感と魂</span>
            を呼び覚ます場所でありたいのです。」
          </blockquote>

          {/* オーナー情報 */}
          <div className="flex items-center justify-center gap-4">
            {/* 円形アバター */}
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-accent/25 shrink-0">
              <Image
                src="https://placehold.co/100x100/d8c8b4/888888?text=S"
                alt="坂本 玲"
                fill
                className="object-cover"
              />
            </div>
            {/* テキスト */}
            <div className="text-left">
              <p className="text-sm font-bold text-charcoal tracking-widest">坂本 玲</p>
              <p className="text-[10px] font-semibold tracking-[0.25em] text-charcoal/40 uppercase mt-0.5">
                Founder &amp; Creative Director
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <MainConceptSection />
      <ValuesSection />
      <SplitArtSection />
      <SplitCoffeeSection />
      <OwnerCommentSection />
    </>
  );
}
