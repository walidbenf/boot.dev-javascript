const printCleanReviews = (reviews, badWord) => {
  for (let review of reviews) {
    if (!review.includes(badWord))
      console.log(`Clean review: ${review}`)
  }
}

// don't touch below this line

printCleanReviews([ 'The movie sucks', 'I love it', 'What garbage', 'so sucky' ], 'suck')
console.log('---')
printCleanReviews([ 'The movie sucks', 'I love it', 'What darn crap', 'darn, so sucky' ], 'darn')
console.log('---')
