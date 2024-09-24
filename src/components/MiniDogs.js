import React, { useState, useRef, useEffect} from 'react';
import Header from './Header';
import Tap from './Tap';
import Menubar from './Menubar';

function MiniDogs() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    // Close the modal when clicking outside the modal content
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          setIsModalOpen(false);
        }
      };
  
      // Add event listener when the modal is open
      if (isModalOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }
  
      // Cleanup the event listener when the modal is closed
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isModalOpen]);

  return (
    <div className="relative min-h-screen pb-[100px]">
      {/* Background content, will be blurred when the modal is open */}
      <div className={`${isModalOpen ? 'blur-md' : ''}`}>
        <Header />

        {/* Content of the page */}
        <div className="flex justify-between">
          <div className="w-[293px] h-[40px] border-[2px] border-gray-400 flex items-center justify-between rounded-full bg-gradient-to-r from-[#0D4382] to-[#030E1C]">
            <div className="flex items-center">
              <img src="./imgs/minidog.png" alt="minidog" className="w-[40px] h-[40px] mr-[15px]" />
              <div className="text-white text-[16px] leading-[22px] font-medium">Senator</div>
            </div>
            <img src="./imgs/Vector.png" className="w-[35px] h-[14px]" alt="vector" />
            <div className="text-[#8E8E93] text-[16px] leading-[22px] font-medium pr-[15px]">President</div>
          </div>
          <button id="reward" onClick={openModal}>
            <img src="./imgs/pre_btn.png" alt="pre_btn" />
          </button>
        </div>

        <div className="bg-gradient-to-r from-blue-950 to-[#0D4382] mt-[15px] rounded-[10px] outline-[#0D4382] outline-1 overflow-hidden">
            <div className="flex justify-between px-[16px] py-[8px]">
                <div>
                    <div className="text-white text-[20px] leading-[28px] font-semibold text-left">21,730 votes</div>
                    <div className="text-white text-[11px] leading-[12px] font-normal text-left">Excellent</div>
                </div>
                <div>
                    <div className="text-white text-[20px] leading-[28px] font-semibold text-left">25,000</div>
                    <div className="text-white text-[11px] leading-[12px] font-normal text-left">Daily goal</div>
                </div>
            </div>
            <div className="bg-[#000099]">
                <div className="w-[70%] bg-gradient-to-r from-white to-[#0C33FE] h-[8px] rounded-full"></div>
            </div>
        </div>

        <Tap />
        <div className="fixed bottom-[20px] w-[90%]">
          <Menubar />
        </div>
      </div>
      <div className="w-[140px] h-[5px] bg-white rounded-full fixed bottom-[5px] left-1/2 transform -translate-x-1/2"></div>

      {/* Modal */}
      {isModalOpen && (
        <>
          {/* Modal - It will be on top and not affected by blur */}
          <div className="fixed inset-0 flex justify-center items-center z-50 mx-[20px]">
            <div
              ref={modalRef} // Reference for detecting outside clicks
              className="bg-[#0A84FF33] w-[400px] h-[390px] px-[24px] py-[48px] rounded-2xl shadow-lg"
            >
              <h2 className="text-[24px] leading-[32px] mb-4 text-white font-bold">Your daily rewards</h2>
              <p className="text-[15px] font-normal leading-[21px] text-white mx-[10px] mb-[20px]">1.Come back tomorrow for check-in 2.Skipping a day reset your reward streak.</p>
              <div className="flex">
                <div className="relative w-[152px] h-[134px] px-[40px] py-[24px] bg-white rounded-lg overflow-hidden mx-[10px] cursor-pointer">
                    <div className="absolute inset-0 p-[2px] rounded-lg bg-gradient-to-b from-white to-[#0A84FF]">
                        <div className="w-full h-full bg-[#101E2D] rounded-lg py-[15px]">
                            <img src="./imgs/minidog.png" alt="avatar" className="w-[40px] h-[40px] mx-[55px]" />
                            <div className="text-[30px] leading-[32px] font-normal text-white mt-[10px]">1,000</div>
                            <div className="text-[14px] leading-[21px] font-normal text-white">Coins</div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[152px] h-[134px] px-[40px] py-[24px] bg-white rounded-lg overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 p-[2px] rounded-lg bg-gradient-to-b from-white to-[#0A84FF]">
                        <div className="w-full h-full bg-[#101E2D] rounded-lg py-[15px]">
                            <img src="./imgs/voites.png" alt="avatar" className="w-[40px] h-[40px] mx-[55px]" />
                            <div className="text-[30px] leading-[32px] font-normal text-white mt-[10px]">500</div>
                            <div className="text-[14px] leading-[21px] font-normal text-white">Voites</div>
                        </div>
                    </div>
                </div>
              </div>
              <button onClick={closeModal} className="mt-7 bg-blue-500 text-white px-4 py-2 rounded w-full">
                Claim
              </button>
            </div>
          </div>
          {/* Overlay to prevent background interaction and dim the screen */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
        </>
      )}
    </div>
  );
}

export default MiniDogs;
