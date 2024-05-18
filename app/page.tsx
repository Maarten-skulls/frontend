import Header from "@/components/organisms/header/Header";
import Hero from "@/components/organisms/hero/Hero";

export default function Home() {
  return (
    <div>
        <Header/>
        <Hero title={'Test Title'} background={'bg-hero-image'}/>
    </div>
  );
}
