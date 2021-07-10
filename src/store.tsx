import { atom, selector } from 'recoil';

export interface Ticket{
    id?: string;
    title: string;
    completed: boolean;
    pages: Array<number>;
}

export interface TicketList{
    id: string;
    title: string;
    tickets: Ticket[];
}

export const TicketListState = atom({
    key: "ticketList",
    default: {id: '',title: '', tickets: [] as Ticket[]},
});

export const ListsState = atom({
    key: "Lists",
    default: JSON.parse(localStorage.getItem('lists') as string) === null ? [] : [...JSON.parse(localStorage.getItem('lists') as string)] as TicketList[],
})

export const PdfState = atom({
    key: "Pdf",
    default: '',
})

export const showState = atom({
    key: "Show",
    default: false
})

export const pagesState = atom({
    key: "Pages",
    default: [] as number[]
})

export const infoValue = selector({
    key: "infoValue",
    get: ({get}) => ({
        total: get(TicketListState).tickets.length,
        completed: get(TicketListState).tickets.filter((ticket) => ticket.completed).length
    })
})
