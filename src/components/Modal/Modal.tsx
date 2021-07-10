import { useRecoilState } from 'recoil';
import { showState, pagesState, PdfState } from '../../store';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { useState } from 'react';
const Modal = () => {
    const [show, setShow]  = useRecoilState(showState);
    const [pages,setPages] = useRecoilState(pagesState);
    const [pdf, setPdf] = useRecoilState(PdfState);
    const [zoom, setZoom] = useState(1.7);
    const visible = show ? 'fixed top-0 left-0 w-screen h-screen block' : 'fixed top-0 left-0 w-screen h-screen hidden';
    const onClose = (e: any) => {
        setShow(false);
    }
    const onOutModalClick = (e: any) => {
        if (e.clientY < 80 || e.clientY > 900 || e.clientX < 480 || e.clientX > 1440){
            setShow(false);
        }

    }
    const onPlusZoom = (e: any) => {
        e.preventDefault();
        setZoom(zoom + 0.1);
    }
    const onMinusZoom = (e:any) => {
        e.preventDefault();
        setZoom(zoom - 0.1);
    }
    return (
        <div onClick={onOutModalClick} className={visible} >
            <div className="bg-ebony bg-opacity-75 w-screen h-screen pt-20">
            <div className="h-20 bg-white w-3/6 mx-auto">
                <button type="button" className="float-right mr-5 mt-5" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <div className="flex justify-around pt-5">
                    <div>
                        <button onClick={onPlusZoom} className="mr-6 w-8 h-8 bg-ebony text-french-mauve text-2xl rounded-xl">+</button>
                        <button onClick={onMinusZoom} className="w-8 h-8 bg-ebony text-french-mauve text-2xl rounded-xl">-</button>
                    </div>
                </div>
            </div>
            <section className="bg-white w-3/6 h-5/6 overflow-auto mx-auto">
                
                
                {pages !== [] ? <Document
                    file={pdf} 
                    options={{ workerSrc: "/pdf.worker.js" }}
                    // className=" mx-auto"
                >   
        {pages.map((el, index) => {return <Page key={`page_${index+1}`} pageNumber={el} scale={zoom} />} )}
                </Document> : null}
            
            </section>
            </div>
        </div>
    )
}

export default Modal;