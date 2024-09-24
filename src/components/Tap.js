import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Tap() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);

    const [animations, setAnimations] = useState([]);
    let animationId = 0;
    const handleIncrement = (event) => {  
        setAnimations((prev) => [...prev, { id: animationId++, x: event.clientX, y: event.clientY }]);
    };
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          setIsModalOpen(false);
        }
      };
  
      if (isModalOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isModalOpen]);

    const navigate = useNavigate();

    const openSetting = () => {
        navigate('/setting');
    };

    const flag = false;

    return (       
        <div className="relative">
            <div className="-mx-4"> 
                <div className={`border ${flag ? 'h-[500px] rounded-[20px] mt-[20px] bg-gradient-to-b from-[#1d1d1f] to-[#000D2E] border-[#000000]' : 'border-none'}`}>
                    <div>
                        <div className='flex justify-center mt-[32px]'>
                        <img src="./imgs/minidog.png" className='w-[32px] h-[32px] mr-[10px]' alt="number" />
                        <div className="text-white text-[25px] leading-[32px] font-semibold">
                            324,293
                        </div>
                        </div>
                        <div className="flex justify-center" onClick={handleIncrement}>
                            <img src="./imgs/errorloading.png" alt="pic" />
                            <AnimatePresence>
                                {animations.map((animation) => (
                                    <motion.div
                                    key={animation.id}
                                    initial={{ opacity: 1, y: 0 }}
                                    animate={{ opacity: 0, y: -400 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="select-none font-medium text-[40px] text-white touch-none"
                                    style={{
                                        position: "fixed",
                                        left: `${animation.x}px`,
                                        top: `${animation.y}px`,
                                    }}
                                    >
                                    + 1
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {flag ? (
                        <div className="relative overflow-hidden" onClick={openModal}>
                            <div className="-mx-4">
                                <img src="./imgs/secrete.png" alt="alternative" className="w-full h-auto" />
                            </div>
                        </div>
                    ) : (
                        <div className="flex justify-between mx-[16px]" id="modify">
                            <div className="flex w-[120px] items-center">
                                <img src="./imgs/Vector1.png" alt="vector1" className="mx-[10px] w-[19px] h-[24px]" />
                                <div className="text-white text-[14px] text-center font-medium">1,392 / 1,500</div>
                            </div>
                            <div className="rounded-full p-[10px] outline-1 outline-gray-200 bg-[#1f1f14] w-[40px] h-[40px] cursor-pointer" onClick={openSetting}>
                                <img src="./imgs/Subtract.png" alt="subtract" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {isModalOpen && (
                <>
                <div className="fixed inset-0 flex justify-center items-center z-50 mx-[20px]">
                    <div
                    ref={modalRef}
                    className="bg-[#070708] w-[400px] h-[650px] px-[24px] py-[24px] rounded-2xl shadow-lg"
                    >
                        <div className='flex justify-center mb-[50px]'>
                            <div className='w-[45px] h-[4px] bg-[#35353b] rounded-full'></div>
                        </div>
                    <h2 className="text-[24px] leading-[32px] mb-12 text-white font-bold">What does FOMO stand for in the crypto world</h2>
                    <p className="text-[15px] font-normal leading-[21px] text-white mx-[10px] mb-12">Fear of Missing Out</p>
                    <p className="text-[15px] font-normal leading-[21px] text-white mx-[10px] mb-12">Future of Monetary Operations</p>
                    <p className="text-[15px] font-normal leading-[21px] text-white mx-[10px] mb-12">Financial Opportunities Maximized</p>
                    <p className="text-[15px] font-normal leading-[21px] text-white mx-[10px] mb-12">Fear of Monetary Opportunity</p>
                    <div className='bg-[#17171a] w-full h-[8px] rounded-full mt-[80px]'>
                        <div className='bg-white w-[30%] h-[8px] rounded-full'></div>
                    </div>
                    <div className='text-[15px] text-[#8E8E93] mt-[80px]'>Tap to select the answer</div>
                    </div>
                </div>
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
                </>
            )}
        </div>
    );
}

export default Tap;
