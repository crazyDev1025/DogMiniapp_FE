import Header from "./Header";
import Menubar from "./Menubar";
import React from 'react';

function TaskItem({ imgSrc, title, dogCount, vectorCount, rank }) {
    return (
        <div className="flex justify-between pl-[10px] mt-[15px]">
            <div className="flex">
                <img src={imgSrc} className="w-[60px] h-auto mr-[10px]" alt="task" />
                <div>
                    <div className="text-[15px] font-semibold text-white text-left">{title}</div>
                    <div className="flex">
                        <div className="flex items-center mx-[10px]">
                            <img src="./imgs/dog.png" className="w-[14px] h-[15px] mr-[5px]" alt="dog" />
                            <div className="text-[#8E8E93] text-[14px]">{dogCount}</div>
                        </div>
                        <div className="flex items-center">
                            <img src="./imgs/Vector1.png" className="w-[12px] h-[17px] mr-[5px]" alt="vector" />
                            <div className="text-[#8E8E93] text-[14px]">{vectorCount}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-[20px] font-semibold leading-[24px] text-white">{rank}</div>
        </div>
    );
}

function Presidents() {
    const dailyTasks = [
        { imgSrc: './imgs/minidog_task.png', title: 'V0idW4lk3r', dogCount: '1,191,323', vectorCount: '123,302', rank: '1' },
        { imgSrc: './imgs/minidog_task.png', title: 'フジモリアカリ', dogCount: '1,082,201', vectorCount: '121,021', rank: '2' },
        { imgSrc: './imgs/minidog_task.png', title: 'Quicksilv3r', dogCount: '810,302', vectorCount: '192,212', rank: '3' },
        { imgSrc: './imgs/minidog_task.png', title: 'Cr1msonF1r3', dogCount: '802,292', vectorCount: '82,927', rank: '4' }
    ];

    return (
        <div className="relative min-h-screen pb-[100px]">
            <Header />
            <div className="flex justify-center">
                <img src="./imgs/errorloading.png" alt="presidents" />
            </div>
            <div className="flex justify-between px-[16px]">
                <div className="flex">
                    <div className="flex items-center mr-[15px]">
                        <img src="./imgs/dog.png" className="w-[14px] h-[15px] mr-[5px]" alt="dog" />
                        <div className="text-[#8E8E93] text-[14px]">324,293</div>
                    </div>
                    <div className="flex items-center">
                        <img src="./imgs/Vector1.png" className="w-[12px] h-[17px] mr-[5px]" alt="vector1" />
                        <div className="text-[#8E8E93] text-[14px]">21,730</div>
                    </div>
                </div>
                <div className="text-[20px] font-semibold leading-[24px] text-white">12,201</div>
            </div>
            <div className='bg-[#17171a] w-full h-[8px] rounded-full mt-[40px]'>
                <div className='bg-white w-[70%] h-[8px] rounded-full'></div>
            </div>

            <div className="mt-[50px]">
                <div className="text-[17px] text-white text-left">Top of Presidents</div>
                {dailyTasks.map((task, index) => (
                    <TaskItem
                        key={index}
                        imgSrc={task.imgSrc}
                        title={task.title}
                        dogCount={task.dogCount}
                        vectorCount={task.vectorCount}
                        rank={task.rank}
                    />
                ))}
            </div>

            {/* Fixed Menubar at the bottom */}
            <div className="fixed bottom-[20px] w-[90%]">
                <Menubar />
            </div>
            <div className="w-[140px] h-[5px] bg-white rounded-full fixed bottom-[5px] left-1/2 transform -translate-x-1/2"></div>
        </div>
    );
}

export default Presidents;
