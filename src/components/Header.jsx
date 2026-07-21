import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({searchText,setSearchText, setSidebarOpen,darkMode,setDarkMode}) => {
  return (
    <header className="custom-header">

    <button
      className="menu-btn"
      onClick={() => setSidebarOpen(true)}
      >
      ☰
    </button>

      <h2 className="logo">
        Social Media
      </h2>

      <form className="search-box">
        <input
          value={searchText}
          onChange={(e)=>setSearchText(e.target.value)}
          type="search"
          placeholder="Search Posts..."
        />
      </form>

      <div className="header-btns">

        <button className="btn btn-outline-primary">
          Login
        </button>

        <button className="btn btn-primary">
          Sign Up
        </button>

        <button
  className="theme-btn"
  onClick={() => setDarkMode(!darkMode)}
>

  {darkMode ? <FaSun /> : <FaMoon />}

</button>
      </div>

    </header>
  );
};

export default Header;