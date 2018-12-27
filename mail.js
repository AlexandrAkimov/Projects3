$('.button').on('click', function(e) {
 e.preventDefault();

    var names = $('input[name=names]').val();
    var phones = $('input[name=phones]').val();
    var mailes = $('input[name=mailes]').val();
    var velo = $('select[name=velo]').val();
    var akses = $('select[name=akses]').val();
    $.ajax({
        url: '/mail.php',
        method: 'post',
        mydata: {
            names: names,
            phones: phones,
            mailes: mailes,
            velo: velo,
            akses: akses
        }
    }).done(function(response) {
        var converted = JSON.parse(response);

        alert(converted.status);
    });

});