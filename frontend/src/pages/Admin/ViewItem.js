import "./ViewItem.css"
import { getFooditem } from "../../actions/foodAction";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Create, Delete, RemoveRedEye } from "@mui/icons-material";


function ViewItem() {

  const dispatch = useDispatch();
  
  const { loading, error, isAuthenticated, User } = useSelector(
    (state) => state.user
  );
  const {  fooditems, fooditemCount } = useSelector(
    (state) => state.fooditems
  );


  useEffect(() => {

    dispatch(getFooditem());
    
    console.log("start", fooditems);
    
  }, [dispatch]);

  const deleteItem = async (id) => {

    await axios.delete(`http://localhost:4000/api/v1/admin/fooditem/${id}`,
    {
      headers: {
        authorization: User.token,
        "Content-Type": "application/json" 
      }
    }).then((res) =>{
        console.log(res.data)
        dispatch(getFooditem());
        alert("Item deleted Successfully!!")
      }).catch(err => {
        console.log(err)
      })

    }
  

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
                <img src={data.food_image}
                alt="food"/>
              </td>
              <td>{data.food_name}</td>
              <td>{data.food_price}</td>
              <td>{data.food_quantity}</td>
              <td className="view-edit-delete">
              <NavLink
              exact
              activeClassName="active_class"
              to={`/admin/view-single-item/${data._id}`}
            >
          
                <button className="btn btn-success">
                <RemoveRedEye/>
                </button>
                </NavLink>
                <NavLink
              exact
              activeClassName="active_class"
              to={`/admin/edititem/${data._id}`}
            >
                <button className="btn btn-primary">
                  <Create/>
                </button>
                </NavLink>

                <button className="btn btn-danger" onClick={() => deleteItem(data._id)}>
                  <Delete/>
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