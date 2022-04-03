import t from './t.jpg';
import f from './f.jpg';
import i from './i.jpg';
import git from './git.jpg';

function Footer(){
    return(
        <div className = "footer">
            < img src = {t} alt = "Twitter" className = 'twitter' />
            < img src = {f} alt = "Facebook" className = 'faceBook' /> 
            < img src = {i} alt = "Instagram" className = 'insta' /> 
            < img src = {git} alt = "Git" className = 'git' />
        </div>
    )
}
export default Footer;