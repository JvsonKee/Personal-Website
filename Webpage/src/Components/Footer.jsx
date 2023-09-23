import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <section className="footer">
            <div className="footer-name">Matthias Kee</div>
            <div className="footer-links">
                <a href="mailto: matthias.kee@outlook.com" className="footer-email"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="https://github.com/JvsonKee" target="_blank" rel="noreferrer" className="footer-github"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/matthias-kee-90548a286/" target="_blank" rel="noreferrer" className="footer-linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
        </section>
    )
}

export default Footer