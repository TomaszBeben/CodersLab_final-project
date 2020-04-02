import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

const Book = () => {
    return(
        <>
        <div>
            <p></p>
            <img className="book-photos" src={"http://wiktorkubiak.pl/thumbs/wiktor_kubiak-6-1dcaf2b94ca0e80a06fd91866d40412e.jpg"}/>
            <div>
                <ul>
                    <li className="book-text">pages: 52</li>
                    <li className="book-text">photos: 26</li>
                    <li className="book-text">Softcover</li>
                    <li className="book-text">Book dimensions: 21 x 16 cm</li>
                    <li className="book-text">Photographs: Wiktor Kubiak</li>
                    <li className="book-text">Language: Polish / English</li>
                    <li className="book-text">Book design: Katarzyna Wolny</li>
                    <li className="book-text">ISBN 978-83-948132-0-8</li>
                </ul>
            </div>
            <img className="book-photos" src={"http://wiktorkubiak.pl/thumbs/wiktor_kubiak-8-fa84ee0dc60cb672f2d2bbd196079eef.jpg"}/>
        </div>
        </>
    )
}

export default Book;