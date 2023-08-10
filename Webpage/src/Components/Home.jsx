function Home() {
    return (
        <section className="home-container">
            <p className="greeting">Hi!</p>
            <p className="welcome-message">
                I’m <span className="name-highlight">Matthias Kee</span>, a passionate and versatile full-stack developer focused on crafting elegant web applications and beautiful experiences.
            </p>
            <div className="contact-section">
                <span className="contact">Contact me: </span>
                <span>
                    <a href="mailto: matthias.kee@outlook.com" className="contact-link">matthias.kee@outlook.com</a>
                </span>
            </div>
        </section>
    )

}

export default Home