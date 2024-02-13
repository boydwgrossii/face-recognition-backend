import React from 'react';

console.log('rank1', name);
const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f3'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  );
  console.log('rank2', name);
}

export default Rank;