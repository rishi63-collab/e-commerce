import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About ShivaFashion" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p><b className='text-gray-800'>ShivaFashion</b> is a contemporary fashion brand that celebrates style, elegance, and affordability. Founded with the vision to redefine everyday fashion, we bring the latest trends and timeless classics directly to your wardrobe.</p>
              <p>From casual wear to statement pieces, every collection at ShivaFashion is thoughtfully designed to elevate your personal style. We are committed to offering fashion-forward options that are both stylish and comfortable, ensuring our customers feel confident in every outfit.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission at ShivaFashion is to make high-quality fashion accessible to everyone. We aim to deliver exceptional style and value through innovative designs, responsible sourcing, and a seamless shopping experience.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Trend-Driven Collections:</b>
            <p className=' text-gray-600'>Stay ahead of the curve with our regularly updated collections inspired by global fashion trends.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Affordable Luxury:</b>
            <p className=' text-gray-600'>We believe looking stylish shouldn’t come with a hefty price tag. Our pieces offer premium quality at honest prices.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Customer-Centric Approach:</b>
            <p className=' text-gray-600'>Your satisfaction drives us. Our support team is always ready to help, ensuring a smooth and enjoyable shopping experience.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About;
