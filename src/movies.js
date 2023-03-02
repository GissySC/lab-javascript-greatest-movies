// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(director => director.director);  
    return allDirectors;   
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
  
    const dramaStevenMovies = moviesArray.filter(movie => {
      return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    });
  
    return dramaStevenMovies.length;
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    let sumScore = moviesArray.reduce((avg, movie) => {
        if(movie.score) {
            return avg + movie.score;
        }
        return avg;
    }, 0);
    const avgScore = sumScore / moviesArray.length;
    return parseFloat(avgScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama') && movie.score !== undefined);
  
  if (dramaMovies.length === 0) {
    return 0;
  }
  
  let sumScores = dramaMovies.reduce((total, movie) => total + movie.score, 0);
  let avgScore = sumScores / dramaMovies.length;
  return parseFloat(avgScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesYears = moviesArray.slice();
  moviesYears.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.title > b.title ? 1 : -1;
  });
  return moviesYears;
};
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let moviesClone = moviesArray.slice();
  let titles = moviesClone.map(movie => movie.title);
  titles.sort((a, b) => a.localeCompare(b)); 
  titles = titles.slice(0, 20); 
  return titles;
}
  


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newMoviesArray = [];

  for (let i = 0; i < moviesArray.length; i++) {
    const newMovie = { ...moviesArray[i] };

    const durationParts = newMovie.duration.split(' ');
    let minutes = 0;
    for (let j = 0; j < durationParts.length; j++) {
      if (durationParts[j].endsWith('h')) {
        minutes += parseInt(durationParts[j]) * 60;
      } else if (durationParts[j].endsWith('min')) {
        minutes += parseInt(durationParts[j]);
      }
    }

    newMovie.duration = minutes;
    newMoviesArray.push(newMovie);
  }

  return newMoviesArray;
}

 
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
