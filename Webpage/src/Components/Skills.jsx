import check from "../Images/check.png";
import resumePDF from "../Documents/cs-resume.pdf";

function Skills() {
    return (
        <section className="skills-container">
            <div className="header-blue" id="skills">SKILLS</div>
            <div className="skills-content">
                <div className="skill-list" id="child">
                    <div className="skill-header">LANGUAGES</div>
                    <ul className="skill-item">
                        <li>
                            <img src={check} alt="Green checkmark" className="green-check"></img>
                            Java
                        </li>
                        <li>
                            <img src={check} alt="Green checkmark" className="green-check"></img>
                            JavaScript
                        </li>
                        <li>
                            <img src={check} alt="Green checkmark" className="green-check"></img>
                            Python
                        </li>
                        <li>
                            <img src={check} alt="Green checkmark" className="green-check"></img>
                            C
                        </li>
                        <li>
                            <img src={check} alt="Green checkmark" className="green-check"></img>
                            C++
                        </li>
                        <li>
                            <img src={check} alt="Green checkmark" className="green-check"></img>
                            HTML
                        </li>
                        <li>
                            <img src={check} alt="Green checkmark" className="green-check"></img>
                            CSS
                        </li>
                        <li>
                            <img src={check} alt="Green checkmark" className="green-check"></img>
                            SQL
                        </li>
                    </ul>
                </div>
                <div className="skill-list" id="child">
                    <div className="skill-header">FRAMEWORKS</div>
                    <ul className="skill-item">
                        <li>
                            <img src={check} alt="Green checkmark" className="green-check"></img>
                            React
                        </li>
                        <li>
                            <img src={check} alt="Green checkmark" className="green-check"></img>
                            Node
                        </li>
                        <li>
                            <img src={check} alt="Green checkmark" className="green-check"></img>
                            Flask
                        </li>
                    </ul>  
                </div>
                <div className="skill-list" id="child">
                    <div className="skill-header">TOOLS</div>
                    <ul className="skill-item">
                        <li>
                            <img src={check} alt="Green checkmark" className="green-check"></img>
                            Git & GitHub
                        </li>
                        <li>
                            <img src={check} alt="Green checkmark" className="green-check"></img>
                            Bash
                        </li>
                        <li>
                            <img src={check} alt="Green checkmark" className="green-check"></img>
                            Chrome DevTools
                        </li>   
                    </ul>
                </div>
                <a href={resumePDF} target="_blank" rel="noreferrer" className="resume">View Full Résumé</a>
            </div>
    
        </section>
    )
}

export default Skills