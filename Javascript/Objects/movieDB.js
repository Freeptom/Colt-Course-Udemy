//create an array of movie objects. Each movie should have a title, rating and hasWatched property. Iterate through the array and print out

var movies = [
    {
      title: 'Die Hard',
      rating: 8.1,
      hasWatched: false
    },
    {
      title: 'No Country for Old Men',
      rating: 9.2,
      hasWatched: true
    },
    {
      title: 'Spy',
      rating: 7.8,
      hasWatched: false
    }
  ]

movies.forEach(function(movie){
  buildString(movie)
  console.log(buildString(movie));
});

function buildString(movie) {
  var result = 'You have ';
  if(movie.hasWatched) {
    result += 'watched ';
  } else {
    result += 'not seen ';
  }
  result += '\'' + movie.title + '\' - ';
  result += movie.rating + ' stars';
  return result;
}
