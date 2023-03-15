import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Navigation = (props: any) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  }
  return (
    <nav className="bg-gray-900 w-screen flex relative shadow justify-between items-center px-8 h-20">
      <Logo />
      <SearchBar />
      <div>
        <button onClick={() => handleLogout()}>Logout</button>
      </div>
    </nav>
  )
}

export default Navigation