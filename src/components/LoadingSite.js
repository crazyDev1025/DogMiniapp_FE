import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

function LoadingSite() {
    const [width, setWidth] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setWidth((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    navigate('/minidogs'); // Replace with your desired path
                    return 100; // Ensure it doesn't exceed 100
                }
                return prev + 1; // Increase width by 1%
            });
        }, 100); // Adjust the speed by changing the interval time

        return () => clearInterval(interval); // Cleanup on unmount
    }, [navigate]);

    return (
        <div className="static min-h-[765px]">
            <Header />
            <div className="flex justify-center mt-[204px] mb-[99px]">
                <img src="./imgs/dogs-logo.png" alt="logo" />
            </div>
            <div className="w-[40%] h-[5px] bg-white rounded overflow-hidden mx-[30%] mb-[30px]">
                <div
                    className="bg-gradient-to-r from-white to-[#0C33FE] h-full"
                    style={{ width: `${width}%`, transition: 'width 0.1s ease' }}
                ></div>
            </div>
            <div className="mb-[20px]">
                <div className="text-[18px] leading-[21px] text-center text-[#8E8E93]">Stay tuned</div>
                <div className="text-[18px] leading-[21px] text-center text-white mx-[100px]">More info in official channels</div>
            </div>
            <div className="flex justify-center">
                <div className="rounded w-[47px] h-[47px] rounded-full bg-[#161616] border-[#2C2C2E] border-[1px] px-[13px] py-[16px] mr-[16px] cursor-pointer">
                    <img src="./imgs/tg.png" alt="tg" />
                </div>
                <div className="rounded w-[47px] h-[47px] rounded-full bg-[#161616] border-[#2C2C2E] border-[1px] px-[13px] py-[14px] cursor-pointer">
                    <img src="./imgs/twitter.png" alt="twitter" />
                </div>
            </div>
            <div className="fixed bottom-[10px] left-[1/2]">
                <div className="bg-white w-[50%] h-[5px] mx-[25%] rounded-full"></div>
            </div>
        </div>
    );
    
}

export default LoadingSite;





