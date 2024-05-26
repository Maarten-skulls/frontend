import Link from "@/components/atoms/link/Link";
import {HeaderProps} from "@/components/organisms/header/HeaderProps";
import Image from "@/components/atoms/image/Image";
import Button from "@/components/atoms/button/Button";

const Header = (props: HeaderProps) => {
    return (
        <header className='p-10 bg-transparent flex justify-center gap-72 items-center w-full absolute top-0 left-0 z-10 text-white'>
            <div>
                <Link href='/'>
                    <Image src={props.logo.url} alt={props.logo.alternativeText} className="h-20"/>
                </Link>
            </div>
            <nav>
                <ul className='flex gap-6'>
                    {props.links.map(item => (
                        <li key={item.id}>
                            <Link href={item.slug} children={item.title}/>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                <ul>
                    {props.buttons.map(item => (
                        <li key={item.id}>
                            <Button variant={item.type} disabled={false} children={item.title}/>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;