/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaHeart } from "react-icons/fa"; // Love icon

const ForumPost = ({ post, addResponse, currentUser }) => {
  const [responseText, setResponseText] = useState("");
  const [responseReplies, setResponseReplies] = useState({});
  const [likes, setLikes] = useState(post.likes || []); 
  const [responseLikes, setResponseLikes] = useState(
    post.responses.map(() => [])
  );
  const [showReplyInput, setShowReplyInput] = useState(null); 
  const [replyText, setReplyText] = useState(""); 

  
  const handleAddResponse = () => {
    if (responseText.trim()) {
      addResponse(post.id, {
        author: currentUser,
        timestamp: new Date().toLocaleString(),
        content: responseText,
        replies: [],
      });
      setResponseText(""); 
    }
  };

  
  const handleAddReply = (index) => {
    if (replyText.trim()) {
      const newResponseReplies = { ...responseReplies };
      if (!newResponseReplies[index]) {
        newResponseReplies[index] = [];
      }
      newResponseReplies[index].push({
        author: currentUser,
        timestamp: new Date().toLocaleString(),
        content: replyText,
      });
      setResponseReplies(newResponseReplies);
      setReplyText(""); 
      setShowReplyInput(null); 
    }
  };


  const handleLikePost = () => {
    if (!likes.includes(currentUser)) {
      setLikes((prevLikes) => [...prevLikes, currentUser]);
    } else {
      setLikes((prevLikes) => prevLikes.filter((user) => user !== currentUser));
    }
  };

  
  const handleLikeResponse = (index) => {
    const updatedLikes = [...responseLikes];
    const responseLikedByUser = updatedLikes[index].includes(currentUser);
    if (responseLikedByUser) {
      updatedLikes[index] = updatedLikes[index].filter(
        (user) => user !== currentUser
      );
    } else {
      updatedLikes[index].push(currentUser);
    }
    setResponseLikes(updatedLikes);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-4">
        <span className="font-semibold">Category:</span> {post.category} |{" "}
        <span className="font-semibold">Posted by:</span> {post.author} |{" "}
        {post.timestamp}
      </p>

      {post.media && (
        <div className="mb-4">
          {post.media.type === "image" && (
            <img
              src={post.media.url}
              alt="Post Media"
              className="w-full h-64 object-cover rounded-lg"
            />
          )}
          {post.media.type === "video" && (
            <video controls className="w-full rounded-lg">
              <source src={post.media.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
      <p className="text-gray-800 mb-4">{post.content}</p>

 
      <div className="mb-4 flex items-center gap-4">
        <button
          onClick={handleLikePost}
          className={`p-2 ${
            likes.includes(currentUser) ? "text-red-500" : "text-gray-500"
          }`}
        >
          <FaHeart />
        </button>
        <span className="text-gray-600">{likes.length} Likes</span>
      </div>

     
      <div className="border-t pt-4">
        <h4 className="font-bold mb-2">Responses:</h4>
        {post.responses.map((response, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <p className="font-semibold">{response.author}</p>
            <p className="text-gray-600 text-sm">{response.timestamp}</p>
            <p className="text-gray-800 mb-2">{response.content}</p>

           
            <div className="mb-2 flex items-center gap-4">
              <button
                onClick={() => handleLikeResponse(index)}
                className={`p-2 ${
                  responseLikes[index].includes(currentUser)
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              >
                <FaHeart />
              </button>
              <span className="text-gray-600">
                {responseLikes[index].length} Likes
              </span>
            </div>

      
            <button
              onClick={() => setShowReplyInput(index)}
              className="text-blue-500"
            >
              Reply
            </button>

            {showReplyInput === index && (
              <div className="mt-2">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Write a reply..."
                  className="w-full p-2 border rounded-lg mb-2"
                ></textarea>
                <button
                  onClick={() => handleAddReply(index)}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Reply
                </button>
              </div>
            )}


            {responseReplies[index]?.map((reply, replyIndex) => (
              <div key={replyIndex} className="mt-2 pl-4 border-l">
                <p className="font-semibold">{reply.author}</p>
                <p className="text-gray-600 text-sm">{reply.timestamp}</p>
                <p className="text-gray-800">{reply.content}</p>
              </div>
            ))}
          </div>
        ))}


        <div className="mt-4">
          <textarea
            value={responseText}
            onChange={(e) => setResponseText(e.target.value)}
            placeholder="Write a response..."
            className="w-full p-2 border rounded-lg mb-2"
          ></textarea>
          <button
            onClick={handleAddResponse}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Respond
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForumPost;
