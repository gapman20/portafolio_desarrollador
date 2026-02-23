import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            tags: ['React', 'Node.js', 'MongoDB'],
            description: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.',
            features: [
                'Autenticación de usuarios',
                'Gestión de inventario',
                'Integración de pagos'
            ],
            demoLink: '#',
            codeLink: '#'
        },
        {
            title: 'Task Management App',
            tags: ['React', 'Firebase', 'Tailwind'],
            description: 'Aplicación de gestión de tareas con funcionalidad de arrastrar y soltar, colaboración en tiempo real y notificaciones.',
            features: [
                'Tableros Kanban',
                'Colaboración en tiempo real',
                'Notificaciones push'
            ],
            demoLink: '#',
            codeLink: '#'
        },
        {
            title: 'Weather Dashboard',
            tags: ['JavaScript', 'API', 'CSS'],
            description: 'Dashboard del clima con pronósticos de 7 días, mapas interactivos y visualización de datos meteorológicos.',
            features: [
                'Pronóstico extendido',
                'Geolocalización',
                'Gráficos interactivos'
            ],
            demoLink: '#',
            codeLink: '#'
        },
        {
            title: 'Portfolio CMS',
            tags: ['Next.js', 'Strapi', 'GraphQL'],
            description: 'Sistema de gestión de contenido para portafolios con editor visual y generación estática de páginas.',
            features: [
                'Editor visual',
                'SEO optimizado',
                'Generación estática'
            ],
            demoLink: '#',
            codeLink: '#'
        }
    ];

    return (
        <section id="proyectos" className="projects">
            <div className="container">
                <h2 className="section-title">Proyectos Destacados</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <article key={index} className="project-card">
                            <div className="project-header">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <p className="project-description">{project.description}</p>
                            <div className="project-features">
                                <ul>
                                    {project.features.map((feature, featureIndex) => (
                                        <li key={featureIndex}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="project-links">
                                <a href={project.demoLink} className="project-link">Ver Demo</a>
                                <a href={project.codeLink} className="project-link">Código</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
