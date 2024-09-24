import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Setting() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flagNot, setFlagNot] = useState(false);

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

  const before_hint = "minidogs";

  return (
    <div className="relative min-h-[765px]">
      <div className={`${isModalOpen ? 'blur-md' : ''}`}>
        <Header valuable={before_hint} />
        <div className="text-[30px] font-bold font-semibold text-white text-left mb-[20px]">
          Settings
        </div>

        <div className="px-[30px]">
          <div className="mb-[15px]" onClick={() => navigate("/lang")}>
            <div className="text-[17px] leading-[25px] font-semibold text-white text-left">
              Language
            </div>
            <div className="text-[14px] leading-[16px] font-normal text-[#8E8E93] text-left">
              English
            </div>
          </div>

          <div className="mb-[15px] flex justify-between">
            <div>
              <div className="text-[17px] leading-[25px] font-semibold text-white text-left">
                Notifications
              </div>
              <div className="text-[14px] leading-[16px] font-normal text-[#8E8E93] text-left">
                { flagNot ? 'Custom' : 'Single' }
              </div>
            </div>
            <div
              onClick={() => setFlagNot(!flagNot)}
              className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
                flagNot ? "bg-blue-500" : "bg-gray-600"
              }`}
            >
              <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                  flagNot ? "translate-x-6" : ""
                }`}
              />
            </div>
          </div>

          <div className="mb-[15px]" onClick={() => navigate("/appearance")}>
            <div className="text-[17px] leading-[25px] font-semibold text-white text-left">
              Appearance
            </div>
            <div className="text-[14px] leading-[16px] font-normal text-[#8E8E93] text-left">
              Default
            </div>
          </div>

          <div
            className="text-[17px] leading-[25px] font-semibold text-white text-left"
            onClick={openModal}
          >
            Delete account
          </div>
        </div>

        <div className="text-[17px] font-normal text-center leading-[25.5px] text-white underline underline-offset-2 cursor-pointer absolute bottom-[30px] left-1/2 transform -translate-x-1/2">
          Privacy policy
        </div>

        <div className="w-[140px] h-[5px] bg-white rounded-full absolute bottom-[-12px] left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <>
          {/* Modal - It will be on top and not affected by blur */}
          <div className="fixed inset-0 flex justify-center items-center z-50 mx-[20px]">
            <div
              ref={modalRef} // Reference for detecting outside clicks
              className="bg-[#0A84FF33] w-[400px] h-[390px] px-[24px] py-[48px] rounded-2xl shadow-lg"
            >
              <h2 className="text-[24px] leading-[32px] mb-4 text-white font-bold">
                Are you sure you want to delete your account?
              </h2>
              <p className="text-[15px] font-normal leading-[21px] text-white mx-[10px] mb-[20px]">
                All your data, including game progress, achievements, and
                purchases, will be permanently deleted. This action cannot be
                undone.
              </p>
              <button
                onClick={closeModal}
                className="mt-3 bg-blue-500 text-white px-4 py-2 rounded w-full"
              >
                Delete account
              </button>
              <button
                onClick={closeModal}
                className="mt-3 text-white px-4 py-2 rounded w-full bg-[#0A84FF33] border-[1px] border-gray-500"
              >
                Cancel
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

export default Setting;
