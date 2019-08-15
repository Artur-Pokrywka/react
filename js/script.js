class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            time: 0,
           
        };
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.clear = this.stop.bind(this)
    }

    start() {
        this.setState = ({
            running: true,
            time: this.state.time,    
        })
        this.timer = setInterval(() =>  {
            this.setState = ({
                time: this.state.time + 1
            }) 
            console.log('stan', this.state.time)
        }, 
        1000);

        console.log('stan', this.state.time)
    }
    
    // clock() {
    //     console.log('stan', this.state.time)
    //     this.setState = ({
    //         time: this.state.time + 1
    //     })    
    // } 
      

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
                time: 0
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
                <p>{this.state.time} sec</p>
            </div>
            
        );
    }
}

ReactDOM.render(<Stopwatch />, document.getElementById('root'));
