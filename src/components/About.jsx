import './About.css';

const About = () => {
    const highlights = [
        {
            icon: '💻',
            title: 'Desarrollo Full Stack',
            description: 'Experiencia en frontend y backend'
        },
        {
            icon: '🎨',
            title: 'UI/UX Consciente',
            description: 'Diseños intuitivos y atractivos'
        },
        {
            icon: '⚡',
            title: 'Optimización',
            description: 'Rendimiento y velocidad'
        }
    ];

    return (
        <section id="sobre-mi" className="about">
            <div className="container">
                <h2 className="section-title">Sobre Mí</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            Soy un desarrollador web apasionado por crear soluciones digitales que marquen la diferencia.
                        </p>
                        <p>
                            Con experiencia en tecnologías modernas como React, Node.js, y bases de datos SQL/NoSQL,
                            me especializo en construir aplicaciones web escalables y de alto rendimiento.
                        </p>
                        <p>
                            Mi enfoque se centra en escribir código limpio, mantenible y en seguir las mejores prácticas
                            de la industria. Siempre estoy aprendiendo nuevas tecnologías y mejorando mis habilidades.
                        </p>
                        <div className="about-highlights">
                            {highlights.map((highlight, index) => (
                                <div key={index} className="highlight-item">
                                    <div className="highlight-icon">{highlight.icon}</div>
                                    <h3>{highlight.title}</h3>
                                    <p>{highlight.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
