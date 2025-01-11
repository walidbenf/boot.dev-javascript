const getCountsByTitle = (movies) => {
  const movieCounts = {}
  for(let movie of movies)
  {
    if(!movieCounts[movie])
      movieCounts[movie] = 0
    movieCounts[movie]++;
  }
  return movieCounts
}
