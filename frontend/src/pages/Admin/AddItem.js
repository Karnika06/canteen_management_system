import React from "react";
import "./AddItem.css";

function AddItem() {
  return (
    <div className='main'>
    <div className='form_container'>
        <h2>Add Item</h2>
        <table className="form_table">
      <tbody>
        <tr className='form-row'>
          <td className="form-label">Food Name</td>
          <input className='form-input' type="text" placeholder='Enter food name'></input>
        </tr>

        <tr className='form-row'>
        <td className="form-label">Food Price</td>
        <input className='form-input' type="number" placeholder='Enter food price'></input>
        </tr>
        <tr className='form-row'>
        <td className="form-label">Food Quantity</td>
        <input className='form-input' type="number" placeholder='Enter food quantity'></input>
        </tr>
        <tr className='form-row'>
        <td className="form-label">Food Category</td>
        <input className='form-input' type="text" placeholder='Enter food category'></input>
        </tr>
        <tr className='form-row'>
        <td className="form-label">Food Image</td>
        <input className='form-input' type="file" placeholder='Upload food image'></input>
        </tr>
      </tbody>
    </table>
    <div className="add_btn mt-2">
      <button className="btn-feedback">Add item</button>
    </div>
        
    </div>
    </div>
  );
}

export default AddItem;

{
  /* <script>
                    const wrapper = document.querySelector(".wrapper");
                    const fileName = document.querySelector(".file-name");
                    const defaultBtn = document.querySelector("#default-btn");
                    const customBtn = document.querySelector("#custom-btn");
                    const cancelBtn = document.querySelector("#cancel-btn i");
                    const img = document.querySelector("img");
                    let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
                    function defaultBtnActive(){
                      defaultBtn.click();
                    }
                    defaultBtn.addEventListener("change", function(){
                      const file = this.files[0];
                      if(file){
                        const reader = new FileReader();
                        reader.onload = function(){
                          const result = reader.result;
                          img.src = result;
                          wrapper.classList.add("active");
                        }
                        cancelBtn.addEventListener("click", function(){
                          img.src = "";
                          wrapper.classList.remove("active");
                        })
                        reader.readAsDataURL(file);
                      }
                      if(this.value){
                        let valueStore = this.value.match(regExp);
                        fileName.textContent = valueStore;
                      }
                    });
                 </script> */
}
