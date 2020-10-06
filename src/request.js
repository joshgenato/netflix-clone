const API_KEY = 'b95b02621bd75655a78d631879ec1250';

//https://api.themoviedb.org/3
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&with_networks=213`,
  fetchActionMovies: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=28`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=35`,
  fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=27`,
  fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10749`,
  fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=99`,
};

export default requests;
