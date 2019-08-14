class Stopwatch extends React.Component {
    constructor(display) {
        super(display);
        this.state = {
            running: false,
            txt: 'hello world',
            display: display,   
           
        }
       
        // this.print(this.times),
        
        this.reset()
    }

    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0 
        };
        console.log('times', this.times)
    }

    print() {
        this.display.innerText = this.format(this.times);
      
    }

    format(times) {
        let pad0 = (value) => {
            let result = value.toString();
            if (result.length < 2) {
                result = '0' + result;
            }
            return result;
        };
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }  

    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }
    
    step() {
        if (!this.running) return;
        this.calculate();
        this.print();
    }
    
    calculate() {
        this.times.miliseconds += 1;
        if (this.times.miliseconds >= 100) {
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }
        if (this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }
    
    stop() {
        this.running = false;
        clearInterval(this.watch);
    }

    clear() {
        this.running = false;
        this.reset();
        this.print(this.times);
    }
    render() {
        return (
            <div>
                <Controls />
                <ul>{this.state.times}</ul>
                <p>{this.state.txt}</p>
            </div>
            
        );
    }
}

ReactDOM.render(<Stopwatch />, document.getElementById('root'));

// const stopwatch = new Stopwatch(document.querySelector('.stopwatch'));

// const startButoon = document.getElementById('start');
// startButoon.addEventListener('click', () => stopwatch.start());


// const stopButton = document.getElementById('stop');
// stopButton.addEventListener('click', () => stopwatch.stop());


// const resetButton = document.getElementById('clear');
// resetButton.addEventListener('click', () => stopwatch.clear());