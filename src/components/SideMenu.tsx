'use client';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import ListItem from './ListItem';

export function SideMenu({}) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', (event) => {
            if (window.innerWidth > 640) {
                console.log('close it');

                setIsOpen(false);
            }
        });

        return () => {
            window.removeEventListener('resize', (event) => {
                if (window.innerWidth > 640) {
                    setIsOpen(false);
                }
            });
        };
    }, []);
    return (
        <div className='sm:hidden'>
            <MenuIcon
                className='cursor-pointer'
                onClick={() => setIsOpen(true)}
            />
            <Sheet
                open={isOpen}
                onOpenChange={setIsOpen}
            >
                <SheetContent className='bg-white bg-opacity-5 '>
                    <nav className=''>
                        <ul className='flex gap-x-4 flex-col mt-8 gap-y-6'>
                            {[
                                'home',
                                'services',
                                'portfolio',
                                'team',
                                'contact',
                            ].map((route) => (
                                <ListItem
                                    value={route}
                                    key={route}
                                    onClick={() => setIsOpen(false)}
                                    className='hover:bg-white hover:bg-opacity-30'
                                />
                            ))}
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
}
