import React from 'react';

// import components
import NavigationBar from '../components/appbar';
import Profile from '../components/profile';
import Content from '../components/content';
import Body from '../components/body';

const Biodata = () => {
  
	return (
    <div>
      <NavigationBar />
      <Body 
        test = "hello"
        mainElement={
          <Content />
        }
        profileElement={
          <Profile />
        }
        style={{padding: 20}}
      />
    </div>
  );
}

export default Biodata;