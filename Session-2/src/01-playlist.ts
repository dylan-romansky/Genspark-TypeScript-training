class Song	{
	private _name: string;
	private _artist: string;
	constructor()	{
		this._name = "";
		this._artist = "";
	}
	static create(name: string, artist: string): Song	{
		var track = new Song();
		track.name = name;
		track.artist = artist;
		return track
	}
	get name(): string	{
		return this._name;
	}
	get artist(): string	{
		return this._artist;
	}
	set name(name: string)	{
		this._name = name;
	}
	set artist(artist: string)	{
		this._artist = artist;
	}
}

class Playlist {
	private _name: string;
	private _songs: Array<Song>;
	constructor()	{
		this._name = "";
		this._songs = [];
	}
	static byName(name: string): Playlist	{
		var list = new Playlist();
		list.name = name;
		return list;
	}
	set name(name: string)	{
		this._name = name;
	}
	set songs(Songs: Array<Song>)	{
		this._songs = Songs;
	}
	get getName(): string	{
		return this._name;
	}
	get getSongs(): Array<Song>	{
		return this._songs;
	}
	addSong(add: Song)	{
		this._songs.push(add);
	}
	getRand(): Song	{
		let index: number = Math.floor(Math.random() * this._songs.length);
		return this._songs[index];
	}
}

export {}; //typescript complained about duplicate IDs if I didn't include this blank export

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
