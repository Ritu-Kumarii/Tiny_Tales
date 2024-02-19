import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostsFromLocalStorage } from "../utils/localStorage";
import Filters from "../components/Filters";
import NoPosts from "../components/NoPosts";
import BlogPostsList from "../components/BlogPostsList";

const AuthorPage = () => {
  const { author } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = getPostsFromLocalStorage();
    const filteredPosts = storedPosts.filter((post) => post.author === author);
    setPosts(filteredPosts);
  }, [author]);

  return (
    <div className="post-container">
      <Filters />
      {posts.length === 0 && <NoPosts content={`${author} has no posts yet.`} />}
      {posts.length > 0 && <BlogPostsList posts={posts} />}
    </div>
  );
};

export default AuthorPage;
