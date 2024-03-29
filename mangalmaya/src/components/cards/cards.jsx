import './cards.css'

function Cards() {
    return (
        <div className='main-container'>
            <div className='cards-title-container'>
                <p className='card-title'>Cards</p>
                <p className='card-content'>Cards provide a flexible and extensible content <br />container with multiple variants and options.</p>
            </div>

            <div className='cards-title-container2'>
                <div id='card1'>  
                </div>
                <div id='card2' >
                    <p className='card-title'>Title</p>
                    <p className='card-content'>Body copy to onboard millions of people into living their financial lives on Ethereum living their financial lives on Ethereum into living their financial.</p></div>
                <div  id='card3'> 
                    <div className='blank'></div>
                    <p className='card-title'>Title</p>
                    <p className='card-content'>Body copy to onboard millions of people into living their financial lives on Ethereum living their financial lives on Ethereum into living their financial.</p>
                </div>
            </div>
        </div>
        
    );
}

export default Cards;