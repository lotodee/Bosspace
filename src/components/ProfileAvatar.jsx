import React from "react";

const ProfileAvatar = ({width = "w-10",height ="h-10"}) => {
  // Simulate getting user data
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    profileImage: null, // Set to `null` if no profile image is provided
  };

  // Generate initials or email alias
  const getAlias = () => {
    if (user.profileImage) return null;
    if (user.firstName && user.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    }
    if (user.email) {
      return user.email.slice(0, 2).toUpperCase();
    }
    return "?"; // Fallback
  };

  return (
    <div className={`${width} ${height} rounded-full flex items-center justify-center text-white font-bold bg-custom_blue`}>
      {user.profileImage ? (
        <img
          src={user.profileImage}
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <span>{getAlias()}</span>
      )}
    </div>
  );
};

export default ProfileAvatar;
