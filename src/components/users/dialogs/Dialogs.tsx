import {useGetAllDialogsQuery, useGetDialogsByIdMutation} from '../../../services/dialogsApi.ts';
import s from './Dialogs.module.css'
import {MessageBlock} from "./MessageBlock/MessageBlock.tsx";
import {useState} from "react";
import { formatDistanceToNow } from 'date-fns';

export const Dialogs = () => {

    const {data, isLoading} = useGetAllDialogsQuery({})
    const [startChatting] = useGetDialogsByIdMutation()

    const [user, setUser] = useState(30449)
    const choseUser = (id: number) => {
        setUser(id)
        startChatting(id)
    }

    if (isLoading) return '...Loading'
    return (
        <div className={s.dialogs__wrapper}>
            <div className={s.dialogs__usersBlock}>
                {data?.map(el => {
                    const distance = formatDistanceToNow(new Date(el.lastUserActivityDate));
                    const userImg = el?.photos && el?.photos.small ? el?.photos.small : el?.photos && el?.photos.large;
                    return (
                        <div onClick={() => choseUser(el.id)} className={s.dialogs__users}>
                            <img className={s.dialogs__usersPhoto}
                                 src={userImg ? userImg : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUgLbcQKW5YFFy8FMlC-OqVp40csGZeWWJA&usqp=CAU'}
                                 alt="photos"/>
                           <div className={s.dialogs__usersInfo}>
                               <div>
                                   {el.userName}
                               </div>
                               <div>
                                   last activity: {distance}
                               </div>
                           </div>
                            {/*{*/}
                            {/*    el.hasNewMessages && `have a new message ${<MessageBlock userId={el.id}/>}`*/}
                            {/*}*/}
                        </div>
                    )
                })}
            </div>
            <MessageBlock userId={user} />
        </div>
    );
};
