// let moviesElements = movies.map(function(movie) {
//     return  React.createElement('li', {key: movie.id},
//     React.createElement('h2', {}, movie.title),
//     React.createElement('p', {}, movie.desc),
//     React.createElement('img', {src: movie.poster})
//     );
// });

let Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.IsRequired,
    },

    render: function() {
        return (
            React.createElement('li', {key: this.props.movie.id},
                React.createElement('h2', {}, this.props.movie.title),
                React.createElement('p', {}, this.props.movie.desc),
                React.createElement('img', {src: this.props.movie.poster})
            )
        )
    }
});

let element = React.createElement(Movie, {key: movie_id,});



let moviesList = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, Movie)
    );    

ReactDOM.render(moviesList, document.getElementById('app')); 