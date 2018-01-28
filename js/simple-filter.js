// Lifted from W3Schools: https://www.w3schools.com/howto/howto_js_filter_lists.asp
function simpleFilter() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('searchbox');
    filter = input.value.toUpperCase();
    ul = document.getElementById("resources_box");
    li = ul.getElementsByTagName('div');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
