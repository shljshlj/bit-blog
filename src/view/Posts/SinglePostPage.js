import React, { Component } from 'react';
import { PostAuthor } from './SinglePost/PostAuthor';
import { RelatedPosts } from './SinglePost/RelatedPosts';
import { postService } from '../../services/PostService';
import './SinglePostPage.css';


class SinglePostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
        }
    }

    fetchPost = () => {
        const id = this.props.match.params.postId;
        postService.fetchSinglePost(id)
            .then(post => this.setState({
                post
            }));
    }

    componentDidMount() {
        this.fetchPost();
    }

    componentDidUpdate(prevProps){
        if (this.props.match.url !== prevProps.match.url) {
            this.fetchPost();
        }
    }

    render() {
        const { post } = this.state;

        if (!post) {
            return (
                <div>Loading...</div>
            )
        }

        const { postId, authorId, title, body } = this.state.post;
        // const { authorId } = this.props.match.params.authorId;

        return (
            <>
                <div className="single-post">
                    <div className="post-title">
                        <h1>{title}</h1>
                        <PostAuthor authorId={authorId} />
                    </div>
                    <div className="post-body">
                        {body}
                    </div>
                </div>
                <RelatedPosts authorId={authorId} postId={postId} />
            </>
        )
    }
}

export { SinglePostPage }