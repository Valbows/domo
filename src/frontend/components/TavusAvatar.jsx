import React from 'react';

const TavusAvatar = ({ avatarUrl, size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  return (
    <div className={`rounded-full overflow-hidden ${sizeClasses[size]}`}>
      <img
        src={avatarUrl || '/default-avatar.png'}
        alt="Tavus Avatar"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default TavusAvatar; 