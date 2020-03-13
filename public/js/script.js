$('#submit').on('click', function(){
    let input = $('#burgerName').val().trim()
    $.ajax({
        method: "POST",
        url: "/api/burger",
        data: {name: input}
    }).then(data=>window.location.reload())
})

$('.eat').on('click', function(){
    let id = $(this).attr('id')
    $.ajax({
        method: 'PUT',
        url: '/api/burger/'+id,
    }).then(data=>window.location.reload())
})