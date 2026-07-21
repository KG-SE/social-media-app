import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import Createpost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState, useEffect } from "react";
import PostListProvider from "./store/post-list-store";

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");
  const [searchText,setSearchText] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});

useEffect(() => {

  if (darkMode) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }

}, [darkMode]);
  return (
    
    <PostListProvider>  
    <div className="app-container">

     <div className={`sidebar ${sidebarOpen ? "show-sidebar" : ""}`}>

  <Sidebar
    selectedTab={selectedTab}
    setSelectedTab={setSelectedTab}
    setSidebarOpen={setSidebarOpen}
  />

</div>

      <div className="content">
        <div className="header">
          <Header
  searchText={searchText}
  setSearchText={setSearchText}
  setSidebarOpen={setSidebarOpen}
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>
        </div>
   
        {selectedTab === 'Home' ? (<PostList searchText={searchText} />) : (<Createpost />)}
        <div className="footer">
          <Footer />
        </div>

             {sidebarOpen && (
  <div
    className="overlay"
    onClick={() => setSidebarOpen(false)}
  ></div>
)}
      </div>

    </div>
    </PostListProvider>
  );
}

export default App;