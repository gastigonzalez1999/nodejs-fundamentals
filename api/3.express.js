// This is an old file, its basic only for demonstration
// We should check it since it does not use the best practices

import express, { json } from 'express';
// import { randomUUID } from 'node:crypto';

// In the future
// import movies from 'movies.json' with { type: 'json' }

// import { validateMovie, validatePartialMovie } from './schemas/movies.js';
// import { readJSON } from './utils/util.js';
import { corsMiddleware } from './middlewares/cors.js';
import router from './routes/movies.js';

// const movies = readJSON('./movies.json');

const app = express();

const PORT = process.env.PORT ?? 1234;

app.disable('x-powered-by');

app.use('/movies', router);

app.use(json());
app.use(corsMiddleware);

// const ACCEPTED_ORIGINS = [
//   'http://localhost:8080',
//   'http://localhost:1234'
// ];

// this is the behind the scenes of using express.json();

// app.use((req, res, next) => {
//   console.log('my first middleware');
//   if (req.method !== 'POST') return next();
//   if (req.headers['content-type'] !== 'application/json') return next();

//   let body = '';

//   req.on('data', chunk => {
//     body += chunk.toString();
//   });

//   req.on('end', () => {
//     const data = JSON.parse(body);
//     data.timestamp = Date.now();
//     req.body = data;
//     next();
//   });
// });

// app.get('/', (req, res) => {
// const origin = req.header('origin');

// if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
//   res.header('Access-Control-Allow-Origin', origin);
// }

// const { genre } = req.query;
// if (genre) {
//   const filteredMovies = movies.filter(
//     movie => movie.genre.some(
//       g => g.toLoweCase() === genre.toLoweCase()
//     )
//   );
//   return res.json(filteredMovies);
// }
// res.send(movies);
// });

// app.get('/movies/:id', (req, res) => {
//   const { id } = req.params;
//   const movie = movies.find(movie => movie.id === id);
//   if (movie) {
//     return res.json(movie);
//   }

//   res.status(404).json({ message: `Movie with ${id} not found` });
// });

// app.post('/movies', (req, res) => {
//   const result = validateMovie(req.body);

//   if (result.error) {
//     return res.status(404).json({ error: JSON.parse(result.error.message) });
//   }

//   const newMovie = {
//     id: randomUUID(),
//     ...result.data
//   };

//   // Temporary, this is not REST since we are storing the app state in memory
//   movies.push(newMovie);

//   res.status(201).json(newMovie);
// });

// app.patch('movies/:id', (req, res) => {
//   const { id } = req.params;
//   const result = validatePartialMovie(req.body);

//   if (result.error) {
//     return res.status(404).json({ error: JSON.parse(result.error.message) });
//   }

//   const movieIndex = movies.findIndex(movie => movie.id === id);

//   if (movieIndex === -1) {
//     return res.status(404).json({ message: 'Movie not found' });
//   }

//   const updatedMovie = {
//     ...movies[movieIndex],
//     ...result.data
//   };

//   const movie = movies[movieIndex];

//   movie[movieIndex] = updatedMovie;

//   res.json(updatedMovie);
// });

// app.delete('/movies/:id', (req, res) => {
//   // const origin = req.header('origin');

//   // if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
//   //   res.header('Access-Control-Allow-Origin', origin);
//   // }

//   const { id } = req.params;
//   const movieIndex = movies.findIndex(movie => movie.id === id);

//   if (movieIndex === -1) {
//     return res.status(404).json({ message: 'Movie not found' });
//   }

//   movies.splice(movieIndex, 1);

//   return res.json({ message: 'Movie deleted' });
// });

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>');
});

// For complex mehtods like put,patch and delete
// app.options('/movies', (req, res) => {
//   const origin = req.header('origin');
//   if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
//     res.header('Access-Control-Allow-Origin', origin);
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT PATCH, DELETE');
//   }
//   res.send();
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
