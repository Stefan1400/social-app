import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

import { cookies } from "next/headers";

export async function POST(req: Request) {
   
   const { email, password } = await req.json();
   
   try {
      if (!email || !password) {
         return NextResponse.json(
            { error: 'Invalid credentials' },
            { status: 400 }
         )
      }

      const user = await prisma.user.findUnique({
         where: { email }
      });

      if (!user) {
         return NextResponse.json(
            { error: 'Bad request' },
            { status: 400 }
         )
      }

      const passwordMatches = await bcrypt.compare(password, user.password);

      if (!passwordMatches) {
         return NextResponse.json(
            { error: 'Invalid credentials' },
            { status: 409 }
         )
      }

      const token = jwt.sign(
         { userId: user.id },
         process.env.JWT_SECRET!,
         { expiresIn: '7d' }
      );

      const cookieStore = await cookies();

      cookieStore.set('token', token, {
         httpOnly: true,
         secure: process.env.NODE_ENV === "production",
         sameSite: 'lax',
         path: '/'
      })

      return NextResponse.json({
         message: 'Account successfully signed in',
         loggedInUser: user,
         status: 200
      })

   } catch (err) {
      return NextResponse.json(
         { error: 'Something went wrong' },
         { status: 500 }
      )
   }
}