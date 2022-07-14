console.log("Running")
var clearCartitemsButtons = document.getElementsByClassName ("cart-info")
console.log(clearCartitemsButtons)
for( var i = 0; i < clearCartitemsButtons.length; i++){
    var button = clearCartitemsButtons[i]
    button.addEventListener('Click',function(event){
        var buttonClicked = EventTarget
        buttonClicked.parentElement.parentElement.clear()
    })
   
}

