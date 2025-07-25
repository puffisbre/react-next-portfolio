'use client'

import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

import { FaNodeJs as NodeIcon } from "react-icons/fa6";
import { SiExpress as ExpressIcon } from "react-icons/si";
import { SiPrisma as PrismaIcon } from "react-icons/si";
import { SiTypescript as TSicon } from "react-icons/si";
import { FaReact as ReactIcon} from "react-icons/fa";
import { RiNextjsFill as NextIcon} from "react-icons/ri";
import { FaGithubSquare as GitHubIcon} from "react-icons/fa";
import { RiTailwindCssFill as TailwindIcon} from "react-icons/ri";
import { CgWebsite as WebIcon} from "react-icons/cg";
import NextractImage from '../../../public/images/nextractThumbnail.png'
import JobchaserImage from '../../../public/images/jobchaserThumbnail.png'


const Projects = () => {
const nodeStyle = {color: '#68A063', fontSize: '20px'};
     const expressStyle = {color: '#303030', fontSize: '20px'};
     const prismaStyle = {color: '#4DB6AC', fontSize: '20px'};
     const tsStyle = {color: '#007acc', fontSize: '20px'};
     const reactStyle = {color: '#61DBFB', fontSize: '20px'};
     const nextStyle = {fontSize: '20px'};
     const gitHubStyle = {color: '#6e5494', fontSize: '30px'};
     const tailwindStyle = {color: '#00d9ef', fontSize: '30px'};
     const websiteIcon = {color: '#007acc', fontSize: '30px'}

   

  return (
   <>
   <section className={styles.projectsSection}>
    <h3 style={{textAlign: 'center', fontSize: '30px',fontWeight: 'bolder', color: 'white', marginBottom: '30px'}}>My Projects</h3>
    {
    //#region FirstProject

    <div className={styles.firstProject}>
      <h4 style={{fontSize: '30px'}}>Nextract</h4>
      <br />
      <p>Date: Mars 2025 - June 2025</p>
      <br />
      <p>This is one of my biggest projects I've been apart of. A web-application with focus on making it easier for small bussines owners that handles APIs. 
        This app purpose is to make your own API from bigger APIs with a easy to use UI. You can now click and choose from an API of your choice to save and create a new API that only exist
        those products/items etc of your own choice.
      </p>
      <br />
      
        
      <p> Links:</p>
     
      <div style={{display: 'flex', alignItems:'center', gap: '10px'}}>
      <span><GitHubIcon style={gitHubStyle}/></span>
      <a style={{textDecoration: 'underline'}} href='https://github.com/puffisbre/nextract-frontend'>Frontend</a>
       </div>
       <div style={{display: 'flex', alignItems:'center', gap: '10px'}}>
      <span><GitHubIcon style={gitHubStyle}/></span>
      <a style={{textDecoration: 'underline'}} href='https://github.com/puffisbre/nextract-backend'>Backend</a>
       </div>
      <Image src={NextractImage} alt="nextract-project-thumbnail"/>
      <br />
      <p style={{alignSelf: 'center'}}>Techs for this projects...</p>
      <div className={styles.iconHolder}>
        <div className={styles.iconParent}>
   <NodeIcon style={nodeStyle}/>
   <span>Node.JS</span>
   </div>
   <div className={styles.iconParent}>
   <ExpressIcon style={expressStyle}/>
   <span>Express.JS</span>
   </div>
   <div className={styles.iconParent}>
   <PrismaIcon style={prismaStyle}/>
   <span>Prisma ORM</span>
   </div>
   <div className={styles.iconParent}>
   <TSicon style={tsStyle}/>
   <span>TypeScript</span>
   </div>
   <div className={styles.iconParent}>
   <ReactIcon style={reactStyle}/>
   <span>React</span>
   </div>
   <div className={styles.iconParent}>
   <NextIcon style={nextStyle}/>
   <span>Next.JS</span>
   </div>
      </div>
    </div>
//#endregion
    }
    {
     //#region Second project

       <div className={styles.firstProject}>
      <h4 style={{fontSize: '30px'}}>Jobchaser</h4>
      <br />
      <p>Date: Winter 2025</p>
      <br />
      <p> Simple jobchaser made by me as a school assignment. Includes search and filter made in React Redux. Also includes Dark mode made with React Context. 
        Purpose with assignment was to get an introduction with Redux, Context and Store. Works as intended and is hosted on Netlify for the time being.
        Used tailwind for styling on this project. 
      </p>
      <br />
     
       
      <p> Links:</p>
      
       <div style={{display: 'flex', alignItems:'center', gap: '10px'}}>
       <span><GitHubIcon style={gitHubStyle}/></span>
      <a style={{textDecoration: 'underline'}} href='https://github.com/puffisbre/u07-individuell-uppgift-jobchaser-puffisbre'>Frontend</a>
      </div>
      <div style={{display: 'flex', alignItems:'center', gap: '10px'}}>
      <span><WebIcon style={websiteIcon}/></span>
      <a style={{textDecoration: 'underline'}} href='https://u07felixjobchaser.netlify.app/'>Page Link</a>
      </div>
      <Image src={JobchaserImage} alt="Jobchaser-project-thumbnail"/>
      <br />
      <p style={{alignSelf: 'center'}}>Techs for this projects...</p>
      <div className={styles.iconHolder}>
         
   <div className={styles.iconParent}>
   <TSicon style={tsStyle}/>
   <span>TypeScript</span>
   </div>
   <div className={styles.iconParent}>
   <ReactIcon style={reactStyle}/>
   <span>React</span>
   </div>
   <div className={styles.iconParent}>
   <NextIcon style={nextStyle}/>
   <span>Next.JS</span>
   </div>
   <div className={styles.iconParent}>
   <TailwindIcon style={tailwindStyle}/>
   <span>Tailwind</span>
   </div>
      </div>
    </div>
    //#endregion
    }

   </section>
   </>
  )
}

export default Projects