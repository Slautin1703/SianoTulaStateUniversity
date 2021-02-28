import React, {useMemo} from 'react';
import {useParams} from "react-router-dom";
import {menuTabs, TabsTypes, UserTypes} from "../Constants";
import Header from "../Header/Header";
import MainProfileContainer from "./features/MainProfileContainer";



const ProfileContainer = () => {

    const { userId } : UserTypes = useParams();
    const { currentTab }: TabsTypes = useParams();

    const getHeaderNameByCurrentTab = useMemo(() => {
        switch (Number(currentTab)) {
            case menuTabs.NEWS:
                return 'Новости'
            case menuTabs.EVENTS:
                return 'Мероприятия'
            case menuTabs.PROFILE:
                return 'Ещё'
            default:
                return 'Новости'
        }
    }, [currentTab]);

    return (
        <div>
            <Header userId={userId} title={getHeaderNameByCurrentTab} isAuth/>
            <MainProfileContainer currentTab={Number(currentTab)}/>
        </div>
    );
};

export default ProfileContainer;
