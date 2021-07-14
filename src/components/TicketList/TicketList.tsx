import { TicketListState, ListsState, infoValue } from '../../store';
import { useRecoilState, useRecoilValue } from 'recoil';
import Ticket from '../Ticket/Ticket';
import { v4 } from 'uuid';
import { FC } from 'react';
const TicketList : FC  = () => {
    const [ticketList, setTicketList] = useRecoilState(TicketListState);
    const [lists, setLists] = useRecoilState(ListsState);
    const info = useRecoilValue(infoValue);
    const onDelete = (e: any) => {
        const id: string = ticketList.id;
        for (let i = 0; i < lists.length; ++i){
            if (lists[i].id === id){
                setLists([...lists.slice(0,i),...lists.slice(i+1)]);
                localStorage.setItem('lists',JSON.stringify([...lists.slice(0,i),...lists.slice(i+1)]));
                setTicketList({id: '', title:'', tickets: []});
            }
        }
        (document.getElementById('list-name') as HTMLInputElement).value="default";
    }
    return (
        <div>
            <div className="flex mb-5">
                {ticketList.title !== '' ? <h1 className=" ml-4 mt-4 rounded-xl text-french-mauve text-2xl font-serif text-center border-2 border-french-mauve outline p-1.5 pl-10 pr-10">{ticketList.title}</h1> : null}
                {ticketList.title !== '' ? <button onClick={onDelete} className="focus:outline-none bg-french-mauve ml-4 mt-4 rounded-xl text-valhalla text-2xl font-serif  text-center cursor-pointer hover:border-pink-lavender border-2 border-french-mauve h-12 w-40">Удалить</button> : null}
            </div>
            <div>
                {ticketList.title !== '' ? <p className="text-french-mauve text-2xl font-serif ml-4 border-2 border-french-mauve w-80 h-12 text-center pt-1.5 rounded-xl">{info.completed}/{info.total} вопросов изучено</p> : null}
            </div>
            {ticketList.tickets.map((ticket) => <Ticket key={v4()} id={ticket.id} title={ticket.title} completed={ticket.completed} pages={ticket.pages} />)}
        </div>
    )
}

export default TicketList;