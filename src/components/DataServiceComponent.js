import React, { useEffect, useState } from 'react';

function DataServiceComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/service')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setData(data);
            setLoading(false);  // Set loading to false once data is fetched
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);  // Also set loading to false if there's an error
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {/* Render the data or components using the data here */}
            {data && <div>{JSON.stringify(data)}</div>}
        </div>
    );
}

export default DataServiceComponent;