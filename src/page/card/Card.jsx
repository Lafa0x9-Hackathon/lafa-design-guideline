import Grant from '../../components/card/grant/Grant'
import Hackathon from '../../components/card/hackathon/Hackathon'
import './card.scss'
function Card() {
    return (
        <div className='card'>
            <Grant />
            <Hackathon />

        </div>
    )
}

export default Card