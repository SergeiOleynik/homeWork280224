//Напишіть метод, який виводить на екран список фільмів у вибраному жанрі.

alert("task 1: Напишіть метод, який виводить на екран список фільмів у вибраному жанрі");

const movies = {
  action: ['Die Hard', 'John Wick', 'The Matrix'],
  comedy: ['The Hangover', 'Bridesmaids', 'Step Brothers'],
  drama: ['The Shawshank Redemption', 'The Godfather', "Schindler's List"],
  horror: ['The Shining', 'A Nightmare on Elm Street', 'The Exorcist'],

  listMoviesByGenre(genre){
    let returnGene;   
    switch(genre){
      case 'action': returnGene = movies.action; break;
      case 'comedy': returnGene = movies.comedy; break;
      case 'drama': returnGene = movies.drama; break;
      case 'horror': returnGene = movies.horror; break;
    }
    return returnGene;
  },
};

alert(`жанр фільма action:  ${movies.listMoviesByGenre('action')}`);
alert(`жанр фільма comedy:  ${movies.listMoviesByGenre('comedy')}`);
alert(`жанр фільма drama:   ${movies.listMoviesByGenre('drama')}`);
alert(`жанр фільма horror:  ${movies.listMoviesByGenre('horror')}`);


