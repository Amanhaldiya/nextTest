;
import ActionSection from '@/components/homePage/Action';
import Banner from '@/components/homePage/HomeBanner';
import Feature from '@/components/homePage/feature';
import Testimonial from '@/components/homePage/Testimonial';





import Image from 'next/image'
import ContactForm from '@/components/homePage/ContactForm';

export const metadata={
  title:"Home:Work Manager",
};






export default function Home() {
  return (
  <div>
    

    {/*<h1 className='text-5xl'>Work Manager</h1>*/}
    <Banner/>
    <Feature/>
    <ActionSection/>
    <Testimonial/>
    <ContactForm/>
  </div>

    );
  }
   
