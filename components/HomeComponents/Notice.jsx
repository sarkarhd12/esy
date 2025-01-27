import React from 'react';

const Notice = ({ noticeText }) => {
  if (!noticeText) {
    return null; // Do not render anything if there's no notice text
  }

  return (
    <div className="bg-yellow-200 text-black p-4 rounded-lg mb-4">
      <h2 className="text-xl font-semibold">Notice:</h2>
      <p>{noticeText}</p>
    </div>
  );
};

export default Notice;
