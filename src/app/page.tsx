import Image from 'next/image';
import Link from 'next/link';

// ─────────────────────────────────────────────
// 1. Hero
// ─────────────────────────────────────────────
function HeroSection() {
  return (
    // -mt-16 で layout の pt-16 を相殺し、固定ヘッダー背後までフルブリード
    <section className="relative -mt-16 min-h-screen flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200"
        alt="RAGCLUB カフェ店内"
        fill
        className="object-cover"
        priority
      />
      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* コンテンツ：ヘッダー高さ分だけ pt を確保 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-20">
        <p className="text-xs text-white/50 tracking-[0.3em] uppercase mb-6">
          Crafted with care, inspired by art.
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] tracking-tight">
          今日も、<span className="text-accent italic">感性</span>から
          <br />
          手づくりで仕込んで。
        </h1>
        <p className="mt-5 text-sm text-white/50 tracking-wider max-w-sm">
          Every cup is a canvas. Every visit, a new story.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// 2. Concept
// ─────────────────────────────────────────────
function ConceptSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* 左：写真 */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200"
              alt="コーヒーを注ぐバリスタ"
              fill
              className="object-cover"
            />
          </div>

          {/* 右：テキスト */}
          <div className="flex flex-col gap-6">
            <p className="text-[11px] font-semibold tracking-[0.25em] text-accent uppercase">
              The Concept
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-charcoal leading-relaxed">
              RAGCLUBのバリスタ・キュレーターが、<br />
              日常のひとときを少しだけ特別なものにします。
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              毎日でも通えるように、身近なものから仕入れ、自分の感性の持ち主に対して
              丁寧に仕込んでご提供します。私たちの感性を活かし、たくさんのパワーを
              想像しながら、新しい場所に出会うためのキャンバスです。
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-block border border-charcoal text-charcoal text-[11px] font-semibold tracking-[0.2em] uppercase px-7 py-3 hover:bg-charcoal hover:text-white transition-colors duration-300"
              >
                RAGCLUB について
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// 3. Menu Highlights
// ─────────────────────────────────────────────
function MenuHighlightsSection() {
  return (
    <section className="bg-forest py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold tracking-[0.3em] text-white/40 uppercase mb-4">
            Seasonal Offerings
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Menu Highlights
          </h2>
          <p className="mt-3 text-white/60 text-sm tracking-wider">
            素材の味を、アートのように仕上げ。
          </p>
          <p className="mt-1 text-white/30 text-[11px] tracking-widest">
            Signature dishes and seasonal blends, crafted with precision.
          </p>
        </div>

        {/* メイン写真 */}
        <div className="relative aspect-[16/9] max-w-3xl mx-auto overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800"
            alt="メニュー写真"
            fill
            className="object-cover"
          />
        </div>

        {/* 説明 + リンク */}
        <div className="text-center mt-10 max-w-xl mx-auto">
          <p className="text-white/60 text-sm leading-relaxed mb-7">
            店家族のスパイスを使用したバリスタ、トップクオリティのスペシャルティコーヒーまで、
            すべては、あなたの感性を刺激するために。
          </p>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-white text-sm font-medium tracking-widest group"
          >
            <span className="border-b border-white/40 pb-0.5 group-hover:border-white transition-colors duration-200">
              さらに詳しく
            </span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// 4. Gallery
// ─────────────────────────────────────────────
const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800',
    alt: 'Chromatic Reverie',
    title: 'Harajuku / Jingu',
    tags: ['CAFE', 'GALLERY', 'TOKYO'],
    description:
      'アクリル絵の具で、カラフルな感性が更新されたイノベーションとし、独自の手法でひとつひとつ丁寧に仕上げた作品。',
    aspect: 'aspect-[4/5]',
  },
  {
    src: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=800',
    alt: 'Structure & Silence',
    title: 'Shibuya / Urban',
    tags: ['EXHIBITION', 'ART CORNER'],
    description:
      '渋谷の街に根ざしながら、二ユルに来はなく、最新の「アート感性」などとして、ライことでアクティブに引き合います。',
    aspect: 'aspect-[4/4]',
  },
];

function GallerySection() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* ヘッダー */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Gallery</h2>
          <p className="mt-2 text-sm text-charcoal/70">その場所ならではの美を求めて。</p>
          <p className="mt-1 text-[11px] text-charcoal/40 tracking-widest">
            Every piece finds its home in the art of daily ritual, with or without you.
          </p>
        </div>

        {/* 2カラムグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {galleryItems.map((item) => (
            <div key={item.alt} className="group">
              <div className={`relative ${item.aspect} overflow-hidden bg-gray-200`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-base font-bold text-charcoal">{item.title}</h3>
                <p className="text-xs text-charcoal/60 leading-relaxed">{item.description}</p>
                <div className="flex gap-2 flex-wrap pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold tracking-widest text-charcoal/50 border border-charcoal/20 px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/gallery"
            className="inline-block border border-charcoal text-charcoal text-[11px] font-semibold tracking-[0.2em] uppercase px-10 py-3 hover:bg-charcoal hover:text-white transition-colors duration-300"
          >
            すべての作品を見る
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// 5. News
// ─────────────────────────────────────────────
const newsItems = [
  {
    src: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600',
    label: 'EVENTS · OCT 12, 2023',
    title: '朝活に、才内有志による自画像「#23 Vision」を開催します。',
  },
  {
    src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600',
    label: 'MENU · OCT 20, 2023',
    title: '冬の新作「エスプレッソ・トリック w/ 山梨」が本日よりスタート。',
  },
  {
    src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600',
    label: 'EVENT · OCT 28, 2023',
    title: 'スペースレンタX 平均の台付回数を迎えいたしました。',
  },
];

function NewsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* ヘッダー */}
        <div className="flex items-baseline justify-between mb-1">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">News</h2>
          <Link
            href="/news"
            className="text-[11px] font-semibold tracking-[0.2em] text-charcoal/50 hover:text-accent transition-colors duration-200"
          >
            VIEW ALL →
          </Link>
        </div>
        <p className="text-[11px] text-charcoal/35 tracking-[0.25em] uppercase mb-12">
          Latest Updates from RAGCLUB
        </p>

        {/* 3カラムカードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {newsItems.map((item) => (
            <article key={item.title} className="group cursor-pointer">
              {/* サムネイル */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>
              {/* 本文 */}
              <p className="text-[10px] font-semibold tracking-[0.2em] text-accent uppercase mb-2">
                {item.label}
              </p>
              <h3 className="text-sm font-medium text-charcoal leading-relaxed mb-3">
                {item.title}
              </h3>
              <span className="text-[11px] font-semibold tracking-widest text-charcoal/50 group-hover:text-accent transition-colors duration-200">
                Read More →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ConceptSection />
      <MenuHighlightsSection />
      <GallerySection />
      <NewsSection />
    </>
  );
}
