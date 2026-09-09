const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")
buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target);
        if(e.target.Id==='gray'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.Id==='white'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.Id==='blue'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.Id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }
    })
})