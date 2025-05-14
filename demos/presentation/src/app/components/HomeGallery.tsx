'use client';

import Image from 'next/image';

export const HomeGallery = () => {
  const images = [1, 2, 3, 4, 5];

  const rotations = ['rotate-2', '-rotate-2', 'rotate-1', '-rotate-1', 'rotate-3'];

  return (
    <div className="px-8 py-10 space-y-[-40px] max-w-5xl mx-auto">
      {images.map((num, index) => (
        <div
          key={num}
          className={`relative w-full h-72 rounded-xl overflow-hidden shadow-xl transform
                     ${rotations[index % rotations.length]}
                     z-[${10 - index}]`}
        >
          <Image
            src={`/demo/presentation/catering-images/catering-${num}.jpg`}
            alt={`Catering ${num}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};
