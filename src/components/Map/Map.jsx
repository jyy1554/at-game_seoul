import React, { useEffect, useState } from "react";
import { json } from 'd3';
import './css/index.css';

const jsonUrl = 'assets/map/map_seoul.json';

function Map() {
    const [data, setData] = useState(null);

    console.log(data);

    useEffect(() => {
        json(jsonUrl).then(setData);
    }, []);

    return (
        <div className="map">
            <div className="wrapper">안녕하시렵니까</div>
        </div>
    );
}

export default Map;