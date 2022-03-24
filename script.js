
function aparecerTexto(){
	let valor = 1;
	switch (valor) {
		case 1:{
			document.querySelector(".resultado").style.display = "block"
			document.querySelector(".resultado2").style.display = "none"
			document.querySelector(".resultado3").style.display = "none"
			document.querySelector(".resultado4").style.display = "none"
}
}
}

function aparecerTexto2(){
	let valor = 2;
	switch (valor) {
		case 2:{
	       document.querySelector(".resultado2").style.display = "block"
	       document.querySelector(".resultado").style.display = "none"
	       document.querySelector(".resultado3").style.display = "none"
	       document.querySelector(".resultado4").style.display = "none"
}
}
}

function aparecerTexto3(){
	let valor = 3;
	switch (valor) {
		case 3:{
			document.querySelector(".resultado3").style.display = "block"
	        document.querySelector(".resultado").style.display = "none"
	        document.querySelector(".resultado2").style.display = "none"
	        document.querySelector(".resultado4").style.display = "none"

}
}
}

function aparecerTexto4(){
	let valor = 4;
	switch (valor) {
		case 4:{
			document.querySelector(".resultado4").style.display = "block"
	        document.querySelector(".resultado").style.display = "none"
	        document.querySelector(".resultado2").style.display = "none"
	        document.querySelector(".resultado3").style.display = "none"
       
}
}
}