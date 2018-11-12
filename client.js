console.log('Client.js');

$( document ).ready(readyNow);
// variable to hold count
let newBox = 0;
// This function has the clickListeners 
// Also function to create new box
function readyNow(){
    console.log('jquery');
    $('#button').on('click', function(){
        console.log('button clicked');
        newBox ++;
        $('#output').append(`<div> <p>${newBox}</p>
        
        <button id="swapBtn">Swap</button>
        <button id="deleteBtn">Delete</button></div>`);
    });
    $('#output').on('click', '#swapBtn', swapBox);
    $('#output').on('click', '#deleteBtn', deleteBox );
}
// Swap function to switch color
function swapBox(){
    console.log('swap color working');
    $(this).parent().toggleClass('color');
}
// Delete function to delete box
function deleteBox(){
    console.log('delete working');
    $(this).parent().remove();
}