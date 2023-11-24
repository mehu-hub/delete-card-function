// write a function for delete or hidden element from UI 
function deleteCard(){
    // get click button
    document.getElementById('btn-cart').addEventListener('click', function(){ 
        // get parent div
        const getParent = document.getElementById('card-div'); 
        // delete or hidden element
        getParent.classList.add('hidden')
    })
} 
// Call Function
deleteCard();