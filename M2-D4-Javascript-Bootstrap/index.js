/* The features are the following:
    - The user should be able to add a list of names, find a way to get the user input and fill a list with the new name.
    - The user should be able to set the number of teams he wants, so that they will be generated. A team is just another list to be displayed.
    - An "Assign" button will be required in order to launch the team generation functionality.
    - Every time the user clicks on the "Assign" button, a random name is placed in a team and removed from the initial list.
    - Each team should be inside a "column" to be responsive.
    - [EXTRA] Create a button to remove a user from a team, and putting him back in the main list, waiting to be reassigned.
    - [EXTRA] Create a button to reset the state of the app. */

let listNames = []

function fillListOfNames() {
    let userInput = document.getElementsByClassName("sumbit-name")[0]
    let userInnerText = document.getElementsByClassName("user-input")[0]
    let listWaiting
    let ulFather = document.getElementsByClassName("waiting-room")[0]
    userInput.addEventListener("click" , () =>{
        listNames.push(userInnerText.value)
        listWaiting = document.createElement("li")
        listWaiting.classList.add("list-group-item")
        listWaiting.innerText = listNames[listNames.length - 1]
        ulFather.appendChild(listWaiting)
    })
}

fillListOfNames()

let numberOfTeams

function selectedNum () {
    let userNum = document.getElementsByClassName("user-num")[0]
    let userNumButton = document.getElementsByClassName("submit-num")[0]
    userNumButton.addEventListener("click" , () =>{
        numberOfTeams = userNum.value
    })
}

selectedNum()


let assign = document.getElementsByClassName("submit-team")[0]

assign.addEventListener("click" , () =>{
    let randomizedIndex = generateRandoms(listNames.length)
    let containerFather = document.getElementsByClassName("teams-col")[0]
    let peopleInTeam = listNames.length / numberOfTeams
    if (listNames.length % numberOfTeams === 0) {
        for (let i = 0; i < numberOfTeams; i++) {
            let newRowAssigned = document.createElement("div")
            newRowAssigned.classList.add("list-of-team")
            for (let j = 0; j < peopleInTeam; j++) {
                let colAssigned = document.createElement("p")
                colAssigned.innerText = listNames[randomizedIndex[j]]
                newRowAssigned.appendChild(colAssigned)
                if (j/2 === listNames.length / 2) {
                    break
                }
            }
            containerFather.appendChild(newRowAssigned)
        }
    } else {
        for (let i = 0; i < numberOfTeams + 1; i++) {
               
        }
    }
})

const generateRandoms = (max) => {
    let arr = [];
    arr.push(Math.floor(Math.random() * listNames.length));
    for (; ;) {
      let rnd = Math.floor(Math.random() * listNames.length);
      let flg = false;
      for (let i = 0; i < arr.length; i++) {
        if (rnd !== arr[i]) {
          flg = true;
        } else {
          flg = false;
          break;
        };
      }
      if (flg)
        arr.push(rnd);
      flg = false;
      if (arr.length === max) break;
    }
    return arr;
}