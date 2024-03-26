import Grant from '../../components/card/Grant/Grant'
import Hackathon from '../../components/card/Hackathon/Hackathon'
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