import Container from './Container';
import Logo from './Logo';
import Navigation from './Navigation';
import { twMerge } from 'tailwind-merge';
import SocialLinks from './SocialLinks';

export default function Header() {
    return (
        <header
            className={twMerge(
                'bg-transparent p-4   h-16 transition-all  z-10 '
            )}
        >
            <Container className='flex items-center justify-between max-w-screen-xl'>
                <Logo />
                <Navigation />
                <SocialLinks />
            </Container>
        </header>
    );
}
