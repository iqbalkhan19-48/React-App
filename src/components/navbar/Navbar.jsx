import "./navbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import MenuOpenOutlinedIcon from "@material-ui/icons/MenuOpenOutlined";
import CloseIcon from "@material-ui/icons/Close";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleHanmberger = () => setClick(!click);
  const removeHamberger = () => setClick(!click);

  useEffect(() => {
    setClick(click);
  },[click])
  
  return (
    <>
      <nav className='navbar'>
        <div className='nav_content'>
          <div className='menu_icon' onClick={handleHanmberger}>
            {click ? (
             <CloseIcon className='hamberger' />
            ) : (
                
                <MenuOpenOutlinedIcon className='hamberger' />
            )}
          </div>
          <div className='nav_logo'>Logo</div>
          <ul className={click ? "nav_items active" : "nav_items"}>
            <li className='nav_list'>
              <Link className='nav_links' to='/' onClick={ removeHamberger}>Home</Link>
            </li>
            <li className='nav_list'>
              <Link className='nav_links'to='/about'  onClick={ removeHamberger}>About</Link>
            </li>
            <li className='nav_list'>
              <Link className='nav_links' to='/service' onClick={ removeHamberger}>Service</Link>
            </li>
            <li className='nav_list'>
              <Link className='nav_links'to='/contact'  onClick={ removeHamberger}>Contact </Link>
            </li>
          </ul>
          <ul className='nav_icons'>
            <li className='nav_icons-list'>
              <Link className='nav_icons-links'>
                <ShoppingCartOutlinedIcon className='shopingIcon' />
                <span className='qty'>3</span>
              </Link>
            </li>
            <li className='nav_icons-list'>
              <Link className='nav_icons-links'>
                <AccountCircleOutlinedIcon className='userIcon' />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
