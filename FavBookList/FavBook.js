const bookArr = [];

function getData(){
    const favBook = getInput();
    let ul = document.getElementById("favBooks");
    const value = "<li>" + favBook + "</li>";
    ul.innerHTML += value;
    console.log(bookArr);
}

function getInput(){
    const favBook = document.getElementById("favBook").value;
    bookArr.push(favBook);
    return favBook;
}