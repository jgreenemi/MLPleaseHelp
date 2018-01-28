$(document).ready(function(){
    console.log("ml-display has loaded.");
    
    retrieveDictionary();
});


function retrieveDictionary(){
    $.getScript('js/ml-assets.js', function(){
        for (var [key, value] of mlAssetsDict) {
            console.log(key + ' = ' + value);
        }
    });
};