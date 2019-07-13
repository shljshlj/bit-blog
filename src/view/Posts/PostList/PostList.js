import React from 'react'
import { PostItem } from './PostItem'

const PostList = ({ posts }) => {
    return (
        <ul className="post-list">
            {posts.map(({ postId, authorId, title, body }) =>
                <PostItem
                    key={postId}
                    postId={postId}
                    authorId={authorId}
                    title={title}
                    body={body}
                />)}
        </ul>
    )
}

export { PostList }