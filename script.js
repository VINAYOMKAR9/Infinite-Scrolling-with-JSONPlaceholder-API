let container = document.querySelector('#container')
let url = 'https://jsonplaceholder.typicode.com/photos'
let page = 1
let flag = false;
getData(url,page)
async function getData(url,page){
try{
    let res =await fetch(`${url}?_page=${page}&_limit=10`)
    let data =await res.json();
    console.log(data);
    displayData(data)
}
catch(err){
    console.log('Error in code');
}
}

function displayData(data){
    data.map((el,ind)=>{
        let card = document.createElement('div')

        let url = document.createElement('img')
        url.src= el.url

        let title = document.createElement('p')
        title.textContent= el.title

        card.append(url,title);
        container.append(card)

    })
    flag = true 
}

window.addEventListener('scroll',()=>{
   let clientHeight= document.documentElement.clientHeight
   let scrollHeight= document.documentElement.scrollHeight
   let scrollTop= document.documentElement.scrollTop
    console.log(clientHeight,scrollHeight,scrollTop);

    if(Math.ceil(scrollHeight-clientHeight)<=Math.ceil(scrollTop)){
        console.log('bottom');
        page++;
        getData(url,page)
        flag = false
    }
})