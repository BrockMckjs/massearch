////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    var buttonSub = document.getElementById('select');
    var input = document.getElementById('searchTerm').value;
    let customValue = document.getElementById('customInput').value
        //onclick
    buttonSub.addEventListener('click', function() {
        $(document).ready(function() {
            $('input[id="customInput"]').each(function() { // $(':checkbox:checked')
                chrome.tabs.create({ url: customValue + document.getElementById('searchTerm').value });
                window.location.reload();
            })
        })
    })
})


document.addEventListener('DOMContentLoaded', function() {
    var buttonSub = document.getElementById('select');
    var input = document.getElementById('searchTerm').value;
    //onclick
    buttonSub.addEventListener('click', function() {
        $(document).ready(function() {
            $('input[type="checkbox"]:checked').each(function() { // $(':checkbox:checked')
                chrome.tabs.create({ url: this.value + document.getElementById('searchTerm').value });
                window.location.reload();
            })
        })
    })
})



document.addEventListener('DOMContentLoaded', function() {


    var addButton = document.getElementById('custom')
    addButton.addEventListener('click', function() {
        var newdiv = document.createElement('div');
        //newdiv.id = dynamicInput[counter];
        newdiv.innerHTML = "<br><input type='text' name='myInputs' id='customInput' placeholder='https://example.com/search?q=' size='45' style='margin-left: 3%;width: 190px;'>" // add a remove button (messes up styling on front.html, will fix in later update.) <input type='button' value='-' id='removeInput'>";
        document.getElementById('myForm').appendChild(newdiv);

        document.addEventListener('click', function() {


            //var removeInput = document.getElementById('removeInput')
            //removeInput.addEventListener('click', function() {
            //  btn.parentNode.remove();
            // ^^^^ this is all remove cutsom input button functionality. didnt add it yet because it broke the extension, but works on regular html. need to make it work with external js file.
        })
    })
})


//document.addEventListener('click', function() {
//  var buttonSub = document.getElementById('select');
//var input = document.getElementById('searchTerm').value;
//let values = document.getElementById('customInput').value

//buttonSub.addEventListener('click', function() {
//  document.getElementById('customInput').each(function() {
//    chrome.tabs.create({ url: values + document.getElementById('searchTerm').value });
//  window.location.reload();
// })
//})
//})