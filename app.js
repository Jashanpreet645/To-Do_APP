let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let input = document.querySelector('input');

btn.addEventListener('click', function(){
    let item = document.createElement('li');
    item.innerText = input.value;
    ul.appendChild(item);

    let delbtn = document.createElement('button');
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);

    console.log(input.value);
    input.value = "";
})

ul.addEventListener('click', function(event){
    if(event.target.nodeName == "BUTTON"){
        let target = event.target.parentElement;
        target.remove();
    }
})
// let delbtns = document.querySelectorAll(".delete");
// for (delbtn of delbtns) {
//     delbtn.addEventListener('click', function(){
//         let par = this.parentElement;
//         console.log(par);
//     });
// }