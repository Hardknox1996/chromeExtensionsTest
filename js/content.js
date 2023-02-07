console.log('Content Script Added')
chrome.runtime.sendMessage({icon1: true})

// $("*").attr('contenteditable', '');  


$("*").click(function () {
    $('*').removeClass('hoverElementSection')
    $(this).addClass('hoverElementSection')
});


// $("*").draggable();