var games = {
	'PianoTiles':{
		'name':'Piano Tiles',
		'description':'Un juego en el que el piano sera tu mejor amigo. No hace falta que seas profesional, solamente que tengas buenos reflejos. Incrementa la velocidad y descubre el final de la cancion ¿Hasta donde seras capaz de llegar?',
		'color':'#3f2c4a'
	},

};

let gamesContainer = document.getElementById('games-container');

for (var game in games) {
	let newGame = `<div id="${game}" class="game" style="background-color: ${games[game].color};">
			<div class="game__icon">
			<img src="games/${game}/captures/0.png">
			</div>
			<div class="game-info">
				<div class="game-info__text">
					<h2>${games[game].name}</h2>
					<p>${games[game].description}</p>
				</div>
				<a class="game-download" href="games/${game}/${game}.apk" download>DESCARGAR</a>
			</div>
		</div>`;
	gamesContainer.innerHTML += newGame;
};

var collapseBtn = document.getElementById('collapse-btn');
var navbarCollapse = document.getElementById('nav-bar__collapse');
let collapsed = false;

collapseBtn.addEventListener("click",function(){
	if(collapsed){
	navbarCollapse.style.visibility = 'hidden';
	navbarCollapse.style.height = '0';
}else{
	navbarCollapse.style.visibility = 'visible';
	navbarCollapse.style.height = '300px';
	}
	collapsed = !collapsed

})

var ic = document.getElementsByClassName('img-carrousel')[0];
ic.addEventListener('touchstart',(e)=>console.log(e))
console.log(ic)