// /* eslint-disable react/prop-types */
// import React, { useState } from "react";

// const BlogCard = ({ post }) => {
//   const [showFullText, setShowFullText] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [newComment, setNewComment] = useState("");
//   const [comments, setComments] = useState(post.comments);

//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       setComments([...comments, newComment.trim()]);
//       setNewComment("");
//     }
//   };

//   return (
//     <div className="w-full bg-customGray rounded-lg shadow-md mb-8 p-4 flex flex-col space-y-4 relative overflow-hidden">
//       {/* Header Section */}
//       <div className="flex items-center space-x-4">
//         <img
//           src={post.avatar}
//           alt="Avatar"
//           className="w-12 h-12 rounded-full"
//         />
//         <div>
//           <p className="text-custom_blue font-semibold">{post.username}</p>
//           <p className="text-custom_grey text-sm">{post.date}</p>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="text-custom_blue_sec">
//         <p>
//           {showFullText ? post.text : `${post.text.substring(0, 100)}...`}
//           {post.text.length > 100 && (
//             <button
//               onClick={() => setShowFullText(!showFullText)}
//               className="text-custom_orange ml-2 underline"
//             >
//               {showFullText ? "Show Less" : "Read More"}
//             </button>
//           )}
//         </p>
//       </div>

//       {/* Media Section */}
//       {post.media && (
//         <div className="w-full h-40 bg-gray-300 rounded-lg overflow-hidden">
//           {post.media.type === "image" ? (
//             <img
//               src={post.media.url}
//               alt="Post Media"
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <video
//               src={post.media.url}
//               controls
//               className="w-full h-full object-cover"
//             />
//           )}
//         </div>
//       )}

//       {/* Interaction Section */}
//       <div className="flex justify-between items-center text-custom_blue_sec">
//         <button
//           onClick={post.onLike}
//           className="flex items-center space-x-2 hover:text-custom_orange"
//         >
//           <span>👍</span>
//           <span>{post.likes} Likes</span>
//         </button>
//         <button
//           onClick={() => setShowComments(!showComments)}
//           className="hover:text-custom_orange"
//         >
//           {showComments ? "Hide Comments" : "View Comments"}
//         </button>
//       </div>

//       {/* Comments Section */}
//       {showComments && (
//         <div className="mt-4 max-h-48 overflow-y-auto bg-gray-100 p-2 rounded-lg">
//           {comments.map((comment, idx) => (
//             <p key={idx} className="text-custom_grey text-sm mb-2">
//               {comment}
//             </p>
//           ))}
//           <div className="flex items-center mt-2">
//             <input
//               type="text"
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               placeholder="Write a comment..."
//               className="flex-grow px-2 py-1 border border-gray-300 rounded-lg"
//             />
//             <button
//               onClick={handleAddComment}
//               className="ml-2 bg-custom_blue text-white px-4 py-1 rounded-lg hover:bg-custom_orange"
//             >
//               Comment
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Dummy Data
// const posts = [
//   {
//     avatar: "https://via.placeholder.com/150",
//     username: "John Doe",
//     date: "Dec 3, 2024",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.",
//     media: { type: "image", url: "https://via.placeholder.com/400x200" },
//     likes: 12,
//     comments: ["Great post!", "Very insightful!", "Loved it!"],
//   },
//   {
//     avatar: "https://via.placeholder.com/150",
//     username: "Jane Smith",
//     date: "Dec 2, 2024",
//     text: "Another great day to learn something new! Here's what I found.",
//     media: { type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
//     likes: 8,
//     comments: ["Wow, amazing!", "Thanks for sharing!"],
//   },
// ];

// const BlogFeed = () => {
//   return (
//     <div className="w-full h-screen overflow-y-scroll bg-customGray">
//       {posts.map((post, idx) => (
//         <BlogCard key={idx} post={post} />
//       ))}
//     </div>
//   );
// };

// export default BlogFeed;



/* eslint-disable react/prop-types */
// import React, { useState } from "react";

// const BlogCard = ({ post }) => {
//   const [showFullText, setShowFullText] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [newComment, setNewComment] = useState("");
//   const [comments, setComments] = useState(post.comments);
//   const [likes, setLikes] = useState(post.likes);
//   const [isLiked, setIsLiked] = useState(false);

