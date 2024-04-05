function Heading({ setPop, headingText, name, pop }) {

    const isTrue = pop.includes(name);

    return (
        <button className='heading' onClick={() => isTrue ? setPop(prev => prev.filter(item => item !== name)) : setPop(prev => [...prev, name])} >
            <div className={isTrue ? `active-indicator` : "absolute"}></div>
            <div className={isTrue ? 'font-bold' : ''}>{headingText}</div>
            <div className='icon' >{isTrue ? "-" : "+"}</div>
        </button >
    )
}

export default Heading