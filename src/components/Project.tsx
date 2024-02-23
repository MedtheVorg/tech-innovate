import Image, { StaticImageData } from 'next/image';
import { healthierImage } from '@/assets';
import { Button } from './ui/button';

type ProjectProps = {
    image: StaticImageData;
    title: string;
    description: string;
};
export default function Project({
    title,
    description,
    image,
    ...props
}: ProjectProps) {
    return (
        <div
            className='aspect-video bg-white/30 relative max-h-80 w-full overflow-hidden cursor-pointer rounded-md group'
            {...props}
        >
            <Image
                src={image}
                alt='healthier project'
                className='absolute top-0 left-0 right-0 bottom-0 z-0  w-full object-cover bg-center opacity-80'
            />
            {/* layer */}
            <div className='absolute top-0 left-0 right-0 bottom-0 z-1  w-full h-full bg-neutral-950/60 opacity-0 group-hover:opacity-100  text-white p-2 md:p-6 transition-all duration-700'>
                <h2 className='text-2xl md:text-4xl font-semibold translate-x-[-20px] opacity-0 group-hover:translate-x-[0px] group-hover:opacity-100 transition-all duration-700'>
                    {title}
                </h2>
                <p className='mt-2 md:mt-6 md:text-xl translate-y-[-20px] opacity-0 group-hover:translate-y-[0px] group-hover:opacity-100 transition-all duration-700'>
                    {description}
                </p>
                <div className='flex justify-end'>
                    <Button
                        variant={'unique'}
                        className='mt-2 md:mt-8 '
                    >
                        live preview
                    </Button>
                </div>
            </div>
        </div>
    );
}
