import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useLoaderData } from 'react-router';
import 'leaflet/dist/leaflet.css';
import { Search } from 'lucide-react';

const Coverage = () => {
    const coverages = useLoaderData();
    const position = [23.6850, 90.3563];
    const mapRef = useRef(null);

    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = coverages.find(center => center.district.toLowerCase().includes(location.toLowerCase()));
        if(district){
            const coord = [district.latitude, district.longitude];
            mapRef.current.flyTo(coord, 12);
        }
    console.log('Searching for:', location);

   
  };

    return (
        <div>
            <h2 className='text-4xl text-center font-extrabold mt-10'>We are available in 64 districts</h2>


            {/* ============= Search  ============= */}
            <form onSubmit={handleSearch} className="flex w-full max-w-lg mx-auto my-6 p-4 md:p-6 lg:p-8">
                <div className="flex w-full rounded-full bg-white shadow-md focus-within:ring-2 focus-within:ring-lime-500 transition-shadow overflow-hidden">

                    {/* Search Icon */}
                    <div className="flex items-center pl-4 text-gray-500">
                        <Search className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search here"
                        name='location'
                        className="flex-grow py-3 px-2 md:py-4 md:px-4 text-gray-700 placeholder-gray-500 focus:outline-none bg-transparent text-base md:text-lg min-w-0"
                    />
                    <button
                        // onClick={handleSearch}
                        className="bg-lime-400 hover:bg-lime-500 active:bg-lime-600 text-gray-800 font-semibold py-3 px-6 md:py-4 md:px-8 
                     rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full  cursor-pointer
                     transition-colors duration-200 text-base md:text-lg 
                     focus:outline-none"
                        aria-label="Search"
                    >
                        Search
                    </button>
                </div>
            </form>

            {/* ============= Map ============= */}
            <div className='w-full h-[500px]'>
                <MapContainer
                    center={position}
                    zoom={7}
                    scrollWheelZoom={false}
                    ref={mapRef}
                    className='h-[500px]'
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        coverages.map((center, index) => <Marker key={index} position={[center.latitude, center.longitude]}>
                            <Popup>
                                <strong>{center.district}</strong> <br /> Service Area: {center.covered_area.join(", ")}.
                            </Popup>
                        </Marker>)
                    }
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;