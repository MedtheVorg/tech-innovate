import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ListItemProps extends ComponentPropsWithoutRef<'li'> {
    value: string;
}
export default function ListItem({
    value,
    className,
    ...props
}: ListItemProps) {
    return (
        <li
            {...props}
            className={twMerge(
                'transition-all hover:scale-105 ease-in-out hover:rotate-[-2deg]',
                className
            )}
        >
            <Link
                href={value === 'home' ? '/' : value}
                className='capitalize inline-block w-full py-2'
            >
                {value}
            </Link>
        </li>
    );
}
