import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./AddItem.css";

function AddItem() {

  const navigate = useNavigate();

  const { loading, error, isAuthenticated, User } = useSelector(
    (state) => state.user
  );

  const [foodItem, setFoodItem] = useState({
    food_name: "",
    food_price: "",
    food_quantity: "",
    food_itemId: "",
    food_image: "",
  });

  const [foodImageFile, setFoodImageFile] = useState("")

  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  let name, value, file;

  useEffect(() => {
    if(foodItem.food_image){
//posting data to backend
const user = User._id;

const {
  food_name,
  food_description,
  food_price,
  food_quantity,
  food_itemId,
  food_image,
} = foodItem;
 fetch("http://localhost:4000/api/v1/admin/fooditem/new", {
  method: "post",
  headers: {
    authorization: User.token,
    "Content-Type": "application/json",
  },
  cookies: User,

  body: JSON.stringify({
    food_name,
    food_price,
    food_description,
    food_quantity,
    food_itemId,
    food_image,
    user,
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    if(data.success == true){
      alert("Food Item added!!");
    }else{
      alert("Try again!! Food item isn't added!!")
    }
        navigate('/admin/viewitems');
  })
  .catch((err) => {
    console.log(err);
  });
    }
  },[foodItem.food_image])

  const PostData = async (e) => {
    //e.preventDefault();
    //generating image url and storing image to cloudinary
    const data = new FormData();
    data.append("file", foodImageFile);
    data.append("upload_preset", "digital-bhojnalaya");
    data.append("cloud_name", "digitalbhojnalayait15");
    await fetch(
      "https://api.cloudinary.com/v1_1/digitalbhojnalayait15/image/upload",
      {
        method: "post",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoodItem({ ...foodItem, food_image: data.url });
        
      })
      .catch((err) => {
        console.log(err);
      });

    
  };
  const handleInput = (e) => {
    //console.log(e);
    name = e.target.name;
    if (name === "foodImageFile") {
      file = e.target.files[0];
      console.log(file);
      setFoodImageFile( file );
    } else {
      value = e.target.value;
      setFoodItem({ ...foodItem, [name]: value });
      
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(foodItem));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(errors);

    if (Object.keys(errors).length === 0 && isSubmit) {
      //postData
      //console.log(User.token)
      //console.log(isAuthenticated)
      if (isAuthenticated) PostData();
    }
  }, [errors]);

  const validate = () => {
    const errors = {};
    const nameRegex = /^[a-zA-Z\s]{3,20}$/i;
    const categoryRegex = /[a-z]$/i;
    const onlyNumRegex = /^[1-9][0-9]*$/;

    if (!foodItem.food_name) {
      errors.food_name = "Food name is required!";
    } else if (!nameRegex.test(foodItem.food_name)) {
      errors.food_name =
        "Name should have more than 2 character and include only letters";
    }

    if (!foodItem.food_description) {
      errors.food_description = "Food description is required!";
    }

    if (!foodItem.food_price) {
      errors.food_price = "Food price is required!";
    } else if (!onlyNumRegex.test(foodItem.food_price)) {
      errors.food_price =
        "Only numbers are allowed and number should not start with 0.";
    }

    if (!foodItem.food_quantity) {
      errors.food_quantity = "Food quantity is required!";
    } else if (!onlyNumRegex.test(foodItem.food_quantity)) {
      errors.food_quantity =
        "Only numbers are allowed and number should not start with 0.";
    }

    if (!foodItem.food_itemId) {
      errors.food_itemId = "Food category is required!";
    } else if (
      !categoryRegex.test(foodItem.food_itemId) &&
      foodItem.food_itemId.length < 4
    ) {
      errors.food_itemId =
        "Minimum 3 characters and only lower case letters are allowed.";
    }

    if (!foodImageFile) {
      errors.food_image = "Food image is required!";
    }

    return errors;
  };

  return (
    <div className="main">
      <div className="form_container">
        <h2>Add Item</h2>
        <table className="form_table">
          <tbody>
            <tr className="form-row">
              <td className="form-label">Food Name</td>
              <td>
                <input
                  className="form-input"
                  name="food_name"
                  type="text"
                  placeholder="Enter food name"
                  value={foodItem.food_name}
                  onChange={handleInput}
                ></input>
              </td>
              {errors.food_name && (
                <p className="validation-msgs">{errors.food_name}</p>
              )}
            </tr>

            <tr className="form-row">
              <td className="form-label">Food Description</td>
              <td>
                <textarea
                  className="form-input"
                  name="food_description"
                  type="text"
                  placeholder="Enter food description"
                  value={foodItem.food_description}
                  onChange={handleInput}
                ></textarea>
              </td>
              {errors.food_description && (
                <p className="validation-msgs">{errors.food_description}</p>
              )}
            </tr>

            <tr className="form-row">
              <td className="form-label">Food Price</td>
              <td>
                <input
                  className="form-input"
                  name="food_price"
                  type="text"
                  placeholder="Enter food price"
                  value={foodItem.food_price}
                  onChange={handleInput}
                ></input>
              </td>
              {errors.food_price && (
                <p className="validation-msgs">{errors.food_price}</p>
              )}
            </tr>
            <tr className="form-row">
              <td className="form-label">Food Quantity</td>
              <td>
                <input
                  className="form-input"
                  name="food_quantity"
                  type="text"
                  placeholder="Enter food quantity"
                  value={foodItem.food_quantity}
                  onChange={handleInput}
                ></input>
              </td>
              {errors.food_quantity && (
                <p className="validation-msgs">{errors.food_quantity}</p>
              )}
            </tr>
            <tr className="form-row">
              <td className="form-label">Food Category</td>
              <td>
                <input
                  className="form-input"
                  name="food_itemId"
                  type="text"
                  placeholder="Enter food category"
                  value={foodItem.food_itemId}
                  onChange={handleInput}
                ></input>
              </td>
              {errors.food_itemId && (
                <p className="validation-msgs">{errors.food_itemId}</p>
              )}
            </tr>
            <tr className="form-row">
              <td className="form-label">Food Image</td>
              <td>
                <input
                  className="form-input"
                  name="foodImageFile"
                  type="file"
                  placeholder="Upload food image"
                  onChange={handleInput}
                />
              </td>
              {errors.foodImageFile && (
                <p className="validation-msgs">{errors.foodImageFile}</p>
              )}
            </tr>
          </tbody>
        </table>
        <div className="add_btn mt-2">
          <button className="btn-feedback" onClick={handleSubmit} required>
            Add item
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
