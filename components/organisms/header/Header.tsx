import React from 'react';
import Link from "@/components/atoms/link/Link";
import Button from "@/components/atoms/button/Button";

const Header = () => {
    return (
        <header className='p-10 bg-transparent flex justify-evenly items-center w-full'>
            <div>
                <Link href='/' children='Logo'/>
            </div>
            <nav className='flex content-center items-center'>
                <ul className='flex gap-6'>
                    <Link href='/test' children='Menu Item 1'/>
                    <Link href='/test' children='Menu Item 2'/>
                    <Link href='/test' children='Menu Item 3'/>
                    <Link href='/test' children='Menu Item 4'/>
                </ul>
            </nav>
            <div>
                <Button variant='filled' disabled={false} children='Contact Me'/>
            </div>
        </header>
    );
};

export default Header;