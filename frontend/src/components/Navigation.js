import {useState} from 'react'
import { Link } from 'react-router-dom'
import {FiMenu, FiX} from 'react-icons/fi'
import Header from './Header'
import './Navigation.css'

const Navigation = props =>{

    const [open, setOpen] = useState(false)

    const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

    return(
        <Header>
          <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
                <h2>GitFit</h2> 
            </Link>
            
            <div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
            <ul className={open ? 'nav-links active' : 'nav-links'}>
                <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                </li>

               
            </ul>
         </Header>
       
    )
}

export default Navigation