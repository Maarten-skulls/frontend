import Hero from "@/components/organisms/hero/Hero";
import Section from "@/components/atoms/section/Section";
import InfoCard from "@/components/molecules/infoCard/InfoCard";
import {GiOnTarget} from "react-icons/gi";
import Counter from "@/components/molecules/counter/Counter";
import {IoDiamond} from "react-icons/io5";
import {IoIosMegaphone} from "react-icons/io";
import Image from "@/components/atoms/image/Image";
import Button from "@/components/atoms/button/Button";
import Article from "@/components/molecules/article/Article";

export default function Home() {
  return (
    <div>
        <Hero
            title='recreating the historicaly creatures'
            description='Unveil the mysteries of the past and breathe life into history with our intricately crafted 3D models of ancient humans and prehistoric creatures. At Maarten’s 3D Modeling Studio, we merge artistry with scientific accuracy to deliver stunningly realistic representations of the human form and extinct animals, ranging from majestic saber-toothed tigers to awe-inspiring dinosaurs.'
            background='/assets/images/dinosaur-hero-1.jpg'
        />

        {/*About Us -- Section*/}
        <Section gridVariant='one-column' className='px-20 py-10 h-max'>
            <Article title='About Us' description='Unveil the mysteries of the past and breathe life into history with our intricately crafted 3D models of ancient humans and prehistoric creatures. At Maarten’s 3D Modeling Studio, we merge artistry with scientific accuracy to deliver stunningly realistic representations of the human form and extinct animals, ranging from majestic saber-toothed tigers to awe-inspiring dinosaurs.' widthVariant='half-width'/>
            <Section gridVariant='three-column' className='grid-rows-2'>
                <div className="grid gap-2 self-center">
                    <div className="col-span-1 row-span-1 self-stretch">
                        <InfoCard
                            icon={<GiOnTarget/>}
                            title='Vission'
                            text='EcoTech Solutions innovates and delivers sustainable tech to enhance life quality and protect the environment. We reduce carbon footprints and foster a culture of environmental stewardship and social responsibility.'
                        />
                    </div>
                    <div className="col-span-1 row-span-2 self-stretch">
                        <InfoCard
                            icon={<IoIosMegaphone/>}
                            title='Mission'
                            text='EcoTech Solutions innovates and delivers sustainable tech to enhance life quality and protect the environment. We reduce carbon footprints and foster a culture of environmental stewardship and social responsibility.'
                        />
                    </div>
                    <div className="col-span-2 row-span-3">
                        <InfoCard
                            icon={<IoDiamond/>}
                            title='Core Value'
                            text='We prioritize sustainability, foster innovation, uphold integrity, focus on customers, collaborate with stakeholders, and embrace social responsibility to positively impact society.'
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-5 self-center'>
                    <Counter title='Products Made' counter='7'/>
                    <Counter title='Prooducts Sold' counter='21'/>
                    <Counter title='Total Prints Made' counter='104'/>
                </div>

                <div className='justify-self-end self-center'>
                    <Image src='/assets/images/maarten-samson.jpg' alt='Foto van Maarten Samson' className="rounded-lg object-contain h-[500px]"/>
                </div>
            </Section>
        </Section>

        {/*Our Products -- Section*/}
        <Section gridVariant='two-column' className='px-20 py-10'>
            <div>
                <Article title='Our Products' description='Unveil the mysteries of the past and breathe life into history with our intricately crafted 3D models of ancient humans and prehistoric creatures. At Maarten’s 3D Modeling Studio, we merge artistry with scientific accuracy to deliver stunningly realistic representations of the human form and extinct animals, ranging from majestic saber-toothed tigers to awe-inspiring dinosaurs.' widthVariant='full-width'/>
                <div className='flex flex-row gap-5 mt-12'>
                    <Button variant='filled' disabled={false} children='Discover Now'/>
                    <Button variant='outlined' disabled={false} children='Request a Custom Model'/>
                </div>
                <div className='flex flex-row gap-8 mt-12'>
                    <Image src='/assets/images/dinosaur-hero-1.jpg' alt='Image of a dinosaur' className='object-contain w-1/3 rounded-lg'/>
                    <Image src='/assets/images/dinosaur-hero-1.jpg' alt='Image of a dinosaur' className='object-contain w-1/3 rounded-lg'/>
                </div>
            </div>
            <div className='justify-self-end self-center'>
                <Image src='/assets/images/dinosaur-hero-1.jpg' alt='Image of an dinosaur' className='rounded-lg object-contain h-96'/>
            </div>
        </Section>

        {/*How The Products Are Made -- Section*/}
        <Section gridVariant='two-column' className='px-20 py-10'>
            <div>
                <Article title='How the products are made' description='Unveil the mysteries of the past and breathe life into history with our intricately crafted 3D models of ancient humans and prehistoric creatures. At Maarten’s 3D Modeling Studio, we merge artistry with scientific accuracy to deliver stunningly realistic representations of the human form and extinct animals, ranging from majestic saber-toothed tigers to awe-inspiring dinosaurs.' widthVariant='full-width'/>
                <div className='flex flex-row gap-5 mt-12'>
                    <Button variant='filled' disabled={false} children='Watch The Video of The Process'/>
                </div>
            </div>
            <div className='justify-self-end self-center'>
                <Image src='/assets/images/dinosaur-hero-1.jpg' alt='Image of an dinosaur' className='rounded-lg object-contain h-96'/>
            </div>
        </Section>
    </div>
  );
}
