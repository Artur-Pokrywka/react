let MovieTitle = React.createClass ({
    propTypes : {
        movieTitle: React.PropTypes.string.isRequired,
    },

    render: function() {
        console.log("propsy", this.props)
        return (
            React.createElement('h2', {}, this.props.movie.title)
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
                // React.createElement(MovieTitle, {movieTitle: movie.title}),
                React.createElement('p', {}, this.props.movie.desc),
                React.createElement('img', {src: this.props.movie.poster})
            )
        )
    }
});


const moviesElements = movies.map(function(movie) {
    return  React.createElement(Movie, {key: movie.id, movie: movie});
});

// let element = React.createElement(Movie, {key: movie_id,});


let moviesList = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );    

ReactDOM.render(moviesList, document.getElementById('app')); 