import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Simulated auth context (replace with real logic as needed)

// Dummy blog data (normally fetched from an API or global state)
const blogData = {
  "post-1": {
    id: "post-1",
    title: "Getting Started with shadcn/ui Components",
    content:
      "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects...",
    author: "Sarah Chen",
    published: "1 Jan 2024",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  "post-2": {
    id: "post-2",
    title: "Building Accessible Web Applications",
    content: "Explore how to create inclusive web experiences...",
    author: "Marcus Rodriguez",
    published: "1 Jan 2024",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
};

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogData[id];

  if (!post) {
    return <div className="text-center py-10">Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button
        variant="ghost"
        className="mb-6 flex items-center gap-2"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Button>

      <img
        src={post.image}
        alt={post.title}
        className="mb-6 w-full max-h-[400px] object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-muted-foreground mb-6">
        By {post.author} • {post.published}
      </p>

      <div className="prose max-w-none">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
