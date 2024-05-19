import Header from "@/components/organisms/header/Header";
import Hero from "@/components/organisms/hero/Hero";

export default function Home() {
  return (
    <div>
        <Header/>
        <Hero
            title='recreating history of the creatures animals'
            description='Lorem Ipsum Lorem djsnskmd'
            background='/assets/images/dinosaur-hero-1.jpg'
        />
    </div>
  );
}
