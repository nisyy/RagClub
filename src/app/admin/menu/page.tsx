'use client';

import { useState, useEffect, useCallback } from 'react';
import AdminHeader from '../_components/AdminHeader';
import ImageUploadField from '../_components/ImageUploadField';
import type { AdminMenuItem } from '@/types/admin';

const CATEGORIES = ['Coffee', 'Parfait', 'Sweets', 'Lunch'] as const;
const EMPTY: Omit<AdminMenuItem, 'id'> = {
  name: '',
  category: 'Coffee',
  price: '',
  description: '',
  imageUrl: '',
};

export default function AdminMenuPage() {
  const [items, setItems] = useState<AdminMenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<AdminMenuItem | null>(null);
  const [form, setForm] = useState<Omit<AdminMenuItem, 'id'>>(EMPTY);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState('');

  const fetchItems = useCallback(async () => {
    setLoading(true);
    const res = await fetch('/admin/api/menu');
    if (res.ok) setItems(await res.json());
    setLoading(false);
  }, []);

  useEffect(() => { fetchItems(); }, [fetchItems]);

  function openNew() {
    setEditing(null);
    setForm(EMPTY);
    setSaveError('');
    setModalOpen(true);
  }

  function openEdit(item: AdminMenuItem) {
    setEditing(item);
    setForm({ name: item.name, category: item.category, price: item.price, description: item.description, imageUrl: item.imageUrl });
    setSaveError('');
    setModalOpen(true);
  }

  async function handleSave() {
    setSaving(true);
    setSaveError('');
    const method = editing ? 'PUT' : 'POST';
    const body = editing ? { ...form, id: editing.id } : form;
    const res = await fetch('/admin/api/menu', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      setModalOpen(false);
      fetchItems();
    } else {
      const data = await res.json().catch(() => ({}));
      setSaveError(data.error ?? '保存に失敗しました');
    }
    setSaving(false);
  }

  async function handleDelete(id: string) {
    setDeleteId(id);
    setDeleteError('');
    const res = await fetch(`/admin/api/menu?id=${id}`, { method: 'DELETE' });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setDeleteError(data.error ?? '削除に失敗しました');
    } else {
      fetchItems();
    }
    setDeleteId(null);
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <AdminHeader />

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* ページヘッダー */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold text-white">メニュー管理</h2>
            <p className="text-xs text-gray-500 mt-1">{items.length} 件</p>
          </div>
          <button
            onClick={openNew}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            ＋ 新規追加
          </button>
        </div>

        {/* 削除エラー */}
        {deleteError && (
          <div className="mb-5 flex items-start gap-3 bg-red-950/60 border border-red-800 text-red-300 text-xs px-4 py-3 rounded-lg">
            <span className="text-red-400 font-bold shrink-0">⚠</span>
            <span className="break-all">{deleteError}</span>
            <button onClick={() => setDeleteError('')} className="ml-auto text-red-500 hover:text-red-300 shrink-0">✕</button>
          </div>
        )}

        {/* テーブル */}
        {loading ? (
          <div className="text-center py-20 text-gray-500 text-sm">読み込み中...</div>
        ) : (
          <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left px-5 py-3 text-xs text-gray-500 font-semibold tracking-wide">商品名</th>
                  <th className="text-left px-5 py-3 text-xs text-gray-500 font-semibold tracking-wide hidden sm:table-cell">カテゴリ</th>
                  <th className="text-left px-5 py-3 text-xs text-gray-500 font-semibold tracking-wide hidden md:table-cell">価格</th>
                  <th className="text-left px-5 py-3 text-xs text-gray-500 font-semibold tracking-wide hidden lg:table-cell">説明</th>
                  <th className="px-5 py-3 text-xs text-gray-500 font-semibold tracking-wide w-24">操作</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr key={item.id} className={`${i < items.length - 1 ? 'border-b border-gray-800/60' : ''} hover:bg-gray-800/40 transition-colors`}>
                    <td className="px-5 py-3 text-white font-medium">{item.name}</td>
                    <td className="px-5 py-3 text-gray-400 hidden sm:table-cell">
                      <CategoryBadge cat={item.category} />
                    </td>
                    <td className="px-5 py-3 text-gray-400 hidden md:table-cell">{item.price}</td>
                    <td className="px-5 py-3 text-gray-500 hidden lg:table-cell max-w-xs truncate">{item.description}</td>
                    <td className="px-5 py-3">
                      <div className="flex gap-2">
                        <button onClick={() => openEdit(item)} className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">編集</button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          disabled={deleteId === item.id}
                          className="text-xs text-red-500 hover:text-red-400 disabled:opacity-50 transition-colors"
                        >
                          {deleteId === item.id ? '削除中' : '削除'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {items.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center py-12 text-gray-600 text-sm">データがありません</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* モーダル */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4" onClick={() => setModalOpen(false)}>
          <div className="bg-gray-900 rounded-xl border border-gray-700 w-full max-w-lg p-7 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-bold text-white mb-6">
              {editing ? 'メニューを編集' : 'メニューを追加'}
            </h3>

            <div className="space-y-4">
              {/* 商品名 */}
              <Field label="商品名 *">
                <input
                  className={inputCls}
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="シグネチャー・ラテ"
                />
              </Field>

              {/* カテゴリ + 価格 */}
              <div className="grid grid-cols-2 gap-4">
                <Field label="カテゴリ">
                  <select
                    className={inputCls}
                    value={form.category}
                    onChange={(e) => setForm((f) => ({ ...f, category: e.target.value as AdminMenuItem['category'] }))}
                  >
                    {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </Field>
                <Field label="価格">
                  <input
                    className={inputCls}
                    value={form.price}
                    onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
                    placeholder="¥600"
                  />
                </Field>
              </div>

              {/* 説明 */}
              <Field label="説明">
                <textarea
                  className={`${inputCls} resize-none`}
                  rows={3}
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  placeholder="商品の説明文"
                />
              </Field>

              {/* 画像 */}
              <ImageUploadField
                label="画像"
                value={form.imageUrl}
                onChange={(url) => setForm((f) => ({ ...f, imageUrl: url }))}
                folder="menu"
                previewSize="sm"
              />
            </div>

            {/* 保存エラー */}
            {saveError && (
              <div className="mt-5 flex items-start gap-2 bg-red-950/60 border border-red-800 text-red-300 text-xs px-4 py-3 rounded-lg">
                <span className="text-red-400 font-bold shrink-0">⚠</span>
                <span className="break-all">{saveError}</span>
              </div>
            )}

            {/* ボタン */}
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setModalOpen(false)} className="text-sm text-gray-400 hover:text-white px-4 py-2 transition-colors">
                キャンセル
              </button>
              <button
                onClick={handleSave}
                disabled={saving || !form.name}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors"
              >
                {saving ? '保存中...' : '保存'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CategoryBadge({ cat }: { cat: string }) {
  const colors: Record<string, string> = {
    Coffee: 'bg-amber-900/40 text-amber-400',
    Parfait: 'bg-pink-900/40 text-pink-400',
    Sweets: 'bg-purple-900/40 text-purple-400',
    Lunch: 'bg-green-900/40 text-green-400',
  };
  return (
    <span className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${colors[cat] ?? 'bg-gray-800 text-gray-400'}`}>
      {cat}
    </span>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs text-gray-400 mb-1.5 tracking-wide">{label}</label>
      {children}
    </div>
  );
}

const inputCls = 'w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition';
