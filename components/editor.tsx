"use client";

import { updatePost } from "@/lib/actions";
import { SelectPost } from "@/lib/schema";
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import { config } from "./puck.config";

type PostWithSite = SelectPost & { site: { subdomain: string | null, name: string } | null };



export default function Editor({ post }: { post: PostWithSite }) {
  console.log('post.content', post.content);
  const initialData = post.content ? JSON.parse(post.content as string) : {};

  const onSave = (data: any) => {
    // Handle saving the data
    post.content = JSON.stringify(data);
    post.published = true;
    updatePost(post);
  };

  return (
    <Puck config={config} data={initialData} onPublish={onSave} />
  );
}
