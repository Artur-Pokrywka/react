let Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            // React.createElement('li', {className: 'contactItem'},
            //     React.createElement('img', {
            //         className: "contactImage",
            //         src: 'https://picsum.photos/200'  
            //     }),
            //     React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
            //     React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
            //     React.createElement('a', {className: 'conatactEmail', href: 'mailto:' + this.props.item.email},
            //         this.props.item.email
            //     )    
            // )
            <li className={'contactItem'}>
                <img className={'contactImage'} src={'https://picsum.photos/200'}/>
                <p className={'contactLabel'}>
                    Imię: {this.props.item.firstName}
                </p>
                <p className={'contactLabel'}>
                    Nazwisko: {this.props.item.lastName}
                </p>
                <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
                    {this.props.item.email}
                </a>
            </li>
        )
    },
});

