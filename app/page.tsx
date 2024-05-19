import Header from "@/components/organisms/header/Header";
import Hero from "@/components/organisms/hero/Hero";
import Counter from "@/components/molecules/counter/Counter";
import Section from "@/components/organisms/section/Section";
import Button from "@/components/atoms/button/Button";
import Image from "@/components/atoms/image/Image";
import Card from "@/components/atoms/card/Card";
import InfoCard from "@/components/molecules/infoCard/InfoCard";
import {GiOnTarget} from "react-icons/gi";

export default function Home() {
  return (
    <div>
        <Hero
            title='recreating the historicaly creatures'
            description='Unveil the mysteries of the past and breathe life into history with our intricately crafted 3D models of ancient humans and prehistoric creatures. At Maarten’s 3D Modeling Studio, we merge artistry with scientific accuracy to deliver stunningly realistic representations of the human form and extinct animals, ranging from majestic saber-toothed tigers to awe-inspiring dinosaurs.'
            background='/assets/images/dinosaur-hero-1.jpg'
        />

        {/*About Us -- Section*/}
        <Section
            title='About Us'
            description='Unveil the mysteries of the past and breathe life into history with our intricately crafted 3D models of ancient humans and prehistoric creatures. At Maarten’s 3D Modeling Studio, we merge artistry with scientific accuracy to deliver stunningly realistic representations of the human form and extinct animals, ranging from majestic saber-toothed tigers to awe-inspiring dinosaurs.'
            gridVariant='three-column'
        >
            <div className="grid grid-cols-2 grid-rows-2 gap-5">
                <div className="col-start-1 col-end-2 row-start-1 row-end-2">
                    <InfoCard
                        icon={<GiOnTarget/>}
                        title='Vission'
                        text='Some tekst about the mission'
                    />
                </div>
                <div className="col-start-1 col-end-2 row-start-2 row-end-3">
                    <InfoCard
                        icon={<GiOnTarget/>}
                        title='Mission'
                        text='Some tekst about the mission'
                    />
                </div>
                <div className="col-start-2 col-end-3 row-start-1 row-end-3">
                    <InfoCard
                        icon={<GiOnTarget/>}
                        title='Core Value'
                        text='Some tekst about the mission'
                    />
                </div>
            </div>
        </Section>

        {/*Our Products -- Section*/}
        {/*<Section gridVariant='two-column'>*/}
        {/*    <Section gridVariant='one-column' title='Our Products' description='Unveil the mysteries of the past and breathe life into history with our intricately crafted 3D models of ancient humans and prehistoric creatures. At Maarten’s 3D Modeling Studio, we merge artistry with scientific accuracy to deliver stunningly realistic representations of the human form and extinct animals, ranging from majestic saber-toothed tigers to awe-inspiring dinosaurs.'>*/}
        {/*        <div className='flex flex-row gap-8'>*/}
        {/*            <Button variant='filled' disabled={false} children='Discover Now'/>*/}
        {/*            <Button variant='outlined' disabled={false} children='Request a Custom Modal'/>*/}
        {/*        </div>*/}
        {/*    </Section>*/}
        {/*    <Image*/}
        {/*        src='/assets/images/dinosaur-hero-1.jpg'*/}
        {/*        alt='A skull of a Sabeltooth Tiger'*/}
        {/*        className='rounded-lg'*/}
        {/*    />*/}
        {/*</Section>*/}
    </div>
  );
}
