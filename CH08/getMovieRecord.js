function main() {
  try {
  logObject(getMovieRecord(1))
  logObject(getMovieRecord(2))
  logObject(getMovieRecord(3))
  logObject(getMovieRecord(4))
  }
  catch (err) {
    console.log(err.message)
  }
}

// Don't edit below this line

function getMovieRecord(movieId) {
  if (movieId === 1) {
    return { name: 'Apollo 13', duration: 128 }
  }
  if (movieId === 2) {
    return { name: '2001: A Space Odyssey', duration: 300 }
  }
  if (movieId === 3) {
    return { name: 'Interstellar', duration: 4000 }
  }
  throw new Error('movie id not found')
}

function logObject(obj) {
  for (const key in obj) {
    console.log(` - ${key}: ${obj[key]}`)
  }
  console.log('---')
}

main()
