import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ログインページと認証APIはスキップ
  if (
    pathname === '/admin/login' ||
    pathname.startsWith('/admin/api/auth')
  ) {
    return NextResponse.next();
  }

  const session = request.cookies.get('admin_session');
  const expected = process.env.ADMIN_PASSWORD;

  if (!session || !expected || session.value !== expected) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
