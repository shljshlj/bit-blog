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
                <Route exact path="/posts/:authorId/:postId" component={SinglePostPage} />
                <Route path="/posts/new" component={CreatePostPage} />
                <Route path="/authors/:authorId" component={SingleAuthorPage} />
                <Route path="/authors" component={AuthorsPage} />
                <Route path="/about" component={About} />
                <Route path="/" component={PostsPage} />
            </Switch>
        </main>
    )
}

export { Main }