const GIPHY_API_URL = 'https://api.giphy.com';
const GIPHY_PUB_KEY = 'fO1VOAOqD4XV6bdDHJ9Q8DJ5NfEtChVv';


App = React.createClass({
    getInitialState() {
        return {
            loading: false,
            searchingText: '',
            gif: {},
            error: undefined
        };
    },

    handleSearch: function(searchingText) {
        this.setState({
            loading: true
        });
        this.getGif(searchingText)
        .then(response => {
            console.log('gif1', response)
                        this.setState ({
                           loading: false,
                           searchingText: searchingText,
                           gif: response,
                        //    error: undefined     
                        })
                        
            })
        .catch(error => {
                        this.setState ({
                            loading: false,
                            searchingText: searchingText,
                            error: 'Coś poszło nie tak '
                        })
                })        
    },


    getGif : function(searchingText) {
        const url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
        const xhr = new XMLHttpRequest();

        return new Promise(
            function(resolve, reject) {
                xhr.open('GET', url);
                xhr.onload = function() {
                    let data = JSON.parse(xhr.responseText).data;
                    let gif = {
                        url: data.fixed_width_downsampled_url,
                        sourceUrl: data.url
                        };      
                    if (xhr.status === 200) {
                        resolve(gif);
                    } else {
                        reject(error);
                    }
                };
                xhr.onerror = function() {
                    reject(new Error
                        ('nie działa'));
                };
                xhr.send();
            }
        )
    },


    render: function() {

        const styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };
        
        return (
            <div style={styles}>
                <h1>Wyszukiwarka GIFów!</h1>
                <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
                <Search onSearch={this.handleSearch} />
                {
                    this.state.error ?

                        <p>{this.state.error}</p> : 

                        <Gif 
                            loading={this.state.loading}
                            url={this.state.gif.url}
                            sourceUrl={this.state.gif.sourceUrl}   
                        /> 
                }            
            </div>
        );
    }
});

