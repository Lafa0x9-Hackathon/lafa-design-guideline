import MaticLargePhoto from '../../../assets/image/MaticLarge.png'
function MaticLarge() {
    return (
        <div className="matic matic-vertical" >
            <div className="image-container">
                <img src={MaticLargePhoto} />
            </div>
            <div className='content'>
                <h5>Matic: Build-N-Earn</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className='div-price' ><span className='text-teal-500 me-6 font-semibold font-xl leading-7' >$25,000 Matching</span>11/7 - 11/2</div>
            </div>
        </div>
    )
}

export default MaticLarge