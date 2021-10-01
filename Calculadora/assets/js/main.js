/*
Calculadora numa Factory Function
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        bntClear: document.querySelector('.btn-clear'),
        btnEqual: document.querySelector('.btn-eq'),

        init() {
            this.btnClick();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.calculate();
                }
            })
        },

        clearDisplay() {
            this.display.value = ''
        },

        deleteLast() {
            this.display.value = this.display.value.slice(0, -1);
        },

        calculate() {
            let operation = this.display.value

            try {
                operation = eval(operation);

                if(!operation) {
                    alert('Operação Inválida');
                    return;
                }
            } catch (e) {
                alert('Operação Inválida');
            }

            this.display.value = operation
        },

        btnClick() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnToDisplay(el.innerText);
                
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.deleteLast();
                }
                if(el.classList.contains('btn-eq')) {
                    this.calculate();
                }
            });
        },

        btnToDisplay(value) {
            this.display.value += value
        }
    };
}

const calculadora = criaCalculadora();
calculadora.init()
*/

//Calculadora em Constructor function:

function Calculadora () {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
    }

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.equal();
        })
    }

    this.addNumDisplay = (el) => {
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.clear = () => {
        this.display.value = '';
    }

    this.del = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.equal = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta) {
                alert('Operação inválida!');
                return;
            }

            this.display.value = conta;
        } catch {
            alert('Operação Inválida!');
            return;
        }
    }
}

const calculadora = new Calculadora();
calculadora.inicia()