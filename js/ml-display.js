$(document).ready(function(){
    $.getScript('js/simple-filter.js');
    retrieveDictionary();
});


function retrieveDictionary(){
    $.getScript('js/ml-assets.js', function(){
        for (var mlAsset of mlAssets) {
            $('#resources_box').append(
                $('<div/>')
                    .attr('id', mlAsset['Name'])
                    .addClass('resource_entry')
                    .append(
                        '<span><a href=\"' +
                        mlAsset['Link'] + '\">' + 
                        mlAsset['Name'] + '</a>: ' + 
                        mlAsset['Description'] +
                        '</span>'
                        )
            );
        }
    });
};