import React from 'react';
import FaqCard from '../FaqCard.js/FaqCard';
import './Faq.css';
const Faq = () => {
    const faq = [
                {title : "What Is Cost Of The Food And Delivery?", des : "it sit amet consectetur adipisicing elit. Accusantium et, tenetur quidem, velit consectetur animi quaerat fugit error dolore aut quam, odit doloremque ipsa sunt."},
                {title : "Can I Receive Another Meal Instead?", des : "Accusantium et, tenetur quidem, velit consectetur animi quaerat fugit error dolore aut quam."},
                {title : "What Is Cost Of The Food And Delivery?", des : "Accusantium et, tenetur quidem, velit consectetur animi quaerat fugit error dolore aut quam, odit doloremque ipsa sunt consequuntur alias unde sapiente suscipit."},
                {title : "Is Salt Used In The Food?", des : "cupiditate minus. In culpa temporibus autem! Hic delectus dicta nesciunt temporibus aliquam voluptas, suscipit dolorum ipsum accusantium doloribus quidem provident ut!."},
                ]
    return (
        <div className='faq mt-20 '>
            <div className="text-center container mx-auto px-4">
                <span className='small-title'>FAQS</span>
                <h2 className='text-4xl font-medium tracking-wider mb-4 leading-snug'>Frequently Asked <br /> Question</h2>
                <div className=' faqWrapper  '>
                    {
                        faq.map(data => <FaqCard data={data} /> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Faq;