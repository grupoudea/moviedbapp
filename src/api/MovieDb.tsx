import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        language: 'es-ES',
    },
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDhmMmJhNzhiZWM0ZjlkMThjYTIxZDQ0YTU2ZWU0MSIsInN1YiI6IjYwMzU1MWVjZTc4Njg3MDA0MGQyODI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y_aZaAU3b89tLC-MFkbA7LQsOHsY9nG1KpWL_S3iTZ8'
    }
})

export default movieDB