import './progress.css'
import { useState } from 'react';

function Progress() {

    const [filled] = useState(10)

    return (
        <div className="process-container">

            <div className='Progress-wrapper'>
                <div className="process-heading">
                    Progress
                </div>
                <p>
                    The &lt;progress&gt; element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
                </p>
            </div>
            
            <div className='progressbar-container'>
                <div  className="progress-bar">
                    <div style={{ width: `${filled}%` }} className="progress__fill"></div>
                </div>
                <p className='filled-percentage'>{filled}%</p>     
            </div>
            
        </div>
    );
}

export default Progress;