import React from 'react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  const { id, name, image, country, description } = destination;

  return (
    <Link to={`/destination/${id}`}>
      <div className="group relative overflow-hidden rounded-2xl shadow-lg card-hover h-80">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-sm text-gray-200">{country}</p>
          {description && (
            <p className="text-sm text-gray-300 mt-2 line-clamp-2">{description}</p>
          )}
        </div>

        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;