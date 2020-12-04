import React from 'react';

// import components
import NavigationBar from '../components/lefttab';
import Profile from '../components/profile';
import Content from '../components/content';

const Biodata = () => {

	return (
    <div>
      <NavigationBar 
        mainElement={
          <Content />
        }
        profileElement={
          <Profile />
        }
      />
    </div>
  );
}

export default Biodata;