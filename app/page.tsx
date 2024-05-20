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
            <Section gridVariant='three-column'>
                <div className="grid grid-cols-2 grid-rows-2 gap-5">
                    <div className="col-start-1 col-end-2 row-start-1 row-end-2">
                        <InfoCard
                            icon={<GiOnTarget/>}
                            title='Vission'
                            text='To be the global leader in sustainable technology by 2030, inspiring a green revolution that harmonizes technological advancement with environmental conservation. We envision a world where every individual and organization adopts eco-friendly practices to ensure a healthier planet.'
                        />
                    </div>
                    <div className="col-start-1 col-end-2 row-start-2 row-end-3">
                        <InfoCard
                            icon={<IoIosMegaphone/>}
                            title='Mission'
                            text='EcoTech Solutions aims to innovate and deliver sustainable technology solutions that enhance the quality of life while preserving the environment for future generations. We are committed to reducing carbon footprints through our eco-friendly products and dedicated to fostering a culture of environmental stewardship and social responsibility.'
                        />
                    </div>
                    <div className="col-start-2 col-end-3 row-start-1 row-end-3">
                        <InfoCard
                            icon={<IoDiamond/>}
                            title='Core Value'
                            text='At EcoTech Solutions, sustainability is at the p advanced technologies that address globanmental challenges. Integrity is fundamental to our business, as we uphold the highest ethical standards, ensuring transparency, honesty, and accountability in all our interactions. Our commitment to customer focus drives us to deeply understand and meet the needs of our customers, delivering exceptional value and quality through our products and services. Collaboration is key, as we believe in the power of teamwork and actively partner with stakeholders—including customers, employees, suppliers, and communities—to achieve our shared goals. Additionally, we embrace social responsibility by engaging in initiatives that promote education, equality, and community well-being, striving to make a positive impact on society.'
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <Counter title='Products Made' counter='7'/>
                    <Counter title='Prooducts Sold' counter='21'/>
                    <Counter title='Total Prints Made' counter='104'/>
                </div>

                <div>
                    <Image src='/assets/images/maarten-samson.jpg' alt='Foto van Maarten Samson' className="w-full rounded-lg"/>
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
            <div className='h-max'>
                <Image src='/assets/images/dinosaur-hero-1.jpg' alt='Image of an dinosaur' className='rounded-lg object-contain'/>
            </div>
        </Section>

        {/*How The Products Are Made -- Section*/}
        <Section gridVariant='two-column' className='px-20 py-10'>
            <div>
                <Article title='Our Products' description='Unveil the mysteries of the past and breathe life into history with our intricately crafted 3D models of ancient humans and prehistoric creatures. At Maarten’s 3D Modeling Studio, we merge artistry with scientific accuracy to deliver stunningly realistic representations of the human form and extinct animals, ranging from majestic saber-toothed tigers to awe-inspiring dinosaurs.' widthVariant='full-width'/>
                <div className='flex flex-row gap-5 mt-12'>
                    <Button variant='filled' disabled={false} children='Watch The Video of The Process'/>
                </div>
            </div>
            <div className='h-max'>
                <Image src='/assets/images/dinosaur-hero-1.jpg' alt='Image of an dinosaur' className='rounded-lg object-contain'/>
            </div>
        </Section>
    </div>
  );
}
