let container = document.querySelector('#container')
let url = 'https://jsonplaceholder.typicode.com/photos'
let page = 1
let flag = false; // when we scrooll at bottom its  invoke data before load to current data its a type of glitch to prevent this we using flag 
getData(url,page)

// Here we Fetching the data
async function getData(url,page){
try{
    let res =await fetch(`${url}?_page=${page}&_limit=10`)
    let data =await res.json();
    console.log(data);

    displayData(data) // invoke the  displayData function that display the data in webpage
}
catch(err){
    console.log('Error in code');
}
}

function displayData(data){  
    //this help to show the data in webpage its called mapping 
    data.map((el,ind)=>{
        let card = document.createElement('div')

        let url = document.createElement('img')
        url.src= el.url

        let title = document.createElement('p')
        title.textContent= el.title

        card.append(url,title);
        container.append(card)

    })
    flag = true  // after  load the whole page we change the flag to true  
}



// we provide addEventListener here when we scroll this fuction will run
window.addEventListener('scroll',()=>{
   let clientHeight= document.documentElement.clientHeight  // its the visible  height of data that see to user
   let scrollHeight= document.documentElement.scrollHeight // its the total height of data
   let scrollTop= document.documentElement.scrollTop // its the  height of data that not visible to user or remaining height
    console.log(clientHeight,scrollHeight,scrollTop);

    if(Math.ceil(scrollHeight-clientHeight)<=Math.ceil(scrollTop)){   // Its height calculation like (10 - 4) <= (6)  where 10 is total height , 4 is visible height and 6 is remaining height and in this equation we comapreing that...

        console.log('bottom');
        page++;
        getData(url,page)
        flag = false   // after we come to bottom , the flag will false 
    }
})