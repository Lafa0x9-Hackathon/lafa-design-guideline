import './alerts.css'

function Alerts() {
    return (
        <div className="alerts-main-container">
            <div className="Alert">
                <p className="Alert-head">Alerts</p>
                <p className='Alert-content'>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
            </div>
            <div className="Alert-box-container">
                <div className='alerts' id="alert-1">
                    <div className='inner-alert-1'>
                        <img src="./icons/icon-info.png" alt="icon" />
                        <p>Text goes here</p>
                    </div>
                    <div className='inner-alert-2'>
                        <p>Do Something</p>
                        <img src="./icons/icon-close.png" alt="icon" />
                    </div>
                </div>
                <div className='alerts'id="alert-2"><div className='inner-alert-1'>
                        <img src="./icons/icon-exclamation-triangle.png" alt="icon" />
                        <p>Text goes here</p>
                    </div>
                    <div className='inner-alert-2'>
                        <p>Do Something</p>
                        <img src="./icons/icon-close.png" alt="icon" />
                    </div>
                </div>
                <div className='alerts'id="alert-3"><div className='inner-alert-1'>
                        <img src="./icons/icon-exclamation.png" alt="icon" />
                        <p>Text goes here</p>
                    </div>
                    <div className='inner-alert-2'>
                        <p>Do Something</p>
                        <img src="./icons/icon-close.png" alt="icon" />
                    </div>
                </div>
                <div className='alerts'id="alert-4"><div className='inner-alert-1'>
                        <img src="./icons/icon-checkmark.png" alt="icon" />
                        <p>Text goes here</p>
                    </div>
                    <div className='inner-alert-2'>
                        <p>Do Something</p>
                        <img src="./icons/icon-close.png" alt="icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Alerts