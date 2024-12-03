import React, { useState } from "react";

import ForumPost from "./forum-post";
import { forumData } from "./forumData";
import ForumFilters from "./forum-filter";
import PostCreationModal from "./post-creation-modal";


const Forums = () => {
  const [selectedFilter, setSelectedFilter] = useState("Trending Topics");
  const [posts, setPosts] = useState(forumData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addPost = (newPost) => setPosts([newPost, ...posts]);

  const filteredPosts = posts.filter(
    (post) =>
      selectedFilter === "Trending Topics" || post.category === selectedFilter
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Forum</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Create Post
        </button>
      </div>
      <ForumFilters
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <div>
        {filteredPosts.map((post) => (
          <ForumPost key={post.id} post={post} />
        ))}
      </div>
      <PostCreationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addPost={addPost}
      />
    </div>
  );
};

export default Forums;


