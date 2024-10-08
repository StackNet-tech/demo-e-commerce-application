import React, { useState, useEffect, useRef, useCallback } from 'react';

const ImageGallery = () => {
  const [imageGalleryOpened, setImageGalleryOpened] = useState(false);
  const [imageGalleryActiveUrl, setImageGalleryActiveUrl] = useState(null);
  const [imageGalleryImageIndex, setImageGalleryImageIndex] = useState(null);
  const galleryRef = useRef(null);

  const imageGalleryOpen = (event) => {
    setImageGalleryImageIndex(Number(event.target.dataset.index));
    setImageGalleryActiveUrl(event.target.src);
    setImageGalleryOpened(true);
  };

  const imageGalleryClose = () => {
    setImageGalleryOpened(false);
    setTimeout(() => setImageGalleryActiveUrl(null), 300);
  };

  const imageGalleryNext = useCallback(() => {
    const totalImages = galleryRef.current.childElementCount;
    const nextIndex = imageGalleryImageIndex === totalImages ? 1 : imageGalleryImageIndex + 1;
    const nextImage = galleryRef.current.querySelector(`[data-index='${nextIndex}']`);
    setImageGalleryImageIndex(nextIndex);
    setImageGalleryActiveUrl(nextImage.src);
  }, [imageGalleryImageIndex]);

  const imageGalleryPrev = useCallback(() => {
    const totalImages = galleryRef.current.childElementCount;
    const prevIndex = imageGalleryImageIndex === 1 ? totalImages : imageGalleryImageIndex - 1;
    const prevImage = galleryRef.current.querySelector(`[data-index='${prevIndex}']`);
    setImageGalleryImageIndex(prevIndex);
    setImageGalleryActiveUrl(prevImage.src);
  }, [imageGalleryImageIndex]);

  useEffect(() => {
    const imageGalleryPhotos = galleryRef.current.querySelectorAll('img');
    imageGalleryPhotos.forEach((img, index) => {
      img.setAttribute('data-index', index + 1);
    });

    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') {
        imageGalleryNext();
      } else if (e.key === 'ArrowLeft') {
        imageGalleryPrev();
      } else if (e.key === 'Escape') {
        imageGalleryClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [imageGalleryNext, imageGalleryPrev]);

  return (
    <section className="w-full h-full select-none">
      <div className="max-w-6xl mx-auto duration-1000 delay-300 opacity-100 ease">
        <ul ref={galleryRef} id="gallery" className="grid grid-cols-2 gap-5 lg:grid-cols-5">
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/27980133/pexels-photo-27980133/free-photo-of-elegant-couple-on-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 1" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/27487297/pexels-photo-27487297/free-photo-of-models-in-jeans-posing-together.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 2" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/27220698/pexels-photo-27220698/free-photo-of-pregnant-woman-in-dress-and-hat-standing-with-man-in-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 3" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/26852336/pexels-photo-26852336/free-photo-of-portrait-of-couple-sitting-together.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 4" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/25568835/pexels-photo-25568835/free-photo-of-portrait-of-couple-at-library.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 5" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/23947515/pexels-photo-23947515/free-photo-of-women-and-men-posing-in-suits.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 6" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/20509497/pexels-photo-20509497/free-photo-of-model-in-an-olive-blazer-and-model-in-a-lace-white-shirt-and-baggy-blue-pants-on-a-red-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 7" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/20228912/pexels-photo-20228912/free-photo-of-black-and-white-photo-of-a-young-man-and-woman-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 8" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/22670684/pexels-photo-22670684/free-photo-of-couple-posing-in-dark-costumes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 9" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/20323874/pexels-photo-20323874/free-photo-of-multiracial-couple-posing-in-white-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 10" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/27980133/pexels-photo-27980133/free-photo-of-elegant-couple-on-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 1" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/27487297/pexels-photo-27487297/free-photo-of-models-in-jeans-posing-together.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 2" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/27220698/pexels-photo-27220698/free-photo-of-pregnant-woman-in-dress-and-hat-standing-with-man-in-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 3" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/26852336/pexels-photo-26852336/free-photo-of-portrait-of-couple-sitting-together.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 4" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/25568835/pexels-photo-25568835/free-photo-of-portrait-of-couple-at-library.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 5" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/23947515/pexels-photo-23947515/free-photo-of-women-and-men-posing-in-suits.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 6" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/20509497/pexels-photo-20509497/free-photo-of-model-in-an-olive-blazer-and-model-in-a-lace-white-shirt-and-baggy-blue-pants-on-a-red-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 7" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/20228912/pexels-photo-20228912/free-photo-of-black-and-white-photo-of-a-young-man-and-woman-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 8" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/22670684/pexels-photo-22670684/free-photo-of-couple-posing-in-dark-costumes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 9" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/20323874/pexels-photo-20323874/free-photo-of-multiracial-couple-posing-in-white-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 10" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/27980133/pexels-photo-27980133/free-photo-of-elegant-couple-on-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 1" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/27487297/pexels-photo-27487297/free-photo-of-models-in-jeans-posing-together.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 2" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/27220698/pexels-photo-27220698/free-photo-of-pregnant-woman-in-dress-and-hat-standing-with-man-in-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 3" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/26852336/pexels-photo-26852336/free-photo-of-portrait-of-couple-sitting-together.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 4" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/25568835/pexels-photo-25568835/free-photo-of-portrait-of-couple-at-library.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 5" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/23947515/pexels-photo-23947515/free-photo-of-women-and-men-posing-in-suits.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 6" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/20509497/pexels-photo-20509497/free-photo-of-model-in-an-olive-blazer-and-model-in-a-lace-white-shirt-and-baggy-blue-pants-on-a-red-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 7" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/20228912/pexels-photo-20228912/free-photo-of-black-and-white-photo-of-a-young-man-and-woman-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 8" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/22670684/pexels-photo-22670684/free-photo-of-couple-posing-in-dark-costumes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 9" /></li>
          <li><img onClick={imageGalleryOpen} src="https://images.pexels.com/photos/20323874/pexels-photo-20323874/free-photo-of-multiracial-couple-posing-in-white-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]" alt="Gallery item 10" /></li>
        
        </ul>
      </div>

      {imageGalleryOpened && (
        <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 select-none cursor-zoom-out" onClick={imageGalleryClose}>
          <div className="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12">
            <div onClick={(e) => { e.stopPropagation(); imageGalleryPrev(); }} className="absolute left-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:-translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </div>
            <img className="object-contain object-center w-full h-full select-none cursor-zoom-out" src={imageGalleryActiveUrl} alt="Active item" />
            <div onClick={(e) => { e.stopPropagation(); imageGalleryNext(); }} className="absolute right-0 flex items-center justify-center text-white translate-x-10 rounded-full cursor-pointer xl:translate-x-24 2xl:translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
