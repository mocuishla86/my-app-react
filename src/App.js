import React from "react";

function App() {
    const entries = [
        {title: "title 1", content: "content 1"},
        {title: "title 2", content: "content 2"},
    ]
    return (
        <ul>
            {entries.map(item => <li>{item.title} - {item.content}</li>)}
        </ul>
    );
}

export default App;
