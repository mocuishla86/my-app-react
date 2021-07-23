import React, {useEffect, useState} from "react";
import axios from "axios";


function App() {
    const [entries, setEntries] = useState([])

    useEffect( () => {
        async function fetchData() {
            // You can await here
            const entriesResponse = await axios(
                'http://localhost:8080/entries'
            );
            console.log(entriesResponse)
            setEntries(entriesResponse.data)
        }
        fetchData();
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
