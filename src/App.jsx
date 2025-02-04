import './App.css';

function App() {
    return (
        <div className="resume-container">
            <div className="resume">
                <header>
                    <h1>Tanishk Kaushik</h1>
                    <p>Pregrad Certified Full Stack Developer</p>
                    <p>📧 tanishkkaushik079@gmail.com | 📍 India</p>
                    <p>📞 (91) 7303954527 | 🌐 <a href="https://github.com/TanishkKaushik7">github.com/Tanishk</a></p>
                </header>

                    <div>
                        <section>
                            <h2>Summary</h2>
                            <p>Passionate Full-Stack Web Developer with a love for crafting dynamic web applications and a drive to tackle challenging, large-scale projects.</p>
                        </section>

                        <section>
                            <h2>Education</h2>
                            <p><strong>Gautam Buddha University</strong></p>
                            <p>Integrated B.Tech-M.Tech (5 Years) | Expected Graduation: 2028</p>
                        </section>

                        <section>
                            <h2>Skills Set</h2>
                            <ul>
                                <li>React</li>
                                <li>Typescript</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                                <li>Express</li>
                            </ul>
                        </section>
                    </div>

                    <div>
                        <section>
                            <h2>Projects</h2>
                            <p><strong>📌 Personal Portfolio Website</strong></p>
                            <p>Developed a personal portfolio website using  React to showcase projects and skills.</p>

                            <p><strong>📌 Fill-Pit Website</strong></p>
                            <p>Developed a website for reporting potholes, created during a hackathon at IIIT Delhi.</p>
                        
                            <p><strong>📌 KaizenYou</strong></p>
                            <p>Currently working on a project asked by one of my senior ,KaizenYou is an online training platform designed for school students in Commerce.<a href='https://tanishkkaushik7.github.io/my-react-app/'> Visit site</a></p>
                        </section>

                        <section>
                            <h2>Experience</h2>
                            <p><strong>💡 Hackathons & Competitions</strong></p>
                            <p>Participated in multiple hackathons with projects focusing on web development.</p>
                            <p><strong>💡Techno Cultural Club</strong></p>
                            <p>I have been a part of our university TCC club's Development department</p>
                        </section>

                        <section>
                            <h2>Certifications</h2>
                            <ul>
                                <li>Winner at GBU hackathon</li>
                                <li>Participation in IIIT Delhi Hackathon</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
       
    );
}

export default App;
