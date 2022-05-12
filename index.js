class Circle{
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return 2 * Math.PI * this.radius;
    }

    get area(){
        return Math.PI * this.radius * this.radius;
    }

    set diameter(radius){
        this.radius = radius / 2;
        return radius
  }

  set circumference(radius){
      this.radius = radius / Math.PI / 2
      return radius
  }

  set area(radius){
      this.radius = Math.sqrt(radius) - Math.PI - Math.PI
      return radius
  }


}

const circle = new Circle( 6 )
console.log(circle);