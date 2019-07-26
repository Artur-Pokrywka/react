let CounterTwo = React.createClass({
    getInitialState: function() {
        return {
        counter: 1
    };
},

    initiate: function() {
        this.setState({
            counter: this.state.counter + this.state.counter
        })
    },

render: function() {
    return React.createElement('div', {},
        React.createElement('span', {}, 'Licznik: ' + this.state.counter),
        React.createElement('button', {onClick: this.initiate}, 'Increase'),
    );
}
});

let secondElement = React.createElement(CounterTwo);
ReactDOM.render(secondElement, document.getElementById('app2'));
