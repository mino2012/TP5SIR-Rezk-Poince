
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
    this.shapes.forEach(function(shape) {
        shape.paint(ctx);
    });
};

Drawing.prototype.updateShapeList = function(shape){

    var shapeList = document.getElementById('shapeList');
    var button = document.createElement('button');
    var span = document.createElement('span');
    var li = document.createElement('li');
    var id = shapeList.childNodes.length;

    button.setAttribute('id', id);
    button.setAttribute('class','btn btn-default')
    span.setAttribute('class','glyphicon glyphicon-trash');
    button.appendChild(span);

    button.setAttribute('onClick', 'drawing.deleteShape('+id+')');
    li.appendChild(button);

    if (shape instanceof Rectangle){
        li.appendChild(document.createTextNode(' Forme ' + id + ' : Rectangle '+'('+ 'xGauche : ' + shape.xGauche+', '+ 'yGauche : ' + shape.yGauche+', '+ 'Largeur : ' +shape.largeur+', '+ 'Hauteur : ' + shape.hauteur+')'));
    } else if(shape instanceof Line){
        li.appendChild(document.createTextNode(' Forme ' + id + ' : Ligne '+'('+ 'xInit : ' + shape.xinit +', ' + 'yInit : ' +shape.yinit +', '+ 'xFin : ' + shape.xfin+', '+ 'yFin : ' +shape.yfin+')'));
    }

    li.setAttribute('id', 'li' + id);
    li.setAttribute('class', 'list-group-item');

    shapeList.appendChild(li);
};

Drawing.prototype.deleteShape = function(id){

    var li = document.getElementById('li'+id);
    var index = $(li).index();
    li.remove();
    this.removeForm(index);
    drawing.paint(ctx);
};