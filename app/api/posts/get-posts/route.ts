import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
   
   try {
      const fetchedPosts = await prisma.post.findMany({
         include: {
            comments: true
         }
      })

      if (fetchedPosts.length === 0) {
         return NextResponse.json(
            { error: 'posts not found' },
            { status: 404 }
         );
      };

      return NextResponse.json(
         { 
            message: 'fetched posts',
            posts: fetchedPosts
         },
      )
   } catch (err) {
      return NextResponse.json(
         { error: err },
         { status: 500 }
      )
   }
}