//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       const newCommentObject = {
//         avatar: "https://via.placeholder.com/40", // Placeholder avatar
//         name: "Current User",
//         text: newComment.trim(),
//         time: new Date().toLocaleTimeString(),
//       };
//       setComments([...comments, newCommentObject]);
//       setNewComment("");
//     }
//   };

//   const toggleLike = () => {
//     setIsLiked(!isLiked);
//     setLikes(isLiked ? likes - 1 : likes + 1);
//   };

//   return (
//     <div className="w-full h-[600px] bg-customGray rounded-lg shadow-md mb-8 p-4 flex flex-col space-y-4 relative overflow-hidden">
//       {/* Header Section */}
//       <div className="flex items-center space-x-4">
//         <img
//           src={post.avatar}
//           alt="Avatar"
//           className="w-12 h-12 rounded-full"
//         />
//         <div>
//           <p className="text-custom_blue font-semibold">{post.username}</p>
//           <p className="text-custom_grey text-sm">{post.date}</p>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="text-custom_blue_sec">
//         <p>
//           {showFullText ? post.text : `${post.text.substring(0, 100)}...`}
//           {post.text.length > 100 && (
//             <button
//               onClick={() => setShowFullText(!showFullText)}
//               className="text-custom_orange ml-2 underline"
//             >
//               {showFullText ? "Show Less" : "Read More"}
//             </button>
//           )}
//         </p>
//       </div>

//       {/* Media Section */}
//       {post.media && (
//         <div className="w-full aspect-w-16 aspect-h-9 bg-gray-300 rounded-lg overflow-hidden">
//           {post.media.type === "image" ? (
//             <img
//               src={post.media.url}
//               alt="Post Media"
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <video
//               src={post.media.url}
//               controls
//               className="w-full h-full object-cover"
//             />
//           )}
//         </div>
//       )}

//       {/* Interaction Section */}
//       <div className="flex justify-between items-center text-custom_blue_sec">
//         <button
//           onClick={toggleLike}
//           className={`flex items-center space-x-2 ${
//             isLiked ? "text-custom_pink" : "hover:text-custom_orange"
//           }`}
//         >
//           <span>{isLiked ? "❤️" : "🤍"}</span>
//           <span>{likes} Likes</span>
//         </button>
//         <button
//           onClick={() => setShowComments(!showComments)}
//           className="hover:text-custom_orange"
//         >
//           {showComments
//             ? "Hide Comments"
//             : `View Comments (${comments.length})`}
//         </button>
//       </div>

//       {/* Comments Section */}
//       {showComments && (
//         <div className="mt-4 max-h-48 overflow-y-auto bg-gray-100 p-2 rounded-lg space-y-4">
//           {comments.map((comment, idx) => (
//             <div key={idx} className="flex items-center space-x-4">
//               <img
//                 src={comment.avatar}
//                 alt="Comment Avatar"
//                 className="w-8 h-8 rounded-full"
//               />
//               <div>
//                 <p className="text-custom_blue font-semibold">
//                   {comment.name}{" "}
//                   <span className="text-custom_grey text-xs">
//                     {comment.time}
//                   </span>
//                 </p>
//                 <p className="text-custom_grey text-sm">{comment.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Comment Input */}
//       <div className="flex items-center mt-4">
//         <input
//           type="text"
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           placeholder="Write a comment..."
//           className="flex-grow px-2 py-1 border border-gray-300 rounded-lg"
//         />
//         <button
//           onClick={handleAddComment}
//           className="ml-2 bg-custom_blue text-white px-4 py-1 rounded-lg hover:bg-custom_orange"
//         >
//           Comment
//         </button>
//       </div>
//     </div>
//   );
// };

