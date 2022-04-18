import { H3Error } from 'h3';

const movies = {
  1: { title: 'Movie 1' },
};

// "Add import statement"?
export default defineEventHandler(event => {
  const movieId = parseInt(event.context.params.id, 10);

  if (movies[movieId]) {
    return movies[movieId];
  }

  // Notice how much of _undocumented_ code is required for simple 404
  const error = new H3Error();
  error.statusCode = 404;
  error.statusMessage = 'Not Found';

  throw error;
});
