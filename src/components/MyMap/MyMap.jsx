import React, { useEffect } from 'react';
import data from './data/seoul.json';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './css/index.css';

const center = [37.539605, 126.988386];

function MyMap() {

    useEffect(() => {
        console.log(data);
    }, [])

    const guStyle = {
        fillColor: "red",
        fillOpacity: 0.1,
        color: "grey",
        weight: 2,
    }

    function printMessageToConsole(event) {
        console.log("Clicked");
    }

    function changeGuColor(event) {
        event.target.setStyle({
            color: "black",
            fillColor: "grey",
        });
    }

    function onEachGu(gu, layer) {
        const guName = gu.properties.name;
        layer.bindPopup(guName);

        layer.on({
            mouseover: changeGuColor,
            click: printMessageToConsole,
        });
    }

    return (
        <div className="mymap">
            <div className="wrapper">
                <MapContainer
                    style={{ height: "80vh" }}
                    zoom={11}
                    center={center} 
                >
                    <GeoJSON style={guStyle} data={data.features} onEachFeature={onEachGu} />
                </MapContainer>
            </div>
        </div>
        
 
    );
}

export default MyMap;