// // Dummy Data
// const posts = [
//   {
//     avatar: "https://via.placeholder.com/150",
//     username: "John Doe",
//     date: "Dec 3, 2024",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.",
//     media: { type: "image", url: "https://via.placeholder.com/400x200" },
//     likes: 12,
//     comments: [
//       {
//         avatar: "https://via.placeholder.com/40",
//         name: "Alice",
//         text: "Great post!",
//         time: "10:30 AM",
//       },
//       {
//         avatar: "https://via.placeholder.com/40",
//         name: "Bob",
//         text: "Very insightful!",
//         time: "11:00 AM",
//       },
//     ],
//   },
//   {
//     avatar: "https://via.placeholder.com/150",
//     username: "John Doe",
//     date: "Dec 3, 2024",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.",
//     media: { type: "image", url: "https://via.placeholder.com/400x200" },
//     likes: 12,
//     comments: [
//       {
//         avatar: "https://via.placeholder.com/40",
//         name: "Alice",
//         text: "Great post!",
//         time: "10:30 AM",
//       },
//       {
//         avatar: "https://via.placeholder.com/40",
//         name: "Bob",
//         text: "Very insightful!",
//         time: "11:00 AM",
//       },
//     ],
//   },
//   {
//     avatar: "https://via.placeholder.com/150",
//     username: "John Doe",
//     date: "Dec 3, 2024",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis.",
//     media: { type: "image", url: "https://via.placeholder.com/400x200" },
//     likes: 12,
//     comments: [
//       {
//         avatar: "https://via.placeholder.com/40",
//         name: "Alice",
//         text: "Great post!",
//         time: "10:30 AM",
//       },
//       {
//         avatar: "https://via.placeholder.com/40",
//         name: "Bob",
//         text: "Very insightful!",
//         time: "11:00 AM",
//       },
//     ],
//   },
//   // Additional dummy posts here
// ];

// const BlogFeed = () => {
//   return (
//     <div className="w-full h-screen overflow-y-scroll bg-customGray p-4">
//       {posts.map((post, idx) => (
//         <BlogCard key={idx} post={post} />
//       ))}
//     </div>
//   );
// };

// export default BlogFeed;


// import React, { useState } from "react";

// const BlogCard = ({ post }) => {
//   const [showFullText, setShowFullText] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [newComment, setNewComment] = useState("");
//   const [comments, setComments] = useState(post.comments);
//   const [likes, setLikes] = useState(post.likes);
//   const [isLiked, setIsLiked] = useState(false);

//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       const newCommentObject = {
//         avatar: "https://via.placeholder.com/40",
//         name: "Current User",
//         text: newComment.trim(),
//         time: new Date().toLocaleTimeString(),
//       };
//       setComments([...comments, newCommentObject]);
//       setNewComment("");
//     }
//   };

//   const toggleLike = () => {
//     setIsLiked(!isLiked);
//     setLikes(isLiked ? likes - 1 : likes + 1);
//   };

//   return (
//     <div className="w-full bg-customGray rounded-lg shadow-md mb-8 p-4 flex flex-col space-y-4 relative overflow-hidden transition-all duration-500">
//       {/* Header Section */}
//       <div className="flex items-center space-x-4">
//         <img
//           src={post.avatar}
//           alt="Avatar"
//           className="w-12 h-12 rounded-full"
//         />
//         <div>
//           <p className="text-custom_blue font-semibold">{post.username}</p>
//           <p className="text-custom_grey text-sm">{post.date}</p>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="text-custom_blue_sec">
//         <p>
//           {showFullText ? post.text : `${post.text.substring(0, 100)}...`}
//           {post.text.length > 100 && (
//             <button
//               onClick={() => setShowFullText(!showFullText)}
//               className="text-custom_orange ml-2 underline"
//             >
//               {showFullText ? "Show Less" : "Read More"}
//             </button>
//           )}
//         </p>
//       </div>

//       {/* Media Section */}
//       {post.media && (
//         <div
//           className={`w-full aspect-w-16 aspect-h-9 bg-gray-300 rounded-lg overflow-hidden ${
//             showComments ? "h-[300px]" : "h-[400px]"
//           } transition-all duration-500`}
//         >
//           {post.media.type === "image" ? (
//             <img
//               src={post.media.url}
//               alt="Post Media"
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <video
//               src={post.media.url}
//               controls
//               className="w-full h-full object-cover"
//             />
//           )}
//         </div>
//       )}

