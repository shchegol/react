////////////// vk
var list = document.getElementsByClassName('post_like');
var timeout = 0;

for(var i = 0; i < list.length; i++) {
    if (!list[i].classList.contains('my_like')) {
        setTimeout(
            (function (j){
                return function() {
                    list[j].onclick();
                }
            })(i)
            ,
            timeout
        );
        timeout += 2000;
    }
};

////////////// instagram
var list = document.getElementsByClassName('_eszkz');
var timeout = 0;

for(var i = 0; i < list.length; i++) {
    if (list[i].getElementsByClassName('coreSpriteHeartOpen').length) {
        setTimeout(
            (function (j) {
                return function () {
                    list[j].click();
                }
            })(i), timeout
        );
        timeout += 2000;
    }
};