import React from "react";
import axios from "axios";
import logo from './logo.svg';
import './App.css';

import AuthorList from './components/Authors'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'authors': []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/authors')
            .then(
                response => {
                    const authors = response.data
                    this.setState({
                        'authors': authors
                    })
                }
            ).catch(
            error => console.log(error)
        )
        // const  authors = [
        //     {
        //         "id": 1,
        //         "first_name": "цукцкцк",
        //         "last_name": "2342424",
        //         "birthday_year": "3333",
        //
        //     }
        // ]
        //this.setState({'authors': authors})
    }

    render() {
        return (
            <div>
                <AuthorList authors={this.state.authors}/>
            </div>
        )
    }

}

export default App;
