import React from "react"
import {SocialMediaIconsReact} from 'social-media-icons-react';


export const Footer = () => {
    return(
        <div className="footer--socials">
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" className="twitter-icon" icon="twitter" 
            iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" 
            url="https://some-website.com/my-social-media-url" size="30" />    
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" className="facebook-icon" icon="facebook" 
            iconColor="rgba(255,255,255,1)" backgroundColor="rgb(6,118,232)" 
            url="https://some-website.com/my-social-media-url" size="30" />  
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" className="instagram-icon" icon="instagram" 
            iconColor="rgba(255,255,255,1)" backgroundColor="rgb(229,96,66)" 
            url="https://some-website.com/my-social-media-url" size="30" />
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" className="linkedin-icon" icon="linkedin" 
            iconColor="rgba(255,255,255,1)" backgroundColor="rgb(0,126,187)" 
            url="https://some-website.com/my-social-media-url" size="30" />
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" className="github-icon" icon="github" 
            iconColor="rgb(26,30,34)" backgroundColor="rgba(255,255,255,1)" 
            url="https://some-website.com/my-social-media-url" size="30" />
        </div>
    )
}