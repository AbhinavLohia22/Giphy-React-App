import React from 'react';
import '../css/Header.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { KeyboardArrowDown } from '@mui/icons-material';

const menuItems = [
  { label: 'Reactions', className: 'reactions' },
  { label: 'Entertainment', className: 'entertainment' },
  { label: 'Sports', className: 'sports' },
  { label: 'Stickers', className: 'stickers' },
  { label: 'Artists', className: 'artists' },
];

const Header = () => {
  return (
    <div className="header">
      <a href="/"><img src="/images/giphyLogo.png" alt="logo" /></a>
      <div className="menu">
        {menuItems.map((item, index) => (
          <div key={index} className={`button-wrapper ${item.className}`}>
            <div className={`menu-button hover-${item.className}`}>
              <h2>{item.label}</h2>
            </div>
          </div>
        ))}
        <div className="button-wrapper moreverticon">
          <div className="menu-button hover-moreverticon">
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <div className="button">
        <h2>Upload</h2>
      </div>
      <div className="button">
        <h2>Create</h2>
      </div>
      <div className="profile">
        <img src="/images/avatar.png" alt="avatar" />
        <h2>Abhinav Lohia</h2>
        <button><KeyboardArrowDown /></button>

      </div>
    </div>
  );
};

export default Header;
