import type { Metadata } from 'next';
import ContactForm from './_components/ContactForm';

export const metadata: Metadata = {
  title: 'CONTACT | RAGCLUB CAFE',
  description:
    'Cafe RAGCLUBへのお問い合わせはこちら。カフェ・スペースレンタル・展示についてお気軽にご連絡ください。',
};

// ─── Page header ──────────────────────────────
function PageHeader() {
  return (
    <div className="text-center mb-14">
      <h1 className="font-serif text-6xl sm:text-7xl font-bold text-charcoal tracking-widest mb-4">
        CONTACT
      </h1>
      <p className="text-sm text-gray-400 mb-6">
        お問い合わせ内容をご入力ください。
      </p>
      {/* 短い横線 */}
      <div className="w-10 h-px bg-charcoal/20 mx-auto" />
    </div>
  );
}

// ─── Page ─────────────────────────────────────
export default function ContactPage() {
  return (
    <section className="bg-cream min-h-screen py-16 lg:py-20">
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <PageHeader />
        <ContactForm />
      </div>
    </section>
  );
}
