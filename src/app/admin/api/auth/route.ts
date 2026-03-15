import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAdminAuth } from '@/lib/firebaseAdmin';

// POST: ログイン
export async function POST(request: NextRequest) {
  const { password } = await request.json();
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected || password !== expected) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  // Firebase Custom Token を生成（管理者共通の uid で識別）
  let firebaseToken: string | null = null;
  try {
    const adminAuth = getAdminAuth();
    if (adminAuth) {
      firebaseToken = await adminAuth.createCustomToken('ragclub-admin');
    } else {
      console.warn('[auth] Firebase Admin が初期化されていないため Custom Token をスキップ');
    }
  } catch (e) {
    console.error('[auth] Firebase custom token 生成失敗:', e);
    // 生成失敗でもセッションログインは通す（画像アップロードのみ影響）
  }

  const res = NextResponse.json({ ok: true, firebaseToken });
  res.cookies.set('admin_session', expected, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7日
  });

  return res;
}

// DELETE: ログアウト
export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete('admin_session');
  return res;
}
