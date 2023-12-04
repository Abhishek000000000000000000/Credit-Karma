import React, { useContext, useEffect, useState } from "react";
// import Productlist from "./Productlist";
import "./Products.css";
// import{
//   AuthContext, initialState
// }from  "../Context/AuthContext/AuthContextProvider";
<link
  rel="shortcut icon"
  href="/Images/favicons/favicon.ico"
  type="image/x-icon"
></link>;

const Products = () => {
  const [data, setData] = useState([]);
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [Houseplant_Sets, SetHouseplant_Sets] = useState(false);
  const [Houseplants, SetHouseplants] = useState(false);
  const [Ceramic_Pots, SetFlowerpot] = useState(false);
  const [Soil, SetSoil] = useState(false);
  const [sort, setSort] = useState("");
  //   const{authState,setAuthState}=useContext(AuthContext);
  //   const{cart}=authState;

  //   const handleClick=()=>{
  //  setAuthState({...initialState,cart:[...cart,item]})
  //   }

  let getapi = (apiUrl) => {
    const categories = [];

    if (Houseplant_Sets) categories.push("Houseplant Sets");
    if (Houseplants) categories.push("Houseplants");
    if (Ceramic_Pots) categories.push("Ceramic Pots");
    if (Soil) categories.push("Soil");

    if (categories.length > 0) {
      apiUrl += `?category=${categories.join("&category=")}`;
    }

    if (sort) {
      apiUrl += `?_sort=price&_order=${sort === "asc" ? "asc" : "desc"}`;
    }
    return apiUrl;
  };

  const fetchData = async () => {
    try {
      let apiUrl = "https://plant2.onrender.com/products";
      let newapiUrl = getapi(apiUrl);

      const res = await fetch(newapiUrl);

      let jsdata = await res.json();
      setData(jsdata);
      console.log(jsdata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [Houseplant_Sets, Soil, Houseplants, Ceramic_Pots, sort]);

  return (
    <>
      <div>
        <div>
          <h1 className="heading">Catalog</h1>
          <img
            src="./images/catalog_underline.png"
            alt=""
            id="catalog_underline"
          ></img>
        </div>

        <div className="container">
          <div className="left">
            <div id="applied_filters_sort">
              <p id="reset_filters">
                Reset Filters
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M4 6H20M7 12H17M9 18H15"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </p>
            </div>

            <div className="sortFil">
              <form>
                <div class="selectOne">
                  <input
                    type="checkbox"
                    checked={isCheckedAll}
                    onChange={(e) => {
                      setIsCheckedAll(e.target.checked);
                      setFiltering(e.target.checked);
                      setFiltering(e.target.checked);
                      setFiltering(e.target.checked);
                      setFiltering(e.target.checked);
                    }}
                  />
                  <label for="">Select All</label>
                  <br />
                  <input
                    type="checkbox"
                    checked={Houseplant_Sets}
                    onChange={(e) => {
                      SetHouseplant_Sets(e.target.checked);
                    }}
                  />
                  <label for="">Houseplant Sets</label>
                  <br />
                  <input
                    type="checkbox"
                    checked={Ceramic_Pots}
                    onChange={(e) => {
                      SetFlowerpot(e.target.checked);
                    }}
                  />
                  <label for="">Ceramic Pots</label>
                  <br />
                  <input
                    type="checkbox"
                    checked={Soil}
                    onChange={(e) => {
                      SetSoil(e.target.checked);
                    }}
                  />
                  <label for="">Soil</label>
                  <br />
                </div>
              </form>
              <select id="sorting" onChange={(e) => setSort(e.target.value)}>
                <option value="">Sorting By</option>
                <option value="atoz">A - Z</option>
                <option value="ztoa">Z - A</option>
                <option value="asc">Price, Low to High</option>
                <option value="desc">Price, High to Low</option>
              </select>
            </div>
          </div>
          {/* //right */}
          <div className="right">
            <div className="card-list">
              {Array.isArray(data) &&
                data
                  .sort((a, b) => {
                    const priceA = parseInt(a.price, 10);
                    const priceB = parseInt(b.price, 10);

                    if (priceA < priceB) {
                      return sort === "asc" ? -1 : 1;
                    } else if (priceA > priceB) {
                      return sort === "asc" ? 1 : -1;
                    } else {
                      return 0;
                    }
                  })
                  .map((item) => (
                    <div className="card">
                      <>
                        <div className="card-img">
                          <img id="bgimg" src={item.img} alt={item.name}></img>
                        </div>
                        <div className="card-body">
                          <h2 className="card-title">{item.name}</h2>
                          <p>{item.category}</p>
                          <p className="card-price">Price:- {item.price}</p>
                          <button
                            className="card-link"
                            // onClick={()=>{handleClick()}}
                          >
                            Add To Cart
                          </button>
                        </div>
                      </>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
