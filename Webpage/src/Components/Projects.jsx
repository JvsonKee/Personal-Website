import pic from "../Images/killua.jpeg"



function Projects() {
    return (
        <section className="projects-container">
            <div className="header-blue">PROJECTS</div>
            <div className="projects-content">
                <div className="project">
                    <img src={pic} className="project-image"></img>
                    <div className="project-info">
                        <div className="project-title">Title</div>
                        <div className="project-description">
                            This is a placeholder project with information about nothing.
                        </div>
                        <div className="project-languages">
                            <div className="language">JavaScript</div>
                            <div className="language">React</div>
                            <div className="language">Python</div>
                            <div className="language">Flask</div>
                            <div className="language">Spotify API</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Projects