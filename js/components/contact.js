let Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('li', {className: 'contactItem'},
                React.createElement('img', {
                    className: "contactImage",
                    src: 'https://picsum.photos/200'   // link z Kodilli nie działał 
                }),
                React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
                React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
                React.createElement('a', {className: 'conatactEmail', href: 'mailto:' + this.props.item.email},
                    this.props.item.email
                )    
            )
        )
    },
});

