import React from 'react'
import cards from '../assets/icons/cards.svg'
import deals from '../assets/icons/deals.svg'
import eshop from '../assets/icons/eShop.svg'
import professionals from '../assets/icons/professionals.svg'
import resume from '../assets/icons/resume.svg'
import jobs from '../assets/icons/jobs.svg'
import ImageWrapper from './ImageWrapper'
import Cards from '../assets/icons/Cards'
import Deals from '../assets/icons/Deals'
import Eshop from '../assets/icons/Eshop'
import Professionals from '../assets/icons/Professionals'
import Resume from '../assets/icons/Resume'
import Jobs from '../assets/icons/Jobs'
const ProfileBar = () => {
  return (
    <div className="text-black flex flex-row gap-8 items-center">
      <ImageWrapper  icon={<Cards/>}  name="Cards"/>
      <ImageWrapper  icon={<Deals/>}  name="Deals" />
      <ImageWrapper  icon={<Eshop/>}   name="E-Shop"/>
      <ImageWrapper  icon={<Professionals/>}   name="Experts"/>
      <ImageWrapper  icon={<Resume/>}  name="Resume" />
      <ImageWrapper  icon={<Jobs/>}  name="Jobs" />
    </div>
  );
}

export default ProfileBar