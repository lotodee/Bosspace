/* eslint-disable react/prop-types */
// // src/components/PostCreationModal.jsx
// import React, { useState } from "react";

// const PostCreationModal = ({ isOpen, onClose, addPost }) => {
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [content, setContent] = useState("");

//   const handleSubmit = () => {
//     if (title && category && content) {
//       addPost({
//         id: Date.now(),
//         title,
//         category,
//         author: "NewUser",
//         timestamp: new Date().toLocaleString(),
//         content,
//         responses: [],
//       });
//       onClose();
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-md">
//         <h2 className="text-xl font-bold mb-4">Create New Post</h2>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full mb-3 p-2 border rounded"
//         />
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="w-full mb-3 p-2 border rounded"
//         >
//           <option value="">Select Category</option>
//           <option value="Education">Education</option>
//           <option value="Beauty">Beauty</option>
//           <option value="Fashion">Fashion</option>
//         </select>
//         <textarea
//           placeholder="Write your content here..."
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="w-full mb-3 p-2 border rounded"
//           rows="4"
//         />
//         <div className="flex justify-end">
//           <button
//             onClick={onClose}
//             className="mr-3 px-4 py-2 bg-gray-300 rounded"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 bg-blue-500 text-white rounded"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostCreationModal;


// src/components/PostCreationModal.jsx
// import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";

// const PostCreationModal = ({ isOpen, onClose, addPost }) => {
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [content, setContent] = useState("");
//   const [media, setMedia] = useState(null);

//   const onDrop = (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     if (file) {
//       const fileType = file.type.startsWith("image") ? "image" : "video";
//       setMedia({
//         type: fileType,
//         url: URL.createObjectURL(file),
//       });
//     }
//   };

//   const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: "image/*,video/*" });

//   const handleSubmit = () => {
//     if (title && category && content) {
//       addPost({
//         id: Date.now(),
//         title,
//         category,
//         author: "NewUser",
//         timestamp: new Date().toLocaleString(),
//         content,
//         media,
//         responses: [],
//       });
//       onClose();
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-md">
//         <h2 className="text-xl font-bold mb-4">Create New Post</h2>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full mb-3 p-2 border rounded"
//         />
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="w-full mb-3 p-2 border rounded"
//         >
//           <option value="">Select Category</option>
//           <option value="Education">Education</option>
//           <option value="Beauty">Beauty</option>
//           <option value="Fashion">Fashion</option>
//         </select>
//         <textarea
//           placeholder="Write your content here..."
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="w-full mb-3 p-2 border rounded"
//           rows="4"
//         />
//         <div {...getRootProps()} className="p-4 border-dashed border-2 border-gray-300 rounded-lg mb-3">
//           <input {...getInputProps()} />
//           <p>Drag & drop a file here, or click to select one</p>
//           {media && (
//             <div className="mt-2">
//               {media.type === "image" && (
//                 <img src={media.url} alt="Uploaded" className="w-full rounded-lg" />
//               )}
//               {media.type === "video" && (
//                 <video controls className="w-full rounded-lg">
//                   <source src={media.url} type="video/mp4" />
//                 </video>
//               )}
//             </div>
//           )}
//         </div>
//         <div className="flex justify-end">
//           <button onClick={onClose} className="mr-3 px-4 py-2 bg-gray-300 rounded">
//             Cancel
//           </button>
//           <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostCreationModal;





// import { useState } from "react";
// import { useDropzone } from "react-dropzone";

// const PostCreationModal = ({ isOpen, onClose, addPost }) => {
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [content, setContent] = useState("");
//   const [mediaOption, setMediaOption] = useState(null); // 'image' or 'video'
//   const [media, setMedia] = useState(null);
//   const [videoLink, setVideoLink] = useState("");

//   const onDrop = (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     if (file) {
//       setMedia({
//         type: "image",
//         url: URL.createObjectURL(file),
//       });
//     }
//   };

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     accept: "image/*",
//     multiple: false,
//   });

//   const handleSubmit = () => {
//     if (title && category && content) {
//       const postMedia =
//         mediaOption === "video" && videoLink.trim()
//           ? { type: "video", url: videoLink }
//           : media;

