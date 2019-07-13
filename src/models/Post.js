class Post {
    constructor({ id, userId, title, body }) {
        this.postId = id;
        this.authorId = userId;
        this.title = title;
        this.body = body;
    }
}

export default Post;