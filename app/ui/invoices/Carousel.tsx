'use client'
import { Children, useState } from 'react'
import ImageZoom from '@/app/productDetails/DetailModal';

  //export default function Carousel({ oneProduct }: any) {
  //  const [curr, setCurr] = useState(0);



  //  const prev = () => {
  //    setCurr((curr) => (curr === 0 ? oneProduct.images.length -1 : curr - 1))
  //  }
  //  const next = () => {
  //    setCurr((curr) => (curr === oneProduct.images.length -1 ? 0 : curr + 1))
  //  }

  //  return (
  //    <>
  //      <div className="w-full h-full p-20">
  //        <div className="relative overflow-hidden w-full h-full">
  //          <div className="w-full h-full flex">
  //            {oneProduct.images && (
  //              <>
  //                {oneProduct.images.map((elem, index) => (
  //                  <>
  //                    <img
  //                      key={index}
  //                      src={`http://13.51.165.176${elem.image}`}
  //                        className={`w-full h-full absolute top-0 left-0 opacity-0 ${
  //                          index === curr ? "opacity-100 transition-opacity duration-500 ease-in-out" : ""
  //                        }`}
  //                        alt={elem.product}
  //                      />
  //                  </>
  //                ))}
  //              </>
  //            )}
  //          </div>
  //        </div>
  //        <div className="relative w-full mx-auto bottom-[0px] w-1/2 h-[100px] flex justify-center pr-[30px]">
  //          {oneProduct.images && oneProduct.images.map((elem) => (
  //            <>
  //              <img className="w-[70px] m-1 h-[70px]" src={`http://13.51.165.176${elem.image}`} alt="" />
  //            </>
  //          ))}
  //        </div>
  //      </div>
  //      <div className="absolute top-0 p-15 w-full h-full flex opacity-100 transition duration-200 items-center justify-between">
  //        <button className="relative w-12 rounded-full bg-f1 flex items-center justify-center cursor-pointer opacity-90 transform scale-100 transition duration-200 ease-in-out" onClick={prev}>
  //          <img className="" src={'/arrow-left.svg'} alt="" />
  //        </button>
  //        <button onClick={next} className="relative w-12 rounded-full bg-f1 flex items-center justify-center cursor-pointer opacity-90 transform scale-100 transition duration-200 ease-in-out">
  //          <img src={'/arrow-right.svg'} alt="" />
  //        </button>
  //      </div>
  //    </>
  //  )
  //}


  export default function Carousel({ oneProduct }: any) {
    const [curr, setCurr] = useState(0);
  
    const prev = () => {
      setCurr((curr) => (curr === 0 ? oneProduct.images.length -1 : curr - 1));
    };
  
    const next = () => {
      setCurr((curr) => (curr === oneProduct.images.length -1 ? 0 : curr + 1));
    };
  
    const handleImageClick = (index: number) => {
      console.log(index);
      setCurr(index);
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (e) => {
      e.preventDefault();
      setOpen(false);
    };

    return (
      <>
        <div className="w-full h-full p-20">
          <div className="relative z-0 overflow-hidden w-full h-full">
            <div className="w-full h-full flex">
              {oneProduct.images && (
                <>
                  {oneProduct.images.map((elem, index) => (
                    <img
                      key={index}
                      src={elem.image}
                      className={`w-full h-full object-cover absolute top-0 left-0 opacity-0 ${
                        index === curr ? "opacity-100 transition-opacity duration-500 ease-in-out" : ""
                      }`}
                      alt={elem.product}
                    />
                    //<ImageZoom imageUrl={elem.img} zoomFactor={2} onClose={handleClose} />
                  ))}
                </>
              )}
            </div>
          </div>
          <div className="relative w-full mx-auto bottom-[-10px] w-1/2 h-[100px] flex justify-center pr-[30px]">
          {oneProduct.images && oneProduct.images.map((elem, index) => (
            <img
            key={index}
            className={`z-10 w-[60px] m-1 h-[55px] transition-transform duration-300 ${
              index === curr ? "scale-105" : ""
            }`}
            onClick={() => handleImageClick(index)}
            src={elem.image}
            alt=""
          />
          ))}
        </div>
        </div>
        <div className="absolute top-0 p-15 w-full h-full flex opacity-100 transition duration-200 items-center justify-between">
          <button className="relative w-12 rounded-full bg-f1 flex items-center justify-center cursor-pointer opacity-90 transform scale-100 transition duration-200 ease-in-out" onClick={prev}>
            <img className="" src={'/arrow-left.svg'} alt="" />
          </button>
          <button onClick={next} className="relative w-12 rounded-full bg-f1 flex items-center justify-center cursor-pointer opacity-90 transform scale-100 transition duration-200 ease-in-out">
            <img src={'/arrow-right.svg'} alt="" />
          </button>
        </div>
      </>
    );
  }
  