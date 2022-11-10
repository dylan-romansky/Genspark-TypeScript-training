"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Song {
    constructor() {
        this._name = "";
        this._artist = "";
    }
    static create(name, artist) {
        var track = new Song();
        track.name = name;
        track.artist = artist;
        return track;
    }
    get name() {
        return this._name;
    }
    get artist() {
        return this._artist;
    }
    set name(name) {
        this._name = name;
    }
    set artist(artist) {
        this._artist = artist;
    }
}
class Playlist {
    constructor() {
        this._name = "";
        this._songs = [];
    }
    static byName(name) {
        var list = new Playlist();
        list.name = name;
        return list;
    }
    set name(name) {
        this._name = name;
    }
    set songs(Songs) {
        this._songs = Songs;
    }
    get getName() {
        return this._name;
    }
    get getSongs() {
        return this._songs;
    }
    addSong(add) {
        this._songs.push(add);
    }
    getRand() {
        let index = Math.floor(Math.random() * this._songs.length);
        return this._songs[index];
    }
}
let list = Playlist.byName("my Playlist");
list.addSong(Song.create("fake Song 1", "fake artist"));
list.addSong(Song.create("fake Song 2", "fake artist"));
list.addSong(Song.create("fake Song 3", "fake artist"));
list.addSong(Song.create("fake Song 4", "fake artist"));
list.addSong(Song.create("fake Song 5", "fake artist"));
list.addSong(Song.create("fake Song 6", "fake artist"));
list.addSong(Song.create("fake Song 7", "fake artist"));
console.log("Getting from " + list.getName);
console.log(list.getRand());
console.log(list.getRand());
console.log(list.getRand());
console.log(list.getRand());
console.log(list.getRand());
console.log(list.getRand());
//# sourceMappingURL=01-playlist.js.map