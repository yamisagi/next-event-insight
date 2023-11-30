'use client';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapView = ({ latlong = [38.73, 35.46] , popUp}) => {
  return (
    <div
      id='map'
      className='map-view'
    >
      <MapContainer
        className='w-full h-full rounded-lg'
        center={latlong}
        zoom={14}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&amp;copy <a href="https://yamisagi-portfolio.vercel.app/">Eren C.</a>'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          detectRetina
        />

        <Marker position={latlong}>
          <Popup>{popUp}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
