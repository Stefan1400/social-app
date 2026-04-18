import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
   
   const { title, content } = await req.json();
   
   const user = await getCurrentUser();

   if (!user) {
      return NextResponse.json(
         { error: "Unauthorized" }, 
         { status: 401 }
      );
   }

   try {

      const createdPost = await prisma.post.create({
         data: {
            title,
            content,
            userId: user.id
         }
      })

      return NextResponse.json({ createdPost })
   } catch (err) {
      return NextResponse.json(
         { error: 'Failed to create post' },
         { status: 500 }
      )
   }
}