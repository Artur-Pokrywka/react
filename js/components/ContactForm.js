let ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            <form className={'contact-form'}>
                <input type='text' placeholder='Imię'  value={this.props.contact.firstName}/>
                <input type='text' placeholder='Nazwisko'  value={this.props.contact.firstName}/>
                <input type='email' placeholder='Emial'  value={this.props.contact.firstName}/>   
                <button type='submit'>Dodaj kontakt</button>
            </form>
        )
    },
});