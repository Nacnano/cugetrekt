import DocCard from "../components/DocumentCard";

const MyDocumentsPage = () => {
    let arr = [1, 2, 3];
    let docCards = null;

    docCards = arr.map((a, key) => {
        return (
            <div key={key}>
                <DocCard num={a}/>
            </div>
        );
    });

    return (
        <>
            <h1>My Documents!</h1>
            {docCards}
        </>
    );
}

export default MyDocumentsPage;
