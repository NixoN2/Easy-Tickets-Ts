import React, { FC } from 'react';
import github from './github.svg';
import { TicketListState, ListsState, TicketList }  from '../../store';
import { useSetRecoilState, useRecoilState } from 'recoil';

const Header: FC = () => {
    const [lists,setLists] = useRecoilState(ListsState);
    // console.log(lists);
    // if (lists === []){
    //     const savedLists: string | null = localStorage.getItem('lists');
    //     console.log(savedLists)
    //     if (savedLists !== null){
    //         setLists(JSON.parse(savedLists));
    //     }
    // } else{

    // }
    const [ticketList,setTicketList] = useRecoilState(TicketListState);
    const listsNames = lists.map((list: TicketList) => {
        return list.title;
    });
    const selectOnChange = (e: any)=>{
        for (let i = 0; i < lists.length; ++i){
            if (e.target.value === lists[i].title){
                setTicketList(lists[i]);
            }
        }
    }
    // if (ticketList.title === ''){
    //     if (lists.length > 0 && (document.getElementById('list-name') as HTMLInputElement).value !== 'default'){
    //         setTicketList(lists[0]);
    //     }
    // }
    return (
        <div className="bg-haiti w-screen h-20 flex justify-between">
            <h1 className="text-french-mauve text-5xl mt-4 ml-5 font-bold font-serif">Easy Tickets</h1>
            <select id="list-name" defaultValue="default" onChange={selectOnChange} className="mt-5 mr-10 focus:outline-none  w-96 h-10 text-xl font-serif text-valhalla rounded-md pl-2 bg-french-mauve">
                    <option key="default-option" disabled value="default" hidden>Выберите список</option>
                    {listsNames ? listsNames.map((listName,idx) => <option className="text-xl font-serif text-valhalla" key={`${listName}-${idx}}`}>{listName}</option>) : null}
            </select>
            <a href="https://github.com/NixoN2"><img className="mt-2 mr-16 w-16 h-16" src={github} alt="github"></img></a>
        </div>
    )
}

export default Header;