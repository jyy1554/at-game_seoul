import React, { useEffect, useRef } from 'react';
import { select, geoPath, geoMercator } from 'd3';
import useResizeObserver from '../useResizeObserver';
import './css/index.css';

function Map({ data }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(()=> {
    const svg = select(svgRef.current);

    // use resized dimensions
    // but fall back to getBoundingClientRect, if no dimensions yet.
    const { width, height } = 
      dimensions || wrapperRef.current.getBoundingClientRect();

    // projects geo-coordinate on a 2D plane
    const projection = geoMercator().fitSize([width, height], data);

    // takes geojson data,
    // transforms that into the d attribute of a path element
    const pathGenerator = geoPath().projection(projection);

    svg
      .selectAll(".gu")
      .data(data.features)    //gu라는 className을 가진 요소와 data 싱크를 맞춤
      .join("path")          //path라는 DOM element 요소를 추가
        .attr("class", "gu")
        .attr("name", function(d){ return d.properties.name})
        .attr("d", feature => pathGenerator(feature));

    // Add the labels
    svg
      .selectAll(".labels")
      .data(data.features)
      .join("text")
        .attr("class", "labels")
        .attr("x", function(d){return pathGenerator.centroid(d)[0]})
        .attr("y", function(d){return pathGenerator.centroid(d)[1]})
        .text(function(d){ return d.properties.name})
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "central")
        .style("font-size", 11)
        .style("fill", "white");
    
  }, [data, dimensions]);


  return (
    <div ref={wrapperRef} className="map-wrapper">
        <svg ref={svgRef} className="seoul-map"></svg>
    </div>
  )
}

export default Map;