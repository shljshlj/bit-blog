import Author from '../models/Author';
import { API_ENDPOINT } from '../shared/constants';

class AuthorService {

    fetchAuthors = () => {
        const AUTHORS_API = `${API_ENDPOINT}/users`;

        return fetch(AUTHORS_API)
            .then(response => response.json())
            .then(data => data.map(author => new Author(author)))
    }

    fetchSingleAuthor = (userId) => {
        const SINGLE_AUTHOR_API = `${API_ENDPOINT}/users/${userId}`;

        return fetch(SINGLE_AUTHOR_API)
            .then(response => response.json())
            .then(author => new Author(author))

    }
}

export const authorService = new AuthorService();
