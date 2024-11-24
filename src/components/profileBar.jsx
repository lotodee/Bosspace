import React from 'react'
import cards from '../assets/icons/cards.svg'
import deals from '../assets/icons/deals.svg'
import eshop from '../assets/icons/eshop.svg'
import professionals from '../assets/icons/professionals.svg'
import resume from '../assets/icons/resume.svg'
import jobs from '../assets/icons/jobs.svg'
import ImageWrapper from './ImageWrapper'
const ProfileBar = () => {
  return (
    <div className="text-black flex flex-row gap-8 items-center">
      <ImageWrapper src={cards} width={25} height={25} />
      <ImageWrapper src={deals} width={25} height={25} />
      <ImageWrapper src={eshop} width={25} height={25} />
      <ImageWrapper src={professionals} width={25} height={25} />
      <ImageWrapper src={resume} width={25} height={25} />
      <ImageWrapper src={jobs} width={25} height={25} />
    </div>
  );
}

export default ProfileBar