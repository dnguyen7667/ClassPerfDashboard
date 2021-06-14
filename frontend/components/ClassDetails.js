import React, {Component} from 'react';



class SearchBar extends Component {

    constructor(props) {
        super(props);

        // this.term = props.term;
        this.onVideoSearch = props.onVideoSearch;


        this.state = {term: ''};
    }

    render() {
        return (
            <div className="search-bar">

                <input value = {this.state.term} 
                        onChange = {event => this.setState({term: event.target.value})}
                        onKeyPress = {event =>  this.onEnter(event)}
                        />
                

            </div>
        )
    }
    

    onEnter(event) {
        if (event.key == "Enter"){
            this.onVideoSearch(this.state.term);
        }

    }

}



export default SearchBar;