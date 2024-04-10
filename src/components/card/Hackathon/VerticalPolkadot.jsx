import Ellipse4 from '../../assets/image/Ellipse 4.png'
import VerticalFigure from '../../assets/image/VerticalFigure.png'

function VerticalPolkadot() {
    return (
        <div className="polkadot vertical-polkadot ">
            <div className="img-container" >
                <img src={VerticalFigure} />
            </div>
            <div className='content' >
                <div className='heading' >
                    <h6>Hello World! by Polkadot</h6>
                    from <span>10/15/2020</span> to <span>11/12/2020</span>
                </div>
                <p>
                    Gitcoin has integrated Polkadot nad Kusama tokens (DOT and KSM) into its tech stack, making us one of the first full integrations outside of the Ethereum...
                </p>
                <div className='div-sponser' >
                    Sponsored by
                    <img src={Ellipse4} />
                    <img src={Ellipse4} />
                    <img src={Ellipse4} />
                    <img src={Ellipse4} />
                </div>
                <div className='div-buttons'>
                    <button className='btn btn-light'>Join</button>
                    <button className='btn btn-light'>Prizes</button>
                    <button className='btn btn-light'>Projects</button>
                </div>
            </div>
        </div>
    )
}

export default VerticalPolkadot