import React, { useEffect } from "react";
import "../css/MenuSection.css";
import CategoryCard from "./CategoryCard";
import SubMenuContainer from "./SubMenuContainer";
import { category, Items } from "./../../../Data/Category";
import MenuItemCard from "./MenuItemCard";
import { useState } from "react";
import { getFooditem } from "../../../actions/foodAction";
import { useSelector, useDispatch } from "react-redux";
import FoodCard from "./Food.js";

export default function MenuSection() {


  const dispatch = useDispatch();

const { loading, error, fooditems, fooditemCount } = useSelector(
  (state) => state.fooditems
);


useEffect(() => {

  dispatch(getFooditem());
  
  console.log("start", fooditems);
  //console.log(isMainData);
}, [dispatch]);
  
  
const [isMainData, setMainData] = useState(fooditems);

/*useEffect(() => {
  console.log(fooditems);
  if(fooditems.length !== 0)
    setMainData(fooditems);
})*/

  useEffect(() => {

    //setMainData(fooditems);

    //CategoryCard toggling
    const categoryCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      categoryCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    categoryCards.forEach((n) =>
      n.addEventListener("click", setMenuCardActive)
    );
  }, [isMainData]);

  //set main data according to category
  const setData = (itemId) => {
  
    if (itemId === "all") setMainData(fooditems);
    else setMainData(fooditems.filter((element) => element.food_itemId === itemId));
  };

  return (
    <>
      <div className="menuContainer">
        <div className="menuCard">
          <SubMenuContainer name={"Menu Category"} />
        </div>
        <div className="rowContainer">
          {category &&
            category.map((data) => (
              <div key={data.id} onClick={() => setData(data.itemId)}>
                <CategoryCard
                  imgSrc={data.imgSrc}
                  name={data.name}
                  isActive={data.id === 0 ? true : false}
                />
              </div>
            ))}
        </div>
        <div className="menuItemContainer">
          {isMainData.map((data) => (
              <MenuItemCard
                key={data._id}
                itemId={data._id}
                imgSrc={data.food_images[0].url}
                name={data.food_name}
                price={data.food_price}
                desc={data.food_description}
                qty={data.food_quantity}
              />
            ))}

          {/* {isMainData &&
            isMainData.map((data) => (
              <MenuItemCard
                key={data.id}
                itemId={data.id}
                imgSrc={data.imgSrc}
                name={data.name}
                price={data.price}
                desc={data.desc}
                qty={data.qty}
              />
            ))} */}

          {/* {fooditems && fooditems.map((fooditem) => (
          <FoodCard food={fooditem} />
        ))}; */}
        </div>
      </div>
    </>
  );
}
