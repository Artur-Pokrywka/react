class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            time:  `00 : 00 : 00 `,
            start: 0,
        }
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.clear = this.stop.bind(this)
    }

    start() {
        
        this.setState = ({
            running: true,
            time: this.state.time,
            start: Date.now() - this.state.time
        })
        this.timer = setInterval( () => this.setState({
            time: Date.now() - this.state.start
        }), 1);
        
        console.log('stan', this.state)
    }
    
    stop() {
        this.setState = ({
            running: false
        })
        clearInterval(this.timer)

        console.log('stan', this.state)
    }

    clear() {
        if (this.state.time != 0) {
            this.setState = ({
                running: false,
                time:  `00 : 00 : 00 `
            })
        }
        console.log('stan', this.state)
    }
    

    render() {
        return (
            <div>
                <nav>
                    <button onClick={this.start}> Start </button>
                    <button onClick={this.stop}> Stop </button>
                    <button onClick={this.clear}> Clear </button>
                </nav>
                <p>{this.state.time}</p>
            </div>
            
        );
    }
}

ReactDOM.render(<Stopwatch />, document.getElementById('root'));
