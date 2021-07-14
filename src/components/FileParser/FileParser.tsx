import React, { FC, useState } from "react";
import { Ticket, TicketList, TicketListState, PdfState, ListsState }  from '../../store';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { v4 } from 'uuid';
// TO DO: REFACTOR THE CODE
const FileParser: FC = () => {
    const [ticketsList,setTicketList] = useRecoilState(TicketListState);
    const [ticketListTickets, setTicketListTickets] = useState<Ticket[]>([]);
    const [pdf,setPdf] = useRecoilState(PdfState);
    const [lists,setLists] = useRecoilState(ListsState);
    const [listTitle, setTitle] = useState('');
    const [txtFile, setTxtFile] = useState(false);
    const txtOnChange = (e: any) : void => {
        e.preventDefault();
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            setTxtFile(true);
            const txtInfo = e.target.result.split(';');
            let ticketListTickets: Ticket[] = [];
            txtInfo.forEach((ticket: string) => {
                const ticketInfo: string[]= ticket.split('|')[0].split(' ');
                const ticketPages: string[] = ticket.split('|')[1].split(',');
                let ticketPagesParsed: number[] = [];
                ticketPages.forEach((ticketPage: string) => {
                    if (ticketPage.split('-').length === 1){
                        ticketPagesParsed.push(Number(ticketPage));
                    }
                    else{
                        const range: string[] = ticketPage.split('-');
                        const range1: number = Number(range[0]);
                        const range2: number = Number(range[1]);
                        for (let i: number = range1; i <= range2; ++i){
                            ticketPagesParsed.push(i);
                        }
                    }
                })
                const parsedTicket: Ticket = {
                    id: ticketInfo[0].match(/\d+/g)![0],
                    title: ticketInfo.slice(1).join(' '),
                    completed: false,
                    pages: ticketPagesParsed
                }
                ticketListTickets.push(parsedTicket);
            })
            setTicketListTickets(ticketListTickets);
            // setTicketList({title: listTitle, tickets: ticketList.tickets});

        }
        if (e.target.files[0] instanceof Blob){
            reader.readAsText(e.target.files[0],'windows-1251');
        }
    }
    const pdfOnChange = (e: any) : void => {
        e.preventDefault()
        const reader = new FileReader();
        reader.onload = async(e: any) => {
            setPdf(e.target.result);
        }
        if (e.target.files[0] instanceof Blob){
            reader.readAsDataURL(e.target.files[0]);
        }
    }
    const titleOnChange = (e: any) => {
        setTitle(e.target.value);
    }
    const addTicketList = (e: any) => {
        e.preventDefault();
        if (listTitle !== '' && ticketsList.tickets !== []){
            // setTicketList({id: ticketsList.id, title: listTitle, tickets: ticketListTickets})
            setLists(lists.concat({id: v4(), title: listTitle, tickets: ticketListTickets}));
            localStorage.setItem('lists',JSON.stringify(lists.concat({id: v4(), title: listTitle, tickets: ticketListTickets})));
            (document.getElementById('name') as HTMLInputElement).value = '';
            (document.getElementById('txt') as HTMLInputElement).value = '';
            setTitle('');
            setTxtFile(false);
            
        }

    }
    return (
        <div className="flex">
            <input onChange={titleOnChange} className="focus:outline-none  bg-french-mauve ml-5 mt-5 w-96 h-10 pl-2 text-xl font-serif  rounded-lg text-valhalla placeholder-valhalla placeholder-opacity-85" type="text" placeholder="Введите название списка:" id="name"/>
            
            { txtFile ? <label className="bg-french-mauve ml-3 mt-5 rounded-xl h-10 text-valhalla text-xl font-serif  text-center pt-1 cursor-pointer hover:border-pink-lavender border-2 border-french-mauve pl-5 pr-5" htmlFor="txt">Выберите txt-файл <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 pb-1 bg-french-mauve inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg></label> :
                <label className=" bg-french-mauve ml-3 mt-5 rounded-xl h-10 text-valhalla text-xl font-serif  text-center pt-1 cursor-pointer hover:border-pink-lavender border-2 border-french-mauve pl-5 pr-5" htmlFor="txt">Выберите txt-файл </label>
            }
            <input onChange={txtOnChange} className="w-0 h-0" type="file" id="txt"/>
            {pdf === '' ? <label className="bg-french-mauve ml-3 mt-5 rounded-xl h-10 text-valhalla text-xl font-serif  text-center pt-1 cursor-pointer hover:border-pink-lavender border-2 border-french-mauve pl-5 pr-5" htmlFor="pdf">Выберите pdf-файл</label>
            :   <label htmlFor="pdf" className="bg-french-mauve ml-3 mt-5 rounded-xl h-10 text-valhalla text-xl font-serif  text-center pt-1 cursor-pointer hover:border-pink-lavender border-2 border-french-mauve pl-5 pr-5">Выберите pdf-файл <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 pb-1 bg-french-mauve inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg></label>
            }
            <input onChange={pdfOnChange} className="w-0 h-0" type="file" id="pdf"/>
            <button onClick={addTicketList} className="focus:outline-none bg-french-mauve ml-3 mt-5 rounded-xl text-valhalla text-xl font-serif  text-center cursor-pointer hover:border-pink-lavender border-2 border-french-mauve h-10 w-32">Добавить</button>
        </div>
    )
}

export default FileParser;