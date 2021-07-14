import { FC, useState } from 'react';
import { ListsState, TicketList, PdfState, TicketListState, showState, pagesState, pdfPagesState } from '../../store';
import { useRecoilState } from 'recoil';
import { v4 } from 'uuid';

import Modal from '../Modal/Modal';
const ListCreator : FC = () => {
    const [lists,setLists] = useRecoilState(ListsState);
    const [ticketList, setTicketList] = useRecoilState(TicketListState);
    const [pdf,setPdf] = useRecoilState(PdfState);
    const [title, setTitle] = useState<string>('');
    const [listId, setListId] = useState<string>('');
    const [question, setQuestion] = useState<string>('');
    const [pages, setPages] = useState<number[]>([]);
    const [pdfPages, setPdfPages] = useRecoilState(pagesState);
    const [show,setShow] = useRecoilState(showState);
    const [pdfFilePages, setPdfFilePages] = useRecoilState(pdfPagesState);
    const onTitleChange = (e: any) => {
        setTitle(e.target.value);
    }
    const addTicketList = (e: any) => {
        e.preventDefault();
        setLists(lists.concat({id: v4(), title: title, tickets: []}));
        localStorage.setItem('lists',JSON.stringify(lists.concat({id: v4(), title: title, tickets: []})));
        (document.getElementById('listName') as HTMLInputElement).value = '';
        setTitle('')
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
    const listsNames = lists.map((list: TicketList) => {
        return list.title;
    });

    const selectOnChange = (e: any) => {
        for (let i = 0; i < lists.length; ++i){
            if (e.target.value === lists[i].title){
                setListId(lists[i].id);
            }
        }
    }
    const onTextAreaChange = (e: any) => {
        setQuestion(e.target.value);
    }
    const onPagesChange = (e: any) => {
        let ticketPagesParsed: number[] = [];
        e.target.value.split(',').forEach((ticketPage: string) => {
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
        setPages(ticketPagesParsed);
    }
    const addQuestion = (e: any) => {
        for (let i = 0; i < lists.length; ++i){
            if (lists[i].id === listId){
                setLists([...lists.slice(0,i), {id: lists[i].id, title: lists[i].title, tickets: [...lists[i].tickets].concat({id: String(lists[i].tickets.length + 1), title: question, completed: false, pages: pages})}, ...lists.slice(i+1)]);
                if (ticketList.id === lists[i].id){
                    setTicketList({id: ticketList.id, title: ticketList.title, tickets:  [...ticketList.tickets].concat({id: String(ticketList.tickets.length + 1), title: question, completed: false, pages: pages})});
                }
                localStorage.setItem('lists',JSON.stringify([...lists.slice(0,i), {id: lists[i].id, title: lists[i].title, tickets: [...lists[i].tickets].concat({id: String(lists[i].tickets.length + 1), title: question, completed: false, pages: pages})}, ...lists.slice(i+1)]));
                (document.getElementById('question') as HTMLInputElement).value = '';
                (document.getElementById('pages') as HTMLInputElement).value = '';
                setPages([]);
                setQuestion('');
            }
        }
    }
    const onOpen = (e: any) => {
        setShow(true);
        let result: number[] = [];
        for (let i = 0; i < pdfFilePages; ++i){
            result.push(i+1);
        }
        setPdfPages(result);
    }
    return (
        <div>
            <div className="flex">
                <input onChange={onTitleChange} type="text" id="listName" className="focus:outline-none  bg-french-mauve ml-5 mt-5 w-96 h-10 pl-2 text-xl font-serif  rounded-lg text-valhalla placeholder-valhalla placeholder-opacity-85" placeholder="Введите название списка: " />
                {pdf === '' ? <label className="bg-french-mauve ml-3 mt-5 rounded-xl h-10 text-valhalla text-xl font-serif  text-center pt-1 cursor-pointer hover:border-pink-lavender border-2 border-french-mauve pl-5 pr-5" htmlFor="pdf">Выберите pdf-файл</label>
            :   <label htmlFor="pdf" className="bg-french-mauve ml-3 mt-5 rounded-xl h-10 text-valhalla text-xl font-serif  text-center pt-1 cursor-pointer hover:border-pink-lavender border-2 border-french-mauve pl-5 pr-5">Выберите pdf-файл <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 pb-1 bg-french-mauve inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg></label>
            }
                <input onChange={pdfOnChange} className="w-0 h-0" type="file" id="pdf"/>
                <button onClick={addTicketList} className="focus:outline-none bg-french-mauve ml-3 mt-5 rounded-xl text-valhalla text-xl font-serif  text-center cursor-pointer hover:border-pink-lavender border-2 border-french-mauve h-10 w-32">Добавить</button>
            </div>
            <div className="flex">
                <select onChange={selectOnChange} id="list-name" defaultValue="default" className="mt-4 ml-5 block focus:outline-none  w-92 h-10 text-xl font-serif text-valhalla rounded-md pl-2 bg-french-mauve">
                        <option key="default-option" disabled value="default" hidden>Выберите список для добавления вопроса</option>
                        {listsNames ? listsNames.map((listName,idx) => <option className="text-xl font-serif text-valhalla" key={`${listName}-${idx}}`}>{listName}</option>) : null}
                </select>
                <button onClick={onOpen} className="focus:outline-none bg-french-mauve ml-3 mt-4 rounded-xl text-valhalla text-xl font-serif  text-center cursor-pointer hover:border-pink-lavender border-2 border-french-mauve h-10 w-48">Открыть pdf-файл</button>
            </div>
            <div className="flex">
                <textarea onChange={onTextAreaChange} id="question" placeholder="Введите вопрос:" className="focus:outline-none  bg-french-mauve ml-5 mt-5 w-192 pr-2 pb-1 h-14 pl-2 pt-1 text-xl font-serif  rounded-lg text-valhalla placeholder-valhalla placeholder-opacity-85"/>
                <input onChange={onPagesChange} type="text" id="pages" className="focus:outline-none  bg-french-mauve ml-5 mt-5 w-80 h-14 pl-2 text-xl font-serif  rounded-lg text-valhalla placeholder-valhalla placeholder-opacity-85" placeholder="Введите страницы: " />
                <button onClick={addQuestion} className="focus:outline-none bg-french-mauve ml-3 mt-7 rounded-xl text-valhalla text-xl font-serif  text-center cursor-pointer hover:border-pink-lavender border-2 border-french-mauve h-10 w-32">Добавить</button>
            </div>
        </div>
    )
}

export default ListCreator;