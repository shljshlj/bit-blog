import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { authorService } from '../../../services/AuthorService';

class PostAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: null,
        }
    }

    fetchAuthor = () => {
        const id = this.props.authorId;
        console.log(id)
        authorService.fetchSingleAuthor(id)
            .then(author => this.setState({
                author
            }));
    }

    componentDidMount() {
        this.fetchAuthor();
    }

    render() {
        const { author } = this.state;

        if (!author) {
            return (
                <div>...</div>
            )
        }

        const { name, authorId } = author;


        return (
            <Link to={`/authors/${authorId}`}><h3>{name}</h3></Link>
        )
    }
}

export { PostAuthor }