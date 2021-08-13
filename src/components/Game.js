import React from 'react'
import { CardColumns } from 'react-bootstrap';
import Card from './CardComponent';

function Game() {
    const cards = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
    ];

    return (
        <div className="mt-4">
            <div className="d-flex justify-content-around">
                <p>Nombre de coups</p>
                <p>Nombre de paires trouvées</p>
            </div>
            <div className="container">
                <div className="row">
                    { 
                        cards.map(card => <Card card={card}/> )
                
                    }

                </div>
            
            </div>
            
                           
        </div>
    )
}

export default Game
