
import React from 'react';
import Link from 'next/link'

import {FiMenu} from 'react-icons/fi';


class Navbar extends Component {
  
    toggle() {
        let x=document.querySelector('nav ul');
        x.classList.toggle('trans-right');
    }


render() {



  return (
    <div>
 
 <nav className='navbar'>

 <div className="logo">
           <Link href="/"> <a><img src='/logo.png' alt='log0o'/> </a></Link>
    </div>

            <ul>
                <li><NavLink to='/' className='actives'>Home</NavLink></li>
                <li><a href='#about'>About</a></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><a href='#service'>Services</a></li>
                <li>



                </li>

            </ul>

    <div className="toggler">
            <span  onClick={this.toggle}><FiMenu/></span>
    </div>
           
        </nav>
      
    
    
    
    </div>
  );
}
}

export default Navbar;