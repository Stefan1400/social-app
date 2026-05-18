import type { User } from "@/types/user";

export type PostContentProps = {
   title: string;
   content: string;
   user: User;
   createdAt: Date;
}

export default function PostContent({ content, title, user, createdAt }: PostContentProps) {
  return (
   <div>
      <div className="flex items-center gap-2">
         <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
         <p className="self-start text-sm">{user.username}</p>
      </div>
      <span className="text-xs text-gray-500">{createdAt.toLocaleDateString()}</span>
      <h3 className="text-xl font-medium">{title}</h3>
      <p>{content}</p>
   </div>
  )
}