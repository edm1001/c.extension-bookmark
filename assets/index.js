
let myLeads = [] 
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem(myLeads))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage // set myLeads to its value
    render(myLeads)
} 

const tabs = [
    {url:"www.linkedin.com/in/edmer-valencia-080414227"}
]

tabBtn.addEventListener("click", function(){   
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {          
        myLeads.push(tabs[0].url)
        localStorage.setItem("url", JSON.stringify(myLeads)) 
        render(myLeads);
    })
})


function render(leads) {   
    let listItems = " "
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
        </li>`
        // `` allows html to be written cleaner with less ''""

    }
    ulEl.innerHTML = listItems //DOM manipulation has a cost    
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = [] //set it to an empty array
    render(myLeads)
})



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = "" //resets the input to blank after saving
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) 
    render(myLeads);
    console.log(localStorage.getItem("myLeads"))
})

// const email = `Hey ${recipient}! How is it going? Cheers Per` -example of template literals

// const li = document.createElement("li")
// li.textContent(myLeads[i])
// ulEl.append(li)    

// const buy = document.getElementById("buy-btn")
// buy.innerHTML = "<button onclick='buyitem()'>Buy!</button>"
// function buyitem() {
//     buy.innerHTML += '<p>Thank You For Purchasing</p>'
// } //renders the p tag when u click buy-btn

// function getFirst(arr) {
//     return arr[0]
// }
// let firstCard = getFirst([0,10, 8]) 
// console.log(firstCard)
//uses a function getFirst() to get the first item in the array of firstCard
