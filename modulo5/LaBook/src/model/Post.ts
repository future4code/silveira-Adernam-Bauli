export default class Post {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: string,
        private createdAt: Date,
        private authorId: string
    ) { }
}