(function () {
    const quantityContainer = document.querySelector(".quantity");
    const minusBtn = quantityContainer.querySelector(".minus");
    const plusBtn = quantityContainer.querySelector(".plus");
    const inputBox = quantityContainer.querySelector(".input-box");
  
    updateButtonStates();
  
    quantityContainer.addEventListener("click", handleButtonClick);
    inputBox.addEventListener("input", handleQuantityChange);
  
    function updateButtonStates() {
      const value = parseInt(inputBox.value);
      minusBtn.disabled = value <= 1;
      plusBtn.disabled = value >= parseInt(inputBox.max);
    }
  
    function handleButtonClick(event) {
      if (event.target.classList.contains("minus")) {
        decreaseValue();
      } else if (event.target.classList.contains("plus")) {
        increaseValue();
      }
    }
  
    function decreaseValue() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : Math.max(value - 1, 1);
      inputBox.value = value;
      updateButtonStates();
      handleQuantityChange();
    }
  
    function increaseValue() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
      inputBox.value = value;
      updateButtonStates();
      handleQuantityChange();
    }
  
    function handleQuantityChange() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : value;
      console.log(value);
    }
  })()
  
  window.addEventListener("load",() => {
   
    const optionInner = document.querySelectorAll('.option_inner');
    optionInner.forEach(item =>{
      item.addEventListener('click',function(){
        let idSelected = this.id;
        localStorage.setItem("clothColour", idSelected);
        console.log(idSelected)
      })
    })
  })

  
  window.addEventListener("load",() => {
   
    const radioInput = document.querySelectorAll('.radio-input');
    radioInput.forEach(item =>{
      item.addEventListener('click',function(){
        let idSelected = this.id;
        localStorage.setItem("clothSize",idSelected);
        console.log(idSelected)
        
      })
    })
  })

function toggle(){
var x=document.getElementsByClassName("message");

if (x.style.display==="none"){

  x.style.display="block";

}

else{
  x.style.display="none";
}

}