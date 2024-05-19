import Header from "@/components/organisms/header/Header";
import Hero from "@/components/organisms/hero/Hero";
import Counter from "@/components/molecules/counter/Counter";

export default function Home() {
  return (
    <div>
        <Hero
            title='recreating history of the creatures animals'
            description='Unveil the mysteries of the past and breathe life into history with our intricately crafted 3D models of ancient humans and prehistoric creatures. At Maarten’s 3D Modeling Studio, we merge artistry with scientific accuracy to deliver stunningly realistic representations of the human form and extinct animals, ranging from majestic saber-toothed tigers to awe-inspiring dinosaurs.'
            background='/assets/images/dinosaur-hero-1.jpg'
        />
        <Counter/>
    </div>
  );
}
