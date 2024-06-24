
const input = document.querySelector('#input-time');
setInterval(function(){
    const time = new Date()
    input.innerHTML = time.toLocaleTimeString();
    console.log(input);
},1000)