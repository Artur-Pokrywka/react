let MovieTitle = React.createClass ({
    propTypes : {
        title: React.PropTypes.string.isRequired, 
    },

    render: function() {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    },
});

let MovieDescription = React.createClass ({
    propTypes : {
        description: React.PropTypes.string.isRequired,
    },

    render: function() {
        console.log('props', this.props);
        return (
            React.createElement('p', {}, this.props.description)
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
                React.createElement(MovieTitle, {title: this.props.movie.title}),
                React.createElement(MovieDescription, {description: this.props.movie.desc}),
                React.createElement('img', {src: this.props.movie.poster})
            )
        )
    }
});


const moviesElements = movies.map(function(movie) {
    return  React.createElement(Movie, {key: movie.id, movie: movie});
});


let List = React.createClass({
    propTypes: {
        listName : React.PropTypes.string.isRequired,
        },

        render: function() {
            return (
                React.createElement('h1', {}, this.props.listName)
            )
        }
});

let moviesList = 
    React.createElement('div', {},
        React.createElement(List, {listName: 'Lista filmów'}),
        React.createElement('ul', {}, moviesElements)
    );    

ReactDOM.render(moviesList, document.getElementById('app')); 