import React from 'react';
import Tab from './Tab';


const TabList = props => {
  console.log("props", props)
  return (
    <div className="tabs">
      <div className="topics">
            {props.tabs.map(tab => <Tab tab={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} />)}
      </div>
    </div>
  );
};

export default TabList;
