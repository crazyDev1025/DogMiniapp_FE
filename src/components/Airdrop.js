import Header from "./Header";
import Menubar from "./Menubar";
import React, { useState } from 'react';

function Airdrop() {
    const [selected, setSelected] = useState('tokens'); // Track the selected option

    const handleSelect = (value) => {
        setSelected(value); // Update the selected state
    };
  
    
    return (
        <div className="relative min-h-screen pb-[100px]">
            <Header />
            <div className="flex justify-center mt-[30px]">
                <div className="w-[101px] h-[101px] rounded-full border-2 border-[#0A84FF] bg-dark p-[13px]" >
                    <img src="./imgs/minidog.png" alt="minidog" className="w-[75px] h-[75px]" />
                </div>
            </div>
            <div className="text-[32px] font-semibold text-white mb-[10px]">Airdrop</div>
            <div className="text-[8px] text-white text-left">listing Date</div>
            <div className="text-[11px] font-semibold text-[#2F92F7] text-left border-b-[1px] border-[#A1A1A1] pb-[8px]">September 26, 2024</div>
            <div className="w-full h-[51px] text-white text-[16px] font-semibold text-center bg-[#2F92F7] rounded-[10px] py-[15px] mt-[10px]">LEARN ABOUT MINI DOG</div>
            <div className="w-full h-[51px] text-white text-[16px] font-semibold text-center bg-[#2F92F7] rounded-[10px] py-[15px] my-[15px]">CONNECT WALLET</div>
            <div className="w-[361px] h-[178px] bg-gradient-to-r from-[#064F99] via-[#0A84FF] to-[#064F99] rounded-[30px] p-[2px] mb-[15px]">
                <div className="bg-[#0D0D0D] flex justify-center items-center w-[357px] h-[174px] rounded-[30px] bg-[#0D0D0D]">
                    <div>
                        <div className="border-[1px] border-[#0A84FF] text-[24px] font-semibold text-white px-[15px] py-[5px] rounded-[10px]">3454,56783</div>
                        <div className="text-[14px] text-white mt-[10px]">TOTAL AVAILABLE TOKEN</div>
                    </div>
                </div>
            </div>
            <div className="flex space-x-2 bg-[#101A23] px-[5px] py-[5px] rounded-[10px]">
                <div
                    onClick={() => handleSelect('tokens')}
                    className={`text-white text-[11px] font-semibold w-[45%] text-center p-2 cursor-pointer rounded-lg ${
                    selected === 'tokens' ? 'bg-[#000000]' : ''
                    }`}
                >
                    Tokens
                </div>
                <div
                    onClick={() => handleSelect('withdrawal')}
                    className={`text-white text-[11px] font-semibold w-[45%] text-center p-2 cursor-pointer rounded-lg ${
                    selected === 'withdrawal' ? 'bg-[#000000]' : ''
                    }`}
                >
                    Withdrawal
                </div>
            </div>
            {/* Fixed Menubar at the bottom */}
            <div className="fixed bottom-[20px] w-[90%]">
                <Menubar />
            </div>
            <div className="w-[140px] h-[5px] bg-white rounded-full fixed bottom-[5px] left-1/2 transform -translate-x-1/2"></div>
        </div>
    );
}

export default Airdrop;