import { useState } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
    const [input, setInput] = useState('')

    const inputHandler = (value) => {
        setInput(value)
    }
    return (
        <div>
            <Header title="🎥 Movies" />
            <SearchBar inputHandler={inputHandler}/>
            <MovieList input={input}/>
        </div>
    );
}

export default App;
