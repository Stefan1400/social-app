import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";

export async function POST(req: Request) {
   const body = await req.json();
   
   const { postId } = body;

   try {

      if (!postId) {
         return NextResponse.json(
            { error: 'Bad Request' },
            { status: 400 }
         )
      };

      const user = await getCurrentUser();

      if (!user) {
         return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
         )
      }

      const likeExists = await prisma.like.findUnique({
         where: { 
            userId_postId: {
               userId: user.id,
               postId 
            }
         }
      })

      if (!likeExists) {
         const likeAdded = await prisma.like.create({
            data: { 
               userId: user.id, 
               postId
            }
         })

         const likesCount = await prisma.like.count({ where: { postId } });

         return NextResponse.json({
            message: 'Successfully liked post',
            addedLike: likeAdded,
            likesCount,
            status: 201
         })
      }

      if (likeExists) {
         const likeUpdated = await prisma.like.delete({
            where: { id: likeExists.id },
         })

         const likesCount = await prisma.like.count({ where: { postId } });

         return NextResponse.json({
            message: 'Successfully updated like',
            updatedLike: likeUpdated,
            likesCount,
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