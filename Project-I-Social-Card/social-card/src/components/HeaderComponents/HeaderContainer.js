import React from 'react';
import './Header.css';

import HeaderTitle from "./HeaderTitle";
import ImageThumbnail from "./ImageThumbnail";
import HeaderContent from "./HeaderContent";

function HeaderContainer() {
  return(
    <div className='header'>
      <ImageThumbnail />

      <div className='headerContent'>
        <HeaderTitle firstName="Lambda" lastName="School" />
        <HeaderContent />
      </div>
    </div>
  );
}

export default HeaderContainer;
