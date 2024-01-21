import React, { useContext, useEffect, useState } from "react";
import "./OurMenu.scss";
import { WishlistContext } from "../../context/WishlistContext";
import { Link } from "react-router-dom";
import { BasketContext } from "../../context/BasketContext";
function OurMenu() {
  const [dbData, setDbData] = useState([]);
  async function getFetch() {
    const response = await fetch("http://localhost:3003/");
    const data = await response.json();
    setDbData(data);
  }
  useEffect(() => {
    getFetch();
  }, []);
  function checkType(value) {
    if (typeof value === "string") {
      return value.toLocaleLowerCase();
    } else {
      return value;
    }
  }
  const { handleWishlist, wishlist } = useContext(WishlistContext);
  const { addBasket } = useContext(BasketContext);

  const [sortBy, setSortBy] = useState(null);

  return (
    <div className="menu">
      <div className="menu_container">
        <button onClick={() => setSortBy({ field: "title", asc: true })}>
          A-z
        </button>
        <button onClick={() => setSortBy({ field: "title", asc: false })}>
          Z-a
        </button>
        <button onClick={() => setSortBy({ field: "price", asc: true })}>
          ucuz-baha
        </button>
        <button onClick={() => setSortBy({ field: "price", asc: false })}>
          baha-ucuz
        </button>
        <button onClick={() => setSortBy(null)}>default</button>
        <div className="menu_container_head">
          <div className="text">
            <div className="line"></div>
            <p>Our Menu</p>
            <div className="line"></div>
          </div>
          <div className="category">
            <span>Breakfast</span>
            <span>Brunch</span>
            <span>Lunch</span>
            <span>Dinner</span>
          </div>
        </div>
        <div className="menu_container_cards">
          {[...dbData]
            .sort((a, b) => {
              if (!sortBy) {
                return 0;
              } else if (sortBy.asc) {
                return checkType(a[sortBy.field]) > checkType(b[sortBy.field])
                  ? 1
                  : checkType(b[sortBy.field]) > checkType(a[sortBy.field])
                  ? -1
                  : 0;
              } else if (sortBy.asc === false) {
                return checkType(a[sortBy.field]) < checkType(b[sortBy.field])
                  ? 1
                  : checkType(b[sortBy.field]) < checkType(a[sortBy.field])
                  ? -1
                  : 0;
              }
            })
            .map((item) => (
              <div className="menu_container_cards_card">
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
                  <Link to={"/detail/" + item._id}>
                    {" "}
                    <i class="fa-regular fa-eye"></i>
                  </Link>
                  <i onClick={()=>addBasket(item)} class="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
            ))}
        </div>
        <div className="button">
          <button>See More</button>
        </div>
      </div>
    </div>
  );
}

export default OurMenu;
