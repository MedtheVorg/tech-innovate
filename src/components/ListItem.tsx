import Link from 'next/link';

export default function ListItem({ value, ...props }: { value: string }) {
    return (
        <li
            {...props}
            className='transition-all hover:scale-105 ease-in-out hover:rotate-[-2deg]'
        >
            <Link
                href={value === 'home' ? '/' : value}
                className='capitalize'
            >
                {value}
            </Link>
        </li>
    );
}
