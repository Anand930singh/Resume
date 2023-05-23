import React from 'react'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import './Project.css'
import BlogPen from '../../Asets/Images/Logo.png'
import Rental from '../../Asets/Images/Rent.png'
import Room from '../../Asets/Images/Room.png'
import Resume from '../../Asets/Images/Resume.png'


function Projects() {
  return (
    <div className='allProjectCards'>
        <ProjectCard projName={'The BlogPenn'} img={BlogPen} projGithub={'https://github.com/C-NikhilKarthik/CS-301-Project'}/>
        <ProjectCard projName={'Rental Service'} img={Rental} projGithub={'https://github.com/Anand930singh/DBMS_Rental_Service'}/>
        <ProjectCard projName={'Room Booking'} img={Room} projGithub={'https://github.com/ashishlal2003/CS-102-Project'}/>
        <ProjectCard projName={'GDSC-Hotel Booking (frontend)'} img={Rental} projGithub={'https://github.com/GDSC-IIIT-Dharwad/bookingcom-frontend'}/>
        <ProjectCard projName={'Personal Resume'} img={Resume} projGithub={'https://github.com/C-NikhilKarthik/CS-301-Project'}/>
        <ProjectCard projName={'The BlogPenn'} img={BlogPen} projGithub={'https://github.com/C-NikhilKarthik/CS-301-Project'}/>
    </div>
  )
}

export default Projects