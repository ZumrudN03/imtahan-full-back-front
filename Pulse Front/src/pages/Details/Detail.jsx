import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";
import "./Detail.scss"
import { Helmet } from "react-helmet-async";
function Detail() {
  const [dbData, setDbData] = useState([]);
  const { handleWishlist, wishlist } = useContext(WishlistContext);

  const { id } = useParams();
  async function getFetch() {
    const response = await fetch("http://localhost:3003/" + id);
    const data = await response.json();
    setDbData(data);
  }
  useEffect(() => {
    getFetch();
  }, []);
  return (
    <div className="detail_container">
          <Helmet>
        <title>Detail</title>
      </Helmet>
      <div className="detail_container_cards">
        {
          <div className="detail_container_cards_card">
            <div className="title">
              <p>{dbData.title}</p>
            </div>
            <div className="detail">
              <div className="desc">
                <p>
                  <i>{dbData.detail}</i>
                </p>
              </div>
              <div className="ln"></div>
              <div className="price">${dbData.price}</div>
            </div>
            <div className="operations">
              {wishlist.some((x) => x._id === dbData._id) ? (
                <i
                  onClick={() => handleWishlist(dbData)}
                  class="fa-solid fa-heart red"
                ></i>
              ) : (
                <i
                  onClick={() => handleWishlist(dbData)}
                  class="fa-solid fa-heart"
                ></i>
              )}
              <i class="fa-regular fa-eye"></i>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Detail;
