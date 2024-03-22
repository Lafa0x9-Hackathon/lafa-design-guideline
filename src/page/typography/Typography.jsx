import Example from '../../components/typography/Example'
import ExampleDark from '../../components/typography/ExampleDark'
import LibreFranklin from '../../components/typography/LibreFranklin'
import LibreFranklinDark from '../../components/typography/LibreFranklinDark'
import MiriamLibre from '../../components/typography/MiriamLibre'
import MiriamLibreDark from '../../components/typography/MiriamLibreDark'
import './typography.scss'
function Typography() {
    return (
        <div className="typography" >
            <LibreFranklin />
            <LibreFranklinDark />
            <MiriamLibre />
            <MiriamLibreDark />
            <Example />
            <ExampleDark />
        </div>
    )
}

export default Typography 