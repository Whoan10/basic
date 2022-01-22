const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=dark-mode]")
  

const initialColors = {
  bg: window.getComputedStyle(html).getPropertyValue("--bg")
}

const changeColors = (colors) => {

}

checkbox.addEventListener("change", ({target}) =>{
  target.checked ? changeColors(): changeColors()
})

  function noturno(){
    

  }
 