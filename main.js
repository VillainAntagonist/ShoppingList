const SEARCH = document.forms['search-item'].querySelector('input');
SEARCH.addEventListener('keyup' ,(e)=>{
    let text =e.target.value.toLowerCase();
    let groceryList = document.querySelector('#grocery-list ul');
    let groceries =groceryList.getElementsByTagName('li');
    /// To make array from HTMLcollection also possible to use array destruction
    // let a =[...groceries];
    let groceriesArray= Array.from(groceries);
    groceriesArray.forEach((grocery)=>{

        let groceryName = grocery.firstElementChild.textContent;
        let groceryNameLower = groceryName.toLowerCase();
        if(groceryNameLower.indexOf(text) ===-1){
            grocery.style.display='none';
        } else {
            grocery.style.display='block';
        }
    })


})

let checkBox=document.querySelector('#hide')
checkBox.addEventListener('change', (e)=>{
    let groceryList=document.getElementById('grocery-list');
    groceryList.classList.toggle('hidden');
})


let formAdd = document.getElementById('add-item');
formAdd.addEventListener('submit', (e)=>{
   e.preventDefault();
   let text=formAdd.querySelector('input').value;
   if(text.length !==0) {
       formAdd.querySelector('input').value = null;
       let li = document.createElement('li');
       let groceryItem = document.createElement('span');
       let deleteButton = document.createElement('span');
       li.appendChild(groceryItem);
       li.appendChild(deleteButton);
       groceryListUL.appendChild(li);
       groceryItem.textContent = text;
       deleteButton.textContent = 'Delete';
       groceryItem.classList.add('item');
       deleteButton.classList.add('delete');
       if (groceryListUL.childElementCount !== 0) {
           document.getElementById('listHeading').classList.remove('hidden');
       }
   }
});


let groceryListUL= document.querySelector('#grocery-list ul');
groceryListUL.addEventListener('click', remove)
function remove(e){
    let target =e.target;
    if(target.className ==='delete'){
        let li =target.parentElement;
        li.remove();
        if(groceryListUL.childElementCount ===0){
            document.getElementById('listHeading').classList.toggle('hidden');
        }
    }
}
    //**************TABS******************

let headings = document.querySelector('.heading');
let panels = document.querySelectorAll('.panel');
let selectedPanel = null;
headings.addEventListener('click', (e)=> {
    let target = e.target;
    let dataAtribute = e.target.dataset.clicked;

    if(target.tagName ==='LI'){
        if(selectedPanel !== null){
            selectedPanel.classList.toggle('selected');
        }
        selectedPanel = target;
        selectedPanel.classList.toggle('selected');

        let targetPanel =document.querySelector(dataAtribute);
        panels.forEach(panel=>{
            if (panel === targetPanel){
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    }
})

let answerButton = document.getElementById('showAnswer');
answerButton.addEventListener('click', answer);
function answer(){
    document.getElementById('answer').classList.add('show');
    document.getElementById('answer').textContent ='AN IMPASTA';
    answerButton.style.display ='none';
}
