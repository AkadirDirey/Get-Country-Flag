// var BookTitle = document.getElementById("book-title").value;
// var BookAuthor = document.getElementById("book-auther").value;
// var bookName = document.getElementById("book-name").value;
// var Book_Author = document.getElementById("book-author").value;
// var searchBtn = document.getElementById("search-btn");

// searchBtn.addEventListener("click", getbook);

// function getbook(){
//     fetch
//         ("https://bookcoverapi.herokuapp.com/getBook?title=" + BookTitle + "&author=" + BookAuthor)
//         .then((response) => response.json())
        
//         bookName.textContent = data.BookTitle;
//         BookAuthor.textContent = data.BookAuthor;
//         bookcoverTitle.innerHTML = `<img src="${data.BookCover}" alt="${data.BookTitle}"> width="300px"` ;
    
// }

// let countryName = document.getElementById("country-name");
// let countryFlag = document.getElementById("country-flag");
// let searchBtn = document.getElementById("search");

// searchBtn.addEventListener("sumbit", (e) => {
//     e.preventDefault();

//     fetch(`https://restcountries.com/v3.1/name/${e.target[0].value}`)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//         countryName.textContent = data[0].name.common;
//         countryFlag.innerHTML = `<img src=${data[0].flags.png} alt="country flag">`;
//     });
// } );


let CountryName=document.getElementById("country-name");
let CountryFlag=document.getElementById("country-flag");
let SearchBtn=document.getElementById("search");

SearchBtn.addEventListener("submit",(e) =>{
    e.preventDefault();
    fetch(`https://restcountries.com/v3.1/name/${e.target[0].value}`)
    .then((res) => res.json())
    .then((data)=>{
        console.log(data);
        CountryName.textContent= data[0].name.common;
        CountryFlag.innerHTML = `<img src=${data[0].flags.png} alt="country flag">`;
    });
});