'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react'; // Optional: for nicer icons

const imageCount = 5; // Adjust to however many images you have

const GalleryPage = () => {
  const [currentImage, setCurrentImage] = useState<number | null>(null);

  const openModal = (index: number) => setCurrentImage(index);
  const closeModal = () => setCurrentImage(null);

  const prevImage = () => {
    if (currentImage !== null) {
      setCurrentImage((prev) => (prev === 0 ? imageCount - 1 : (prev as number) - 1));
    }
  };

  const nextImage = () => {
    if (currentImage !== null) {
      setCurrentImage((prev) => (prev === imageCount - 1 ? 0 : (prev as number) + 1));
    }
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: imageCount }, (_, index) => (
          <div key={index} onClick={() => openModal(index)} className="cursor-pointer">
            <Image
              src={`/gallery-images/img-${index + 1}.jpg`}
              alt={`Gallery image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-auto object-cover rounded"
            />
          </div>
        ))}
      </div>

      {currentImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <X size={32} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-3xl"
          >
            <ChevronLeft size={40} />
          </button>
          <div className="max-w-4xl mx-auto">
            <Image
              src={`/gallery-images/img-${currentImage + 1}.jpg`}
              alt={`Modal image ${currentImage + 1}`}
              width={800}
              height={600}
              className="w-full h-auto rounded"
            />
          </div>
          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-3xl"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
