import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        console.log('Form submitted:', formData);
        alert('¡Mensaje enviado! (Configura el backend para enviar realmente)');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            value: 'tu@email.com',
            link: 'mailto:tu@email.com'
        },
        {
            icon: '📱',
            title: 'Teléfono',
            value: '+123 456 7890',
            link: 'tel:+1234567890'
        },
        {
            icon: '📍',
            title: 'Ubicación',
            value: 'Ciudad, País',
            link: null
        }
    ];

    const socialLinks = [
        { name: 'GitHub', url: '#' },
        { name: 'LinkedIn', url: '#' },
        { name: 'Twitter', url: '#' },
        { name: 'CodePen', url: '#' }
    ];

    return (
        <section id="contacto" className="contact">
            <div className="container">
                <h2 className="section-title">Contacto</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>¡Trabajemos Juntos!</h3>
                        <p className="contact-description">
                            Estoy disponible para proyectos freelance y oportunidades de colaboración.
                            Si tienes un proyecto en mente o simplemente quieres saludar, ¡no dudes en contactarme!
                        </p>
                        <div className="contact-details">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="contact-item">
                                    <div className="contact-icon">{info.icon}</div>
                                    <div>
                                        <h4>{info.title}</h4>
                                        {info.link ? (
                                            <a href={info.link}>{info.value}</a>
                                        ) : (
                                            <p>{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="social-link"
                                    aria-label={social.name}
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Asunto</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-full">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
