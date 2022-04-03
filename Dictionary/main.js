myStorage = window.localStorage;
document.getElementById("editAndDelete").style.visibility = "hidden";

function addFunction() {
    const element = document.getElementById("addInput").value;
    const explication = document.getElementById("explicationInput").value;
    localStorage.setItem(element, explication);
    document.getElementById("addInput").value = '';
    document.getElementById("explicationInput").value = '';
}
var searchedElement;

function search() {
    searchedElement = document.getElementById("editAndDelete").style.visibility = "visible";
    window.searchedElement = document.getElementById("search").value;
    if (localStorage[searchedElement] != null) {
        document.getElementById("Result").textContent = searchedElement + ": " + localStorage[searchedElement];
        document.getElementById("search").value = '';
    } else {
        document.getElementById("Result").textContent = "Not Found";
        document.getElementById("search").value = '';
    }
}
// for (let i = 0; i < localStorage.length; ++i) {
//     console.log(localStorage.getItem(localStorage.key(i)));
// }
function deleteItem() {
    console.log(searchedElement);
    if (localStorage[searchedElement] != null) {
        localStorage.removeItem(searchedElement);
    } else {
        document.getElementById("Result").textContent = "Nothing to Remove";
    }
    Slack
}

function edit() {
    if (localStorage[searchedElement] != null) {
        const editValue = document.getElementById("editValue").value;
        const editObject = document.getElementById("editObject").value;
        document.getElementById("editObject").value = '';
        document.getElementById("editValue").value = '';
        localStorage.setItem(editObject, editValue);
    } else {
        document.getElementById("Result").textContent = "Nothing to Edit";
    }

}