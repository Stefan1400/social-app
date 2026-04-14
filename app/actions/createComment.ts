'use server';

import { prisma } from "@/lib/prisma";

export async function createComment(formData: FormData) {
   const content = formData.get('content') as string;

   if (!content) return;

   await prisma.comment.create({
      data: {
         content: content,
         userId: 'cmnxhpdow0001p0wppdar35h9',
         postId: 'cmnv6y4ct0001wo2r41yy9p0s'
      }
   })
}