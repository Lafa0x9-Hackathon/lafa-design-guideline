import { motion } from 'framer-motion';

function Content({ pop, name }) {
    const isVisible = pop.includes(name);
    const yPosition = isVisible ? 0 : -50;
    const opacityValue = isVisible ? 1 : 0;
    const zIndexValue = isVisible ? 1 : -1;

    return (
        <motion.div
            animate={{ y: yPosition, opacity: opacityValue, zIndex: zIndexValue }}
            transition={{ type: "spring", stiffness: 100, damping: 17 }}
            className={`content ${isVisible ? "relative" : "absolute"}`}
        >
            <span>Bug bouties for all skill levels</span>
            <span>Open security contests</span>
            <span>New feature builds</span>
            <span>UX and UI design</span>
            <span>Content creation</span>
        </motion.div>
    );
}

export default Content;
