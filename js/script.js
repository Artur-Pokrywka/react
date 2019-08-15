class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            miliseconds: 0,
            seconds: 0, 
            minutes: 0  
        };
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.clear = this.clear.bind(this)
    }

    start() {
        this.setState ({
            running: true,
            miliseconds: this.state.miliseconds    
        })
        this.timer = setInterval(() =>  {
            this.setState ({
                miliseconds: this.state.miliseconds + 1
            }) 
        }, 1);
    } 


    stop() {
        this.setState ({
            running: false
        })
        clearInterval(this.timer)
    }

    clear() {
        if (this.state.time != 0) {
            this.setState ({
                running: false,
                miliseconds: 0,
                seconds: 0,
                minutes: 0
            })
        }
        // console.log('stan', this.state)
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
                    {this.state.minutes} :
                    {this.state.seconds} : 
                    {this.state.miliseconds} milisec
                </p>
            </div>    
        );
    }
}

ReactDOM.render(<Stopwatch />, document.getElementById('root'));
