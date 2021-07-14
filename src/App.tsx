import Header from './components/Header/Header';
import FileParser from './components/FileParser/FileParser';
import TicketList from './components/TicketList/TicketList';
import Modal from './components/Modal/Modal';
import ListCreator from './components/ListCreator/ListCreator';
import { pagesState } from './store';
import { useRecoilState } from 'recoil';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
const App = () => {
    const [pages, setPages] = useRecoilState(pagesState);
    return(
        <div className="bg-ebony w-screen h-screen overflow-x-hidden overflow-y-scroll">
            <Router>
                <Modal />
                <Header />
                <div className="flex">
                    <Link to="/" className="text-french-mauve text-2xl font-serif ml-5 mt-2 hover:text-pink-lavender">
                        Добавить список из txt-файла
                    </Link>
                    <Link to="/create" className="text-french-mauve text-2xl font-serif ml-5 mt-2 hover:text-pink-lavender">
                        Создать список вручную
                    </Link>
                </div>
                <Switch>
                    <Route path="/create">
                        <ListCreator />
                    </Route>
                    <Route path="/">
                        <FileParser />
                    </Route>
                </Switch>
                <TicketList />
            </Router>
        </div>
    )
}

export default App;
