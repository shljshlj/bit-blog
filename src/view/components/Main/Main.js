import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PostsPage } from '../../Posts/PostsPage';
import { AuthorsPage } from '../../Authors/AuthorsPage';
import { About } from '../../About/About';
import { SinglePostPage } from '../../Posts/SinglePostPage';
import { SingleAuthorPage } from '../../Authors/SingleAuthorPage';
import { CreatePostPage } from '../../Posts/CreatePostPage'

const Main = () => {
    return (
        <main className='container'>
            <Switch>
                <Route exact path="/bit-blog/posts/:authorId/:postId" component={SinglePostPage} />
                <Route path="/bit-blog/posts/new" component={CreatePostPage} />
                <Route path="/bit-blog/authors/:authorId" component={SingleAuthorPage} />
                <Route path="/bit-blog/authors" component={AuthorsPage} />
                <Route path="/bit-blog/about" component={About} />
                <Route path="/bit-blog" component={PostsPage} />
            </Switch>
        </main>
    )
}

export { Main }