import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';


import { selectCartCount } from '../../store/cart/cart.selector';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';
import Cart from '../cart/cart.component';





const Header = ()=>{


    const getCartdata = useSelector(selectCartItems) ;
    console.log('cart data', getCartdata);
    const [anchorEl, setAnchorEl] =useState(null);
    const count = useSelector(selectCartCount);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
      };
  
   
return(
        <>
        <Navbar bg="dark" data-bs-theme="dark" style={{height:'60px'}}>
        <Container>
        <Navbar.Brand to="allProds">IShopNow</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className='text-decoration-none text-light mx-3 ' to="allProds">Products</NavLink>
            <NavLink className='text-decoration-none text-light mx-3 ' to="addProd">Add Products</NavLink>
        
          </Nav>

          <Badge badgeContent={count} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className='mx-5'
          >
            
              <i class="fa-sharp fa-solid fa-cart-shopping text-light" style={{fontSize:'30px',cursor:'pointer'}}></i>
                     
           

         </Badge>
         <div className='mx-3'>
            <img src="https://cdn-icons-png.flaticon.com/512/547/547420.png" style={{width:30,height:30}} alt="" />
         </div>
         <div>
            <p className='text-light'>Sandeep kumar</p>
         </div>

         <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        
         {getCartdata.length?
         <><Cart handleClose={handleClose}/></> 
        
        :
          <div className='cart-details d-flex justify-content-center align-items-center' style={{position:'relative' ,width:'24rem',padding:10}}>
          <i className='fas fa-close' 
            style={{position:'absolute', top:2,right:20,cursor:'pointer'}}
            onClick={handleClose}></i>
          <p style={{fontSize:22}}>Your cart is empty</p>
          <img  style={{width:'5rem',padding:10}} src="./cart.gif" alt="" />
        </div>
         }
        
         

       
      </Menu>
        </Container>
      </Navbar>

      <Outlet/>
        </>
    )
}

export default Header;