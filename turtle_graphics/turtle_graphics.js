class Turtle{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.hori = true;
        this.vert = true;
        this.coor = [];
    }

    forward(step){
        if(this.hori === true && this.vert === true){
            if(!this.coor[this.x]){
                this.coor[this.x] = [];
            }
            let i = 0;
            while(i <= step){
                this.coor[this.x][this.y + i] = '•';
                i++;
            }
            this.y = this.y + step;
            return this;
        } else
        if(this.hori === false && this.vert === false){
            if(!this.coor[this.x]){
                this.coor[this.x] = [];
            }
            let i = 0;
            while(i <= step){
               this.coor[this.x][this.y-i] = '•';
               i++;
            }
            this.y = this.y - step;
            return this;
        } else
        if(this.hori === true && this.vert === false){
            let i = 0;
            while(i <= step){
                if(this.x-i < 0){
                    this.coor.unshift([]);
                    this.coor[0][this.y] = '•';
                } else
                if(!this.coor[this.x-i]){
                    this.coor[this.x-i] = [];
                    this.coor[this.x-i][this.y] = '•';
                }
               i++;
            }
            if(this.x - step < 0){
                this.x = 0;
            } else {
                this.x = this.x - step;
            }
            return this;
        } else
        if(this.hori === false && this.vert === true){
            let i = 0;
            while(i <= step){
                if(!this.coor[this.x+i]){
                    this.coor[this.x+i] = [];
                }
               this.coor[this.x+i][this.y] = '•';
               i++;
            }
            this.x = this.x + step;
            return this;
        }
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

    print(){
        for(let i = 0; i < this.coor.length; i++){
            let out = "";
            if(!this.coor[i]){
                this.coor[i] = [' '];
            }
            for(let j = 0; j < this.coor[i].length; j++){
                if(!this.coor[i][j]){
                    this.coor[i][j] = ' ';
                }
                out = out + this.coor[i][j];
            }
            console.log(out);
        }
    }
}