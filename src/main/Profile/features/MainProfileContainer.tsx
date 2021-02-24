import React, {useState} from 'react';
import MainProfile from "./MainProfile";

export interface mainProfileContainerInterface {
    currentTab: number
}

const MainProfileContainer = ({currentTab}: mainProfileContainerInterface) => {
    return (
        <div>
            <MainProfile/>
        </div>
    );
};

export default MainProfileContainer;
