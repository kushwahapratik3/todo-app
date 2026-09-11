let arr=[{work: 'buy milk',date: '2026-11-12'},{work: 'buy cake',date: '11-11-2017'}];
display()
function addTodo(){
    let todoContainer=document.querySelector("#todo-item");
    let dateContainer=document.querySelector('#date')
    arr.push({work: todoContainer.value,date: dateContainer.value});
    console.log(arr);
    todoContainer.value="";
    dateContainer.value="";
    display();
}
function display(){
    let adder=document.querySelector('#collection');
    adder.innerHTML='';
    for(let i=0;i<arr.length;i++){
        adder.innerHTML+=`<p class='item'>${arr[i].work}</p>
         <p class='date'>${arr[i].date}</p>
         <button class='delete-button' onclick='deleteItem(${i})'>delete</button><br>`;
    }
    
}
function deleteItem(i){
    arr.splice(i,1);
    display();
}