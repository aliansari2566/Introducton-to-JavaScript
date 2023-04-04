//event listener

let x = (e)=>{

    alert("hi from 1 ");
}
let y = (e)=>{

    alert("hi from 2 ");
}


btn.addEventListener('click' , x);
btn.addEventListener('click' , y);

let a = prompt("enter your fav number ");

//removeEvent listener tbhi kam krta hai jb apka function object same ho 




if(a=='2'){

    btn.removeEventListener('click' , x)
}