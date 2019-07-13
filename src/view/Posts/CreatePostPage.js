import React, { Component } from 'react';
import { postService } from '../../services/PostService'
import './CreatePostPage.css';

class CreatePostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            body: null,
        }
    }

    onInputChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;
        // this.setState({
        //     [name]: value.trim(),
        // })

        if (name === 'title') this.setState({ title: value.trim() });
        else this.setState({ body: value.trim() })
    }

    onSubmitForm = (event) => {
        event.preventDefault();

        const userId = 1;
        // const { ...data } = this.state

        const { title, body } = this.state;
        postService.postData({
            title: title,
            body: body,
            userId: userId,
        })
            .then(response => {
                this.props.history.push('/');
            });

    }

    onCancelForm = (event) => {
        event.preventDefault();

        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <h1 className='new-post-main-title'>New Post</h1>
                <form>
                    <div className='new-post-title'>
                        <h2>Title</h2>
                        <input type="text" name="title" placeholder="Enter Post Title" onChange={this.onInputChange} />
                    </div>

                    <div className='new-post-body'>
                        <h2>Content</h2>
                        <textarea name="body" cols="60" rows="10" placeholder="Post Content" onChange={this.onInputChange} />
                    </div>

                    <div className='form-buttons'>
                        <input type="button" value="Cancel" onClick={this.onCancelForm} />
                        <input type="submit" onClick={this.onSubmitForm} />
                    </div>
                </form>
            </>
        )
    }
}

export { CreatePostPage }
