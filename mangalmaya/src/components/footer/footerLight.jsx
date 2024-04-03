import './footer.css'
import logo from '../DesktopNav/icons/Gitcoin-brand.png'
import icon_bar from './image 87.png'
import Link_icon from './Vector.png'

function FooterFunctionLight() {
    return (
        <div className='footer-container'>
            <div className="left-footer-section">
                <img src={logo} alt="logo" className='logo'/>
                <p className="Right-footer-content">Gitcoin is a platform for you to get paid for working on open source software in Python, Rust, Ruby, JavaScript, Solidity, HTML, CSS, Design, and more.</p>
            </div>
            <div className="right-footer-section">
                <div className='icons'>
                    <img src={icon_bar} alt="iconbar" />
                </div>
                <div className="lists">
                    <div className="list-container">
                        <div className="list-head">Products</div>
                        <div className="list-content">Site Status <img src={Link_icon} alt="Link_icon" /></div>
                        <div className="list-content">Releases <img src={Link_icon} alt="Link_icon" /></div>
                        <div className="list-content">Issue Explorer</div>
                        <div className="list-content">Kudos</div>
                        <div className="list-content">Grants</div>
                        <div className="list-content">Quests</div>
                        <div className="list-content">Avatar builder</div>
                    </div>
                    <div className="list-container">
                        <div className="list-head">Organization</div>
                        <div className="list-content">About</div>
                        <div className="list-content">Mission</div>
                        <div className="list-content">Results</div>
                        <div className="list-content">Jobs</div>
                        <div className="list-content">Blogs</div>
                    </div>
                    <div className="list-container">
                        <div className="list-head">Community</div>
                        <div className="list-content">Gov.Gitcoin.co</div>
                        <div className="list-content">Code of Conduct</div>
                        <div className="list-content">Request Money</div>
                        <div className="list-content">Wiki</div>
                        <div className="list-content">Help</div>
                        <div className="list-content">Store</div>
                    </div>
                    <div className="list-container">
                        <div className="list-head">Legal</div>
                        <div className="list-content">Terms</div>
                        <div className="list-content">Privacy</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterFunctionLight;