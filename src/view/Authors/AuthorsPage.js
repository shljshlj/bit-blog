import React, { Component } from 'react';
import { AuthorsList } from './AuthorsList/AuthorsList';
import { authorService } from '../../services/AuthorService'
import './AuthorsPage.css';


class AuthorsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [],
        }
    }

    fetchAuthors = () => {
        authorService.fetchAuthors()
            .then(listOfAuthors => this.setState({
                authors: listOfAuthors,
            }))
    }

    componentDidMount() {
        this.fetchAuthors();
    }

    render() {
        return (
            <AuthorsList authors={this.state.authors} />
        )
    }

}

export { AuthorsPage }