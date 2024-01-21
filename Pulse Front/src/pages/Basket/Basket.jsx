import React, { useContext } from 'react'
import "./Basket.scss"
import { BasketContext } from '../../context/BasketContext'
import { WishlistContext } from '../../context/WishlistContext';
import { Helmet } from 'react-helmet-async';
function Basket() {
    const {basket,incDec} = useContext(BasketContext)
  const { handleWishlist, wishlist } = useContext(WishlistContext);

    return (
   <div className="basket_container">
      <Helmet>
        <title>Basket</title>
      </Helmet>
     <div className='basket_container_cards'>
         {basket.map((item) => (
            <div className="basket_container_cards_card">
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
                <button onClick={()=>incDec(item,"dec")}>-</button>
                {item.count}
                <button onClick={()=>incDec(item,"inc")}>+</button>
              </div>
            </div>
          ))}

    </div>  
   </div>
  )
}

export default Basket