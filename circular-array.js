class CircularArray {
    constructor(){
        this.arr = new Array()
        
    }

    addItem(val){
        this.arr.push(val)
    }

    printArray(){
        for(let val in this.arr){
            console.log(this.arr[val])
        }
    }

    rotateArr(count){
        let arr = this.arr
        count -= arr.length * Math.floor(count / arr.length);
        arr.push.apply(arr, arr.splice(0, count));
        return arr;


        // if (Math.sign(idx) === 1) {
        //     let cIdx = this.circIndex(idx) - 1
        //     let first = this.arr[0]
        //     this.arr.splice((this.arr.length - cIdx), 0, first)
        //     this.arr.shift()
        //     return this.printArray()

        // } else if (Math.sign(idx) === -1){
        //     let cIdx = this.circIndex(idx) - 2
        //     let first = this.arr[0]
        //     this.arr.splice(cIdx, 0, first)
        //     this.arr.shift()
        //     return this.printArray()
        // }
        // take 'first' and add it back to array at circ index
    }

    rotate(count){
        for (let i = (-Math.abs(this.arr.length)); i<= this.arr.length; i++) {
            return this.rotateArr(count)
        }
    }

    circIndex(idx){
        let n = this.arr.length
        let val = ((idx % n + n) % n)
        // let val = this.arr[(idx % n + n) % n]
        return val
    }


}

let circ = new CircularArray()

circ.addItem('harry')
circ.addItem('hermione')
circ.addItem('ginny')
circ.addItem('ron')