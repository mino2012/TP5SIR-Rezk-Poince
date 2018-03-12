
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.rect(this.xGauche, this.yGauche, this.largeur ,this.hauteur);
	ctx.lineWidth = this.epaisseur
    ctx.strokeStyle = this.couleur;
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.moveTo( this.xinit,  this.yinit);
    ctx.lineTo( this.xfin,  this.yfin);
    ctx.lineWidth = this.epaisseur;
    ctx.strokeStyle = this.couleur;
    ctx.stroke();
};


Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.shapes.forEach(function(eltDuTableau) {
        eltDuTableau.paint(ctx);
    });
};