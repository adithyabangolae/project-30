class Block {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          restitution:0,
          friction:1,
          density:1
      }
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block1.png");
      this.visibility = 255;
      
      
      World.add(world, this.body);
    }
    display(){

      if (this.body.speed<3) {
      var pos =this.body.position;
      var angle = this.body.angle
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width, this.height)
      fill("white");
      pop();

    } else {

      World.remove(world,this.body)
      push()
      this.visibility = this.visibility-5
      tint(255,this.visibility)
      image(this.image,this.body.position.x,this.body.position.y,20,20)
      pop()
    }

    


    }
  };