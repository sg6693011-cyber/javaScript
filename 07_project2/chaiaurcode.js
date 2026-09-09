const form=document.querySelector('form');
// const height=parseInt(document.querySelector('#height').value)
// this above use case will give you empty value
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value) //.value string value dega es liye use parseInt karna pada h
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML='Please give a valid height';
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML='Please give a valid weight';
    }
    else{
        const bmi=(weight/((height*height)/10000).toFixed(2))
        // show the results
        results.innerHTML = `<span>${bmi}</span>`;
    }
})