//       addPost({
//         id: Date.now(),
//         title,
//         category,
//         author: "NewUser",
//         timestamp: new Date().toLocaleString(),
//         content,
//         media: postMedia,
//         responses: [],
//       });
//       onClose();
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto">
//         <h2 className="text-2xl font-bold mb-6">Create New Post</h2>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full mb-4 p-3 border rounded-lg"
//         />
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="w-full mb-4 p-3 border rounded-lg"
//         >
//           <option value="">Select Category</option>
//           <option value="Education">Education</option>
//           <option value="Beauty">Beauty</option>
//           <option value="Fashion">Fashion</option>
//         </select>
//         <textarea
//           placeholder="Write your content here..."
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="w-full mb-4 p-3 border rounded-lg"
//           rows="6"
//         />
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-4">Add Media</h3>
//           <div className="flex gap-4 mb-4">
//             <button
//               onClick={() => setMediaOption("image")}
//               className={`px-4 py-2 border rounded-lg ${
//                 mediaOption === "image"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200"
//               }`}
//             >
//               Upload Image
//             </button>
//             <button
//               onClick={() => setMediaOption("video")}
//               className={`px-4 py-2 border rounded-lg ${
//                 mediaOption === "video"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200"
//               }`}
//             >
//               Add Video Link
//             </button>
//           </div>
//           {mediaOption === "image" && (
//             <div
//               {...getRootProps()}
//               className="p-6 border-dashed border-2 border-gray-300 rounded-lg text-center"
//             >
//               <input {...getInputProps()} />
//               <p>Drag & drop an image here, or click to select one</p>
//               {media && (
//                 <div className="mt-4">
//                   <img
//                     src={media.url}
//                     alt="Preview"
//                     className="w-full h-40 object-cover rounded-lg"
//                   />
//                 </div>
//               )}
//             </div>
//           )}
//           {mediaOption === "video" && (
//             <div className="mt-4">
//               <input
//                 type="url"
//                 placeholder="Paste video link here (e.g., YouTube, Vimeo)"
//                 value={videoLink}
//                 onChange={(e) => setVideoLink(e.target.value)}
//                 className="w-full p-3 border rounded-lg"
//               />
//             </div>
//           )}
//         </div>
//         <div className="flex justify-end">
//           <button
//             onClick={onClose}
//             className="mr-3 px-4 py-2 bg-gray-300 rounded-lg"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostCreationModal;



import { useState } from "react";
import { useDropzone } from "react-dropzone";

const PostCreationModal = ({ isOpen, onClose, addPost }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [mediaOption, setMediaOption] = useState(null); // 'image' or 'video'
  const [media, setMedia] = useState(null);
  const [videoLink, setVideoLink] = useState("");

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setMedia({
        type: "image",
        url: URL.createObjectURL(file),
      });
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  const handleSubmit = () => {
    if (title && category && content) {
      const postMedia =
        mediaOption === "video" && videoLink.trim()
          ? { type: "video", url: videoLink }
          : media;

      addPost({
        id: Date.now(),
        title,
        category,
        author: "NewUser",
        timestamp: new Date().toLocaleString(),
        content,
        media: postMedia,
        responses: [],
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Create New Post
        </h2>
        {/* Title Input */}
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Custom Dropdown */}
        <div className="relative mb-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled hidden>
              Select a Category
            </option>
            <option value="Education">Education</option>
            <option value="Beauty">Beauty</option>
            <option value="Fashion">Fashion</option>
          </select>
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 pointer-events-none">
            ▼
          </span>
        </div>
        {/* Content Input */}
        <textarea
          placeholder="Write your content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="6"
        />
        {/* Media Options */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Add Media
          </h3>
          <div className="flex gap-4 mb-4">
            <button
              onClick={() => setMediaOption("image")}
              className={`px-6 py-2 rounded-lg font-medium ${
                mediaOption === "image"
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Upload Image
            </button>
            <button
              onClick={() => setMediaOption("video")}
              className={`px-6 py-2 rounded-lg font-medium ${
                mediaOption === "video"
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Add Video Link
            </button>
          </div>
          {/* Image Upload */}
          {mediaOption === "image" && (
            <div
              {...getRootProps()}
              className="p-6 border-dashed border-2 border-gray-300 rounded-lg text-center cursor-pointer hover:border-blue-500 hover:bg-gray-100 transition"
            >
              <input {...getInputProps()} />
              <p className="text-gray-500">
                Drag & drop an image here, or{" "}
                <span className="text-blue-500 underline">browse</span>
              </p>
              {media && (
                <div className="mt-4">
                  <img
                    src={media.url}
                    alt="Preview"
                    className="w-full h-40 object-cover rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>
          )}
          {/* Video Link */}
          {mediaOption === "video" && (
            <input
              type="url"
              placeholder="Paste video link here (e.g., YouTube, Vimeo)"
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        </div>
        {/* Actions */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-3 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCreationModal;

