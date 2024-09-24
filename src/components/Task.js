import Header from "./Header";
import Menubar from "./Menubar";
import DoneIcon from '@mui/icons-material/Done';
import React, { useState } from 'react';

function Task() {
    const [dailyTasks, setDailyTasks] = useState([
        { id: 1, title: 'Daily reward', reward: 500000, img: './imgs/reward.png', toggled: false },
        { id: 2, title: 'Reach the next level', reward: 100000, img: './imgs/level.png', toggled: false },
        { id: 3, title: 'Get 10,000 Dogs', reward: 30000, img: './imgs/minidog_task.png', toggled: false }
    ]);

    const [tasksList, setTasksList] = useState([
        { id: 4, title: 'Join our YouTube', reward: 10000, img: './imgs/youtube.png', toggled: false },
        { id: 5, title: 'Join our TG channel', reward: 10000, img: './imgs/tg_task.png', toggled: false },
        { id: 6, title: 'Follow our X account', reward: 10000, img: './imgs/twitter_task.png', toggled: false },
        { id: 7, title: 'Invite 3 friends', reward: 25000, img: './imgs/invite.png', toggled: false }
    ]);

    const [alertMessage, setAlertMessage] = useState('');

    const toggleTask = (id, taskType) => {
        const toggleFunction = taskType === "daily" ? setDailyTasks : setTasksList;
        const tasks = taskType === "daily" ? dailyTasks : tasksList;

        toggleFunction(tasks.map(task => {
            if (task.id === id) {
                if (!task.toggled) {
                    setAlertMessage(`"${task.title}"`);
                    setTimeout(() => setAlertMessage(''), 3000); // Clear the alert after 3 seconds
                }
                return { ...task, toggled: !task.toggled };
            }
            return task;
        }));
    };

    const closeAlert = () => {
        setAlertMessage(''); // Clear the alert message
    };

    return (
        <div className="relative min-h-screen pb-[100px]">
            <Header />
            {alertMessage && (
                <div className="fixed top-100 left-0 w-[90%] bg-[#1C1C1C] text-white text-center py-[8px] px-[3px] mx-[24px] z-50 rounded-full">
                    <div className="flex mx-[5px] justify-between items-center">
                        <div class="rounded-full w-[22px] h-[22px] bg-white flex items-center justify-center">
                            <DoneIcon sx={{ color: "#000000", width: "15px" }} />
                        </div>
                        {alertMessage}
                        <div onClick={closeAlert} style={{ cursor: 'pointer' }}>
                            <svg width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" d="M0.23755 9.76245C0.1307 9.6556 0.060103 9.52967 0.0257584 9.38466C-0.00858615 9.24346 -0.00858615 9.10227 0.0257584 8.96108C0.0639191 8.81607 0.132608 8.69395 0.231826 8.59473L3.82656 5L0.231826 1.40527C0.132608 1.30223 0.0639191 1.18012 0.0257584 1.03892C-0.00858615 0.897729 -0.00858615 0.756535 0.0257584 0.615341C0.060103 0.47033 0.1307 0.3444 0.23755 0.23755C0.3444 0.1307 0.47033 0.060103 0.615341 0.0257584C0.760351 -0.00858615 0.903454 -0.00858615 1.04465 0.0257584C1.18584 0.060103 1.30796 0.128792 1.41099 0.231826L5.00572 3.82656L8.59473 0.231826C8.69777 0.128792 8.81988 0.060103 8.96108 0.0257584C9.10609 -0.00858615 9.24919 -0.00667811 9.39038 0.0314825C9.53158 0.0658271 9.6556 0.136424 9.76245 0.243274C9.8693 0.350124 9.9399 0.474146 9.97424 0.615341C10.0086 0.756535 10.0086 0.897729 9.97424 1.03892C9.9399 1.18012 9.87121 1.30414 9.76817 1.41099L6.17916 5L9.76817 8.58901C9.87121 8.69586 9.9399 8.81988 9.97424 8.96108C10.0086 9.10227 10.0086 9.24346 9.97424 9.38466C9.9399 9.52585 9.8693 9.64988 9.76245 9.75673C9.6556 9.86358 9.53158 9.93417 9.39038 9.96852C9.24919 10.0067 9.10609 10.0086 8.96108 9.97424C8.81988 9.9399 8.69777 9.87121 8.59473 9.76817L5.00572 6.17344L1.41099 9.76817C1.30796 9.87121 1.18584 9.9399 1.04465 9.97424C0.903454 10.0086 0.760351 10.0086 0.615341 9.97424C0.47033 9.9399 0.3444 9.8693 0.23755 9.76245Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex justify-center">
                <img src="./imgs/minidog_task.png" alt="task" className="w-auto h-[130px]" />
            </div>
            {/* Daily Tasks Section */}
            <div className="ml-[24px] my-[20px]">
                <div className="text-[17px] font-bold text-white text-left">Daily tasks</div>
                {dailyTasks.map((task) => (
                    <div key={task.id} className="flex justify-between items-center mt-[15px] ml-[16px]">
                        <div className="flex items-center">
                            <img src={task.img} alt={task.title} className="w-[48px] h-[48px] mr-[10px]" />
                            <div>
                                <div className="text-[17px] font-semibold text-white text-left">{task.title}</div>
                                <div className="flex items-center">
                                    <img src="./imgs/dog.png" alt="dog" className="mr-[10px] w-[20px] h-[20px]" />
                                    <span className="text-[17px] text-white">+ {task.reward.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => toggleTask(task.id, "daily")}
                            className={`rounded-full w-[74px] h-[33px] text-[14px] font-semibold py-[5px] px-[10px] ${
                                task.toggled ? 'bg-white text-gray-800' : 'bg-[#353535] text-white'
                            }`}
                        >
                            {task.toggled ? 'Check' : 'Go'}
                        </button>
                    </div>
                ))}
            </div>

            {/* Tasks List Section */}
            <div className="ml-[24px]">
                <div className="text-[17px] font-bold text-white text-left">Tasks list</div>
                {tasksList.map((task) => (
                    <div key={task.id} className="flex justify-between items-center mt-[15px] ml-[16px]">
                        <div className="flex items-center">
                            <img src={task.img} alt={task.title} className="w-[48px] h-[48px] mr-[10px]" />
                            <div>
                                <div className="text-[17px] font-semibold text-white text-left">{task.title}</div>
                                <div className="flex items-center">
                                    <img src="./imgs/dog.png" alt="dog" className="mr-[10px] w-[20px] h-[20px]" />
                                    <span className="text-[17px] text-white">+ {task.reward.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => toggleTask(task.id, "list")}
                            className={`rounded-full w-[74px] h-[33px] text-[14px] font-semibold py-[5px] px-[10px] ${
                                task.toggled ? 'bg-white text-gray-800' : 'bg-[#353535] text-white'
                            }`}
                        >
                            {task.toggled ? 'Check' : 'Go'}
                        </button>
                    </div>
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

export default Task;
