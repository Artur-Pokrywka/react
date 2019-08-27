App = class App extends React.Component {
    constructor() {
      super();
      this.state = {
        searchText: '',
        users: [], 
        error: null 
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
        .then(responseJson => this.setState({users: responseJson.items}))
        .catch(error => this.setState({error: 'coś poszło nie tak'}));
        console.log('lol', this.state.users)
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
          <UsersList users={this.state.users}/>
          <p>{this.state.error}</p>
        </div>
      );
    }
  }