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

