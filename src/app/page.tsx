import Container from '@/components/Container';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Home | Tech Innovate',
};
export default function Home() {
    return (
        <section
            className={`flex items-center   h-[calc(100vh-64px)] overflow-hidden`}
        >
            <Container className='grid grid-cols-1 md:grid-cols-2'>
                {/* left side */}
                <div className='p-8 xl:p-0 text-white z-10'>
                    <h1 className='font-bold text-3xl md:text-5xl lg:text-6xl text-balance '>
                        Empowering Innovation with Tech Excellence
                    </h1>
                    <p className='text-neutral-200 mt-8'>
                        At Tech Innovate, we drive progress through cutting-edge
                        technology solutions. Explore a world of possibilities
                        with our expertise in web development, AI solutions,
                        cybersecurity, and more.
                    </p>
                    <Link
                        href={'portfolio'}
                        className='transition-all inline-block'
                    >
                        <Button
                            variant={'unique'}
                            className='mt-12  '
                        >
                            Discover More
                        </Button>
                    </Link>
                </div>
                {/* right side */}
                <div className=''></div>
            </Container>
        </section>
    );
}
