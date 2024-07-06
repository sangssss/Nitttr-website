import React from 'react'
import ProfileCard from './ProfileCard/ProfileCard'
import './Speaker.css'

function Speakers() {
  return (
    <>   
      <div className='about_nittr'>
      <h1 >About NITTR</h1>
      <p>
        NITTR is a student run organization that aims to provide a platform for students to showcase their
      
        technical skills and knowledge. We organize events like workshops, hackathons, coding competitions,
        etc. to help students learn and grow. We also provide a platform for students to showcase their
        projects and ideas. We believe that learning should be fun and interactive, and we strive to create
        an environment that encourages creativity and innovation. We are committed to providing a safe and
        inclusive space for all students, regardless of their background or experience. We hope that you will

          join us in our mission to create a community of learners and innovators.


      </p>
      </div>
      <div className="speakerMain">
        <div className="speakerCards">
          <ProfileCard 
            imageUrl={"/images/speakers/Balasubramanian.png"} 
            Name="Balasubramaniyan Munnuswamy"
            Proficiency="Skill Development, SDG,CSR, ESG, Incubation & Impact investment| NSDC,UNDP,FCDO (DFID),Fullerton, DRF|" 
            Description="Dynamic professional backed by 20+ years of verifiable year after year success in large development projects. 
            Systemic Private Sector led Development approaches like CSR& Sustainability, Making Markets work for the Poor (M4P)"
          />
          <ProfileCard 
            imageUrl={"/images/speakers/BalaMurugan.png"} 
            Name="Balamurugan SP"
            Proficiency="Co-Founder - GUVI" 
            Description="Software Engineer with an entrepreneurial mindset. Been part of IT industry for a decade and worked with world class individuals and corporates. Had an enormous learning of how the industry works and what it takes to be a successful individual in this field."
          />
          <ProfileCard 
            imageUrl={"/images/speakers/Thajudeen.png"} 
            Name="Thajudeen Aboobaker"
            Proficiency="Founder at URBAN TRASH, Revolutionizing B2B waste Management" 
            Description="As the founder of Urban Trash, I am on a mission to transform the way waste is managed and utilized in urban areas. I have over 7 years of experience in the waste management industry, having founded and led two other startups, cleancircle.earth and cleanlier, that focused on organic waste management and circular economy solutions."
          />
        </div>
        {/* <div className="speakerCards">
          <ProfileCard 
            imageUrl={"/images/speakers/Balasubramanian.png"} 
            Name="Balasubramaniyan Munnuswamy"
            Proficiency="Skill Development, SDG,CSR, ESG, Incubation & Impact investment| NSDC,UNDP,FCDO (DFID),Fullerton, DRF|" 
            Description="Dynamic professional backed by 20+ years of verifiable year after year success in large development projects. 
            Systemic Private Sector led Development approaches like CSR& Sustainability, Making Markets work for the Poor (M4P)"
          />
        </div> */}
      </div>
    </>
  )
}

export default Speakers
