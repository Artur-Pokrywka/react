let Counter = React.createClass({
    getInitialState: function() {
        return {
        counter: 0
    };
},

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        })
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        })
    },

render: function() {
    return React.createElement('div', {},
        React.createElement('span', {}, 'Licznik: ' + this.state.counter),
        React.createElement('button', {onClick: this.increment}, 'Add'),
        React.createElement('button', {onClick: this.decrement}, 'Remove')
    );
}
});

let element = React.createElement(Counter);
let secondElement = React.createElement(Counter);

ReactDOM.render(element, document.getElementById('app'));
ReactDOM.render(secondElement, document.getElementById('app2'));
