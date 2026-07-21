import { FaHome } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const SideBar = ({ selectedTab, setSelectedTab, setSidebarOpen }) => {
  return (
    <div className="sidebar-container">

      <div className="sidebar-logo">
        <h2>Social App</h2>
      </div>

      <div className="menu">

        <button
         className={`menu-item ${selectedTab === "Home" ? "active-menu" : ""}`}
          onClick={() => {
          setSelectedTab("Home");
          setSidebarOpen(false);
          }}
        >
          <FaHome />
          <span>Home</span>
        </button>

        <button
          className={`menu-item ${selectedTab === "Create Post" ?     "active-menu" : ""}`}
          onClick={() => {
          setSelectedTab("Create Post");
          setSidebarOpen(false);
          }}
        >
          <FaPlusCircle />
          <span>Create Post</span>
        </button>

      </div>

      <div className="sidebar-profile">

        <FaUserCircle className="profile-icon"/>

        <h4>Kashan Ghori</h4>

        <p>Frontend Developer </p>
      
      </div>

    </div>
  );
};

export default SideBar;