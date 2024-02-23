import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import ListItem from './ListItem';

export default function NavigationMenu({ className }: { className?: string }) {
    return (
        <nav className='hidden sm:block'>
            <ul className={twMerge('flex gap-x-8', className)}>
                {['home', 'services', 'portfolio', 'team', 'contact'].map(
                    (route) => (
                        <ListItem
                            value={route}
                            key={route}
                        />
                    )
                )}
            </ul>
        </nav>
    );
}
