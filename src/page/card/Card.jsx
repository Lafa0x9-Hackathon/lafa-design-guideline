import Grant from '../../components/card/grant/Grant'
import Hackathon from '../../components/card/hackathon/Hackathon'
import MatchingRound from '../../components/card/matchingRound/MatchingRound'
import './card.scss'
function Card() {
    return (
        <div className='card'>
            <Grant />
            <Hackathon />
            <MatchingRound />
        </div>
    )
}

export default Card