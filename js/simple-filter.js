// resource_entryfted from W3Schools: https://www.w3schools.com/howto/howto_js_filter_resource_entrysts.asp
function simpleFilter() {
    var input, filter, resources_box, resource_entry, span, i;
    input = document.getElementById('searchbox');
    filter = input.value.toUpperCase();
    resources_box = document.getElementById("resources_box");
    resource_entry = resources_box.getElementsByTagName('div');

    // Gonna try to replace the for (i++) logic with for var of resources_box.
    $('#resources_box').find('div').each(function(){
        if (this.innerHTML.toUpperCase().indexOf(filter) > -1) {
            this.style.display = "";
        } else {
            this.style.display = "none";
        }
    });
    
    // Loop through all resource_entryst items, and hide those who don't match the search query
    // for (i = 0; i < resource_entry.length; i++) {
    //     span = resource_entry[i].getElementsByTagName("span")[0];
    //     if (span.innerHTML.toUpperCase().indexOf(filter) > -1) {
    //         resource_entry[i].style.display = "";
    //     } else {
    //         resource_entry[i].style.display = "none";
    //     }
    // }
};
