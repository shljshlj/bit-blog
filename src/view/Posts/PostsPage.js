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
            <PostList posts={this.state.posts} />
        )
    }
}

export { PostsPage }