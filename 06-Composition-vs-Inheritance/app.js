class Media{
    constructor(name, author){
        this.name = name;
        this.author = author;
    }
}

class Song extends Media{
    constructor(name, author, genre){
        super(name, author);
        this.genre = genre;
    }
}

class Podcast extends Media{
    constructor(name, author, category){
        super(name, author);
        this.category = category;
    }
}

class Playlist{
    constructor(){
        this.media = [];
    }

    addMedia(media){
        if(!(media instanceof Media)){
            throw new Error('This media is not supported');
        }
        
        this.media.push(media);
    }

    remove(mediaName){
        this.media = this.media.filter(media => media.name !== mediaName);
    }
}