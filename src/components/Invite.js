import Menubar from "./Menubar";

function Invite() {
    return (
        <div className="relative min-h-screen pb-[100px]">
            <div className="text-[27px] text-white font-bold mt-[50px]">Invite friends</div>
            <div className="text-[13px] text-white font-medium">You and your Friend will receive bonuses.</div>
            <div className="bg-[#0c0e21] p-[15px] flex border-[1px] border-gray-500 rounded-[10px] mt-[40px]">
                <img src="./imgs/friends_invite.png" alt="invite" className="mr-[10px]" />
                <div>
                    <div className="text-[13.5px] font-bold text-white text-left">Invite a Friend</div>
                    <div className="flex items-center">
                        <img src="./imgs/minidog.png" alt="minidog" className="w-[13px] h-[13px] mr-[5px]" />
                        <p className="text-[12px] text-[#00FF0A] font-bold mr-[5px]">+5,000</p>
                        <p className="text-[12px] text-white font-medium mr-[5px]">For you and you friend</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#0c0e21] p-[15px] flex border-[1px] border-gray-500 rounded-[10px] mt-[25px]">
                <img src="./imgs/friends_invite.png" alt="invite" className="mr-[10px]" />
                <div>
                    <div className="text-[13.5px] font-bold text-white text-left">Invite a Friend</div>
                    <div className="flex items-center">
                        <img src="./imgs/minidog.png" alt="minidog" className="w-[13px] h-[13px] mr-[5px]" />
                        <p className="text-[12px] text-[#00FF0A] font-bold mr-[5px]">+5,000</p>
                        <p className="text-[12px] text-white font-medium mr-[5px]">For you and you friend</p>
                    </div>
                </div>
            </div>
            <div className="text-[15px] text-white font-bold my-[20px] text-left">List of your friends(2)</div>
            <div>
                <div className="bg-[#0c0e21] p-[15px] flex border-[1px] border-gray-500 rounded-[10px] mt-[25px] flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="./imgs/friends_list.png" alt="list" className="mr-[10px]" />
                        <div>
                            <div className="text-[13.5px] font-bold text-white text-left">User 1</div>
                            <div className="flex items-center">
                                <p className="text-[12px] text-white font-bold mr-[3px]">Silver </p>
                                <div className="w-[2.5px] h-[2.5px] bg-white rounded-full mr-[3px]"></div>
                                <img src="./imgs/minidog.png" alt="minidog" className="w-[13px] h-[13px] mr-[3px]" />
                                <p className="text-[12px] text-white font-bold mr-[5px]">0 (5.15K)</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src="./imgs/minidog.png" alt="minidog" className="w-[13px] h-[13px] mr-[10px]" />
                        <div className="text-[12px] font-medium text-white">+25K</div>
                    </div>
                </div>
            </div>
            <div className="mt-[5px]">
                <div className="bg-[#0c0e21] p-[15px] flex border-[1px] border-gray-500 rounded-[10px] mt-[25px] flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="./imgs/friends_list.png" alt="list" className="mr-[10px]" />
                        <div>
                            <div className="text-[13.5px] font-bold text-white text-left">User 1</div>
                            <div className="flex items-center">
                                <p className="text-[12px] text-white font-bold mr-[3px]">Silver </p>
                                <div className="w-[2.5px] h-[2.5px] bg-white rounded-full mr-[3px]"></div>
                                <img src="./imgs/minidog.png" alt="minidog" className="w-[13px] h-[13px] mr-[3px]" />
                                <p className="text-[12px] text-white font-bold mr-[5px]">0 (5.15K)</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src="./imgs/minidog.png" alt="minidog" className="w-[13px] h-[13px] mr-[10px]" />
                        <div className="text-[12px] font-medium text-white">+25K</div>
                    </div>
                </div>
            </div>
            <div className="mt-[5px]">
                <div className="bg-[#0c0e21] p-[15px] flex border-[1px] border-gray-500 rounded-[10px] mt-[25px] flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="./imgs/friends_list.png" alt="list" className="mr-[10px]" />
                        <div>
                            <div className="text-[13.5px] font-bold text-white text-left">User 1</div>
                            <div className="flex items-center">
                                <p className="text-[12px] text-white font-bold mr-[3px]">Silver </p>
                                <div className="w-[2.5px] h-[2.5px] bg-white rounded-full mr-[3px]"></div>
                                <img src="./imgs/minidog.png" alt="minidog" className="w-[13px] h-[13px] mr-[3px]" />
                                <p className="text-[12px] text-white font-bold mr-[5px]">0 (5.15K)</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src="./imgs/minidog.png" alt="minidog" className="w-[13px] h-[13px] mr-[10px]" />
                        <div className="text-[12px] font-medium text-white">+25K</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-[30px]">
                <div className="w-[83%] h-[48px] py-[10px] bg-[#2F92F7] flex items-center rounded-[10px] pl-[20px]">
                    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M15.3222 11.9782C15.786 12.4064 16.1891 12.8945 16.5287 13.4447C17.3905 12.9144 18.4095 12.6056 19.5019 12.6056C19.9633 12.6056 20.4119 12.6604 20.8428 12.765C20.1508 11.8761 19.3194 11.2163 18.2675 10.7307C17.4792 11.4379 16.4527 11.896 15.3247 11.9782H15.3222ZM13.8875 18.1258C13.8875 16.5845 14.5339 15.1902 15.5731 14.1892C15.056 13.3103 14.3742 12.6231 13.5099 12.1101C13.3071 11.9906 13.0511 11.9856 12.8458 12.1052C12.0549 12.5658 11.1323 12.8322 10.1463 12.8322C9.16028 12.8322 8.25032 12.5708 7.46202 12.1151C7.25163 11.9931 6.99056 12.0006 6.78525 12.1301C4.83858 13.3402 3.62952 15.616 3.62952 18.2204V21.6789C3.62952 22.1097 3.98438 22.4583 4.42035 22.4583H16.0243C14.724 21.4474 13.8875 19.8812 13.8875 18.1283V18.1258ZM15.4591 7.60836C15.4591 8.70642 15.1118 9.72479 14.5238 10.5664C14.5009 10.5988 14.4933 10.6361 14.5009 10.6735C14.5136 10.7357 14.5668 10.783 14.6302 10.7905C14.7417 10.8004 14.8533 10.8054 14.9648 10.8054C17.0052 10.8054 18.663 9.17452 18.663 7.17013C18.663 5.16574 17.0027 3.53235 14.9623 3.53235C14.5364 3.53235 14.1157 3.60456 13.7152 3.74399C14.7848 4.70012 15.4591 6.07705 15.4591 7.60836Z" fill="white"/>
                        <path d="M14.2462 7.62032C14.2537 5.39397 12.4237 3.58317 10.1587 3.57579C7.89366 3.56841 6.05142 5.36725 6.0439 7.5936C6.03639 9.81996 7.86645 11.6308 10.1315 11.6381C12.3965 11.6455 14.2387 9.84667 14.2462 7.62032Z" fill="white"/>
                        <path d="M23.9073 18.1258C23.9073 15.738 21.9302 13.7958 19.5019 13.7958C17.0737 13.7958 15.0966 15.738 15.0966 18.1258C15.0966 20.5136 17.0737 22.4558 19.5019 22.4558C21.9302 22.4558 23.9073 20.5136 23.9073 18.1258ZM16.9368 18.1258C16.9368 17.7971 17.208 17.5307 17.5426 17.5307H18.8987V16.1961C18.8987 15.8674 19.1699 15.601 19.5045 15.601C19.8391 15.601 20.1103 15.8674 20.1103 16.1961V17.5307H21.4664C21.8009 17.5307 22.0722 17.7971 22.0722 18.1258C22.0722 18.4545 21.8009 18.7209 21.4664 18.7209H20.1103V20.0555C20.1103 20.3842 19.8391 20.6506 19.5045 20.6506C19.1699 20.6506 18.8987 20.3842 18.8987 20.0555V18.7209H17.5426C17.208 18.7209 16.9368 18.4545 16.9368 18.1258Z" fill="white"/>
                    </svg>
                    <div className="text-[14px] font-bold text-white">INVITE A FRIEND</div>
                </div>
                <div className="w-[15%] flex justify-center items-center bg-[#2F92F7] rounded-[10px]">
                    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3222 11.9782C15.786 12.4064 16.1891 12.8945 16.5287 13.4447C17.3905 12.9144 18.4095 12.6056 19.5019 12.6056C19.9633 12.6056 20.4119 12.6604 20.8428 12.765C20.1508 11.8761 19.3194 11.2163 18.2675 10.7307C17.4792 11.4379 16.4527 11.896 15.3247 11.9782H15.3222ZM13.8875 18.1258C13.8875 16.5845 14.5339 15.1902 15.5731 14.1892C15.056 13.3103 14.3742 12.6231 13.5099 12.1101C13.3071 11.9906 13.0511 11.9856 12.8458 12.1052C12.0549 12.5658 11.1323 12.8322 10.1463 12.8322C9.16028 12.8322 8.25032 12.5708 7.46202 12.1151C7.25163 11.9931 6.99056 12.0006 6.78525 12.1301C4.83858 13.3402 3.62952 15.616 3.62952 18.2204V21.6789C3.62952 22.1097 3.98438 22.4583 4.42035 22.4583H16.0243C14.724 21.4474 13.8875 19.8812 13.8875 18.1283V18.1258ZM15.4591 7.60836C15.4591 8.70642 15.1118 9.72479 14.5238 10.5664C14.5009 10.5988 14.4933 10.6361 14.5009 10.6735C14.5136 10.7357 14.5668 10.783 14.6302 10.7905C14.7417 10.8004 14.8533 10.8054 14.9648 10.8054C17.0052 10.8054 18.663 9.17452 18.663 7.17013C18.663 5.16574 17.0027 3.53235 14.9623 3.53235C14.5364 3.53235 14.1157 3.60456 13.7152 3.74399C14.7848 4.70012 15.4591 6.07705 15.4591 7.60836Z" fill="white"/>
                        <path d="M14.2462 7.62032C14.2537 5.39397 12.4237 3.58317 10.1587 3.57579C7.89366 3.56841 6.05142 5.36725 6.0439 7.5936C6.03639 9.81996 7.86645 11.6308 10.1315 11.6381C12.3965 11.6455 14.2387 9.84667 14.2462 7.62032Z" fill="white"/>
                        <path d="M23.9073 18.1258C23.9073 15.738 21.9302 13.7958 19.5019 13.7958C17.0737 13.7958 15.0966 15.738 15.0966 18.1258C15.0966 20.5136 17.0737 22.4558 19.5019 22.4558C21.9302 22.4558 23.9073 20.5136 23.9073 18.1258ZM16.9368 18.1258C16.9368 17.7971 17.208 17.5307 17.5426 17.5307H18.8987V16.1961C18.8987 15.8674 19.1699 15.601 19.5045 15.601C19.8391 15.601 20.1103 15.8674 20.1103 16.1961V17.5307H21.4664C21.8009 17.5307 22.0722 17.7971 22.0722 18.1258C22.0722 18.4545 21.8009 18.7209 21.4664 18.7209H20.1103V20.0555C20.1103 20.3842 19.8391 20.6506 19.5045 20.6506C19.1699 20.6506 18.8987 20.3842 18.8987 20.0555V18.7209H17.5426C17.208 18.7209 16.9368 18.4545 16.9368 18.1258Z" fill="white"/>
                    </svg>
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

export default Invite;