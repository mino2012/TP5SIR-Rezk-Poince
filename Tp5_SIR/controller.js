var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	new dnd(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function(dnd) {	
		// Gestion couleurs et epaisseur
		this.currLineWidth = spinnerWidth.value;
		this.currColour = colour.value;

		if($('#butRect')[0].checked){
			this.currentShape = new Rectangle(dnd.xinit , dnd.yinit, 0, 0, this.currLineWidth, this.currColour);
		}else{
			this.currentShape = new Line(dnd.xinit, dnd.yinit, dnd.xfin, dnd.yfin, this.currLineWidth, this.currColour);
		}
		this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionUpdate = function(dnd){
		if ($('#butRect')[0].checked) {
			this.currentShape.largeur = dnd.xfin - dnd.xinit;
			this.currentShape.hauteur = dnd.yfin - dnd.yinit;
			this.currentShape.epaisseur = this.currLineWidth;
			this.currentShape.couleur = this.currColour;
		}
		else {
			this.currentShape.xfin = dnd.xfin;
			this.currentShape.yfin = dnd.yfin;
		}
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionEnd = function(dnd){
		drawing.addForm(this.currentShape);
		drawing.paint(ctx);
		drawing.updateShapeList(this.currentShape);
	}.bind(this);

};


