import { motion } from 'framer-motion'
function AccordionContent({ setPop, headingText, name, pop }) {
    const isTrue = pop.includes(name);
    const yPosition = isTrue ? 0 : -50;
    const opacityValue = isTrue ? 1 : 0;
    const zIndexValue = isTrue ? 1 : -1;

    return (
        <div>
            <button className='heading' onClick={() => isTrue ? setPop(prev => prev.filter(item => item !== name)) : setPop(prev => [...prev, name])} >
                <div className={isTrue ? `active-indicator` : "absolute"}></div>
                <div className={isTrue ? 'font-bold' : ''}>{headingText}</div>
                <div className='icon' >{isTrue ? "-" : "+"}</div>
            </button >
            <motion.div
                animate={{ y: yPosition, opacity: opacityValue, zIndex: zIndexValue }}
                transition={{ type: "spring", stiffness: 100, damping: 17 }}
                className={`content ${isTrue ? "relative" : "absolute"}`}
            >
                <span>Bug bouties for all skill levels</span>
                <span>Open security contests</span>
                <span>New feature builds</span>
                <span>UX and UI design</span>
                <span>Content creation</span>
            </motion.div>
        </div>
    )
}

export default AccordionContent