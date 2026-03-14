import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MENU | RAGCLUB CAFE',
  description: 'RAGCLUBのメニュー。淹れたてコーヒー、職人技のパフェ、季節のスイーツ。',
};

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────
const coffeeItems = [
  {
    src: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=800',
    name: 'シグネチャー・ラテ',
    price: '¥606',
    desc: '濃厚なエスプレッソとスチームミルクの完璧なバランス、きめ細かな泡を楽しめます。',
  },
  {
    src: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800',
    name: 'シングルオリジン・ドリップ',
    price: '¥720',
    desc: '厳選された豆を丁寧にハンドドリップ、豆本来の複雑な風味を引き出します。',
  },
  {
    src: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=800',
    name: 'コールドブリュー',
    price: '¥556',
    desc: '18時間かけてじっくり抽出。雑味のない、なめらかで豊かな飲み味が特徴です。',
  },
];

const parfaitItems = [
  {
    src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800',
    name: 'ベリー・ブラッサム・パフェ',
    price: '¥1,320',
    desc: 'ワイルドベリー、マダガスカル産バニラビーンズクリーム、アーモンドクランブルを重ねて。',
  },
  {
    src: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=600',
    name: 'ダークカカオ & ゴールド',
    price: '¥1,540',
    desc: 'カカオ70%のダークチョコレートムース、シーソルトキャラメル、ローストヘーゼルナッツ。',
  },
];

const sweetsItems = [
  {
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600',
    name: 'バタークロワッサン',
    price: '¥480',
  },
  {
    src: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600',
    name: 'チョコチャンククッキー',
    price: '¥331',
  },
  {
    src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600',
    name: 'レモンポピーシード',
    price: '¥493',
  },
  {
    src: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=600',
    name: 'マカロンセット（3個）',
    price: '¥660',
  },
];

// ─────────────────────────────────────────────
// 1. ページヘッダー
// ─────────────────────────────────────────────
function PageHeader() {
  return (
    <section className="bg-cream py-16 lg:py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* セリフ体大タイトル */}
        <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl font-bold text-charcoal tracking-tight">
          MENU
        </h1>
        {/* アクセントライン */}
        <div className="w-14 h-px bg-accent mx-auto my-5" />
        <p className="text-sm text-gray-500 leading-relaxed max-w-sm mx-auto">
          淹れたてのコーヒー、職人技が光るパフェ、そして情熱を込めて手作りされた
          季節のスイーツをご用意しております。
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// 2. Coffee セクション
// ─────────────────────────────────────────────
function CoffeeSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* セクションヘッダー */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">Coffee</h2>
          <p className="text-[11px] font-semibold tracking-[0.3em] text-gray-400 uppercase mt-1.5">
            THE ART OF EXTRACTION
          </p>
        </div>

        {/* 3カラムグリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeItems.map((item) => (
            <article key={item.name}>
              {/* 正方形写真 */}
              <div className="relative aspect-square overflow-hidden mb-4">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              {/* 商品名 + 価格 */}
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-sm font-bold text-charcoal leading-snug">
                  {item.name}
                </h3>
                <span className="text-sm font-bold text-accent shrink-0 ml-3">
                  {item.price}
                </span>
              </div>
              {/* 説明文 */}
              <p className="text-xs text-gray-500 leading-[1.9]">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// 3. Parfaits セクション
// ─────────────────────────────────────────────
function ParfaitsSection() {
  return (
    <section className="bg-forest py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Parfaits</h2>
          <p className="text-[11px] font-semibold tracking-[0.3em] text-white/40 uppercase mt-2">
            SWEET SCULPTURES
          </p>
        </div>

        {/* 2カラムグリッド（中央寄せ） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {parfaitItems.map((item) => (
            <article key={item.name}>
              {/* 縦長写真 */}
              <div className="relative aspect-[3/4] overflow-hidden mb-5">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              {/* 商品名 */}
              <h3 className="text-base font-bold text-white leading-snug mb-2">
                {item.name}
              </h3>
              {/* 説明文 */}
              <p className="text-xs text-white/60 leading-[1.9] mb-3">{item.desc}</p>
              {/* 価格 */}
              <p className="text-sm font-bold text-accent">{item.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// 4. Sweets & Lunch セクション
// ─────────────────────────────────────────────
function SweetsLunchSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* セクションヘッダー */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal">
            Sweets &amp; Lunch
          </h2>
          <p className="text-[11px] font-semibold tracking-[0.3em] text-gray-400 uppercase mt-1.5">
            CRAFTED DAILY
          </p>
        </div>

        {/* 4カラムグリッド（スイーツ・小カード） */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {sweetsItems.map((item) => (
            <article key={item.name} className="group">
              <div className="relative aspect-square overflow-hidden mb-3">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>
              <h3 className="text-xs font-semibold text-charcoal leading-snug mb-1">
                {item.name}
              </h3>
              <p className="text-xs font-bold text-accent">{item.price}</p>
            </article>
          ))}
        </div>

        {/* ランチスペシャルカード（左右2分割） */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-100">
          {/* 左：大きな写真 */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=800"
              alt="職人のマフィンコンボ"
              fill
              className="object-cover"
            />
          </div>

          {/* 右：テキストコンテンツ */}
          <div className="flex items-center px-8 sm:px-12 lg:px-14 py-12 bg-white">
            <div>
              {/* バッジ */}
              <span className="inline-block text-[10px] font-bold tracking-[0.25em] text-charcoal/70 border border-charcoal/25 px-3 py-1 mb-5 uppercase">
                LUNCH SPECIAL
              </span>

              {/* タイトル */}
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal leading-snug mb-4">
                職人のマフィンコンボ
              </h3>

              {/* 説明文 */}
              <p className="text-sm text-gray-500 leading-[2] mb-8">
                特製トースト・イングリッシュマフィンに、お好みのトッピング、
                季節のグリーンサラダ、そしてホットコーヒーまたはコールドブリューを
                セットにしました。
              </p>

              {/* 価格 */}
              <p className="text-3xl md:text-4xl font-black text-charcoal mb-2">
                ¥2,050
              </p>
              <p className="text-[10px] font-semibold tracking-[0.2em] text-gray-400 uppercase">
                SET PRICE INCLUDES DRINK AND SALAD
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────
export default function MenuPage() {
  return (
    <>
      <PageHeader />
      <CoffeeSection />
      <ParfaitsSection />
      <SweetsLunchSection />
    </>
  );
}
