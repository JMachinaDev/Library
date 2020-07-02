// CONSTRUCTOR FUNCTION
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};


// RENDER BOOKS FUNCTION
function render (){
    const myLibrary = [
        {
            title: 'Path of Destruction(Star Wars: Darth Bane #1)',
            author: 'Drew Karphyshyn',
            pages: 324,
        },
        {
            title: 'Rule of Two(Star Wars: Darth Bane #2)',
            author: 'Drew Karphyshyn',
            pages: 318,
        },
        {
            title: 'Dynasty of Evil(Star Wars: Darth Bane #3)',
            author: 'Drew Karphyshyn',
            pages: 296,
        }
    ];
    // loop through array items AND DISPLAY(FUNCTION CALL)
    const books = myLibrary;
    books.forEach((book) => displayBook(book));

}


// clear modal after submit
function clearModal(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
}


// DISPLAY BOOK
function displayBook(book){ 
    const list = document.querySelector('#myBooks');
    
    const row = list.insertRow(1);

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td class="check">      
        <label>
            <input type="checkbox">
            <span class='ynRead'>Read</span>
        </label>
    </td>
    <td><input type="button" value="Remove" onClick="deleteRow(this)"></td>`; // DELETE BUTTON
} 

// EVENT: DISPLAY BOOKS
document.addEventListener('DOMContentLoaded', render);


// EVENT: ADD BOOK
document.querySelector('.modal-content').addEventListener('submit', (e) => {
    //prevent defautl submit action
    e.preventDefault();

    // Get form Values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    
    // Create new Book
    const book = new Book(title, author, pages);


    // LOCAL WEB STORAGE 
    // localStorage.setItem(title, author, pages);
    // console.log(localStorage)
    // Add book to list


    //Display books
    displayBook(book);
      
    //clear modal
    clearModal();
});

// EVENT: REMOVE BOOK
function deleteRow(row){
    let i = row.parentNode.parentNode.rowIndex;// targets the parent Node of the parent Node
    document.querySelector("#myBooks").deleteRow(i); // row selected to delete
}