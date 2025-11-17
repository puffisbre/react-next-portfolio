"use client";

import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

import { FaNodeJs as NodeIcon } from "react-icons/fa6";
import { SiExpress as ExpressIcon } from "react-icons/si";
import { SiPrisma as PrismaIcon } from "react-icons/si";
import { SiTypescript as TSicon } from "react-icons/si";
import { FaReact as ReactIcon } from "react-icons/fa";
import { RiNextjsFill as NextIcon } from "react-icons/ri";
import { FaGithubSquare as GitHubIcon } from "react-icons/fa";
import { RiTailwindCssFill as TailwindIcon } from "react-icons/ri";
import { CgWebsite as WebIcon } from "react-icons/cg";
import { SiMongodb as MongoDbIcon } from "react-icons/si";

import NextractImage from "../../../public/images/nextractThumbnail.png";
import JobchaserImage from "../../../public/images/jobchaserThumbnail.png";
import TrulloImage from "../../../public/images/trulloThumnail.png";

const Projects = () => {
  const nodeStyle = { color: "#68A063", fontSize: "20px" };
  const expressStyle = { color: "#303030", fontSize: "20px" };
  const prismaStyle = { color: "#4DB6AC", fontSize: "20px" };
  const tsStyle = { color: "#007acc", fontSize: "20px" };
  const reactStyle = { color: "#61DBFB", fontSize: "20px" };
  const nextStyle = { fontSize: "20px" };
  const gitHubStyle = { color: "#6e5494", fontSize: "30px" };
  const tailwindStyle = { color: "#00d9ef", fontSize: "30px" };
  const websiteIcon = { color: "#007acc", fontSize: "30px" };
  const mongoDbStyle = { color: "#3FA037", fontSize: "20px" };

  const titleRef = useRef<HTMLHeadingElement>(null);
  const project1Ref = useRef<HTMLDivElement>(null);
  const project2Ref = useRef<HTMLDivElement>(null);
  const project3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers = [
      { ref: titleRef, className: 'fade-in-up' },
      { ref: project1Ref, className: 'fade-in-up', delay: 25 },
      { ref: project2Ref, className: 'fade-in-up', delay: 50 },
      { ref: project3Ref, className: 'fade-in-up', delay: 75 },
    ].map(({ ref, delay }) => {
      if (!ref.current) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              ref.current?.classList.add('visible');
            }, delay || 0);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
      );
      
      observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach(obs => obs?.disconnect());
    };
  }, []);

  return (
    <>
      <section className={styles.projectsSection}>
        <h3
          ref={titleRef}
          className="fade-in-up"
          style={{
            textAlign: "center",
            fontWeight: "bolder",
            color: "white",
            marginBottom: "30px",
          }}
        >
          My Projects
        </h3>

        {/* First Project */}
        <div ref={project1Ref} className={`${styles.firstProject} fade-in-up delay-100`}>
          <h4 style={{ fontSize: "30px" }}>Nextract</h4>
          <br />
          <p>Date: March 2025 - June 2025</p>
          <br />
          <p>
            This is one of my biggest projects I&apos;ve been a part of. A
            web-application with focus on making it easier for small business
            owners that handle APIs. The app&apos;s purpose is to make your own
            API from bigger APIs with an easy to use UI. You can click and
            choose from an API of your choice to save and create a new API that
            only includes those products/items etc. of your own choice.
          </p>
          <br />

          <p>Links:</p>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>
              <GitHubIcon style={gitHubStyle} />
            </span>
            <a
              style={{ textDecoration: "underline" }}
              href="https://github.com/puffisbre/nextract-frontend"
              target="_blank"
              rel="noreferrer"
            >
              Frontend
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>
              <GitHubIcon style={gitHubStyle} />
            </span>
            <a
              style={{ textDecoration: "underline" }}
              href="https://github.com/puffisbre/nextract-backend"
              target="_blank"
              rel="noreferrer"
            >
              Backend
            </a>
          </div>

          <Image src={NextractImage} alt="nextract project thumbnail" />
          <br />
          <p style={{ alignSelf: "center" }}>Techs for this project...</p>
          <div className={styles.iconHolder}>
            <div className={styles.iconParent}>
              <NodeIcon style={nodeStyle} />
              <span>Node.JS</span>
            </div>
            <div className={styles.iconParent}>
              <ExpressIcon style={expressStyle} />
              <span>Express.JS</span>
            </div>
            <div className={styles.iconParent}>
              <PrismaIcon style={prismaStyle} />
              <span>Prisma ORM</span>
            </div>
            <div className={styles.iconParent}>
              <TSicon style={tsStyle} />
              <span>TypeScript</span>
            </div>
            <div className={styles.iconParent}>
              <ReactIcon style={reactStyle} />
              <span>React</span>
            </div>
            <div className={styles.iconParent}>
              <NextIcon style={nextStyle} />
              <span>Next.JS</span>
            </div>
          </div>
        </div>

        {/* Second Project */}
        <div ref={project2Ref} className={`${styles.firstProject} fade-in-up delay-200`}>
          <h4 style={{ fontSize: "30px" }}>Jobchaser</h4>
          <br />
          <p>Date: Winter 2025</p>
          <br />
          <p>
            Simple jobchaser made by me as a school assignment. Includes search
            and filter built with React Redux. Also includes Dark mode made with
            React Context. The purpose of the assignment was to get an
            introduction to Redux, Context and Store. Works as intended and is
            hosted on Netlify for the time being. Used Tailwind for styling.
          </p>
          <br />

          <p>Links:</p>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>
              <GitHubIcon style={gitHubStyle} />
            </span>
            <a
              style={{ textDecoration: "underline" }}
              href="https://github.com/puffisbre/u07-individuell-uppgift-jobchaser-puffisbre"
              target="_blank"
              rel="noreferrer"
            >
              Frontend
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>
              <WebIcon style={websiteIcon} />
            </span>
            <a
              style={{ textDecoration: "underline" }}
              href="https://u07felixjobchaser.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Page Link
            </a>
          </div>

          <Image src={JobchaserImage} alt="Jobchaser project thumbnail" />
          <br />
          <p style={{ alignSelf: "center" }}>Techs for this project...</p>
          <div className={styles.iconHolder}>
            <div className={styles.iconParent}>
              <TSicon style={tsStyle} />
              <span>TypeScript</span>
            </div>
            <div className={styles.iconParent}>
              <ReactIcon style={reactStyle} />
              <span>React</span>
            </div>
            <div className={styles.iconParent}>
              <NextIcon style={nextStyle} />
              <span>Next.JS</span>
            </div>
            <div className={styles.iconParent}>
              <TailwindIcon style={tailwindStyle} />
              <span>Tailwind</span>
            </div>
          </div>
        </div>

        {/* Third Project */}
        <div ref={project3Ref} className={`${styles.firstProject} fade-in-up delay-300`}>
          <h4 style={{ fontSize: "30px" }}>Trullo</h4>
          <br />
          <p>Date: School Assignment</p>
          <br />
          <p>
            A Trello knockoff application built as a school assignment. This
            task management application includes user authentication with JWT,
            and allows users to create and manage tasks with different statuses
            (to-do, in progress, blocked, done). Built with a Node.js/Express
            backend using MongoDB and Mongoose, with TypeScript throughout.
            Features include protected routes, password hashing with bcrypt, and
            full CRUD operations for both users and tasks.
          </p>
          <br />

          <p>Links:</p>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>
              <GitHubIcon style={gitHubStyle} />
            </span>
            <a
              style={{ textDecoration: "underline" }}
              href="https://github.com/puffisbre/trullo-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>
              <WebIcon style={websiteIcon} />
            </span>
            <a
              style={{ textDecoration: "underline" }}
              href="https://trullo-app-pi.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Page Link
            </a>
          </div>

          <Image src={TrulloImage} alt="Trullo project thumbnail" />
          <br />
          <p style={{ alignSelf: "center" }}>Techs for this project...</p>
          <div className={styles.iconHolder}>
            <div className={styles.iconParent}>
              <NodeIcon style={nodeStyle} />
              <span>Node.JS</span>
            </div>
            <div className={styles.iconParent}>
              <ExpressIcon style={expressStyle} />
              <span>Express.JS</span>
            </div>
            <div className={styles.iconParent}>
              <MongoDbIcon style={mongoDbStyle} />
              <span>MongoDB</span>
            </div>
            <div className={styles.iconParent}>
              <TSicon style={tsStyle} />
              <span>TypeScript</span>
            </div>
            <div className={styles.iconParent}>
              <ReactIcon style={reactStyle} />
              <span>React</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Projects.displayName = "Projects";

export default Projects;