//       {/* Interaction Section */}
//       <div className="flex justify-between items-center text-custom_blue_sec">
//         <button
//           onClick={toggleLike}
//           className={`flex items-center space-x-2 ${
//             isLiked ? "text-custom_pink" : "hover:text-custom_orange"
//           }`}
//         >
//           <span>{isLiked ? "❤️" : "🤍"}</span>
//           <span>{likes} Likes</span>
//         </button>
//         <button
//           onClick={() => setShowComments(!showComments)}
//           className="hover:text-custom_orange"
//         >
//           {showComments
//             ? "Hide Comments"
//             : `View Comments (${comments.length})`}
//         </button>
//       </div>

//       {/* Comments Section */}
//       <div
//         className={`transition-all duration-500 overflow-hidden ${
//           showComments ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="mt-4 bg-gray-100 p-2 rounded-lg space-y-4">
//           {comments.map((comment, idx) => (
//             <div key={idx} className="flex items-center space-x-4">
//               <img
//                 src={comment.avatar}
//                 alt="Comment Avatar"
//                 className="w-8 h-8 rounded-full"
//               />
//               <div>
//                 <p className="text-custom_blue font-semibold">
//                   {comment.name}{" "}
//                   <span className="text-custom_grey text-xs">
//                     {comment.time}
//                   </span>
//                 </p>
//                 <p className="text-custom_grey text-sm">{comment.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Comment Input */}
//         <div className="flex items-center mt-4">
//           <input
//             type="text"
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//             placeholder="Write a comment..."
//             className="flex-grow px-2 py-1 border border-gray-300 rounded-lg"
//           />
//           <button
//             onClick={handleAddComment}
//             className="ml-2 bg-custom_blue text-white px-4 py-1 rounded-lg hover:bg-custom_orange"
//           >
//             Comment
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


// const BlogFeed = () => {
//   return (
//     <div className="w-full h-screen overflow-y-scroll bg-customGray p-4">
//       {posts.map((post, idx) => (
//         <BlogCard key={idx} post={post} />
//       ))}
//     </div>
//   );
// };

// export default BlogFeed;



import React, { useState } from "react";
import dayjs from "dayjs"; // Importing dayjs for time formatting
import { posts } from "./data";
import relativeTime from "dayjs/plugin/relativeTime";
import VideoPlayer from "./VideoPlayer";

dayjs.extend(relativeTime);

