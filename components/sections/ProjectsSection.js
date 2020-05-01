import React, { useState } from 'react';
import ArrowDown from '../icons/ArrowDown';
import ArrowUp from '../icons/ArrowUp';
import { render } from 'react-dom';

const ProjectsSection = () => {
  const [expanded, setIsExpanded] = useState(true);

  const arrowDownOnPress = (e) => {
    e.preventDefault();
    return setIsExpanded(!expanded);
  };

  const bodyClassName = expanded ? 'block' : 'hidden';
  const ArrowIcon = expanded ? ArrowDown : ArrowUp;

  return (
    <div className='w-full'>
      {/*  modal */}
      <div className='rounded-lg bg-black'>
        {/*  header  */}
        <div className='relative border-b border-gray-400 text-white'>
          <div className='p-4'>virtual reality game</div>
          <div onClick={arrowDownOnPress} className='absolute p-1 top-0 right-0 h-8 w-8 bg-orange-600 hover:bg-orange-700'>
            <ArrowIcon />
          </div>
        </div>

        {/*  body  */}
        <div className={`bg-black text-white p-4 ${bodyClassName}`}>
          <dl className='pl-6'>
            <dt>project deadline</dt>
            <dd className='pl-6'>2014.12.31</dd>
            <dt>current phase</dt>
            <dd className='pl-6'>3/5</dd>
            <dt>description</dt>
            <dd className='pl-6'>
              design an action game with virtual reality technology. the game should be aimed to teen players.
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
