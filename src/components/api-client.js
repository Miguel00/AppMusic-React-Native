const URL = "https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=37fb9d6e7283bb8b51773c3dd55ebdbe&format=json";

function getArtists(){
   return fetch(URL)
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => {
        return {
            name: artist.name,
            image: artist.image[3]['#text']
        }
    }))
}

export { getArtists }

