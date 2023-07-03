import React from 'react';
import './Profile.css';

function ProfileMarieCurie() {
    return (
        <div className="profile">
            <img src="https://www.britishpoles.uk/wp-content/uploads/2019/07/Sk%C5%82odowska-Curie.jpg" alt="Marie Curie"/>
        </div>
    );
}

function ProfileAlbertEinstein() {
    return (
        <div className="profile">
            <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-3091504.jpg" alt="Albert Einstein"/>
        </div>
    );
}

function ProfileNikolaTesla() {
    return (
        <div className="profile">
            <img
                src="https://images.theconversation.com/files/200600/original/file-20180102-26163-d9wlms.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
                alt="Nikola Tesla"/>
        </div>
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <div className="gallery">
                <ProfileMarieCurie/>
                <ProfileAlbertEinstein/>
                <ProfileNikolaTesla/>
            </div>
        </section>
    );
}