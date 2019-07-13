import React, { Component } from 'react'
import { AuthorInfo } from './SingleAuthor/AuthorInfo'
import { AuthorAddress } from './SingleAuthor/AuthorAddress'
import { AuthorCompany } from './SingleAuthor/AuthorCompany'
import { Link } from 'react-router-dom'
import { authorService } from '../../services/AuthorService'
import './SingleAuthorPage.css';


class SingleAuthorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: null,
        }
    }

    fetchSingleAuthor = () => {
        const id = this.props.match.params.authorId;
        authorService.fetchSingleAuthor(id)
            .then(singleAuthor => this.setState({
                author: singleAuthor,
            }))
    }
    componentDidMount() {
        this.fetchSingleAuthor();
    }
    render() {
        if (this.state.author) {

            const { name, username, email, phone, address: { street,
                city, zipcode, geo: { lat, lng } }, company } = this.state.author;

            return (
                <>
                    <nav className="back">
                        <Link to='/'>Back</Link>
                    </nav>
                    <AuthorInfo
                        name={name}
                        username={username}
                        email={email}
                        phone={phone}
                    />
                    <AuthorAddress
                        street={street}
                        city={city}
                        zipcode={zipcode}
                        lat={lat}
                        lng={lng}

                    />
                    <AuthorCompany
                        name={company.name}
                        catchPhrase={company.catchPhrase}
                    />
                </>
            )

        } else {

            return (
                <div>Loading...</div>
            )
        }
    }
}

export { SingleAuthorPage }