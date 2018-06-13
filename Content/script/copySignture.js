// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
function copySignature(tblId) {
    var body = document.body, range, sel;
    if (document.createRange && window.getSelection) {
        range = document.createRange();
        sel = window.getSelection();
        sel.removeAllRanges();
        try {
            range.selectNodeContents(tblId);
            sel.addRange(range);
            var buff = document.execCommand('copy');
        } catch (e) {
            range.selectNode(tblId);
            sel.addRange(range);
        }
    } else if (body.createTextRange) {
        range = body.createTextRange();
        range.moveToElementText(tblId);
        range.select();
    }
    modal.style.display = "block";
}
// Clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// Click anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}