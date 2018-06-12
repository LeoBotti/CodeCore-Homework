class Turtle{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.hori = true;
        this.vert = true;
        this.coor = [];
    }

    forward(step){

    }

    right(){
        if(this.hori === true && this.vert === true){
            this.hori = false;
            return this;
        } else
        if(this.hori === false && this.vert === false){
            this.hori = true;
            return this;
        } else
        if(this.hori === true && this.vert === false){
            this.vert = true;
            return this;
        } else
        if(this.hori === false && this.vert === true){
            this.vert = false;
            return this;
        }
    }

    left(){
        if(this.hori === true && this.vert === true){
            this.vert = false;
            return this;
        } else
        if(this.hori === false && this.vert === false){
            this.vert = true;
            return this;
        } else
        if(this.hori === true && this.vert === false){
            this.hori = false;
            return this;
        } else
        if(this.hori === false && this.vert === true){
            this.hori = true;
            return this;
        }
    }

    allPoints(){

    }
}