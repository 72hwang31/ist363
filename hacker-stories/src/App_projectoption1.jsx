import {useState} from "react";

function App(){
    const [input, setInput] = useState([]);
    const fetchData = (value) =>{
        fetch("https://openlibrary.org/search.json?subject=fantasy/works").then((response)=>response.json()).then((json)=>{
            const results = Object.values(json).filter((work)=>{
                return (
                    value &&
                    work &&
                    work.docs &&
                    work.docs.title &&
                    work.docs.title.includes(value))

            });
            console.log(results);
        });
    };
    const handleChange = (value) =>{
        setInput(value)
        fetchData(value)
    }
  const [page, setPage] = useState('home');
  const Home=()=>(
    <div>
      <div className="d-flex p-4 m-5">
        <div className="row">
            <div className="col-sm">
                <img src="bookstack.png" className="w-50"/>
            </div>
            <div className="col-sm">
                <p>This is a website to search up your favorite books. Search up information about the books and their authors. Create your own reading list. If you don't find a certain book, help log it in to this site.</p>
            </div>
        </div>
    </div>
    <h2 onClick={()=>setPage('list')}>See More Books</h2>
    <div className="container">
        <div className="row">
            <div className="card col-sm m-5">
                <img src="#" className="card-img-top"/>
                <div className="card-body">Book1 Title</div>
            </div>
            <div className="card col-sm m-5">
                <img src="#" className="card-img-top"/>
                <div className="card-body">Book2 Title</div>
            </div>
            <div className="card col-sm m-5">
                <img src="#" className="card-img-top"/>
                <div className="card-body">Book3 Title</div>
            </div>
        </div>
    </div>
    <br/>
    </div>
  );
  const List=()=>(
    <div>
    <h1 className="text-center">List</h1>
    <div className="container">
        <div className="row justify-content-center">
            <input type="text" className="form-control search-input" placeholder="Search for books" value={input} onChange={(e)=>handleChange(e.target.value)}/>
        </div>
    </div>
    <table className="table m-4 text-center">
        <tbody>
        <tr>
            <th>Read</th>
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
        </tr>
        <tr>
            <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
            <td><img src="#"/></td>
            <td>Book</td>
            <td>Name</td>
        </tr>
        </tbody>
    </table>
    <div className="container">
        <div className="row justify-content-center">
            <input type="text" className="form-control search-input" placeholder="Log in More Books"/>
        </div>
    </div>
    <br/>
    </div>
  );
  const Authors=()=>(
    <div>
      <h1 className="text-center">Authors</h1>
    <div className="container">
        <div className="row justify-content-center">
            <input type="text" className="form-control search-input" placeholder="Search Authors"/>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="card col-sm m-5">
                <img src="#" class="card-img-top"/>
                <div className="card-body">Author1</div>
            </div>
            <div className="card col-sm m-5">
                <img src="#" class="card-img-top"/>
                <div className="card-body">Author2</div>
            </div>
            <div className="card col-sm m-5">
                <img src="#" class="card-img-top"/>
                <div className="card-body">Author3</div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row justify-content-center">
            <input type="text" class="form-control search-input" placeholder="Add More Authors"/>
        </div>
    </div>
    <br/>
    </div>
  );
  return(
    <div className="bg-warning">
      <nav className="d-flex bg-dark text-light rounded p-2 m-2">
        <div className="row p-2 m-2">
            <div className="col-sm" onClick={()=>setPage('home')}>Home</div>
            <div className="col-sm" onClick={()=>setPage('list')}>List</div>
            <div className="col-sm" onClick={()=>setPage('authors')}>Authors</div>
        </div>
      </nav>
      {page==='home'&&<Home/>}
      {page==='list'&&<List/>}
      {page==='authors'&&<Authors/>}
      <footer className="bg-dark text-light p-4">
        <div>&copy;2025</div>
        <div>Harvey Wang</div>
      </footer>
    </div>
  );
}

export default App;