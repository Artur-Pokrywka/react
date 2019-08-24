class UsersList extends React.Component {
    get users() {
      return this.props.users.map(user => <User key={user.id} user={user}/>);
    }
  
    render() {
      return (
        <div>
          {this.users}
        </div>
      );
    }
}


class User extends React.Component {
    render() {
      return (
        <div>
          <img src={this.props.user.avatar_url} style={{maxWidth: '100px'}}/>
          <a href={this.props.user.html_url} target="_blank">{this.props.user.login}</a>
        </div>
      );
    }
  }