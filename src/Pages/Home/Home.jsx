import React from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products");
  };
  return (
    <div>
      <div className={styles.first}>
        <div className={styles.firstFirst}>
          <h1>Create a green paradise right at home</h1>
          <img src="images\home_page_images\bottom1effect.png" />
          <span>20% of the profit goes to help the UN Peace mission</span>
          <button
            onClick={() => {
              handleClick();
            }}
          >
            Catalog
          </button>
        </div>
        <div className={styles.firstSecond}>
          <img src="images\home_page_images\firstcrousal1 (1).jpg" />
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.secondFirst}>
          <div className={styles.item1}>
            <img src="images\home_page_images\secondcrousal (2).jpg" />
          </div>
          <div className={styles.item2}></div>
          <div className={styles.item3}>
            <img src="images\home_page_images\secondcrousal (3).jpg" />
          </div>
        </div>
        <div className={styles.secondSecond}>
          <h1>About Us</h1>
          <img src="images\home_page_images\bottom2effect.png" />
          <p>
            We are a store of indoor plants of various types in Kyiv. Hundreds
            of different types of plants from their very "birth", so they will
            definitely bring happiness, joy, love and comfort to your home.
          </p>
        </div>
      </div>
      <div className={styles.category}>
        <div>
          <div className={styles.heading}>Categories</div>
          <div className={styles.bottom_image}>
            <img src="images\home_page_images\bottom1effect.png" />
          </div>
        </div>
        <Link to="/products">Catalog</Link>
      </div>
      <div className={styles.third}>
        <div>
          <div>
            <img src="images\home_page_images\tile3 (1).webp" />
          </div>
          <div>
            <p>Houseplants</p>
            <div>
              <img
                src="images\home_page_images\arrow-right.svg"
                className={styles.arrow}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src="images\home_page_images\tile3 (3).jpg" />
          </div>
          <div>
            <p>Houseplants sets</p>
            <div>
              <img
                src="images\home_page_images\arrow-right.svg"
                className={styles.arrow}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src="images\home_page_images\tile3 (2).jpg" />
          </div>
          <div>
            <p>Flowerpot</p>
            <div>
              <img
                src="images\home_page_images\arrow-right.svg"
                className={styles.arrow}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src="images\home_page_images\tile3 (4).jpg" />
          </div>
          <div>
            <p>Soil and fertilizer</p>
            <div>
              <img
                src="images\home_page_images\arrow-right.svg"
                className={styles.arrow}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fourth}>
        <div>
          <div>
            <img src="images\home_page_images\firstcrousal1 (1).jpg" />
          </div>
          <div>
            <img src="images\home_page_images\firstcrousal1 (2).jpg" />
          </div>
        </div>
        <div>
          <h1 className={styles.heading}>Delivery & payment</h1>
          <div className={styles.fourthBottom}>
            <img src="images\home_page_images\bottom1effect.png" />
          </div>
          <p>
            We package our plants securely yet sustainably by reusing boxes,
            paper(newspapers).etc. Delivery is carried out to all citites of
            Ukraine, except for those occupied ones. Pickup is possible in Kyiv.
            We have full & partial prepayment by card and cash on delivery to
            make you fell completely secure. We have many testimonials from new
            and regular customers.
          </p>
        </div>
      </div>
      <div className={styles.category}>
        <div>
          <div className={styles.heading}>Find us on Instagram</div>
          <div className={styles.bottom_image}>
            <img src="Images/home_page_images/bottom1effect.png" />
          </div>
        </div>
        <a href="#" id={styles.more}>
          More Details
        </a>
      </div>
      <div className={styles.fifth}>
        <div>
          <img src="Images/home_page_images/follow (1).webp" />
        </div>
        <div>
          <img src="Images/home_page_images/follow (2).webp" />
        </div>
        <div>
          <img src="Images/home_page_images/follow (3).webp" />
        </div>
      </div>
    </div>
  );
};

export default Home;
