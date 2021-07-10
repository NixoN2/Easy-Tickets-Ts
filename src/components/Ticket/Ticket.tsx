import { FC } from "react";
import { TicketListState, pagesState } from '../../store';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { showState } from '../../store';
interface TicketProps {
    key: string;
    id?: string;
    title: string;
    completed: boolean;
    pages: number[];
}

const Ticket: FC<TicketProps> = ({id,title,completed,pages}: TicketProps) => {
    const [ticketList, setTicketList] = useRecoilState(TicketListState);
    const [show,setShow] = useRecoilState(showState);
    const setPages = useSetRecoilState(pagesState);
    const onCheck = (e: any) => {
        setTicketList({id: ticketList.id,title: ticketList.title, tickets:[...ticketList.tickets.slice(0,Number(id)-1),{id: id, title: title, completed: !completed,pages: pages}, ...ticketList.tickets.slice(Number(id))]})
    }
    const onOpen = (e: any) => {
        setPages(pages);
        setShow(true);
    }
    return (
        <div className="flex mt-3 ml-5">   	
            <p className="text-french-mauve text-2xl max-w-7xl">{id}:  {title}</p>
            {completed ? <button onClick={onCheck} className="w-5 h-5 ml-2 mt-1.5 focus:outline-none bg-french-mauve rounded-sm"></button> : <button onClick={onCheck} className="w-5 h-5 ml-2 mt-1.5 focus:outline-none bg-white rounded-sm"></button>} 
            <button onClick={onOpen} className="focus:outline-none bg-french-mauve ml-4 rounded-xl text-valhalla text-lg text-center cursor-pointer hover:border-pink-lavender border-2 border-french-mauve h-8 w-32">Открыть</button>
        </div>
    )
}


export default Ticket;