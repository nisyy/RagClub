import type { Metadata } from 'next';
import GalleryClient from './_components/GalleryClient';

export const metadata: Metadata = {
  title: 'GALLERY | RAGCLUB CAFE',
  description:
    'Cafe RAGCLUBで現在展示中のユニークな作品をご覧ください。地元のインディペンデント・アーティストを支援しています。',
};

export default function GalleryPage() {
  return <GalleryClient />;
}
