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