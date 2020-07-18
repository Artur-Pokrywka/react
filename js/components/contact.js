Contact = React.createClass({
    render: function() {
        return (
            <li className='contactItem'>
                <img className='contactImage' src='https://picsum.photos/200'/>
                <p className='contactLabel'>
                    Imię: {this.props.item.firstName}
                </p>
                <p className='contactLabel'>
                    Nazwisko: {this.props.item.lastName}
                </p>
                <a className='contactEmail' href={'mailto:' + this.props.item.email}>
                    {this.props.item.email}
                </a>
            </li>
        )
    },
});
