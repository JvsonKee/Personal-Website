function Home() {
    return (
        <div className="home-container">
            <p className="greeting">Hi!</p>
            <p className="welcome-message">
                I’m <span className="name-highlight">Matthias Kee</span>, a passionate and versatile full-stack developer focused on crafting elegant web applications and beautiful experiences.
            </p>
            <p className="contact">Contact me: {' '}<a href="mailto: matthias.kee@outlook.com" className="contact-link">matthias.kee@outlook.com</a></p>
        </div>
    )

}

export default Home