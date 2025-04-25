import { useState } from "react";

function App(){
  const [page, setPage] = useState('home');
  const Home=()=>(
    <div>
      <div className="d-sm-flex">
        <div className="p-3 m-3 card">
          <img className="card-image-top position-relative" src="https://upload.wikimedia.org/wikipedia/commons/6/6d/ElizabethFeinler-2011.jpg" alt="Elizabeth Feinler image" height="300" onClick={()=>{handleClick1();setPage('detail1')}}/>
          {box1}
          <div className="card-body">
            <h3 className="card-title">Elizabeth J. Feinler</h3>
          </div>
        </div>
        <div className="p-3 m-3 card">
          <img className="card-image-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/LS3_4919_%28cropped%29.jpg/330px-LS3_4919_%28cropped%29.jpg" alt="Tim Berners Lee image" height="300" onClick={()=>{handleClick2();setPage('detail2')}}/>
          {box2}
          <div className="card-body">
            <h3 className="card-title">Tim Berners Lee</h3>
          </div>
        </div>
        <div className="p-3 m-3 card">
          <img className="card-image-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ray_Tomlinson.jpg/330px-Ray_Tomlinson.jpg" alt="Ray Tomlinson image" height="300" onClick={()=>{handleClick3();setPage('detail3')}}/>
          {box3}
          <div className="card-body">
            <h3 className="card-title">Ray Tomlinson</h3>
          </div>
        </div>
      </div>
    </div>
  );
  const Pioneers=(props)=>(
    <div className="bg-secondary text-light p-4">
      <div className="card bg-secondary p-2 m-2"><strong>{props.name}</strong></div>
      <div>
        <img src={props.image} height="300"/>
      </div>
      <div><strong>Age:</strong></div>
      <div>{props.age}</div>
      <br/>
      <div><strong>Known For: </strong></div>
      <div>{props.known}</div>
      <div>With supporting text below as a natural lead-in to additional content.</div>
      <br/>
      <div className="btn btn-primary" onClick={()=>setPage('home')}>Return to directory</div>
    </div>);
  const [box1, setBox1] = useState();
  const [box2, setBox2] = useState();
  const [box3, setBox3] = useState();
  let handleClick1=()=>{
    setBox1(<div className="position-absolute bg-danger text-light rounded p-2 m-2">Viewed</div>);
  };
  let handleClick2=()=>{
    setBox2(<div className="position-absolute bg-danger text-light rounded p-2 m-2">Viewed</div>);
  };
  let handleClick3=()=>{
    setBox3(<div className="position-absolute bg-danger text-light rounded p-2 m-2">Viewed</div>);
  };
  return(
    <div>
      <h1>Internet Pioneers Bios</h1>
      {page === 'home' && <Home/>}
      {page === 'detail1' && <Pioneers name="Elizabeth Feinler" image="https://upload.wikimedia.org/wikipedia/commons/6/6d/ElizabethFeinler-2011.jpg" age="94" known="overseeing ARPANET which turned into the Internet and inventing the concept of top-level domains like .com, .net, and .edu"/>}
      {page === 'detail2' && <Pioneers name="Tim Berners Lee" image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/LS3_4919_%28cropped%29.jpg/330px-LS3_4919_%28cropped%29.jpg" age="69" known="inventor of the World Wide Web, the HTML markup language, the URL system, and HTTP"/>}
      {page === 'detail3' && <Pioneers name="Ray Tomlinson" image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ray_Tomlinson.jpg/330px-Ray_Tomlinson.jpg" age="deceased" known='inventor of email and the use of "@" in addresses' />}
    </div>
  );
}
export default App;