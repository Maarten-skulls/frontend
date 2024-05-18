import React from 'react';
import Link from "@/components/atoms/link/Link";

const Header = () => {
    return (
        <header className='p-10 z-10 bg-transparent fixed w-full'>
            <nav className='flex content-center justify-center items-center'>
                <ul className='flex gap-16'>
                    <Link href={'/test'} children={'Menu Item 1'}/>
                    <Link href={'/test'} children={'Menu Item 2'}/>
                    <Link href={'/test'} children={'Menu Item 3'}/>
                    <Link href={'/test'} children={'Menu Item 4'}/>
                </ul>
            </nav>
        </header>
    );
};

export default Header;