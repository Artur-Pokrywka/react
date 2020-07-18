function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    if (result.length > 2) {
        return result.slice(0, 2);
    }
    return result;
}


class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            miliseconds: 0,
            seconds: 0, 
            minutes: 0  
        };
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.clear = this.clear.bind(this)
        this.calculate = this.calculate.bind(this)
    }


    start() {
        this.setState ({
            running: true,
            miliseconds: this.state.miliseconds    
        })
        this.timer = setInterval(() =>  {
            this.calculate();   
        }, 10);
    } 


    calculate() {
        this.setState({
            miliseconds: this.state.miliseconds + 10,
        })
        if (this.state.miliseconds >= 1000) {
            this.state.seconds += 1;
            this.state.miliseconds = 0;
        }
        if (this.state.seconds >= 60) {
            this.state.minutes += 1;
            this.state.seconds = 0;
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
                miliseconds: 0,
                seconds: 0,
                minutes: 0
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
                    <span>{pad0(this.state.minutes)} : </span> 
                    <span>{pad0(this.state.seconds)} : </span> 
                    <span>{pad0(this.state.miliseconds)} </span> 
                </p>
            </div>    
        );
    }
}

ReactDOM.render(<Stopwatch />, document.getElementById('root'));
