// fetch("https://randomuser.me/api/?format=JSON+++++")
var urL = 'https://randomuser.me/api/?format=JSON';
fetch('https://randomuser.me/api/?results=12')
.then(responce => responce.json())
.then(news => users(news.results))




//FUNCTIONS 
//============/////===================================
function users(obj){
var bars= document.getElementById("app")
let personAL=''
for(let i=0; i<=obj.length;i++){
    personAL = obj[i];
    html = `
    <figure>
        <img src=${personAL.picture.large}>
        <figcaption>
        <ol>
        <li>${personAL.name.first} ${personAL.name.last}</li>
        <li>${personAL.email}</li>
        <li>${personAL.location.city}</li>
        </ol>        
        </figcaption>      
       </figure>`
bars.innerHTML+=html
}
}



