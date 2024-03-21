 import './modal.css'

function Modal() {
    return (
        <div className='Main-container'>
            <div className="Modal-container"> 
                <p id='title'>Modal</p>
                <p id='content'>Modals are a disruptive way of delivering important information, asking your user to make a choice or helping them achieve multiple tasks.</p>
            </div>
            <div className='second-modal-container'>
                <img src="/mangalmaya/src/assets/modal/icon-close.png" alt="close-icon" className='close-icon'/>
                <p id='second-container-title'>Modal Title</p>
                <p id='second-container-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /><br />Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>     
                
                <div className='Buttons'>
                    <button type="button" id='Cancel-button'>Cancel</button>
                    <button type="button" id='Accept-button'>Accept</button>
                </div>
            </div>
            <p className='last-P'>bring in earn modal</p>
        </div>
        
    );
}

export default Modal;