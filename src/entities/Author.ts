export default class Author {
    constructor(
        public name: string,
        public nationality: string,
        public bio: string
    ) {
        this.name = name
        this.nationality = nationality
        this.bio = bio
    }
}