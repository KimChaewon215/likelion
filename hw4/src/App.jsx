import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import Info from "./components/Info";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      const data = await res.json();
      setResults(data);
    } catch (e) {
      console.error("error:", e);
    }
  };

  return (
    <>
      <Header query={query} setQuery={setQuery} handleSearch={handleSearch} />
        <div className="min-h-screen bg-black">
            <Routes>
              <Route path="/" element={<Card results={results} />} />
              <Route path="/shows/:id" element={<Info />} />
            </Routes>
        </div>
    </>

  );
}

export default App;
