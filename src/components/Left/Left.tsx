import { useState } from 'react';
import UserCard from '../Profile/UserCard';

const Left = (props: any) => {
  const [border, setBorder] = useState('home' as string);

  const handleBorder = (e: any) => {
    setBorder(e);
  };
  return (
    <div className="left">
      <div className="flex flex-row">
        <UserCard currentUser={props?.currentUser} />
        <div className="flex flex-row">
          <button
            onClick={() => handleBorder('home')}
            className={`
            text-gray-100 py-4 px-6 block hover:text-[#fe3c72] focus:outline-none text-[#fe3c72] ${border === 'home' ? 'border-b-2 font-medium border-[#fe3c72]' : ''
              }
            `}
          >
            <i className="fa fa-home text-xl" />
          </button>
          <button
            onClick={() => handleBorder('profile')}
            className={`
            text-gray-100 py-4 px-6 block hover:text-[#fe3c72] focus:outline-none text-[#fe3c72] ${border === 'profile'
                ? 'border-b-2 font-medium border-[#fe3c72]'
                : ''
              }
            `}
          >
            <i className="fa fa-user text-xl" />
          </button>
          <button
            onClick={() => handleBorder('messages')}
            className={`
            text-gray-100 py-4 px-6 block hover:text-[#fe3c72] focus:outline-none text-[#fe3c72] ${border === 'messages'
                ? 'border-b-2 font-medium border-[#fe3c72]'
                : ''
              }
            `}
          >
            <i className="fa fa-envelope text-xl" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:gap-2  md:mt-16 md:grid-cols-3">
        <div className="lg:flex">
          <img
            className="object-cover w-full h-48 rounded-lg lg:w-64"
            src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>

      </div>
    </div>
  );
};

export default Left;
