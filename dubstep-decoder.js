function songDecoder(song){
	return song.split('WUB').filter(word => word).join(' ');
}

let song1 = "AWUBBWUBC";
let song2 = "AWUBWUBWUBBWUBWUBWUBC";
let song3 = "WUBAWUBBWUBCWUB";
// console.log(songDecoder(song1));
// console.log(songDecoder(song2));
console.log(songDecoder(song3));
