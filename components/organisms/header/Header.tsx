'use client';

import React, {useEffect, useState} from 'react';
import Link from "@/components/atoms/link/Link";
import Button from "@/components/atoms/button/Button";
import {fetchAPI} from "@/app/[...slug]/utils/fetch-api";
import {MenuItem} from "@/components/organisms/header/HeaderProps";

async function getMenuData() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const options = {headers: {Authorization: `Bearer ${token}`}};

    const response = await fetchAPI('/main-menu?populate=*', options);
    return response.data.attributes.MainMenuItems;
}

const Header: React.FC = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMenuData();
                setMenuItems(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);


    return (
        <header className='p-10 bg-transparent flex justify-center gap-72 items-center w-full absolute top-0 left-0 z-10 text-white'>
            <div>
                <Link href='/' children='Logo Maartenssssss'/>
            </div>
            <nav>
                <ul className='flex gap-6'>
                    {menuItems.map(item => (
                        item.__component === 'menu.menu-link' ? (
                            <li key={item.id}>
                                <Link href={item.slug} children={item.title}/>
                            </li>
                        ) : null
                    ))}
                </ul>
            </nav>
            <div>
                <ul>
                    {menuItems.map(item => (
                        item.__component === 'menu.menu-button' ? (
                            <Button children={item.title} variant={item.type} disabled={false}></Button>
                        ) : null
                    ))}
                </ul>
                <Button variant='filled' disabled={false} children='Contact Me'/>
            </div>
        </header>
    );
};

export default Header;