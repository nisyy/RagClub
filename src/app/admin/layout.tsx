import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '管理画面 | RUG CLUB',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {children}
    </div>
  );
}
