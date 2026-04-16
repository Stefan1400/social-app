import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

import { cookies } from "next/headers";

export async function POST(req: Request) {
   
   const { username, email, password } = await req.json();
   
   try {
      if (!username || !email || !password) {
         return NextResponse.json(
            { error: 'Invalid credentials' },
            { status: 400 }
         )
      }

      const user = await prisma.user.findUnique({
         where: { email }
      });

      if (user) {
         return NextResponse.json(
            { error: 'Bad request' },
            { status: 400 }
         )
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const createdUser = await prisma.user.create({
         data: {
            username, 
            email,
            password: hashedPassword,
         }
      })

      if (!createdUser) {
         return NextResponse.json(
            { error: 'Problem with creating an account' },
            { status: 409 }
         )
      }

      const token = jwt.sign(
         { userId: createdUser.id },
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
         message: 'Account successfully created',
         createdUser: createdUser,
         status: 201
      })

   } catch (err) {
      return NextResponse.json(
         { error: 'Something went wrong' },
         { status: 500 }
      )
   }
}