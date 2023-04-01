import React from "react";

const ListItem = ({index, item})=> {
    return (
        <div className='listItem' key={index}>
            <div className='divImage'>
                <img src={item.pic} alt={`pro ${item.voteNumber}`} />
            </div>
            <div className='divName'>
                <h1 className='enonce'>Nom du candidat</h1>
                <h2 className='info'>{item.name}</h2>
            </div>
            <div className='divVote mx-2 text-center'>
                <h1 className='enonce'>Votes</h1>
                <h2 className='info'>{item.voteValue}</h2>
            </div>
            <div className='divBtn'>
                <button className='btn btn-success p-1'>Voter 👍</button>
            </div>
        </div>
    )
}
export default ListItem;