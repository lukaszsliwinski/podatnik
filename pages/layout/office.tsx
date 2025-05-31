import { useState } from "react";
import Image from "next/image";

const images = [
  "/office-photo-1.jpg",
  "/office-photo-2.jpg",
  "/office-photo-3.jpg",
  "/office-photo-4.jpg"
];

export default function Office() {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(images.length-1);

  return (
    <section className="flex flex-col justify-center items-center bg-light-bg" id="office">
      <div className="grid grid-cols-3 gap-20 max-w-6xl my-24">
        
        <div
          className="flex col-span-2 max-w-3xl w-full overflow-hidden mx-auto rounded-xl"
          onMouseLeave={() => setActivePhotoIdx(activePhotoIdx)}
        >
          {images.slice().reverse().map((image, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActivePhotoIdx(idx)}
              className={`
                relative flex-shrink-0 h-96 transition-all duration-500 ease-in-out
                ${activePhotoIdx === idx ? 'w-2/3 opacity-100' : 'w-1/9 opacity-30'}
                ${idx !== 0 ? 'border-l-4 border-light-bg' : ''}
              `}
            >
              <Image
                src={image}
                alt="Office photo"
                fill
                className="object-cover pointer-events-none"
              />
              <div
                className="absolute inset-0 transition-all duration-500 ease-in-out"
              ></div>
            </div>
          ))}
        </div>
        
        <div className="my-auto">
          <h2 className="mb-4 text-3xl font-semibold">BIURO</h2>
          <p className="text-justify font-light text-sm">
            <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
      
      
      
    </section>
  );
}