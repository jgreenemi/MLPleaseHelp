// Lifted and modified from W3Schools: https://www.w3schools.com/howto/howto_js_filter_resource_entrysts.asp
function simpleFilter() {
    var input, filter, count = 0;
    input = document.getElementById('searchbox');
    filter = input.value.toUpperCase();

    // In the #resources_box list of resource entries, hide each that doesn't match the filter.
    $('#resources_box').find('div').each(function(){
        // Count up a total, and then later decrement it every time a filter doesn't match. This will ensure
        // a 0 is displayed when no matches are found.
        count += 1;
        if (this.innerHTML.toUpperCase().indexOf(filter) > -1) {
            this.style.display = "";
        } else {
            count -= 1;
            this.style.display = "none";
        }
        updateCount(count);
    });
};
