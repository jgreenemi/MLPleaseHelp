$(document).ready(function(){
    // Set the initial count of resource entries since this doesn't get updated until a filter starts.
});

function formatAndOutput(){
    var resource_name = $('#resource_name').val();
    var resource_description = $('#resource_description').val();
    var resource_link = $('#resource_link').val();
    var resource_keywords = $('#resource_keywords').val();

    var today = new Date();
    var resource_updated_date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();

    // Now output the result.
    $('#formatted_output_box').val(
        '{\n    "Name": "' + resource_name +
        '",\n    "Description": "' + resource_description +
        '",\n    "Link": "' + resource_link +
        '",\n    "Keywords": "' + resource_keywords +
        '",\n    "LastUpdatedDate": "' + resource_updated_date +
        '",\n},'
    );
};