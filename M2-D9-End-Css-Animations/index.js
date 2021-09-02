function onClickDeleteRow() {
    let row = document.querySelectorAll("tr")
    let deleteBtn = document.querySelectorAll("btn btn-primary")
    deleteBtn.addEventListener("click" , () => {
        row.remove()
    })
}

onClickDeleteRow()
