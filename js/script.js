class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            miliseconds: this.pad0(0),
            seconds: this.pad0(0), 
            minutes: this.pad0(0)  
        };
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.clear = this.clear.bind(this)
        this.calculate = this.calculate.bind(this)
        this.pad0 = this.pad0.bind(this)
    }


    pad0(value) {
        let result = value.toString();
        if (result.length < 2) {
            result = '0' + result;
        }
        return result;
    }


    start() {
        this.setState ({
            running: true,
            miliseconds: this.state.miliseconds    
        })
        this.timer = setInterval(() =>  {
            this.calculate();   
        }, 1);
    } 


    calculate() {
        this.setState({
            miliseconds: this.state.miliseconds + 1,
        })
        if (this.state.miliseconds >= 100) {
            this.state.seconds += 1;
            this.state.miliseconds = 0;
        }
        if (this.seconds >= 60) {
            this.minutes += 1;
            this.seconds = 0;
        }
    }


    stop() {
        this.setState ({
            running: false
        })
        clearInterval(this.timer)
    }


    clear() {
        if (this.state.miliseconds != 0) {
            this.setState ({
                running: false,
                miliseconds: this.pad0(0),
                seconds: this.pad0(0),
                minutes: this.pad0(0)
            })
        }
    }
    

    render() {
        return (
            <div>
                <nav>
                    <button onClick={this.start}> Start </button>
                    <button onClick={this.stop}> Stop </button>
                    <button onClick={this.clear}> Clear </button>
                </nav>
                <p>
                    <span>{this.state.minutes} : </span> 
                    <span>{this.state.seconds} : </span> 
                    <span>{this.state.miliseconds} </span> 
                </p>
            </div>    
        );
    }
}

ReactDOM.render(<Stopwatch />, document.getElementById('root'));
