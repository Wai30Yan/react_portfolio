import joke from './images/joke.png'
import todo from './images/todo.png'
import movie from './images/movie.png'
import voice from './images/voice.png'

export const projects = [
    {
        id: 1,
        img: joke,
        name: "Joke App",
        demoLink: "https://wai30yan.github.io/react_joke_app/",
        githubLink: "https://github.com/Wai30Yan/react_joke_app",
        desc: "This is a React Joke app that uses Axios to fetch joke data. The application is styled with pure CSS." +
        "To fetch different types of jokes or blagflag inappropriate jokes, URL manipulation for specific query is carried out with Axios." +
        "To submit different types of query, HTML form is controlled logically by ReactJS.",
    },
    {
        id: 2,
        img: voice,
        name: "Note Taking App",
        demoLink: "https://wai30yan.github.io/react_joke_app/",
        githubLink: "https://github.com/Wai30Yan/mern_speech_to_text",
        desc: "This is my Engineering Capstone Project and is not fully finished yet. It's a note taking app with Speech Recognition. " +
        "It is a fullstack app developed using MERN stack with REST API. Json Web Token is used in Express server for Authorization and " +
        "Authentication, and Redux with Redux-Thunk for state management at client side.",
    },
    {
        id: 3,
        img: movie,
        name: "Movie App",
        demoLink: "https://wai30yan.github.io/react_movie_app/",
        githubLink: "https://github.com/Wai30Yan/react_movie_app",
        desc: "A simple React app that fetches movie data from Rapid API and renders it on DOM." +
        "I made this app to test out Tailwind CSS for UI design.", 
    },
    {
        id: 4,
        img: todo,
        name: "Todo App (Firebase Backend)",
        demoLink: "https://wai30yan.github.io/react_firebase_todo/",
        githubLink: "https://github.com/Wai30Yan/react_firebase_todo",
        desc: "This is a mini fullstack application that can handle CRUD operations." + 
        "Firebase is used for backend and database service." + 
        "Material UI is used for styling. It also show the date and time of when a task is added to the TodoList.",
    },
]