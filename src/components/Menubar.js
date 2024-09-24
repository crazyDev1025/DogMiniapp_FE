import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import AssignmentIcon from '@mui/icons-material/Assignment';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import Diversity3Icon from '@mui/icons-material/Diversity3';

function Menubar() {
  const [activeIcon, setActiveIcon] = useState('Pets'); // Set initial state to 'Pets'
  const navigate = useNavigate();
  const location = useLocation();

  const handleIconClick = (icon, route) => {
    setActiveIcon(icon); // Update the active icon when clicked
    setTimeout(() => {
      navigate(route); // Delay navigation slightly to ensure state update
    }, 100); // Give a short delay for the state to update before navigating
  };

  return (
    <div className="flex justify-between rounded-full border border-gray-500 py-3 px-6 bg-gray-900 mt-10">
      <div
        onClick={() => handleIconClick('Pets', '/minidogs')}
        className="cursor-pointer text-center"
      >
        <PetsIcon
          style={{
            color: location.pathname === '/minidogs' ? '#FFFFFF' : '#48484A',
            width: '24px',
            height: '24px',
          }}
        />
        <div
          className={`${
            location.pathname === '/minidogs' ? 'text-white' : 'text-[#48484A]'
          } text-[11px] leading-[22px] font-normal`}
        >
          Mini Dogs
        </div>
      </div>

      <div
        onClick={() => handleIconClick('Assignment', '/task')}
        className="cursor-pointer text-center"
      >
        <AssignmentIcon
          style={{
            color: location.pathname === '/task' ? '#FFFFFF' : '#48484A',
            width: '24px',
            height: '24px',
          }}
        />
        <div
          className={`${
            location.pathname === '/task' ?  'text-white' : 'text-[#48484A]'
          } text-[11px] leading-[22px] font-normal`}
        >
          Tasks
        </div>
      </div>

      <div
        onClick={() => handleIconClick('OfflineBolt', '/airdrop')}
        className="cursor-pointer text-center"
      >
        <OfflineBoltIcon
          style={{
            color: location.pathname === '/airdrop' ? '#FFFFFF' : '#48484A',
            width: '24px',
            height: '24px',
          }}
        />
        <div
          className={`${
            location.pathname === '/airdrop' ?  'text-white' : 'text-[#48484A]'
          } text-[11px] leading-[22px] font-normal`}
        >
          Airdrop
        </div>
      </div>

      <div
        onClick={() => handleIconClick('Diversity3', '/invite')}
        className="cursor-pointer text-center"
      >
        <Diversity3Icon
          style={{
            color: location.pathname === '/invite' ?  '#FFFFFF' : '#48484A',
            width: '24px',
            height: '24px',
          }}
        />
        <div
          className={`${
            location.pathname === '/invite' ?  'text-white' : 'text-[#48484A]'
          } text-[11px] leading-[22px] font-normal`}
        >
          Friends
        </div>
      </div>
    </div>
  );
}

export default Menubar;
