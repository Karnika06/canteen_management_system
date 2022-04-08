import "./ViewItem.css"
import { getFooditem } from "../../actions/foodAction";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";


function ViewItem() {

  const dispatch = useDispatch();

  const { loading, error, fooditems, fooditemCount } = useSelector(
    (state) => state.fooditems
  );

  useEffect(() => {

    dispatch(getFooditem());
    
    console.log("start", fooditems);
    
  }, [dispatch]);

  let i = 1
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
        <NavLink
              exact
              activeClassName="active_class"
              to="/admin/additem"
            >
          <button className="btn btn-primary">Add item</button>
          </NavLink>
        </div>

        {/* <div className="menuItemContainer">
          {fooditems && fooditems.map((data) => (
              <MenuItemCard
                key={data._id}
                itemId={data._id}
                imgSrc={data.food_images[0].url}
                name={data.food_name}
                price={data.food_price}
                desc={data.food_description}
                qty={data.food_quantity}
              />
            ))} */}

        <table class="table">
          
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">Image</th>
              <th scope="col">Food name</th>
              <th scope="col">Food price</th>
              <th scope="col">Quantity</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          
          {fooditems && fooditems.map((data) => (
            
            <tr className="table-row">
              <th scope="row">{i++}</th>
              <td className="image-container">
                <img src={data.food_images[0].url}
                alt="food"/>
              </td>
              <td>{data.food_name}</td>
              <td>{data.food_price}</td>
              <td>{data.food_quantity}</td>
              <td className="view-edit-delete">
                <button className="btn btn-success">
                  <i class="fas fa-eye"></i>
                </button>
                <button className="btn btn-primary">
                  <i class="fas fa-pen"></i>
                </button>
                <button className="btn btn-danger">
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewItem