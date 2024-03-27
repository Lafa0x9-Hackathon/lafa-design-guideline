import './alerts.css'
import icon_info from './icons/icon-info.png';
import icon_close from './icons/icon-close.png';
import icon_exclamation_triangle from './icons/icon-exclamation-triangle.png';
import icon_exclamation from './icons/icon-exclamation.png';
import icon_checkmark from './icons/icon-checkmark.png';


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
                        <img src={icon_info} alt="icon" />
                        <p>Text goes here</p>
                    </div>
                    <div className='inner-alert-2'>
                        <p>Do Something</p>
                        <img src={icon_close} alt="icon" />
                    </div>
                </div>
                <div className='alerts'id="alert-2"><div className='inner-alert-1'>
                        <img src={icon_exclamation_triangle} alt="icon" />
                        <p>Text goes here</p>
                    </div>
                    <div className='inner-alert-2'>
                        <p>Do Something</p>
                        <img src={icon_close} alt="icon" />

                    </div>
                </div>
                <div className='alerts'id="alert-3"><div className='inner-alert-1'>
                        <img src={icon_exclamation} alt="icon" />
                        <p>Text goes here</p>
                    </div>
                    <div className='inner-alert-2'>
                        <p>Do Something</p>
                        <img src={icon_close} alt="icon" />
                    </div>
                </div>
                <div className='alerts' id="alert-4">
                    <div className='inner-alert-1'>
                    <img src={icon_checkmark} alt="icon" />
                        <p>Text goes here</p>
                    </div>
                    <div className='inner-alert-2'>
                        <p>Do Something</p>
                        <img src={icon_close} alt="icon" />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Alerts