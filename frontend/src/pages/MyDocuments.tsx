import React from "react";
import DocumentCard from "../components/DocumentCard";

import Row from 'react-bootstrap/Row';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";

const MyDocumentsPage = () => {
    let arr = [
        {"id": 1, "name":"Withdraw01", "day":20, "month":10, "year": 2022},
        {"id": 2, "name":"Resign01", "day":2, "month":10, "year": 2022},
        {"id": 3, "name":"WithWithEz", "day":1, "month":8, "year": 2022},
        {"id": 4, "name":"JustGetOut", "day":20, "month":10, "year": 1980},
        {"id": 5, "name":"ByeBye", "day":20, "month":10, "year": 1999},
    ];

    let docCards = null;
    docCards = arr.map((a, key) => {
        return (
            <DocumentCard id={a.id} name={a.name} day={a.day} month={a.month} year={a.year}/>
        );
    });

    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    function addDocument() {
        setModalIsOpen(true);
        console.log("Open");
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <>
            <h1>My Documents!</h1>
            <Row xs={1} md={2} lg={4} className="g-4">
                {docCards}
            </Row>
            <Fab color="primary" aria-labe="add" onClick={addDocument}>
                <AddIcon />
            </Fab>
            {modalIsOpen ? <Modal /> : null}
        </>
    );
}

export default MyDocumentsPage;
