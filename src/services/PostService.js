import Post from '../models/Post';
import { API_ENDPOINT } from '../shared/constants';

class PostService {

    fetchPosts = () => {
        const POSTS_API = `${API_ENDPOINT}/posts`;

        return fetch(POSTS_API)
            .then(response => response.json())
            .then(posts => posts.map(post => new Post(post)))
    }

    fetchSinglePost = (postId) => {
        const POST_API = `${API_ENDPOINT}/posts/${postId}`;

        return fetch(POST_API)
            .then(response => response.json())
            .then(post => new Post(post))
    }

    fetchAuthorRelatedPost = (userId) => {
        const RELATED_POSTS_API = `${API_ENDPOINT}/users/${userId}/posts`;

        return fetch(RELATED_POSTS_API)
            .then(response => response.json())
            .then(posts => {
                return posts.reduce((acc, obj) => {
                    if (obj.userId === userId) acc.push(obj);
                    return acc;
                }, [])
            })
            .then(relatedPosts => relatedPosts.map(post => new Post(post)))
            .then(posts => posts.slice(0, 10))

    }

    postData = (data) => {
        const POSTS_API = `${API_ENDPOINT}/posts`;

        return fetch(POSTS_API, {
            method: 'POST',
            body: JSON.stringify(data),
        })
    }

}


export const postService = new PostService();
