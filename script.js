const list = document.querySelectorAll('.list');

function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item)=>
item.addEventListener('click',activeLink));


document.querySelector('.disp ion-icon[name="search-outline"]').addEventListener("click", test);
function test(){
    document.querySelector('.story-container').remove()
}

document.querySelector('.disp ion-icon[name="search-outline"]').addEventListener("click", test);
function test(){
    document.querySelector('.story-container').remove()
}

