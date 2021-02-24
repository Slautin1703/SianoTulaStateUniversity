import React, {useMemo} from 'react';
import {useParams} from "react-router-dom";
import {TabsTypes, UserTypes} from "../Constants";
import Header from "../Header/Header";
import MainProfileContainer from "./features/MainProfileContainer";



const ProfileContainer = () => {

    const { userId } : UserTypes = useParams();
    const { currentTab }: TabsTypes = useParams();

    const getHeaderNameByCurrentTab = useMemo(() => {

    }, [currentTab]);

    return (
        <div>
            <Header isAuth/>
            <MainProfileContainer currentTab={Number(currentTab)}/>
        </div>
    );
};

export default ProfileContainer;
