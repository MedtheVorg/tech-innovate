import Container from '@/components/Container';
import ServiceCard from '@/components/ServiceCard';
import { Separator } from '@/components/ui/separator';
import {
    BrainCircuit,
    Cloudy,
    Database,
    LayoutTemplate,
    ShieldCheck,
    Smartphone,
} from 'lucide-react';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Services | Tech Innovate',
};
export default function ServicesPage() {
    // fetch services
    const servicesArray = [
        {
            id: 1,
            title: 'Web Development',
            description:
                'Crafting responsive and scalable web solutions tailored to meet your business needs.',
            subServices: [
                'E-commerce Solutions',
                'Content Management Systems (CMS)',
                'Custom Web Applications',
            ],
            logo: <LayoutTemplate size={70} />, // Add the path or link to the AI solutions image
        },
        {
            id: 2,
            title: 'AI Solutions',
            description:
                'Harnessing the power of artificial intelligence for smarter, data-driven decision-making.',
            subServices: [
                'Machine Learning Models',
                'Natural Language Processing (NLP)',
                'Predictive Analytics',
            ],
            logo: <BrainCircuit size={70} />, // Add the path or link to the AI solutions image
        },
        {
            id: 3,
            title: 'Cybersecurity',
            description:
                'Ensuring the digital security of your business with robust cybersecurity measures.',
            subServices: [
                'Threat Detection and Prevention',
                'Security Audits and Consultation',
                'Incident Response',
            ],
            logo: <ShieldCheck size={70} />,
        },
        {
            id: 4,
            title: 'Data Analytics',
            description:
                'Unlocking actionable insights from your data to drive informed business strategies.',
            subServices: [
                'Data Visualization',
                'Business Intelligence',
                'Data Warehousing',
            ],
            logo: <Database size={70} />,
        },
        {
            id: 5,
            title: 'Cloud Computing',
            description:
                'Optimizing performance and scalability with cutting-edge cloud computing solutions.',
            subServices: [
                'Cloud Infrastructure Management',
                'Serverless Architecture',
                'DevOps and Automation',
            ],
            logo: <Cloudy size={70} />,
        },
        {
            title: 'Mobile App Development',
            description:
                'Creating innovative and user-friendly mobile applications for iOS and Android platforms.',
            subServices: [
                'Cross-platform App Development',
                'Native App Development',
                'App UI/UX Design',
            ],
            logo: <Smartphone size={70} />,
        },
    ];
    return (
        <section className='text-white h-full  min-h-[calc(100vh-64px)]  '>
            <Container className='p-8'>
                <h1 className='text-5xl tracking-wider font-semibold text-[#00FEFF]'>
                    Our Services
                </h1>
                <Separator className='mt-2 mb-4' />
                <p>Empowering Your Business with Innovative Solutions</p>
                {/* services */}
                <div className='grid grid-cols-1 m-4 gap-12 sm:grid-cols-2 lg:grid-cols-3 mt-12'>
                    {servicesArray.map((service) => (
                        <ServiceCard
                            key={service.id}
                            {...service}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
