import React from 'react';
import Abishek from '../BoardMembers/Abishek.jpg';
import Sockalingam from '../BoardMembers/Sockalingam.jpeg';
import Vikas from '../BoardMembers/Vikas.jpg';
import Ameya from '../BoardMembers/Ameya.jpg';
import Divya from '../BoardMembers/Divya.jpg';

const MEMBERS = [
  {
    id: 1,
    name: 'Abishek',
    img: Abishek,
  },
  {
    id: 2,
    name: 'Ameya',
    img: Ameya,
  },
  {
    id: 3,
    name: 'Divya',
    img: Divya,
  },
  {
    id: 4,
    name: 'Sockalingam',
    img: Sockalingam,
  },
  {
    id: 5,
    name: 'Vikas',
    img: Vikas,
  },
];

const Members = () => {
  return (
    <div className="flex items-center justify-start">
      {MEMBERS.map((member) => {
        return (
          <img
            key={member.id}
            src={member.img}
            alt={member.name}
            className="w-10 h-10 rounded-full object-cover object-top aspect-square -mr-3"
          />
        );
      })}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 object-cover object-top aspect-square text-sm p-2">
        +50
      </div>
      <span className="ml-1.5">Members</span>
    </div>
  );
};

export default Members;
