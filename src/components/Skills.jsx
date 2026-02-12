import './Skills.css';

const Skills = () => {
    const skillsData = [
        {
            category: 'Frontend',
            skills: [
                { name: 'HTML5 & CSS3', level: 95 },
                { name: 'JavaScript (ES6+)', level: 90 },
                { name: 'React.js', level: 85 },
                { name: 'Tailwind CSS', level: 88 }
            ]
        },
        {
            category: 'Backend',
            skills: [
                { name: 'Node.js', level: 82 },
                { name: 'Express.js', level: 80 },
                { name: 'MongoDB', level: 75 },
                { name: 'PostgreSQL', level: 78 }
            ]
        },
        {
            category: 'Herramientas',
            skills: [
                { name: 'Git & GitHub', level: 90 },
                { name: 'VS Code', level: 92 },
                { name: 'Figma', level: 70 },
                { name: 'Docker', level: 65 }
            ]
        }
    ];

    return (
        <section id="habilidades" className="skills">
            <div className="container">
                <h2 className="section-title">Habilidades Técnicas</h2>
                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="category-title">{category.category}</h3>
                            <div className="skill-items">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <span className="skill-name">{skill.name}</span>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
