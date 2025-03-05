import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Agrega la URL de tu QR Scanner desplegado en AWS Amplify
    const QR_SCANNER_URL = process.env.REACT_APP_QR_SCANNER_URL || 'https://main.d8eci5asqo38h.amplifyapp.com/';
    const MAIL_SENDER_URL = process.env.REACT_APP_MAIL_SENDER_URL || 'https://main.d13c67jud9spm1.amplifyapp.com/';


    const projects = [
        {
            title: "QR Scanner",
            description: "Escaner de códigos QR rápido y eficiente",
            image: "/qr-code-icon.png",
            link: QR_SCANNER_URL,
            imageSize: { width: 437, height: 192 }
        },
        {
            title: "Mail Sender",
            description: "Administrador de envio de correos",
            image: "/mail-sender.png",
            link: MAIL_SENDER_URL,
            imageSize: { width: 437, height: 192 }
        },
        { title: "Proyecto 3", description: "Descripción del proyecto 3", image: "/waiting.png" },
        { title: "Proyecto 4", description: "Descripción del proyecto 4", image: "/photo.jpg" }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const openQRScanner = () => {
        window.open(QR_SCANNER_URL, '_blank');
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Menú lateral */}
            <div className="fixed right-0 top-0 z-50">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="m-4 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>

                <nav
                    className={`fixed right-0 top-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col pt-16 p-4 space-y-4">
                        <button
                            onClick={() => scrollToSection('quienes-somos')}
                            className="text-left p-2 hover:bg-gray-100 rounded"
                        >
                            Quienes Somos
                        </button>
                        <button
                            onClick={() => scrollToSection('valores')}
                            className="text-left p-2 hover:bg-gray-100 rounded"
                        >
                            Valores
                        </button>
                        <button
                            onClick={() => scrollToSection('proyectos')}
                            className="text-left p-2 hover:bg-gray-100 rounded"
                        >
                            Nuestros Proyectos
                        </button>
                        <button
                            onClick={openQRScanner}
                            className="text-left p-2 bg-blue-500 text-white hover:bg-blue-600 rounded"
                        >
                            QR Scanner
                        </button>
                    </div>
                </nav>
            </div>

            {/* Hero Section */}
            <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-white mb-4 animate-bounce">
                        JPDevs
                    </h1>
                    <p className="text-xl text-white opacity-90">
                        Desarrollando el futuro digital
                    </p>
                </div>
            </div>

            {/* Quienes Somos */}
            <section id="quienes-somos" className="py-20 px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-center">Quienes Somos</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        JPDevs es una empresa líder en desarrollo de software, especializada en crear
                        soluciones tecnológicas innovadoras y personalizadas. Nuestro equipo de expertos
                        combina años de experiencia con las últimas tecnologías para entregar productos
                        que superan las expectativas de nuestros clientes.
                    </p>
                </div>
            </section>

            {/* Valores */}
            <section id="valores" className="py-20 px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-center">Valores</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Innovación</h3>
                            <p className="text-gray-600">
                                Buscamos constantemente nuevas formas de resolver desafíos y mejorar procesos
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Calidad</h3>
                            <p className="text-gray-600">
                                Comprometidos con la excelencia en cada línea de código que escribimos
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Colaboración</h3>
                            <p className="text-gray-600">
                                Trabajamos en equipo para alcanzar los mejores resultados
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proyectos */}
            <section id="proyectos" className="py-20 px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">Nuestros Proyectos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                                onClick={() => project.link && window.open(project.link, '_blank')}
                            >
                                <div className="relative" style={{
                                    height: project.imageSize ? `${project.imageSize.height}px` : '348px'
                                }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-contain"
                                        style={{
                                            maxWidth: project.imageSize ? `${project.imageSize.width}px` : '100%',
                                            margin: '0 auto'
                                        }}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-600">{project.description}</p>
                                    {project.link && (
                                        <button
                                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                                            Abrir Proyecto
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;