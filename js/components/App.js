App = class App extends React.Component {
    constructor() {
      super();
      this.state = {
        searchText: "",
        users: [], 
        error: null,
        initialized: false 
      };
    }
  
    onChangeHandle(event) {
      this.setState({searchText: event.target.value});
    }
  
    onSubmit(event) {
      event.preventDefault();
      const {searchText} = this.state;
      const url = `https://api.github.com/search/users?q=${searchText}`;
      fetch(url)
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            users: responseJson.items,
            initialized: true,
            error: null
          });   
        })  
      .catch(error => 
        this.setState({
          error: "coś poszło nie tak", 
          users: []
      }));
    }
   
    render() {
      return (
        <div>
          <form onSubmit={event => this.onSubmit(event)}>
            <label htmlFor="searchText">Search by user name</label>
            <input
              type="text"
              id="searchText"
              onChange={event => this.onChangeHandle(event)}
              value={this.state.searchText}/>
          </form>
          {this.state.initialized && !this.state.users.length ?
            (this.state.error ? <p>{this.state.error}</p> : <p>brak wyników</p>) :
            <UsersList users={this.state.users}/> 
          } 
        </div>
      );
    }
  };