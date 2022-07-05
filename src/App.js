import logo from './logo.svg';
import './App.css';
import Posts from "./components/posts";
import React,{Suspense} from "react";
import {Route, Routes} from "react-router-dom";


const Detail = React.lazy(() => import("./components/detail"));
function App() {
  return (
      //Making Routes of All Components
      <Suspense fallback={<div>Loading...</div>}>
             <Routes>
                    <Route path="/" element={<Posts />} />
                    <Route path="/details" element={<Detail />} />
                </Routes>
      </Suspense>


  );
}

export default App;
