import { NextResponse } from "next/server";
import ProtectedLinks from "../helpers/ProtectedLinks";
import { jwtVerify } from 'jose'

export const middleware = async (req) => {

  const secret = process.env.SECRET;
  const url = req.nextUrl.clone()
  const { cookies } = req
  const { sessionJWT } = cookies;

  if (url.pathname === '/login') {
    try {
      await jwtVerify(sessionJWT, new TextEncoder().encode(secret));
      return NextResponse.redirect(new URL('/dashboard', url.origin))
    } catch (e) {
      if (e.message === 'invalid token') {
        return NextResponse.redirect(new URL('/logout', url.origin))
      }
    }
  }

  if (ProtectedLinks().find(el => url.pathname.includes(el))) {
    try {
      const { sessionJWT } = cookies;
      if (sessionJWT === undefined) {
        return NextResponse.redirect(new URL('/login', url.origin))
      }
      await jwtVerify(sessionJWT, new TextEncoder().encode(secret));
    } catch (e) {
      if (e.message !== 'invalid token') {
        return NextResponse.redirect(new URL('/logout', url.origin))
      }
    }
  }
  return NextResponse.next()
}