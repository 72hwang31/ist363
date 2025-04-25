import { useState } from "react";
import About from './About'
// ./ means same folder as the App.jsx file

function Home (){
  return(
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

// conditional rendering aka navigation SPAs
function App(){
  const [page, setPage] = useState('home');
  return (
    <>
      <nav className="navbar bg-body-tertiary bg-light">
        <span className="container-fluid justify-content-start">
          <button className="btn btn-outline-success m-3" onClick={()=>setPage('home')}>Home</button>
          <button className="btn btn-outline-primary m-3" onClick={()=>setPage('about')}>About</button>
        </span>
      </nav>
      {page === 'home' && <Home/>}
      {page === 'about' && <About/>}
    </>
  );
}

export default App;