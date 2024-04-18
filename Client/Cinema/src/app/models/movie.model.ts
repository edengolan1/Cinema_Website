export class Movie{
    constructor(
        public id: number = 0,
        public name: string = '',
        public genre: string = '',
        public cinema: string = '',
        public summary: string = '',
        public viewLimit: number = 0,
        public premiereDate: Date = new Date(),
        public srcImage: string = ''
    ){
        if (premiereDate) {
            this.premiereDate = new Date()
        }
    }
}