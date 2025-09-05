'use client'

import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image';
import { FaNodeJs as NodeIcon } from "react-icons/fa6";
import { SiExpress as ExpressIcon } from "react-icons/si";
import { SiPrisma as PrismaIcon } from "react-icons/si";
import { SiTypescript as TSicon } from "react-icons/si";
import { FaReact as ReactIcon} from "react-icons/fa";
import { RiNextjsFill as NextIcon} from "react-icons/ri";
import { RiTailwindCssFill as TailwindIcon} from "react-icons/ri";
import { IoLogoJavascript as JavaScriptIcon} from "react-icons/io5";
import { TbBrandMysql as MySqlIcon} from "react-icons/tb";
import { SiNpm as NPMicon} from "react-icons/si";
import { FaGitAlt as GitIcon} from "react-icons/fa6";
import { FaGithubSquare as GitHubIcon} from "react-icons/fa";
import { SiMongodb as MongoDbIcon} from "react-icons/si";
import { SiFirebase as FirebaseLogo} from "react-icons/si";
import FigmaIcon from '../../../public/images/figma.png'





const Techstack = () => {
    const nodeStyle = {color: '#68A063', fontSize: '30px'};
    const expressStyle = {color: '#303030', fontSize: '30px'};
     const prismaStyle = {color: '#4DB6AC', fontSize: '30px'};
     const tsStyle = {color: '#007acc', fontSize: '30px'};
     const reactStyle = {color: '#61DBFB', fontSize: '30px'};
     const nextStyle = {fontSize: '30px'};
     const tailwindStyle = {color: '#00d9ef', fontSize: '30px'};
     const javscriptStyle = {color: '#F0DB4F', fontSize: '30px'};
     const mySqlStyle = {color: '#00758F', fontSize: '30px'};
     const npmStyle = {color: '#CC3534', fontSize: '30px'};
     const gitStyle = {color: '#F1502F', fontSize: '30px'};
     const gitHubStyle = {color: '#6e5494', fontSize: '30px'};
     const mongoDbStyle = {color: '#3FA037', fontSize: '30px'};
     const fireBaseStyle = {color: '#FF8F00', fontSize: '30px'};
   


  const allIcons = 
  [
  <div className={styles.iconParent} key="node">
    <NodeIcon style={nodeStyle}/>
    <span>Node.JS</span>
  </div>,
  <div className={styles.iconParent} key="express">
    <ExpressIcon style={expressStyle}/>
    <span>Express.JS</span>
  </div>,
  <div className={styles.iconParent} key="prisma">
    <PrismaIcon style={prismaStyle}/>
    <span>Prisma ORM</span>
  </div>,
  <div className={styles.iconParent} key="typescript">
    <TSicon style={tsStyle}/>
    <span>TypeScript</span>
  </div>,
  <div className={styles.iconParent} key="react">
    <ReactIcon style={reactStyle}/>
    <span>React</span>
  </div>,
  <div className={styles.iconParent} key="nextjs">
    <NextIcon style={nextStyle}/>
    <span>Next.JS</span>
  </div>,
  <div className={styles.iconParent} key="tailwind">
    <TailwindIcon style={tailwindStyle}/>
    <span>Tailwind</span>
  </div>,
  <div className={styles.iconParent} key="javascript">
    <JavaScriptIcon style={javscriptStyle}/>
    <span>JavaScript</span>
  </div>,
  <div className={styles.iconParent} key="mysql">
    <MySqlIcon style={mySqlStyle}/>
    <span>MySQL</span>
  </div>,
  <div className={styles.iconParent} key="npm">
    <NPMicon style={npmStyle}/>
    <span>NPM</span>
  </div>,
  <div className={styles.iconParent} key="git">
    <GitIcon style={gitStyle}/>
    <span>GIT</span>
  </div>,
  <div className={styles.iconParent} key="github">
    <GitHubIcon style={gitHubStyle}/>
    <span>GitHub</span>
  </div>,
  <div className={styles.iconParent} key="figma">
    <Image src={FigmaIcon} alt='figmaIcon' width={30}/>
    <span>Figma</span>
  </div>,
  <div className={styles.iconParent} key="mongodb">
    <MongoDbIcon style={mongoDbStyle}/>
    <span>MongoDB</span>
  </div>,
  <div className={styles.iconParent} key="firebase">
    <FirebaseLogo style={fireBaseStyle}/>
    <span>FireBase</span>
  </div>
  ]
  return (
    <>
    <section className={styles.techStackSection}>
    <h3 style={{textAlign: 'center',fontWeight: 'bolder', color: 'white', marginBottom: '30px'}}>My Techstack</h3>
    <div className={styles.techStackContainer}>
   {allIcons}
    </div>
    <h4 style={{textAlign: 'center', color: 'white'}}>And much more...</h4>
    </section>
    </>
  )
}

export default Techstack