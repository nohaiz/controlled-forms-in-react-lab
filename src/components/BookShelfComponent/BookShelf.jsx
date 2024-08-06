import { useState } from "react"
const BookShelf = () => {

    const [books, setBook] = useState([

        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState({
        title : '',
        author: '',
    });

    const handleInputChange = (event) => {

        setNewBook(
            {...newBook,[event.target.name] : event.target.value},
        );
    }

    const handleSubmit = (event) => {
        
        event.preventDefault();
        setBook([...books, newBook]);

        setNewBook(
            {
                title : '',
                author: '',
            }
        )
    }

    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit}>

                        <label htmlFor="title">Add a title</label>
                        <input type="text" name="title" id="title" onChange={handleInputChange} value={newBook.title}/>

                        <label htmlFor="author">Add a author</label>
                        <input type="text" name="author" id="author" onChange={handleInputChange} value={newBook.author}/>

                        <button type="submit">Submit the book</button>
                    </form>
                </div>
                <div className="bookCardsDiv">{books.map((book,index) => 
                    <div className="bookCard" key={index}>{book.title}<br></br>{book.author}</div>
                )}</div>
            </div>
        </>
    )
}

export default BookShelf