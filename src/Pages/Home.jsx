import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Blog } from '@/components/BlogCard';
export default function Home() {
  // const [blogs, setBlogs] = useState([]);
  // const [page, setPage] = useState(1);
  // const [total, setTotal] = useState(1);

  // const fetch = async (p) => {
  //   const resp = await api.get(`/blogs/?page=${p}`);
  //   setBlogs(resp.data.results);
  //   setTotal(Math.ceil(resp.data.count/10));
  //   setPage(p);
  // };



  return (
    <div className="p-2">
      <Navbar />
      <div className="flex flex-col gap-4">
        <Blog />
      </div>
    </div>
  );
}