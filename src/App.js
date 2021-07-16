import React, {useState} from "react";


function App() {
    const [entries, setEntries] = useState([
        {title: "title 1", content: "content 1"},
        {title: "title 2", content: "content 2"},
    ])
    const clear = () => {
        setEntries([])
    }
    return (
        <div>
            <ul>
                {entries.map(item => <li>{item.title} - {item.content}</li>)}
            </ul>
            <button onClick={clear}>Clear</button>
        </div>
    );
}

export default App;
