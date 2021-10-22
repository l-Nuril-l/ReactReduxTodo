import { Link } from 'react-router-dom';
import './Header.css'
function Header() {
  return (
    <header className="text-center text-white nav justify-content-center header">
        <Link to='/'>TODO List</Link>
        <Link to='/Create'>Create</Link>
        <Link to='/Archive'>Archive</Link>
    </header>
  );
}

export default Header;