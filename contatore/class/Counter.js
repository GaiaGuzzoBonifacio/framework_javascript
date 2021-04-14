class Counter {

    
    constructor(initial = 0, min=null, max=null){
        //console.log("valore di min", min)
        //console.log("valore di max", max)
        this.value = Number(initial);
        this.max = max;
        this.min = min;

        if(this.min != null) {
            if(this.value < Number(this.min)) {
                throw new Error('initial è minore di min');
            }
        }   

        if(this.max != null) {
            if(this.value > Number(this.max)) {
                throw new Error('initial è maggiore di max');
            }
        }
    }

    increment(){
        
        if(this.max === null) {

            this.value++;

        }else if(this.value<this.max) {

            this.value++;
        }
    }

    decrement(){
        
        if(this.min === null) {

            this.value--;

        }else if(this.value>this.min) {

            this.value--;
        }
        
    }
}

export default Counter;