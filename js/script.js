let titles = movies.map(function (movie) {
    return movie.title
}); 

console.log(titles);

let MovieTitle = React.createClass ({
    propTypes : {
        title: React.PropTypes.string.isRequired, 
    },

    render: function() {
        console.log('props', this.props);
        return (
            React.createElement('h2', {}, this.props.title)
        )
    },
});

let Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    
    render: function() {
        return (
            React.createElement('li', {key: this.props.movie.id},
                React.createElement(MovieTitle, {title: titles}),
                React.createElement('p', {}, this.props.movie.desc),
                React.createElement('img', {src: this.props.movie.poster})
            )
        )
    }
});


const moviesElements = movies.map(function(movie) {
    return  React.createElement(Movie, {key: movie.id, movie: movie});
});


let moviesList = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );    

ReactDOM.render(moviesList, document.getElementById('app')); 