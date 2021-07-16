import React, {useEffect, useState} from "react";


function App() {
    const [entries, setEntries] = useState([])

    useEffect(() => {
        const entriesFromBackEnd = [
            {id: "id1", title: "title 1", content: "content 1"},
            {id: "id2", title: "title 2", content: "content 2"},
        ];
        setEntries(entriesFromBackEnd)
    }, [])

    const clear = () => {
        setEntries([])
    }
    return (
        <div>
            <ul>
                {entries.map(item => <li key={item.id}>{item.title} - {item.content}</li>)}
            </ul>
            <button onClick={clear}>Clear</button>
        </div>
    );
}

export default App;
