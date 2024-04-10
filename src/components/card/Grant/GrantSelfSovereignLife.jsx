// import Frame14445 from '../../../assets/image/Frame 14445.png'
import Frame14445 from '../../assets/image/Frame 14445.png'
import Vector from '../../assets/image/Vector.png'
import Ellipse from '../../assets/image/Ellipse 165.png'
function GrantSelfSovereignLife() {
    return (
        <div className="grant-item w-80" >
            <div className="grant-img">
                <img src={Frame14445} alt="bankless" />
            </div>
            <div className='grant-container'>
                <div className='heading text-gray-500 '>
                    <div className='head'>
                        Self Sovereign Life
                    </div>
                    <img src={Ellipse} className='float-start me-2 pt-1' /><span className='font-medium' >tze42</span> - 9 grants
                </div>
                <p className='mt-4 text-gray-500 text-sm'>
                    Technology and tools needed to enable a self-sovereign lifestyle.
                </p>
                <div className='div-button' >
                    <button className='px-2' ><img src={Vector} className='my-2.5 mx-6' /></button>
                    <button className='ms-3 ' >View</button>
                </div>
            </div>
        </div>
    )
}

export default GrantSelfSovereignLife