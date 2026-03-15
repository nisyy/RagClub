import type { Metadata } from 'next';
import GalleryClient from './_components/GalleryClient';
import { getGalleryItems } from '@/lib/notion';
import { DEMO_GALLERY } from '@/lib/demoData';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'GALLERY | RAGCLUB CAFE',
  description:
    'Cafe RAGCLUBで現在展示中のユニークな作品をご覧ください。地元のインディペンデント・アーティストを支援しています。',
};

export default async function GalleryPage() {
  const notionItems = await getGalleryItems();
  const items = notionItems.length > 0 ? notionItems : DEMO_GALLERY;
  return <GalleryClient items={items} />;
}
