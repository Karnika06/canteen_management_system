import React from "react";
import "./AddItem.css";

function AddItem() {
  return (
      <div className="AddItemForm">
          <div className ="register">
          <h2>ADD FOOD</h2>
          <div className="form-row">
                <label className="form-label">Food name</label>
                <input className="form-control"/>
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
