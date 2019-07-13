import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { postService } from '../../../services/PostService'

class RelatedPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: null
        }
    }

    fetchPosts = () => {
        const { authorId, postId } = this.props;
        postService.fetchAuthorRelatedPost(authorId)
            .then(listOfRelatedPosts => this.setState({
                posts: listOfRelatedPosts.filter(post => post.postId !== postId)
            }))
    }

    componentDidMount() {
        this.fetchPosts();
    }

    componentDidUpdate(prevProps){
        if (this.props !== prevProps) {
            this.fetchPosts();
        }
    }

    render() {
        const { posts } = this.state;

        if (!posts) {
            return (
                <article className="related-posts">
                    <h2>No other posts from this author</h2>
                </article>
            )
        }
        
        return (
            <article className="related-posts">
                <h2> more posts from same author</h2>
                <ul>
                    {posts.map(({ title, body, authorId, postId }, index) => <li key={index}>
                        <Link to={`/posts/${authorId}/${postId}`}><span className="bold">{title.slice(0, 15)}</span> - {body.slice(0, 70)}</Link>
                    </li>)}

                </ul>
            </article>
        )

    }
}

export { RelatedPosts }