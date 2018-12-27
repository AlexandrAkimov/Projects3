var tdList = $('#tdlApp ul');
var tdMask = 'tdl_';


function showTasks(){
    var lslen = localStorage.length;
    if(lslen > 0){
        for (var i = 0; i < lslen; i++) {
            var key = localStorage.key(i);
            if(key.indexOf(tdMask) == 0){
                $('<li></li>').addClass('tdItem')
                .attr('data-itemid', key)
                .text(localStorage.getItem(key))
                .appendTo(tdList);
            }
        }
    }
}
showTasks();
$('.rev_but').on('click',function(e){
  /*  if(e.keyCode != 13)
        return;*/
    var str2 = $('.form-control').val();
    var str3 = $('.form-name').val();
    var str = str3 + '. ' + str2;
    if (str.length > 0) {
        var nId = 0;
        tdList.children().each(function(index, el){
            var jelId = $(el).attr('data-itemid').slice(4);
            if(jelId > nId)
                nId = jelId;
        })
        nId++;
        localStorage.setItem(tdMask+nId,str);
        $('<li></li>').addClass('tdItem')
        .attr('data-itemid', tdMask+nId)
        .text(str).appendTo(tdList);
    }

    



});



