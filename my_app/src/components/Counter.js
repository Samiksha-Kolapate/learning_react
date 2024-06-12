import { useState } from "react";

function Counter(){
    var componentName = "Counter";

    var [count,setCounter] = useState(0);

    function handleEvent1(e){
        if(count >= 0){
            setCounter(++count);
        }
    }

    function handleEvent2(e){
        if(count > 0){
        setCounter(--count);
        }
        else{
            alert("Counter exhausted");
        }
    }

    return (
        <>
        <div style = {{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "300%",
            position: "absolute",
            width: "50%",
            height: "80%",
            border: "1px solid black",
            margin: "100px 400px",
            background: "beige"

        }}>
            <h1>{componentName}</h1>
            <div style={{
                    fontSize: "120%",
                    position: "relative",
                    bottom: "10vh"
                }}>
                <h1>{count}</h1>
            </div>
            <div>
                <button style={{
                        fontSize: "60%",
                        position: "relative",
                        marginRight: "5px",
                        backgroundColor: "skyBlue",
                    bottom: "10vh",
                    color: "black",
                    }} onClick={function(e) {handleEvent1(e)}}>Increment</button>
                <button style={{
                        fontSize: "60%",
                        position: "relative",
                        marginRight: "5px",
                        backgroundColor: "lightGreen",
                    bottom: "10vh",
                    color: "black",
                    }} onClick={function(e) {handleEvent2(e)}}>Decrement</button>
            </div>
        </div>
        </>
    )
}

export default Counter;