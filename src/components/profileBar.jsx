import React from "react";
import {
  FaPen,
  FaComments,
  FaRocket,
  FaRegAddressBook,
  FaLink,
} from "react-icons/fa";
import IconWithText from "./IconWithText";
import useTabStore from "../store/useTabStore";
import { useNavigate } from "react-router-dom";
const ProfileBar = () => {
  const { currentTab, setCurrentTab } = useTabStore();
 const navigate = useNavigate(); 



  const navigator = (tab) => {


    if (tab === "Directory") {
      navigate('/')
      return
    }
    if (tab === 'Blogs and Articles') {
      navigate('/blog')
      return
    } else {
      navigate(`/${tab}`)
    }
    return;
  }
  const handleItemClick = (tab) => {
    setCurrentTab(tab);
    navigator(tab);
  };

  return (
    <div className="flex justify-center items-center space-x-8">
      <IconWithText
        icon={<FaPen />}
        text="Blogs and Articles"
        isActive={currentTab === "Blogs and Articles"}
        handleClick={() => handleItemClick("Blogs and Articles")}
      />
      <IconWithText
        icon={<FaComments />}
        text="Forums"
        isActive={currentTab === "Forums"}
        handleClick={() => handleItemClick("Forums")}
      />
      <IconWithText
        icon={<FaRocket />}
        text="Startup"
        isActive={currentTab === "Startup"}
        handleClick={() => handleItemClick("Startup")}
      />
      <IconWithText
        icon={<FaRegAddressBook />}
        text="Directory"
        isActive={currentTab === "Directory"}
        handleClick={() => handleItemClick("Directory")}
      />
      <IconWithText
        icon={<FaLink />}
        text="Connect"
        isActive={currentTab === "Connect"}
        handleClick={() => handleItemClick("Connect")}
      />
    </div>
  );
};

export default ProfileBar;
