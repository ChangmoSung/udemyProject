$(`ul`).on(`click`, `li`, function() {
    $(this).toggleClass(`completed`);
});

$(`ul`).on(`click`, `span`, function(event){
    $(this).parent().fadeOut(300, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$(`input[type="text"]`).keypress(function(event) {
    if(event.which === 13) {
        const todoText = $(this).val();
        $(this).val(``);
        $(`ul`).append(`<li><span>X</span>  ${todoText}</li>`)
    }
})

$(`.plus`).on(`click`, function() {
    $(`input[type="text"]`).fadeToggle();
})

$(`input[type="text"]`).focus();