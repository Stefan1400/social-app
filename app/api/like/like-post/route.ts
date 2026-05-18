import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
   const body = await req.json();
   
   const { userId, postId } = body;

   try {

      if (!userId || !postId) {
         return NextResponse.json(
            { error: 'Bad Request' },
            { status: 400 }
         )
      };

      const likeExists = await prisma.like.findUnique({
         where: { 
            userId_postId: {
               userId,
               postId 
            }
         }
      })

      if (!likeExists) {
         const likeAdded = await prisma.like.create({
            data: { 
               userId, 
               postId
            }
         })

         return NextResponse.json({
            message: 'Successfully liked post',
            addedLike: likeAdded,
            status: 201
         })
      }

      if (likeExists) {
         const likeUpdated = await prisma.like.delete({
            where: { id: likeExists.id },
         })

         return NextResponse.json({
            message: 'Successfully updated like',
            updatedLike: likeUpdated,
            status: 200
         })
      }

   } catch (err) {
      return NextResponse.json(
         { error: err },
         { status: 500 }
      )
   }
}