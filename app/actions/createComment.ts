'use server';

import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function createComment(formData: FormData) {
   const user = await getCurrentUser();

   if (!user) {
      throw new Error('Unauthorized');
   }
   
   const content = formData.get('content') as string;
   const postId = formData.get('postId') as string;

   if (!content || !postId) return;

   await prisma.comment.create({
      data: {
         content: content,
         userId: user.id,
         postId: postId
      }
   })

}