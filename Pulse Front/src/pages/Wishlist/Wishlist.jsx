import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext'
import "./Wishlist.scss"
import { Helmet } from 'react-helmet-async'
function Wishlist() {
    const {wishlist,handleWishlist} = useContext(WishlistContext)
    return (
   <div className="wishlist_container">
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
     <div className='wishlist_container_cards'>
         {wishlist.map((item) => (
            <div className="wishlist_container_cards_card">
              <div className="title">
                <p>{item.title}</p>
              </div>
              <div className="detail">
                <div className="desc">
                  <p>
                    <i>{item.detail}</i>
                  </p>
                </div>
                <div className="ln"></div>
                <div className="price">${item.price}</div>
              </div>
              <div className="operations">
                {wishlist.some((x) => x._id === item._id) ? (
                  <i
                    onClick={() => handleWishlist(item)}
                    class="fa-solid fa-heart red"
                  ></i>
                ) : (
                  <i
                    onClick={() => handleWishlist(item)}
                    class="fa-solid fa-heart"
                  ></i>
                )}
              </div>
            </div>
          ))}

    </div>  
   </div>
  )
}

export default Wishlist