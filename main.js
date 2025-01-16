// ==UserScript==
// @name Better Guitar Flash
// @namespace Better Guitar Flash Scripts
// @description Melhora a UI do Guitar Flash
// @grant none
// ==/UserScript==
function removerNavBar() {
	let divTopo = document.getElementById('divTopo');
	let divContA = document.getElementById('divContA');
	divTopo?.remove();
	divContA?.remove();
}

function removerRodape() {
	let divRodape = document.getElementById('divRodape');
	divRodape?.remove();
}

function removerListaPontuacao() {
	let divContC = document.getElementById('divContC');
	divContC?.remove();
}

function limparBarraLateral() {
	let gfLatCont = document.getElementById('gfLatCont');
	let gfLatTit = document.getElementById('gfLatTit');
	let gfLatVid = document.getElementById('gfLatVid');
	let gfLatJog = document.getElementById('gfLatJog');
	gfLatCont.style.display = 'none';
	gfLatTit.style.display = 'none';
	gfLatVid.style.display = 'none';
	gfLatJog.style.display = 'none';
}

function melhorarDivPrincipal() {
	let divGame = document.getElementById('divGame');
	divGame.style.backgroundColor = 'transparent'
	divGame.style.margin = '0'
	divGame.style.height = 'unset'
	divGame.style.width = 'unset'
	divGame.style.borderRadius = '0'
	divGame.style.display = 'flex'
	divGame.style.alignItems = 'end'
}

function repositionarMenuConfiguracoes() {
	let gfLat = document.getElementById('gfLat');
	gfLat.style.float = 'none'
	gfLat.style.height = 'unset'
	gfLat.style.width = 'unset'
	gfLat.style.position = 'absolute'
	gfLat.style.bottom = '1rem'
	gfLat.style.right = '3rem'
	gfLat.style.zIndex = '9999'

	gfLat.firstElementChild.style.height = 'unset'
	gfLat.firstElementChild.style.width = 'unset'
}

function deixarBackgroundFullScreen() {
	let gameScreen = document.getElementById('gfUI');
	gameScreen.style.margin = '0'
	gameScreen.style.display = 'flex'
	gameScreen.style.alignItems = 'center'
	gameScreen.style.justifyContent = 'center'
	gameScreen.style.width = '100vw'
	gameScreen.style.height = '100vh'
}

function deixarJogoFullScreen() {
	let gfGame = document.getElementById('gfGame');
	gfGame.style.position = 'fixed'
	gfGame.style.top = '0'
	gfGame.style.left = '0'
	gfGame.style.width = '100vw'
	gfGame.style.height = '100vh'
	gfGame.style.pointerEvents = `none`

	let gameGF = document.getElementById('gameGF');
	gameGF.style.width = `55vw`
	gameGF.style.height = `100vh`
}

function apertarF11() {
	const elem = document.documentElement;
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.msRequestFullscreen) {
		elem.msRequestFullscreen();
	} else if (elem.mozRequestFullScreen) {
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) {
		elem.webkitRequestFullscreen();
	}
}

// execução do código:
if (document.URL.includes("guitarflash3.com/setlist/")) {
	removerNavBar()
	removerRodape()
	removerListaPontuacao()
	limparBarraLateral()
	
	melhorarDivPrincipal()
	repositionarMenuConfiguracoes()
	deixarBackgroundFullScreen()
	deixarJogoFullScreen()
	// apertarF11()
}