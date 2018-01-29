$(document).ready(function(){
    // Include other JS files that will be used here.
    $.getScript('js/simple-filter.js');

    // Populate the page with resources, and pull out the total number of resources.
    var total_count_of_resources = retrieveDictionary();

    // Set the initial count of resource entries since this doesn't get updated until a filter starts.
    updateCount(total_count_of_resources);
});


function retrieveDictionary(){
    var count;
    $.getScript('js/ml-assets.js', function(){
        count = mlAssets.length;
        for (var mlAsset of mlAssets) {
            if (mlAsset['Name'] != ""){
                $('#resources_box').append(
                    $('<div/>')
                        .attr('id', mlAsset['Name'])
                        .addClass('resource_entry')
                        .append(
                            '<a href=\"' +
                            mlAsset['Link'] + '\">' +
                            mlAsset['Name'] + '</a>: ' +
                            mlAsset['Description'] +
                            '<span class="keywords"> ' +
                            mlAsset['Keywords'] +
                            '</span>'
                            )
                );
            } else {
                // If we've found an element that is not valid (missing name, empty placeholder entry), decrement the counter accordingly.
                count -= 1;
            }
        }
    });
    return count;
};

function updateCount(count){
    $('#counter').html(count);
};