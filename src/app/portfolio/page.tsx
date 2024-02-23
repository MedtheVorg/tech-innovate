import Container from '@/components/Container';
import Project from '@/components/Project';
import TeamMember from '@/components/TeamMember';
import { Separator } from '@/components/ui/separator';
import { healthierImage, faucetImage, headyImage } from '@/assets';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Portfolio | Tech Innovate',
};
export default function portfolioPage() {
    const portfolioProjects = [
        {
            id: 1,
            title: 'Healthier – LifeStyle Blog Magazine',
            description:
                ' Healthier is a fully functional website designed for lifestyle blogs and magazines, brought to life by the creative team at Tech Innovate. Tailored for lifestyle,fashion, feminine, and health-focused blogs, this project offers a modern and clean design that seamlessly combines aesthetics with functionality.',
            image: healthierImage,
        },
        {
            id: 2,
            title: 'Heady – Product Showcase Website',
            description:
                'Heady stands as a sophisticated product showcase website, thoughtfully crafted by the innovative team at Tech Innovate. With a focus on presenting a modern, unique, and streamlined design, Heady is designed to elevate your product presentation, making it suitable for various product categories, including electronic devices, beauty items, cosmetics, apparel, and accessories.',
            image: headyImage,
        },
        {
            id: 3,
            title: 'Faucet – E-commerce Website',
            description:
                "Faucet is a sophisticated e-commerce website designed and crafted with precision by the talented team at Tech Innovate. Tailored for a wide array of e-commerce applications, this free web design project is perfect for eCommerce stores, online shopping websites, electronic stores, shopping marts, and more. While initially designed for faucets, bathrooms, and kitchen e-commerce stores, Faucet's versatility makes it adaptable for various product categories",
            image: faucetImage,
        },
    ];
    return (
        <section className='text-white h-full  min-h-[calc(100vh-64px)]  '>
            <Container className='p-8'>
                <h1 className='text-5xl tracking-wider font-semibold text-[#00FEFF]'>
                    Portfolio
                </h1>
                <Separator className='mt-2 mb-4' />
                <div className='grid gap-y-8'>
                    {portfolioProjects.map((project) => (
                        <Project
                            key={project.id}
                            {...project}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
