'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/admin/api/auth', { method: 'DELETE' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="text-xs text-gray-400 hover:text-red-400 border border-gray-700 hover:border-red-800 rounded-lg px-3 py-1.5 transition-colors duration-200"
    >
      ログアウト
    </button>
  );
}
