let moviesElements = movies.map(function(movie) {
    return  React.createElement('li', {key: movie.id},
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img', {src: movie.poster})
    );
});

let moviesList = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );    

ReactDOM.render(moviesList, document.getElementById('app')); 
