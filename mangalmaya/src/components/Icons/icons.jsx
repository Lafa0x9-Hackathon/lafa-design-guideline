
import icon1 from './icons/bounties.png'
import icon2 from './icons/hackathon.png'
import icon3 from './icons/grants.png'
import icon4 from './icons/kernel.png'
import icon5 from './icons/quests.png'
import icon6 from './icons/kudos.png'
import icon7 from './icons/gem.png'
import icon8 from './icons/building.png'
import icon9 from './icons/Leaderboard.png'
import icon10 from './icons/Townsquare.png'
import icon11 from './icons/learn.png'
import icon12 from './icons/earn.png'
import icon13 from './icons/connect.png'
import icon14 from './icons/fund.png'
import icon15 from './icons/style=outline.png'
import icon16 from './icons/style=solid.png'
import icon17 from './icons/style=Default.png'
import icon18 from './icons/style=outline (1).png'
import './icons.css'

function Icons() {
    return (
        <div className='icon-container'>
            <div className='icon-bar'>
                <img src={icon1} alt="icon1" />
                <img src={icon2} alt="icon2" />
                <img src={icon3} alt="icon3" />
                <img src={icon4} alt="icon4" />
                <img src={icon5} alt="icon5" />
                <img src={icon6} alt="icon6" />
            </div>

            <div className='icons'>
                <img src={icon7} alt="icon1" />
                <img src={icon8} alt="icon1" />
                <img src={icon9} alt="icon1" />
                <img src={icon10} alt="icon1" />
                <img src={icon11} alt="icon1" />
                <img src={icon12} alt="icon1" />
                <img src={icon13} alt="icon1" />
                <img src={icon14} alt="icon1" />
            </div>

            <div className='github-icon'>
                <img src={icon15} alt="icon1" />
                <img src={icon16} alt="icon1" />
            </div>
            <div className='doscord-icon'>
                <img src={icon17} alt="icon1" />
                <img src={icon18} alt="icon1" />
            </div>
        </div>
    );
}

export default Icons;