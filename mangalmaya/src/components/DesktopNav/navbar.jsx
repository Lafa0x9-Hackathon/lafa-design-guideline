import './navbar.css'
import left_icon from './icons/Gitcoin-brand.png';
import drop_icon from './icons/fa-chevron-down.png'
import bell_icon from './icons/far.fa-bell.png'
import wallet_icon from './icons/wallet.png'
import earn_icon from './icons/earn.png'
import icon_learn from './icons/icon_learn.png'
import connect_icon from './icons/connect.png'
import union_icon from './icons/Union.png'
import Bounty from '../Icons/icons/bounties.png'
import Hackathon from '../Icons/icons/hackathon.png'
import Grants from '../Icons/icons/grants.png'
import Quests from '../Icons/icons/quests.png'
import Kudos from '../Icons/icons/kudos.png'
import Kernel from '../Icons/icons/kernel.png'
import Leaderboard from '../Icons/icons/Leaderboard.png'
import Townsquare from '../Icons/icons/Townsquare.png'
import git from './icons/Vector.png'
import Discord from '../Icons/icons/style=outline (1).png'
import Gov from './icons/Frame 15640.png'
import Info from '../Alerts/icons/icon-info.png'
import ProfileIcon from './icons/Frame 15579.png'
import { useState } from 'react';

