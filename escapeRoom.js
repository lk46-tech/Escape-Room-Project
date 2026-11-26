alert("To get out of this library escape room you'll need to find a key hidden in one of the objects (the quill, the stack of books, or the hourglass).");
alert("Click on objects to find the key. Good luck!");

let libraryObjects = document.getElementsByClassName("libraryObjects");

libraryObjects[0].addEventListener("click", books);
libraryObjects[1].addEventListener("click", quill);
libraryObjects[2].addEventListener("click", hourglass);

function books(){
alert("You opened the books that were full of dust.\n\n*cough* *cough* \n\nNo key here. . . Try clicking another object.")
}

function quill(){
    alert("You took the quill apart and nothing was inside. It's just a normal pen.\n\nNo key here. . . Try clicking another object.")
}

function hourglass(){
    alert("You break the hourglass. . . You found the key!")
    alert("You unlocked the door and escaped sucessfully!")
    alert("Good job finding the key!\n\nYou will be sent back to the start page if you want to play again.")
}


