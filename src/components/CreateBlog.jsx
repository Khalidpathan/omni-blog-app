import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

// Simulated auth context (replace with your auth logic)


// Simulated blog store (shared state for testing)
const blogStore = {
  posts: [],
  addPost: (post) => {
    blogStore.posts.push(post);
  },
};

const CreateBlog = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  // Redirect to login if not authenticated


  // Handle form submission
  const onSubmit = (data) => {
    const newPost = {
      id: `post-${blogStore.posts.length + 1}`,
      title: data.title,
      content: data.content,
      created_at: new Date().toISOString(),
    };
    blogStore.addPost(newPost); // Store in local state
    navigate("/"); // Redirect to Blog page
  };

  return (
    <div className="container mx-auto py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Create New Blog</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter blog title" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter blog content" rows={10} {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-2">
                <Button type="submit">Create Blog</Button>
                <Button variant="outline" onClick={() => navigate("/")}>
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateBlog;