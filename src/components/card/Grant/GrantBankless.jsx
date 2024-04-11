import Rectangle36 from '../../../assets/image/Rectangle 36.png'
import iconInfo from '../../../assets/image/icon-info.png';
import image65 from '../../../assets/image/image 65.png'
function GrantBankless() {
    return (
        <div className="grant-item bankless me-5" >
            <div className="grant-img">
                <img src={Rectangle36} alt="bankless" />
            </div>
            <div className='grant-container'>
                <div className='heading'>
                    <div className='head'>
                        Bankless
                        <img src={image65} alt="bankless" />
                    </div>
                    by < span>ryanseanadams</span>
                </div>
                <p>
                    Bankless is on a mission to onboard millions of people into living their financial lives on Ethereum living their
                    financial lives on Ethereum into living their financial.
                </p>
                <hr />
                <div className='grant-price' >
                    Grants Round 8
                    <span>$13,258</span>
                    raised from 25 contributors
                </div>
                <div>
                    Est. Matching <span className='text-teal-500 font-semibold' >+$45,323</span>
                </div>
                <div className='div-button' >
                    <button className='px-2' ><img src={iconInfo} className='my-2 mx-2' /></button>
                    <button className='ms-3' >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default GrantBankless