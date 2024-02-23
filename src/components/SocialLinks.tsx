import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function SocialLinks() {
    return (
        <div className=' items-center gap-x-4 hidden md:flex'>
            <a
                href='https://www.facebook.com'
                target='_blank'
            >
                <Facebook className='hover:text-blue-700 transition-colors' />
            </a>
            <a
                href='https://www.instagram.com'
                target='_blank'
            >
                <Instagram className='hover:text-orange-500 transition-colors' />
            </a>
            <a
                href='https://www.instagram.com'
                target='_blank'
            >
                <Youtube
                    className='hover:text-red-700 transition-colors'
                    size={30}
                />
            </a>
        </div>
    );
}
