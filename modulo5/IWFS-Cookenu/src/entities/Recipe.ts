export class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private createdAt: string | Date,
        private userId: string,
        private userName: string
    ) { }

    public getId() {
        return this.id
    }
    public getTitle() {
        return this.title
    }
    public getDescription() {
        return this.description
    }
    public getCreatedAt() {
        return this.createdAt
    }
    public getUserId() {
        return this.userId
    }
    public getUserName() {
        return this.userName
    }

    static toRecipeModel(data: any): Recipe {
        return new Recipe(
            data.id,
            data.title,
            data.description,
            data.created.at,
            data.userId,
            data.userName);
    };
};