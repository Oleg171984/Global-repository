import { useState } from "react";
import "../styles.css";

function People() {
    const [url, setUrl] = useState("https://swapi.dev/api/people/1/");
    const [response, setResponse] = useState(null);

    const fetchData = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setResponse(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setResponse({ error: "Failed to fetch data" });
        }
    };

    return (
        <div className="container">
            <h1>SWAPI</h1>

            {/* Поле вводу URL */}
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button className="btn btn-primary" onClick={fetchData}>
                    Get info
                </button>
            </div>

            {/* Відображення відповіді у вигляді JSON */}
            <div className="card">
                <div className="card-body">
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            </div>
        </div>
    );
}

export default People;
