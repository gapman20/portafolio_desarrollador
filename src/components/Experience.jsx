import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            date: '2023 - Presente',
            title: 'Desarrollador Full Stack Senior',
            company: 'Tech Solutions Inc.',
            description: 'Liderando el desarrollo de aplicaciones web empresariales utilizando React, Node.js y AWS. Implementación de arquitecturas escalables y mentoría a desarrolladores junior.',
            achievements: [
                'Reducción del 40% en tiempos de carga',
                'Implementación de CI/CD pipeline',
                'Mentoría a 5 desarrolladores junior'
            ]
        },
        {
            date: '2021 - 2023',
            title: 'Desarrollador Frontend',
            company: 'Digital Agency Pro',
            description: 'Desarrollo de interfaces de usuario responsivas y accesibles para clientes de diversos sectores. Colaboración estrecha con diseñadores UX/UI.',
            achievements: [
                'Entrega de 15+ proyectos exitosos',
                'Mejora de accesibilidad WCAG 2.1 AA',
                'Optimización de rendimiento web'
            ]
        },
        {
            date: '2020 - 2021',
            title: 'Desarrollador Web Junior',
            company: 'StartUp Innovators',
            description: 'Desarrollo y mantenimiento de sitios web corporativos. Aprendizaje de tecnologías modernas y mejores prácticas de desarrollo.',
            achievements: [
                'Desarrollo de 10+ sitios web',
                'Integración de APIs REST',
                'Mantenimiento de código legacy'
            ]
        }
    ];

    return (
        <section id="experiencia" className="experience">
            <div className="container">
                <h2 className="section-title">Experiencia Profesional</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">{exp.date}</span>
                                <h3 className="timeline-title">{exp.title}</h3>
                                <p className="timeline-company">{exp.company}</p>
                                <p className="timeline-description">{exp.description}</p>
                                <ul className="timeline-achievements">
                                    {exp.achievements.map((achievement, achIndex) => (
                                        <li key={achIndex}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
