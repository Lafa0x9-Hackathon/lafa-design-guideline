import './filter.css'
import { useState } from 'react';

function Filter() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        
        <div className="filter-container">
            <div className="filter-btn">
                <button onClick={toggleModal} type="button" id="btn-1">Filter</button>
                <button onClick={toggleModal} type="button" id="btn-2">Filter</button>
                <button onClick={toggleModal} type="button" id="btn-3">Filter</button>
                <button onClick={toggleModal} type="button" id="btn-4">Filter - 1</button>
            </div>

            { modal && (<div className='modal'>
                <div  className="pop-up-1">
                <div className='pop-up-items'>
                    <div>
                        <input type="checkbox" name="Item 1" id="item" />
                        <label id='label' htmlFor="Item 2">Item 1</label>
                    </div>
                    <div>
                        <input type="checkbox" name="Item 2" id="item" />
                        <label htmlFor="Item 3">Item 2</label>
                    </div>
                    <div>
                        <input type="checkbox" name="Item 3" id="item" />
                        <label htmlFor="Item 1">Item 3</label>
                    </div>
                    <div>
                        <input type="checkbox" name="Item 4" id="item" />
                        <label htmlFor="Item 4">Item 4</label>
                    </div>     
                </div>
                <div className="buttons-1">
                    <button id='Clear-button' type="button">Clear</button>
                    <button id='Save-button' type="button">Save</button>
                </div>
            </div>
            

            <div className="pop-up-2">
                <div className="Search">
                    <img src="./icons/search.png" alt="search-icon" />
                    <p>Search more tags</p>
                </div>
                <div className="search-items">
                    <div>
                        <input type="checkbox" name="Item 1" id="item" />
                        <label htmlFor="Item 1">Item 1</label>
                    </div>
                    <div>
                        <input type="checkbox" name="Item 2" id="item" />
                        <label htmlFor="Item 2">Item 2</label>
                    </div>
                    <div>
                        <input type="checkbox" name="Item 3" id="item" />
                        <label htmlFor="Item 3">Item 3</label>
                    </div>
                    <div>
                        <input type="checkbox" name="Item 4" id="item" />
                        <label htmlFor="Item 4">Item 4</label>
                    </div>
                    <div>
                        <input type="checkbox" name="Item 5" id="item" />
                        <label htmlFor="Item 5">Item 5</label>
                    </div>
                    <div>
                        <input type="checkbox" name="Item 6" id="item" />
                        <label htmlFor="Item 6">Item 6</label>
                    </div>
                    <div>
                        <input type="checkbox" name="Item 7" id="item" />
                        <label htmlFor="Item 7">Item 7</label>
                    </div>
                    <div>
                        <input type="checkbox" name="Item 8" id="item" />
                        <label htmlFor="Item 8">Item 8</label>
                    </div>   
                </div>
                <div className="buttons-2">
                    <button id='Clear-button' type="button">Clear</button>
                    <button id='Save-button' type="button">Save</button>
                </div>
            </div>
            </div>)}

            
            
        </div>
    );
}


export default Filter;