import React, { useEffect } from 'react';
import { seoulData } from './data/seoul';
import data from './data/seoul.json';
import { MapContainer, Polygon, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './css/index.css';

const center = [37.539605, 126.988386];

function MyMap() {

    useEffect(() => {
        console.log(seoulData);
    }, [])

    return (
        <div className="mymap">
            <div className="wrapper">
                <MapContainer
                    style={{ height: "80vh" }}
                    zoom={10}
                    center={center} 
                >
                    {/* <TileLayer
                        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=cQ77T0JC7WxUGNC87Llg"
                        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    /> */}
                    {/* {
                        seoulData.features.map((gu) => {
                            const coordinates = gu.geometry.coordinates[0].map((item) => [item[1], item[0]]);

                            return (<Polygon
                                pathOptions={{
                                    fillColor: '#FD8D3C',
                                    fillOpacity: 0.7,
                                    weight:2,
                                    opacity: 1,
                                    dashArray:3,
                                    color: 'white'
                                }}
                                position={coordinates}
                            />);
                        })
                    } */}

                    <GeoJSON data={data.features}/>
                </MapContainer>
            </div>
        </div>
        
 
    );
}

export default MyMap;