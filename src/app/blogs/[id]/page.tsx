import React from 'react'
import BlogPost from '@/components/blogpage/BlogPost'

type Props = {
  params: { id: string }
}

export const dynamic = 'force-dynamic' // 🚀 IMPORTANT FIX

export default function BlogPostPage({ params }: Props) {
  return (
    <div>
      <BlogPost id={params.id} />
    </div>
  )
}