const BlogCard = ({ post }) => {
  const [showFullText, setShowFullText] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(post.comments);
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObject = {
        avatar: "https://via.placeholder.com/40",
        name: "Current User",
        text: newComment.trim(),
        time: new Date().toLocaleTimeString(),
      };
      setComments([...comments, newCommentObject]);
      setNewComment("");
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md mb-8 p-6 flex flex-col space-y-6 relative overflow-hidden no-scrollbar transition-all duration-500">
      {/* Header Section */}
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4">
          <img
            src={post.avatar}
            alt="Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="text-blue-600 font-semibold">{post.username}</p>
            <p className="text-gray-500 text-sm">
              {dayjs(post.date).fromNow()}
            </p>{" "}
            {/* Using dayjs to format date */}
          </div>
        </div>
        <p className="text-gray-500 text-xs">
          {dayjs(post.date).format("MMM D, YYYY h:mm A")}
        </p>
      </div>

      {/* Content Section */}
      {/* <div className="text-blue-500">
        <p
          dangerouslySetInnerHTML={{
            __html: showFullText
              ? post.text
              : `${post.text.substring(0, 100)}...`,
          }}
        />
        {post.text.length > 100 && (
          <button
            onClick={() => setShowFullText(!showFullText)}
            className="text-orange-500 ml-2 underline"
          >
            {showFullText ? "Show Less" : "Read More"}
          </button>
        )}
      </div> */}

      {/* Media Section */}
      {/* {post.media && (
        <div
          className="w-full bg-gray-300 rounded-lg overflow-hidden mb-4"
          style={{ height: showComments ? "450px" : "500px" }}
        >
                  {post.media.type === "image" &&
                      <img
                          src={post.media.url}
                          alt="Post Media"
                          className="w-full h-full object-cover"
                      />
                  }
                  {post.media.type === "video" &&
                      <div className="w-full h-full">
                          <VideoPlayer
                              videoUrl={post.media.url}
                              width="100%"
                              height="500px"
                          />
                      </div>
                  } {post.media.type === "text" &&
                      <div
                          className="w-full p-4 bg-white text-black rounded-lg"
                          dangerouslySetInnerHTML={{ __html: post.media.content }}
                      />
                  } 
            <div className="w-full p-4 bg-white text-black rounded-lg">
              {post.media.content}
            </div>
        
        </div>
      )} */}
      {/* {post.media && (
        <div
          className="w-full rounded-lg overflow-hidden mb-4"
          style={{
            height:
              showComments && post.media.type === "text"
                ? "max-h-max"
                : "500px",
          }}
        >
          {post.media.type === "image" && (
            <img
              src={post.media.url}
              alt="Post Media"
              className="w-full h-full object-cover"
            />
          )}

          {post.media.type === "video" && (
            <div className="w-full h-full">
              <VideoPlayer
                videoUrl={post.media.url}
                width="100%"
                height="500px"
              />
            </div>
          )}

          {post.media.type === "text" && (
            <div className="text-blue-500">
              <p
                dangerouslySetInnerHTML={{
                  __html: showFullText
                    ? post.text
                    : `${post.text.substring(0, 500)}...`,
                }}
              />
              {post.text.length > 100 && (
                <button
                  onClick={() => setShowFullText(!showFullText)}
                  className="text-orange-500 ml-2 underline"
                >
                  {showFullText ? "Show Less" : "Read More"}
                </button>
              )}
            </div>
          )}
        </div>
      )} */}
      {post.media && (
        <div
          className="w-full rounded-lg overflow-hidden mb-4"
          style={{
            height:
              post.media.type === "text" && (showComments || post.text) // Adjust height for text content if comments or text is shown
                ? "auto"
                : "500px", // Set to 500px for other media types or if no text or comments are visible
          }}
        >
          {post.media.type === "image" && (
            <img
              src={post.media.url}
              alt="Post Media"
              className="w-full h-full object-cover"
            />
          )}

          {post.media.type === "video" && (
            <div className="w-full h-full">
              <VideoPlayer
                videoUrl={post.media.url}
                width="100%"
                height="500px"
              />
            </div>
          )}

          {post.media.type === "text" && (
            <div className="text-blue-500">
              <p
                dangerouslySetInnerHTML={{
                  __html: showFullText
                    ? post.text
                    : `${post.text.substring(0, 500)}...`,
                }}
              />
              {post.text.length > 100 && (
                <button
                  onClick={() => setShowFullText(!showFullText)}
                  className="text-orange-500 ml-2 underline"
                >
                  {showFullText ? "Show Less" : "Read More"}
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Interaction Section */}
      <div className="flex justify-between items-center text-blue-500">
        <button
          onClick={toggleLike}
          className={`flex items-center space-x-2 ${
            isLiked ? "text-pink-600" : "hover:text-orange-500"
          }`}
        >
          <span>{isLiked ? "❤️" : "🤍"}</span>
          <span>{likes} Likes</span>
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="hover:text-orange-500"
        >
          {showComments
            ? "Hide Comments"
            : `View Comments (${comments.length})`}
        </button>
      </div>
      <div className="flex items-center mt-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleAddComment}
          className="ml-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-orange-500"
        >
          Comment
        </button>
      </div>
      {/* Comments Section */}
      <div
        className={`transition-all duration-500 overflow-y-auto no-scrollbar ${
          showComments ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-4 bg-gray-100 p-4 rounded-lg space-y-4 overflow-y-auto">
          {comments.map((comment, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              <img
                src={comment.avatar}
                alt="Comment Avatar"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-blue-600 font-semibold">
                  {comment.name}{" "}
                  <span className="text-gray-500 text-xs">{comment.time}</span>
                </p>
                <p className="text-gray-500 text-sm">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comment Input */}
      </div>
    </div>
  );
};

const BlogFeed = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll no-scrollbar bg-gray-100 p-8">
      {posts.map((post, idx) => (
        <BlogCard key={idx} post={post} />
      ))}
    </div>
  );
};

export default BlogFeed;
