import { useEffect, useRef, useState } from 'react';
import './Skills.css';

const techs = [
    { icon: '⚛️', name: 'React.js', level: 'Avanzado' },
    { icon: '🟨', name: 'JavaScript', level: 'Avanzado' },
    { icon: '🔷', name: 'TypeScript', level: 'Intermedio' },
    { icon: '📦', name: 'Node.js', level: 'Avanzado' },
    { icon: '🎨', name: 'CSS / Tailwind', level: 'Avanzado' },
    { icon: '🗄️', name: 'PostgreSQL', level: 'Intermedio' },
    { icon: '🍃', name: 'MongoDB', level: 'Intermedio' },
    { icon: '🐳', name: 'Docker', level: 'Básico' },
    { icon: '☁️', name: 'AWS / Cloud', level: 'Básico' },
    { icon: '🔧', name: 'Git & GitHub', level: 'Avanzado' },
    { icon: '🖥️', name: 'Next.js', level: 'Intermedio' },
    { icon: '🎭', name: 'Figma', level: 'Intermedio' },
];

const proficiencies = [
    { name: 'HTML & CSS', pct: 95 },
    { name: 'JavaScript / ES6+', pct: 90 },
    { name: 'React.js', pct: 85 },
    { name: 'Node.js / Express', pct: 82 },
    { name: 'Bases de datos SQL', pct: 78 },
    { name: 'DevOps / Docker', pct: 65 },
];

const Skills = () => {
    const [animated, setAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="habilidades" className="skills" ref={ref}>
            <div className="container">
                <div className="skills-header reveal" style={{ opacity: 1, transform: 'none' }}>
                    <span className="section-label">Stack técnico</span>
                    <h2 className="section-title">Mis <span className="gradient-text">herramientas</span></h2>
                    <p>Tecnologías con las que trabajo día a día para construir productos robustos y escalables.</p>
                </div>

                <div className="tech-grid">
                    {techs.map((t, i) => (
                        <div key={i} className="tech-card">
                            <span className="tech-icon">{t.icon}</span>
                            <span className="tech-name">{t.name}</span>
                            <span className="tech-level">{t.level}</span>
                        </div>
                    ))}
                </div>

                <div className="skills-bars">
                    {proficiencies.map((s, i) => (
                        <div key={i} className="skill-bar-item">
                            <div className="skill-bar-header">
                                <span className="skill-bar-name">{s.name}</span>
                                <span className="skill-bar-pct">{s.pct}%</span>
                            </div>
                            <div className="skill-track">
                                <div
                                    className={`skill-fill ${animated ? 'animate' : ''}`}
                                    style={{ '--target-width': `${s.pct}%`, transitionDelay: `${i * 0.1}s` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
