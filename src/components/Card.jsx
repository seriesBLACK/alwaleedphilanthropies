import React, { useState } from 'react';

export default function Card({
  projectState,
  spanClass,
  pClass,
  title,
  goal,
  img,
  className,
  imgClassName,
  titleClassname,
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoaded(true);
    setImageError(true);
  };

  const defaultImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300' fill='none'%3E%3Crect width='400' height='300' fill='%23E5E5E5'/%3E%3Cpath d='M200 150L150 125V175L200 200L250 175V125L200 150Z' stroke='%23B0B0B0' stroke-width='2' fill='none'/%3E%3Ccircle cx='200' cy='150' r='30' stroke='%23B0B0B0' stroke-width='2' fill='none'/%3E%3C/svg%3E";

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${className || "bg-white"}`}
    >
      <div className="relative w-full h-48 lg:h-58 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        <img
          src={imageError ? defaultImage : img}
          alt="project image"
          className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />

        {projectState && (
          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${spanClass || "bg-blue-100 text-blue-800"}`}>
              {projectState}
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className={`text-xl font-semibold mb-2 ${titleClassname || "text-gray-900"}`}>
          {title}
        </h3>

        <p className={`text-gray-600 mb-4 ${pClass}`}>
          {goal}
        </p>
      </div>
    </div>
  );
}