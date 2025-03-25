// global variable - every component can see it
const myGlobalVariable = "I'm global baby!";

function App(){
    //local variable - only works inside the component
    const myLocalVariable = "I'm local:-(";
    return (
        <div>
            <h1 className="green">Hello World</h1>
            <p>{myGlobalVariable}</p>
            <p>{myLocalVariable}</p>
            <p>separate<br /> lines with br tag that needs a trailing slash</p>
        </div>
    );
}

export default App;