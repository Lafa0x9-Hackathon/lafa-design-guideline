import { useState } from 'react'
import './accordion.scss'
// import illustration from '../../assets/image/illustration-a.png'Z
import illustration from '../../components/assets/image/illustration-a.png'
import AccordionContent from '../../components/accordion/AccordionContent';
function Accordion() {

    const [pop, setPop] = useState([]);

    return (
        <div className='accordion flex justify-between'>
            <div className='w-1/2 flex justify-center items-center ' >
                <img src={illustration} alt='illustration' />
            </div>
            <div className='w-1/2 flex flex-col ps-4 '>
                <AccordionContent setPop={setPop} headingText="Earn in Bounties" name="bounty" pop={pop} />
                <AccordionContent setPop={setPop} headingText="Earn through Hackathons" name="hackathon" pop={pop} />
                <AccordionContent setPop={setPop} headingText="Earn through grant funding" name="grant" pop={pop} />
            </div>
        </div >
    )
}

export default Accordion