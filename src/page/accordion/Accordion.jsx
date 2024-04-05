import { useState } from 'react'
import './accordion.scss'
import illustration from '../../assets/image/illustration-a.png'
import Content from '../../components/accordion/Content';
import Heading from '../../components/accordion/Heading';

function Accordion() {

    const [pop, setPop] = useState([]);

    return (
        <div className='accordion flex justify-between'>
            <div className='w-1/2 flex justify-center items-center ' >
                <img src={illustration} alt='illustration' />
            </div>
            <div className='w-1/2 flex flex-col ps-4 '>
                <div >
                    <Heading setPop={setPop} headingText="Earn in Bounties" name="bounty" pop={pop} />
                    <Content pop={pop} name="bounty" />
                </div>
                <div >
                    <Heading setPop={setPop} headingText="Earn through Hackathons" name="hackathon" pop={pop} />
                    <Content pop={pop} name="hackathon" />
                </div>
                <div >
                    <Heading setPop={setPop} headingText="Earn through grant funding" name="grant" pop={pop} />
                    <Content pop={pop} name="grant" />
                </div>
            </div>
        </div >
    )
}

export default Accordion