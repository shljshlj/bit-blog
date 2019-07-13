import React, { Component } from 'react'
import { PostList } from './PostList/PostList'
import { postService } from '../../services/PostService';
import './PostsPage.css'

class PostsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    fetchPosts = () => {
        postService.fetchPosts()
            .then(listOfPosts => this.setState({
                posts: listOfPosts,
            }))
    }

    componentDidMount() {
        this.fetchPosts();
    }

    render() {
        return (
            <>
                <img src="img/anitaEkb.jpg" alt="Actress Anita Ekberg" />
                <br />
                <img src="img/anouk.gif" alt="Actress Anouk Aimée" />
                <PostList posts={this.state.posts} />
            </>
        )
    }
}

export { PostsPage }