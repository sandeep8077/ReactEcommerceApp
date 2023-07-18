import styles from './product.module.css';
import ReactStars from "react-stars";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { selectProductsArray } from "../../store/products/product.selector";
import { useNavigate } from "react-router-dom";
import {
  saveEditProduct,
  deleteProduct,
} from "../../store/products/product.action";
import { addItemToCart } from "../../store/cart/cart.action";

const ProductItem2 = ({ product })=>{

  const { title, price, images, rating, description, id } = product;

   //For Edit Cart Item
   const [beingEdited, setBeingEdited] = useState(false);
   const [newTitle, setNewTitle] = useState(title);
   const [newPrice, setNewPrice] = useState(price);
   const [newRating, setNewRating] = useState(rating);
   const [newDescription, setNewnewDescription] = useState(description);
 
   const handelTitleChange = (e) => {
     setNewTitle(e.target.value);
   };
 
   const handelPriceChange = (e) => {
     setNewPrice(e.target.value);
   };
 
   const handelRatingChange = (e) => {
     setNewRating(e.target.value);
   };
 
   const handelDescChange = (e) => {
     setNewnewDescription(e.target.value);
   };
 
   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);
   const products = useSelector(selectProductsArray);
 
   const addProductToCart = () => {
     dispatch(addItemToCart(cartItems, product));
     toast("Product Added to cart!");
   };
 
   const handelSave = () => {
     const newValues = {
       title: newTitle,
       price: newPrice,
       rating: newRating,
       description: newDescription,
     };
 
     dispatch(saveEditProduct(products, product, newValues));
     toast("Product Updated");
     setBeingEdited(false);
   };
 
   const handelDelete = () => {
     dispatch(deleteProduct(products, product));
     toast("Product Deleted");
   };
 
   const navigate = useNavigate();
 
   const handelShowDetails = () => {
     navigate(`/product/${id}`);
   };
 

    return(
   <>
      <div className={styles.productCard}>
         <div className={styles.imgPriceContainer}>
            <img style={{width:210,height:210,marginRight:10}}
             onClick={handelShowDetails} 
             src={images[0]} alt="" />
            <div className={styles.titleRatingPrice}>

            <div className={styles.titleContainer}>
            {beingEdited ? (
              <input value={newTitle} onChange={(e) => handelTitleChange(e)} />
            ) : (
              <h3>{title}</h3>
            )}
            
            
          </div>

          <div className={styles.priceContainer}>
            <p>
                Rs.
            {beingEdited ? (
                <input
                  value={newPrice}
                  onChange={(e) => handelPriceChange(e)}
                />
              ) : (
                price
              )}
             </p>

          </div>

          <div className={styles.ratingContainer}>
              {beingEdited ? (
               <input
                value={newRating}
                onChange={(e) => handelRatingChange(e)}
              />
             ) : (
              <ReactStars
                count={5}
                size={28}
                value={rating}
                color2={"#ffd700"}
              />
            )}

            
          </div>

            </div>
         </div>

    <div className={styles.descActions}>
         <div className={styles.descriptionContainer}>
         {beingEdited ? (
            <textarea
              value={newDescription}
              rows="5"
              cols="30"
              onChange={(e) => handelDescChange(e)}
            />
          ) : (
            <p>{description}</p>
          )}
        
         
        </div>
        <div>

        {beingEdited ? (
            <div className={styles.actionContainer}>
              <div className={styles.actionIcon} onClick={handelSave}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                  alt="save"
                />
              </div>

              <div
                className={styles.actionIcon}
                onClick={() => setBeingEdited(false)}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/391/391247.png"
                  alt="cancel"
                />
              </div>
            </div>
          ) :(
            <div className={styles.actionContainer}>
            <div className={styles.actionIcon} >
            
              <i className="fa-solid fa-pencil"
               onClick={() => setBeingEdited(true)}
               style={{color:'blue', fontSize:28,marginRight:25}}></i>
            </div>
            <div className={styles.actionIcon} >
             
              <i className='fas fa-trash largetrash'
              onClick={handelDelete}
               style={{color:'red', fontSize:28,marginRight:25}}></i>

            </div>
            <div className={styles.actionIcon} >
            
                      <i className="fa-solid fa-cart-shopping text-primary" 
                       onClick={addProductToCart}
                      style={{ fontSize: 25, cursor: "pointer",marginRight:25 }}></i>

            </div>
            </div>
          )}
         
           
            
          
        </div>
      </div>

      </div>
   </>
    )

}
export default ProductItem2;