$(document).ready(function () {
    $('.toggle').click(function () {
        $('.toggle').toggleClass('active')
        $('body').toggleClass('night')
        $('.footer').toggleClass('nit')
        $('.jumbotron').toggleClass('dark')
    })
})