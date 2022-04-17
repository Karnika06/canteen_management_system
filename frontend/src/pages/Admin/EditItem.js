import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import "./AddItem.css";


function EditItem() {

    const {id} = useParams("");
    console.log(id)

  const [ foodItem, setFoodItem] = useState({
    food_name:"", food_price:"" , food_quantity:"" , food_itemId:"", food_image:""});

const [errors, setErrors] = useState({})
const [isSubmit, setIsSubmit] = useState(false);
let name, value, file;

const PostData = async (e) => {
//e.preventDefault();
  //generating image url and storing image to cloudinary
  const data = new FormData()
  data.append("file", foodItem.food_image);
  data.append("upload_preset","digital-bhojnalaya");
  data.append("cloud_name", "digitalbhojnalayait15");
  fetch("https://api.cloudinary.com/v1_1/digitalbhojnalayait15/image/upload",{
    method:"post",
    body: data
  })
  .then(res=>res.json())
  .then(data => {
    console.log(data)
    setFoodItem({...foodItem, food_image: data.url})
  })
  .catch(err => {
    console.log(err);
  })

  //posting data to backend
  const { food_name, food_description, food_price, food_quantity, food_itemId, food_image} = foodItem;
  await fetch(`http://localhost:4000/api/v1/admin/fooditem/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json" 
    },

    body:JSON.stringify({
      food_name, food_price, food_description, food_quantity, food_itemId, food_image
    })
  }).then(res => res.json())
    .then(data => {
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
  }
      const handleInput = (e) => {
      //console.log(e);
        name = e.target.name;
        if(name === 'food_image'){
            file = e.target.files[0];
            console.log(file);
            setFoodItem({...foodItem, [name]: file})
        }else{

          value = e.target.value;
          setFoodItem({...foodItem, [name]:value});
        }
      }

      const handleSubmit  = (e) => {
        e.preventDefault();
        setErrors(validate(foodItem));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(errors);
        
        if(Object.keys(errors).length === 0 && isSubmit){
            console.log(foodItem);
            //postData
            PostData();
        }
    },[errors]);

    const validate = () => {
      const errors = {};
      const nameRegex = /^[a-zA-Z\s]{3,20}$/i ;
      const categoryRegex = /[a-z]$/i;
      const onlyNumRegex = /^[1-9][0-9]*$/;
      
      if(!foodItem.food_name){
        errors.food_name = "Food name is required!";
    }else if(!nameRegex.test(foodItem.food_name)){
        errors.food_name = "Name should have more than 2 character and include only letters";
    }

    if(!foodItem.food_description){
      errors.food_description = "Food description is required!";
  }
      
      if(!foodItem.food_price){
          errors.food_price = "Food price is required!";
      }else if(!onlyNumRegex.test(foodItem.food_price)){
        errors.food_price = "Only numbers are allowed and number should not start with 0."
      }
      
      if(!foodItem.food_quantity){
          errors.food_quantity = "Food quantity is required!";
      }else if(!onlyNumRegex.test(foodItem.food_quantity)){
        errors.food_quantity = "Only numbers are allowed and number should not start with 0."
      }

      if(!foodItem.food_itemId){
        errors.food_itemId = "Food category is required!";
    }else if(!categoryRegex.test(foodItem.food_itemId) && foodItem.food_itemId.length < 4){
      errors.food_itemId = "Minimum 3 characters and only lower case letters are allowed."
    }

    if(!foodItem.food_image){
      errors.food_image = "Food image is required!";
  }
      
      return errors;
    }


  return (
    <div className='main'>
    <div className='form_container'>
        <h2>Update Item</h2>
        <table className="form_table">
      <tbody>
        <tr className='form-row'>
          <td className="form-label">Food Name</td>
          <input className='form-input' name='food_name' type="text" placeholder='Enter food name' value={foodItem.food_name}
                                onChange={handleInput}></input>
                                {errors.food_name && (<p className='validation-msgs'>{errors.food_name}</p>)}
        </tr>

        <tr className='form-row'>
          <td className="form-label">Food Description</td>
          <input className='form-input' name='food_description' type="text" placeholder='Enter food description' value={foodItem.food_description}
                                onChange={handleInput}></input>
                                {errors.food_description && (<p className='validation-msgs'>{errors.food_description}</p>)}
        </tr>

        <tr className='form-row'>
        <td className="form-label">Food Price</td>
        <input className='form-input' name='food_price' type="text" placeholder='Enter food price' value={foodItem.food_price}
                                onChange={handleInput}></input>
                                {errors.food_price && (<p className='validation-msgs'>{errors.food_price}</p>)}
        </tr>
        <tr className='form-row'>
        <td className="form-label">Food Quantity</td>
        <input className='form-input' name='food_quantity' type="text" placeholder='Enter food quantity' value={foodItem.food_quantity}
                                onChange={handleInput}></input>
                                {errors.food_quantity && (<p className='validation-msgs'>{errors.food_quantity}</p>)}
        </tr>
        <tr className='form-row'>
        <td className="form-label">Food Category</td>
        <input className='form-input' name='food_itemId' type="text" placeholder='Enter food category' value={foodItem.food_itemId}
                                onChange={handleInput}></input>
                                {errors.food_itemId && (<p className='validation-msgs'>{errors.food_itemId}</p>)}
        </tr>
        <tr className='form-row'>
        <td className="form-label">Food Image</td>
        <input className='form-input' name='food_image' type="file" placeholder='Upload food image' onChange={handleInput}/>
        {errors.food_image && (<p className='validation-msgs'>{errors.food_image}</p>)}
        </tr>
      </tbody>
    </table>
    <div className="add_btn mt-2">
      <button className="btn-feedback" onClick={handleSubmit} required>Update item</button>
    </div>
        
    </div>
    </div>
  );
}

export default EditItem;
