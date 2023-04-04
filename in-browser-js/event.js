let x = (e)=>{

    alert("hi from 1 ");
}
let y = (e)=>{

    alert("hi from 2 ");
}


btn.addEventListener('click' , x);
btn.addEventListener('click' , y);

let a = prompt("enter your fav number ");

if(a=='2'){

    btn.removeEventListener('click' ,(e)=>{

        alert("hi from 1 ");
    })
}