import React, { useEffect } from "react";
import "../css/MenuSection.css";
import CategoryCard from "./CategoryCard";
import SubMenuContainer from "./SubMenuContainer";
import { category, Items } from "./../../../Data/Category";
import MenuItemCard from "./MenuItemCard";
import { useState } from "react";

export default function MenuSection() {
  const [isMainData, setMainData] = useState(Items);

  useEffect(() => {
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
    if (itemId === "all") setMainData(Items);
    else setMainData(Items.filter((element) => element.itemId === itemId));
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
          {isMainData &&
            isMainData.map((data) => (
              <MenuItemCard
                key={data.id}
                itemId={data.id}
                imgSrc={data.imgSrc}
                name={data.name}
                price={data.price}
                desc={data.desc}
              />
            ))}
        </div>
      </div>
    </>
  );
}
