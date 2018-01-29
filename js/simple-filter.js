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

/** This is a more advanced search, which takes space-delimited keywords and returns entries that have all of them.
 * A more involved search than the simpleFilter(), this will check that all your space-delimited keyword inputs
 * are present in the search results.
 */
function advancedFilter() {
    var input, filter, count = 0;
    
    // Array of substrings.
    input = $('#searchbox').val().split(' ');

    // In the #resources_box list of resource entries, hide each that doesn't match the filter.
    $('#resources_box').find('div').each(function(){
        // Count up a total, and then later decrement it every time a filter doesn't match. This will ensure
        // a 0 is displayed when no matches are found.
        count += 1;
        var keywordCheckResult = keywordCheck(this.innerHTML.toUpperCase(), input);
        
        if (keywordCheckResult){
            this.style.display = "";
        } else {
            count -= 1;
            this.style.display = "none";
        }
        
        updateCount(count);
    });
};

/**
 * Given two arrays, convert their contents to Uppercase, then return true if all the elements of
 * subset are found in superset.
 */
function keywordCheck(superset, subset){
    return subset.every(function (value) {
        return (superset.toUpperCase().indexOf(value.toUpperCase()) >= 0);
    });
};