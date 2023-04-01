import React, { useState } from 'react';
// import Richouf from '../richouf.png'
// import ListItem from './listItem';
import Data from './Data';

const Elements = () => {

    const [c, setC] = useState(Data)

    const handleVote = (voteNumber) => {
        const copy = [...c];
        for(let i in copy) {
            if(copy[i].voteNumber === voteNumber) {
                copy[i].voteValue++;
            }
        }
        setC(copy);
    }

    c.sort((a,b) => {
        return b.voteValue - a.voteValue
    })

    let x = c.slice(0, 3);
    console.log(x);


    const itemCandidat = c.map((item, index) => {
        return (
            <div className='listItem' key={index}>
                <div className='divImage'>
                    <img src={item.pic} alt={`pro ${item.voteNumber}`} />
                </div>
                <div className='divName'>
                    <h1 className='enonce'>Nom du candidat</h1>
                    <h2 className='info'>{item.name}</h2>
                </div>
                <div className='divVote text-center'>
                    <h1 className='enonce'>Votes</h1>
                    <h2 className='info'>{item.voteValue}</h2>
                </div>
                <div className='divBtn'>
                    <button className='btn btn-success p-1' onClick={() => handleVote(item.voteNumber)}>Voter 👍</button>
                </div>
            </div>
        )
    })

    return (
        <div className='elements row'>
            <div className='listeCandidats col-md-6  order-sm-2'>
                {itemCandidat}
            </div>
            <div className='classement col-md-6'>
                <div className='fig'>
                    <div className='deuxieme'>
                        <img src={x[1].pic} alt='second'  className='loreat' />
                        <h2 className='loreat nbre'>2</h2>
                    </div>
                    <div className='premier'>
                        <img src={x[0].pic} alt='second'  className='loreat' />
                        <h2 className='loreat nbre'>1</h2>
                    </div>
                    <div className='troisieme'>
                        <img src={x[2].pic} alt='second'  className='loreat' />
                        <h2 className='loreat nbre'>3</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Elements