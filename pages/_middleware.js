import { verify } from "jsonwebtoken";
import { NextResponse } from "next/server";
import isObjEmpty from '../helpers/isObjEmpty';
import Cookies from 'js-cookie'
import ProtectedLinks from "../helpers/ProtectedLinks";

export function middleware(req) {

  const secret = process.env.SECRET;
  const url = req.nextUrl.clone()
  const cookies = req.cookies

  if (url.pathname === '/login') {
    if (!isObjEmpty(cookies) && cookies !== null && cookies !== undefined) {
      const { user } = cookies;
      const userObject = JSON.parse(user);
      if (typeof (userObject) === 'object') {
        try {
          verify(userObject.token, secret);
          return NextResponse.redirect(new URL('/dashboard', url.origin))
        } catch (e) {
          Cookies.remove('user');
          return NextResponse.next();
        }
      }
    }
  }

  if (ProtectedLinks().find(el => url.pathname.includes(el))) {
    if (!isObjEmpty(cookies) && cookies !== null && cookies !== undefined) {
      const { user } = cookies;
      const userObject = JSON.parse(user);
      if (typeof (userObject) === 'object') {
        if (userObject.token === undefined) {
          return NextResponse.redirect(new URL('/login', url.origin))
        }
        try {
          verify(userObject.token, secret);
          return NextResponse.next()
        } catch (e) {
          Cookies.remove('user');
          return NextResponse.redirect(new URL('/login', url.origin))
        }
      } else {
        console.log('NO EJECUTADO')
      }
    }
    return NextResponse.redirect(new URL('/login', url.origin))
  } else {
    return NextResponse.next()
  }
}