// Lifted and modified from W3Schools: https://www.w3schools.com/howto/howto_js_filter_resource_entrysts.asp
function simpleFilter() {
    var input, filter;
    input = document.getElementById('searchbox');
    filter = input.value.toUpperCase();

    // In the #resources_box list of resource entries, hide each that doesn't match the filter.
    $('#resources_box').find('div').each(function(){
        if (this.innerHTML.toUpperCase().indexOf(filter) > -1) {
            this.style.display = "";
        } else {
            this.style.display = "none";
        }
    });
};
