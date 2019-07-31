Contacts = React.createClass({
    render: function() {
    let contacts = this.props.items.map(function(contact) {
          return <Contact item={contact} key={contact.id}/>;
      });
  
      return (
        <ul className='contactsList'>
          {contacts}
        </ul>
      );
    }
  });