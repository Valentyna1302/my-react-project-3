import { useState } from 'react';

const Vote = () => {
  const [votingData, setVotingData] = useState({
    macOS: 0,
    windows: 0,
    linux: 0,
  });

  const handleChooseOption = option => {
    console.log(option);

    if (option === 'windows') {
      setVotingData(prev => ({ ...prev, windows: prev.windows + 1 }));
    }
    if (option === 'mocOS') {
      setVotingData(prev => ({ ...prev, mocOS: prev.mocOS + 1 }));
    }
    if (option === 'linux') {
      setVotingData(prev => ({ ...prev, linux: prev.linux + 1 }));
    }

    // setVotingData(prev => ({
    //   ...prev,
    //   [option]: prev[option] + 1,
    // }));
  };

  const btnOptions = Object.keys(votingData); // -> ['windows', 'linux', 'macOS']

  return (
    <div>
      <ul>
        <li>macOS: {votingData.macOS}</li>
        <li>windows: {votingData.windows}</li>
        <li>linux: {votingData.linux}</li>
      </ul>

      {btnOptions.map(option => (
        <button key={option} onClick={() => handleChooseOption(option)}>
          {option}
        </button>
      ))}

      {/* <button onClick={() => handleChooseOption('macOS')}>macOS</button>
      <button onClick={() => handleChooseOption('windows')}>windows</button>
      <button onClick={() => handleChooseOption('windows')}>windows</button>
      <button onClick={() => handleChooseOption('windows')}>windows</button>
      <button onClick={() => handleChooseOption('windows')}>windows</button>
      <button onClick={() => handleChooseOption('windows')}>windows</button>
      <button onClick={() => handleChooseOption('windows')}>windows</button>
      <button onClick={() => handleChooseOption('windows')}>windows</button>
      <button onClick={() => handleChooseOption('linux')}>linux</button> */}
    </div>
  );
};
export default Vote;
