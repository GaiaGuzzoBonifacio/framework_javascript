import Counter from "./Counter.js"

class CounterElement {

    constructor(selector){
        // .class
        const el = document.querySelector(selector)
        this.title = el.dataset.title || 'predefinito';
        this.max = el.dataset.max || null;
        this.min = el.dataset.min || null;
        this.initial = el.dataset.initial || 0;

        console.log(this.title, this.initial, this.max, this.min);
        

       
        //alt gr + 96 back tick ` questo affare qua oppure installati la tastiera inglese -> per il template string (traduce variabili e può far mettere un frammento di codice su più righe, kinda la stessa cosa che le "" fanno in php)
        // dentro al backtick se metti ${5+5} per esempio ti elabora valori
        el.innerHTML = `
        <div class="name">${this.title}</div>
        <button class="btn-less">-</button>
        <span class="display">${this.initial}</span>
        <button class="btn-add">+</button>`

        this.addBtn = el.querySelector('.btn-add')
        this.lessBtn = el.querySelector('.btn-less')
        this.display = el.querySelector('.display')
        
        this.addBtn.addEventListener('click',this.addBtnHandler)
        this.lessBtn.addEventListener('click',this.lessBtnHandler)
        
        //composizione
        this.counter = new Counter(this.initial, this.min, this.max)
        //console.log("constructor",this)
    }

    addBtnHandler = () => {
        this.counter.increment()
        // console.log(this.counter.value)
        this.display.innerHTML = this.counter.value
    }

    lessBtnHandler = () => {
        this.counter.decrement()
        //console.log(this.counter.value) 
        this.display.innerHTML = this.counter.value
    }
}

export default CounterElement