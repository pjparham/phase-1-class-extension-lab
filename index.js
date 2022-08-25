// Your code here
class Polygon{
    constructor(array){
        this.array = array
    }
    get countSides(){
        return this.array.length
    }
    get perimeter(){
      let initialValue = 0  
      let sum = this.array.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)  
      return sum
    }
}

class Triangle extends Polygon{
    get isValid(){
        if (this.countSides == 3){
            if ((this.array[0] + this.array[1] > this.array[2]) && (this.array[0] + this.array[2] > this.array[1]) && (this.array[1] + this.array[2] > this.array[0])){
                return true
            }
        }
        return false
    }
}

class Square extends Polygon{
    get isValid(){
        if (this.array[0] == this.array[1] && this.array[0] == this.array[2] && this.array[0] == this.array[3]){
            return true
        }
        else{
            return false
        }
    }
    get area(){
        return (this.array[0]*this.array[0])
    }
}