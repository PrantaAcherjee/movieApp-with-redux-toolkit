import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.scss";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import MovieDetails from "./component/moviedetails/MovieDetails";
import PageNotFound from "./component/pageNotFound/PageNotFound";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header></Header>
      <div className="cotainer">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie/:imdbID" element={<MovieDetails/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>    
      <Footer></Footer>
      </BrowserRouter>      
    </div>
  );
}

export default App;