function Navbar() {
    const [count] = useState('3');
    const [PossibleDrop, setPossibleDrop] = useState(false)
    const [ProductsDrop, setProductsDrop] = useState(false)
    const [CommunityDrop, setCommunityDrop] = useState(false)
    const [CompanyDrop, setCompanyDrop] = useState(false)
    const [ProfileDrop, setProfileDrop] = useState(false)
    const [SignedIn, setSignedIn] = useState(false)


    return (
        <div className='Nav-container'>
            <div className='Logo'>
                <img className='Logo' src={left_icon} alt="icon" />
            </div>
            <div className='Drop-menu-container'>
                <div className='menu' onClick={()=>{setPossibleDrop((prev) => !prev)}}>
                    <p>What’s Possible</p>
                    <img src={drop_icon} alt="icon" />
                </div>

                {PossibleDrop && (
                    <div className="first-drop">
                    <div className='drop_item'>
                        <img id='drop_icons' src={earn_icon} alt="earn" />
                        <div id='drop-content'>
                            <p className='p-title'>Earn</p>
                            <p className='p-content'>Earn crypto doing development</p>
                        </div>
                    </div>
                    <div className='drop_item'>
                        <img id='drop_icons' src={icon_learn} alt="earn" />
                        <div id='drop-content'>
                            <p className='p-title'>Learn</p>
                            <p className='p-content'>Build blockchain knowledge as you go</p>
                        </div>
                    </div>
                    <div className='drop_item'>
                        <img id='drop_icons' src={connect_icon} alt="earn" />
                        <div id='drop-content'>
                            <p className='p-title'>Learn</p>
                            <p className='p-content'>Meet top developers in Web3</p>
                        </div>
                    </div>
                    <div className='drop_item'>
                        <img id='drop_icons' src={union_icon} alt="earn" />
                        <div id='drop-content'>
                            <p className='p-title'>Learn</p>
                            <p className='p-content'>Support meaningful open source projects</p>
                        </div>
                    </div>
                </div>
                )}
                              
                <div className='menu' onClick={()=>{setProductsDrop((prev) => !prev)}}>
                    <p>Products</p>
                    <img src={drop_icon} alt="icon" />
                </div>

                {
                    ProductsDrop && (
                          <div className='second-drop'>
                    <div className='left-section'>
                        <div className='drop_item'>
                            <img id='drop_icons' src={Bounty} alt="earn" />
                            <div id='drop-content'>
                                <p className='p-title'>Bounties</p>
                                <p className='p-content'>Earn crypto from development work</p>
                            </div>
                        </div>
                        <div className='drop_item'>
                            <img id='drop_icons' src={Hackathon} alt="earn" />
                            <div id='drop-content'>
                                <p className='p-title'>Hackathons</p>
                                <p className='p-content'>Build and earn in competitions </p>
                            </div>
                        </div>
                        <div className='drop_item'>
                            <img id='drop_icons' src={Grants} alt="earn" />
                            <div id='drop-content'>
                                <p className='p-title'>Grants</p>
                                <p className='p-content'>Support for open source projects </p>
                            </div>
                        </div>
                        <div className='drop_item'>
                            <img id='drop_icons' src={Quests} alt="earn" />
                            <div id='drop-content'>
                                <p className='p-title'>Quests</p>
                                <p className='p-content'>Fun mission style learning </p>
                            </div>
                        </div>
                        <div className='drop_item'>
                            <img id='drop_icons' src={Kudos} alt="earn" />
                            <div id='drop-content'>
                                <p className='p-title'>Kudos</p>
                                <p className='p-content'>Awards in collectible digital assets</p>
                            </div>
                        </div>
                        <div className='drop_item'>
                            <img id='drop_icons' src={Kernel} alt="earn" />
                            <div id='drop-content'>
                                <p className='p-title'>Kernel</p>
                                <p className='p-content'>Collaborate with blockchain’s rising stars</p>
                            </div>
                        </div>
                    </div>
                    <div className='right-section'>
                        <p id='right-sec-head'>Hackathons</p>
                        <p id='right-content'>Explore Hackathons</p>
                        <p id='right-content'>Get Involved</p>
                    </div>
                </div>
                )
                }

              
                <div className='menu' onClick={()=>{setCommunityDrop((prev) => !prev)}}>
                    <p>Community</p>
                    <img src={drop_icon} alt="icon" />
                </div>
                {
                    CommunityDrop && (
                                        <div className='third-drop'>
                    <div className='drop_item'>
                        <img id='drop_icons' src={Leaderboard} alt="earn" />
                        <div id='drop-content'>
                            <p className='p-title'>Leaderboard</p>
                            <p>See top developers on Gitcoin</p>
                        </div>
                    </div>
                    <div className='drop_item'>
                        <img id='drop_icons' src={Townsquare} alt="earn" />
                        <div id='drop-content'>
                            <p className='p-title'>Townsquare</p>
                            <p>See what’s happening on Gitcoin</p>
                        </div>
                    </div>
                    <div className='drop_item'>
                        <img id='drop_icons' src={Discord} alt="earn" />
                        <div id='drop-content'>
                            <p className='p-title'>Join Discord</p>
                            <p>Ask questions, join live conversations </p>
                        </div>
                    </div>
                    <div className='drop_item'>
                        <img id='drop_icons' src={Gov} alt="earn" />
                        <div id='drop-content'>
                            <p className='p-title'>Gov.Gitcoin.co</p>
                            <p>Help decide the future of Gitcoin</p>
                        </div>
                    </div>
                </div>
                )
                }
                <div className='menu' onClick={()=>{setCompanyDrop((prev) => !prev)}}>
                    <p>Company</p>
                <img src={drop_icon} alt="icon" />
                </div>               
                {
                    CompanyDrop && (                <div className='fourth-drop'>
                    <div className='upper-section'>
                        <div className='button'>
                            <img src={Info} alt="" />
                            <div>About</div>
                        </div>
                        <div className='button'>
                            <img src={Info} alt="" />
                            <div>Mission</div>
                        </div>
                        <div className='button'>
                            <img src={Info} alt="" />
                            <div>Results</div>
                        </div>
                        <div className='button'>
                            <img src={Info} alt="" />
                            <div>About</div>
                        </div>
                        <div className='button'>
                            <img src={Info} alt="" />
                            <div>Blog</div>
                        </div>
                        <div className='button'>
                            <img src={Info} alt="" />
                            <div>Jobs</div>
                        </div>
                        <div className='button'>
                            <img src={Info} alt="" />
                            <div>Wiki</div>
                        </div>
                    </div>
                    <div className='lower-section'>
                        <div className='lower-sec-card'>
                            <div className='blank-sec'></div>
                            <div className='lower-sec-content'>
                                <p id="lower1">Gitcoin Grows Treasury to Accelerate Open Source</p>
                                <p id="lower2">Gitcoin began in 2017 as a passion project for Kevin Owocki with the goal of empowering developers to earn while building open source, digital public goods projects…</p>
                            </div>
                        </div>
                        <div className='lower-sec-card'>
                            <div className='blank-sec'></div>
                            <div className='lower-sec-content'>
                                <p id="lower1">Built to Explore: The Skynet Spring 2021 Hackathon!</p>
                                <p id="lower2">It is our great pleasure to announce Skynet’s Spring 2021 hackathon, featuring more than $25,000 in prizes for participants…</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    )
                }
            </div>
            <div className='right-nav-items'>

                {
                    SignedIn ? (
                                        <div className='profile-container'>
                    <div className='bell-notification' data-count={count}>
                    <img id='bell' src={bell_icon} alt="icon" />
                </div>
                <img id='wallet' src={wallet_icon} alt="icon" />
                <div className='profile-section'>
                    <div className='profile' onClick={()=>{setProfileDrop((prev) => !prev)}}>
                        <div className='ellipse'></div>
                        <p>PixelantDesign</p>
                        <img id='profile-dropdown' src={drop_icon} alt="icon" />
                    </div>
                    {
                        ProfileDrop && (
                                                <div className='fifth-drop'>
                        <div className='left-side'>
                            <p id='right-sec-head'>My Account</p>
                            <p id='right-content'>Dashboard</p>
                            <p id='right-content'>Profile</p>
                            <p id='right-content'>Settings</p>
                            <p id='right-content'>Send Tip</p>
                            <hr />
                            <p id='right-content' className='logout' onClick={() => { setSignedIn((prev) => !prev) }}>Logout</p>
                        </div>
                        <div className='right-side'>
                            <div className='drop_item'>
                                <img id='drop_icons' src={Bounty} alt="earn" />
                                <div id='drop-content'>
                                    <p className='p-title-profile'>My Bounties</p>
                                </div>
                            </div>
                            <div className='drop_item'>
                                <img id='drop_icons' src={Hackathon} alt="earn" />
                                <div id='drop_content'>
                                    <p className='p-title-profile'>My Hackathon</p>
                                </div>
                            </div>
                            <div className='drop_item'>
                                <img id='drop_icons' src={Grants} alt="earn" />
                                <div id='drop_content'>
                                    <p className='p-title-profile'>My Grants</p>
                                </div>
                            </div>
                            <div className='drop_item'>
                                <img id='drop_icons' src={Kudos} alt="earn" />
                                <div id='drop_content'>
                                    <p className='p-title-profile'>My Kudos</p>
                                </div>
                            </div>
                            <div className='drop_item'>
                                <img id='drop_icons' src={Quests} alt="earn" />
                                <div id='drop_content'>
                                    <p className='p-title-profile'>My Quests</p>
                                </div>
                            </div>
                            <div className='drop_item'>
                                <img id='drop_icons' src={ProfileIcon} alt="earn" />
                                <div id='drop_content'>
                                    <p className='p-title-profile'>My Profile</p>
                                </div>
                            </div>
                        </div>
                    </div>
                                    )
                        
                    }
                </div>
                </div>
                    )
                        :(
                            <div className='signin-button-container' >
                                <div className='signin-button' onClick={()=>{setSignedIn((prev) => !prev)}}>
                                    <img src={git} alt="git" />
                                    <p>Sign In</p>   
                                </div>
                            </div>
                        )
                }
                
            </div>           
        </div>
    );
}

export default Navbar;