import { useState } from 'react';
import './grant.css'


function Grant() {
    const [title, setTitle] = useState('')
    const [Description, setDescription] = useState('')
    const [webite, setWebsite] = useState('')
    const [ProjectTwitter, setProjectTwitter] = useState('')
    const [Twitter, setTwitter] = useState('')
    const [Github, setGithub] = useState('')
    const [Members, setMembers] = useState('')
    const [Region, setRegion] = useState('')

    return (
        <div className='Grant-container'>
            <p id='title'>Edit Grant</p>
            <form action="" className='Form'>
                <label >Title</label>
                <input className='title' placeholder='Input Value' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Discription</label>
                <textarea className='description' placeholder='Textarea' type="" value={Description} onChange={(e) => setDescription(e.target.value)} />
                <label>Project website</label>
                <input className='title' placeholder='Input Value' type="text" value={webite} onChange={(e) => setWebsite(e.target.value)} />
                <label>Project Twitter Handle</label>
                <input className='title' placeholder='Input Value' type="text" value={ProjectTwitter} onChange={(e) => setProjectTwitter(e.target.value)} />
                <label>Your Twitter Handle</label>
                <input className='title' placeholder='Input Value' type="text" value={Twitter} onChange={(e) => setTwitter(e.target.value)} />
                <label>Github URL</label>
                <input className='title' placeholder='Input Value' type="text" value={Github} onChange={(e) => setGithub(e.target.value)} />
                <label>Team Members</label>
                <input className='title' placeholder='Input Value' type="text" value={Members} onChange={(e) => setMembers(e.target.value)} />
                <label>Region</label>
                <input className='title' placeholder='Input Value' type="text" value={Region} onChange={(e) => setRegion(e.target.value)} />     
            </form>

            <div className='Form-Buttons'>
                    <button type="button" id='Cancel-btn'>Cancel</button>
                    <button type="button" id='Save-btn'>Save</button>
            </div>

            <div className='Warning-container'>
                <p id='cancel-grant-head'>Cancel Grant</p>
                <p id='Cancel-grant-content'>Once the grant is cancelled, it will no longer receive contributions or participate in QF matching. If you need help instead, please create an issue on Github and don’t forget to include your username and grant link. </p>
                <button className='btn'>Button Text</button>
            </div>

        </div>
    );
}

export default Grant;