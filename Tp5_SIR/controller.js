
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.


	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

    this.onInteractionStart = function(dnd) {

		if(this.currEditingMode==0){
			this.currentShape = new Rectangle(dnd.xinit - dnd.xfin , dnd.yinit - dnd.yfin , dnd.xinit, dnd.yinit , this.currLineWidth, this.currColour);
		}else{
			this.currentShape = new Line(dnd.xinit, dnd.yinit, 0, 0, this.currLineWidth, this.currColour);
		}
	}.bind(this)

	this.onInteractionUpdate = function(dnd){

		

	}.bind(this)

	this.onInteractionEnd = function(dnd){

		
	}.bind(this)

};


