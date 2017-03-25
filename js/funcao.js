$(document).ready(function(){
    
});

/* 
	CRIA OS GRID DO RESPONSIVE.
	PASSAR POR PARAMETRO AS MEDIDAS SEPARADAS POR ESPAÇOS.
	Ex.: grid(12 6 4 2)
 */
function grid(numbers) {
    let cols = numbers ? numbers.split(' ') : []
    let classes = ""

    if (cols[0]) classes += `col-xs-${cols[0]}`
    if (cols[1]) classes += ` col-sm-${cols[1]}`
    if (cols[2]) classes += ` col-md-${cols[2]}`
    if (cols[3]) classes += ` col-lg-${cols[3]}`

    return classes
}

debounce = function(func,wait,imediate){
    var timeout;
    return function(){
        var context = this, args = arguments;
        var later = function(){
            timeout = null;
            if(!imediate) func.apply(context, args);
        };
        var callNow = imediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context,args)
    };
};

(function () {
/* EFEITOS DO SCROLL */
var $target = $('.anime'),
    animationClass = 'anime-start',
    offset = $(window).height() * 3/4;

function animeScroll() {
    var documentTop = $(document).scrollTop();
    
    $target.each(function(){
        var itemTop = $(this).offset().top;
        if(documentTop > (itemTop - offset) ){
            $(this).addClass(animationClass);
        } else {
            $(this).removeClass(animationClass);
        }
    })
}

animeScroll();

$(document).scroll(debounce(function(){
    animeScroll();
    console.log('teste');
},100));

}());