export default class PostModel {
    constructor(post) {
        this.id = post.id;
        this.userId = post.userId;
        this.title = post.title;
        this.body = post.body;
    }
}