import Image, { StaticImageData } from 'next/image';
import { Github, Linkedin } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { ComponentPropsWithoutRef } from 'react';

interface TeamMemberProps extends ComponentPropsWithoutRef<'div'> {
    id: string;
    image: StaticImageData;
    className?: string;
    name: string;
    role: string;
    bio: string;
    reversed: boolean;
}
export default function TeamMember({
    className,
    image,
    name,
    bio,
    role,
    reversed,
    ...props
}: Partial<TeamMemberProps>) {
    return (
        <div
            className={twMerge(
                'flex   gap-x-6 max-w-screen-lg mx-auto my-8 bg-white bg-opacity-5 p-2',
                className,
                !!reversed && 'flex-row-reverse'
            )}
            {...props}
        >
            <div className='w-1/3 max-h-[300px] hidden sm:block '>
                <Image
                    src={image!}
                    alt='picture of John Smith a Full Stack Developer'
                    className='aspect-[2/3] max-w-full max-h-full object-contain   filter drop-shadow-3xl
                    '
                />
            </div>
            <div className='sm:w-2/3 flex flex-col justify-center p-2 md:p-8'>
                <div className='flex justify-between'>
                    <h2 className='text-3xl font-semibold'>{name}</h2>
                    <div className='flex gap-x-2'>
                        <a
                            className='bg-blue-500 text-white rounded-md p-2'
                            href='https://linkedin.com'
                            target='_blank'
                        >
                            <Linkedin className='' />
                        </a>
                        <a
                            className='bg-neutral-800 text-white rounded-md p-2'
                            href='https://github.com'
                            target='_blank'
                        >
                            <Github className='' />
                        </a>
                    </div>
                </div>
                <p className='font-bold text-xl mt-2'>{role}</p>
                <p className='my-4 leading-6 '>{bio}</p>
            </div>
        </div>
    );
}
