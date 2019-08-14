class Stopwatch extends React.Component {
    constructor(display) {
        super(display);
        this.state = {
            running: false,
            txt: 'hello world',
            display: display,   
            // print: print(),
            // reset: reset()
        }
    }

    reset() {
        this.state.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0 
        };
        console.log('times', this.state.times)
    }

    print() {
        this.state.display.innerText = this.format(this.state.times);
      
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
        console.log('this is working');
        if (!this.running) {
            this.state = {
                running: true
            }
          
            this.state.watch = setInterval(() => this.step(), 10);
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
                <nav>
                    <button onClick={this.start}> Start </button>
                    <button onClick={this.stop}> Stop </button>
                    <button onClick={this.clear}> Clear </button>
                </nav>
                <ul>{this.state.times}</ul>
                <p>{this.state.txt}</p>
            </div>
            
        );
    }
}

ReactDOM.render(<Stopwatch />, document.getElementById('root'));
