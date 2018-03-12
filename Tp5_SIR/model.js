
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){

	this.shapes = new Array()
    this.getForms = function () {
        return this.shapes
    }

    this.addForm = function (shape) {
        this.shapes.push(shape)
    }
};

function Forme(epaisseur, couleur){
    this.epaisseur = epaisseur;
    this.couleur = couleur;
};

function Rectangle(xGauche, yGauche, largeur, hauteur, epaisseur, couleur ){
    Forme.call(this ,epaisseur, couleur);
    this.largeur = largeur;
    this.hauteur = hauteur;
    this.xGauche = xGauche;
    this.yGauche = yGauche;
};


function Line(xinit, yinit,xfin, yfin, epaisseur, couleur){
    Forme.call(this, epaisseur, couleur);
    this.xinit = xinit;
    this.yinit = yinit;
    this.xfin = xfin;
    this.yfin = yfin;
};
