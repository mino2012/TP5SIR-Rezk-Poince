
// La création d'un dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function dnd(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	this.canvas = canvas;
	this.interactor = interactor;
	this.xinit = 0;
  	this.yinit = 0;
    this.xfin = 0;
    this.yfin = 0;
	this.presse = false;

	// Developper les 3 fonctions gérant les événements

	//bouton souris pressé
	this.mousedown = function(evt) {
		this.xinit = getMousePosition(canvas, evt).x;
  		this.yinit = getMousePosition(canvas, evt).y;
  		this.xfin = this.xinit
  		this.yfin = this.yinit
		console.log("pressé xinit : " + this.xinit);
		console.log("pressé yinit : " + this.yinit);
		this.presse = true;
		interactor.onInteractionStart(this);
  	}.bind(this) ;
  	
  	//bouton souris maintenu pressé
  	this.mousemove = function(evt) {
  		if(this.presse==true) {
			this.xfin = getMousePosition(canvas, evt).x;
			this.yfin = getMousePosition(canvas, evt).y;
			console.log("maintien xfin : " + this.xfin);
			console.log("maintien yfin : " + this.yfin);
			interactor.onInteractionUpdate(this);
		}
    }.bind(this) ;
  
    //bouton souris relaché
    this.mouseup = function(evt) {
    	if(this.presse==true) {
    		interactor.onInteractionEnd(this);
    		this.presse = false;
   		}
    }.bind(this) ;

	// Associer les fonctions précédentes aux évènements du canvas.
	canvas.addEventListener("mousedown", this.mousedown, false);
	canvas.addEventListener("mousemove", this.mousemove, false);
	canvas.addEventListener("mouseup", this.mouseup, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



