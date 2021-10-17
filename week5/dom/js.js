const input = document.getElementById("favchap").value;

function addtoArray(input) {
        let favScrpt = [];
        favScrpt.push("input"); 
    return favScrpt;
};

function printList(array){
    favScrpt.forEach((item) => {
        let list = document.createElement("li");
        li.innerHTML = item;
        list.appendChild(li);
    });
};

const button = document.getElementById("submit")
if(button){
    button.addEventListener("click", addtoArray);
    button.addEventListener("click",  printList);
};


