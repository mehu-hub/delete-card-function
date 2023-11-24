// write a function for delete or hidden element from UI 
function deleteCard(){
    // get click element
    document.getElementById('card-div').addEventListener('click', function(){ 
        // get parent div
        const getParent = document.getElementById('card-div'); 
        // delete or hidden element
        getParent.classList.add('hidden')
    })
} 
// Call Function
deleteCard();