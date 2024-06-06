// // default
import { NextResponse } from 'next/server';
// // internal
import { auth } from '@/auth';

// export default auth(req => {
//   const reqUrl = new URL(req.url);
//   if (!req.auth && reqUrl?.pathname !== '/login') {
//     return NextResponse.redirect(
//       new URL(
//         `/login?callbackUrl=${encodeURIComponent(reqUrl?.pathname)}`,
//         req.url,
//       ),
//     );
//   }
// });

export default auth(req => {
  const reqUrl = new URL(req.url);
  if (!req.auth && reqUrl?.pathname !== '/login') {
    return NextResponse.redirect(
      new URL(
        `/login?callbackUrl=${encodeURIComponent(reqUrl?.pathname)}`,
        req.url,
      ),
    );
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
