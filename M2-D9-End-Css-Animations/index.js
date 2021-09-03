/* let removeButtons = document.getElementsByClassName("del");

Array.from(removeButtons).forEach((removeButton) => {
  removeButton.addEventListener("click", () => {
    removeButton.parentNode.parentNode.remove();
  });
}); */


function onClickRemove() {
  let btn = document.querySelectorAll(".del")
  console.log(btn)
  let row = document.querySelectorAll(".effect-hover")
  console.log(row)
  for (let i = 0; i < row.length; i++) {
    btn[i].addEventListener("click" , () =>{
      row[i].remove()
    })
  }
}

onClickRemove()