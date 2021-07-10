import Header from './components/Header/Header';
import FileParser from './components/FileParser/FileParser';
import TicketList from './components/TicketList/TicketList';
import Modal from './components/Modal/Modal';
const App = () => {
    
    return(
        <div className="bg-ebony w-screen h-screen overflow-x-hidden overflow-y-scroll">
            <Modal />
            <Header />
            <FileParser />
            <TicketList />
        </div>
    )
}

export default App;
