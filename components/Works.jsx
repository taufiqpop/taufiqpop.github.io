import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import truncateText from "@/utils/truncate";
import GithubLogo from "./../public/assets/icons/github.svg";
import RocketLogo from "./../public/assets/icons/rocket.svg";

function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployed_link,
}) {
  const CHAR_LIMIT = 280;
  const hasGithub = source_code_link && source_code_link !== "#";

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Tilt
        tiltMaxAngleX="10"
        tiltMaxAngleY="10"
        className="dark:bg-bgSecondaryDark bg-bgSecondaryLight p-5 rounded-2xl w-full max-w-[320px] h-fit min-h-[400px] shadow-sm shadow-primary"
      >
        <div className="relative w-full h-[160px]">
          <div className="relative w-full aspect-video">
            <Image
              src={image}
              alt="project_image"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute inset-0 flex justify-start m-3 card-img_hover">
            <div
              onClick={() => window.open(deployed_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <RocketLogo className="w-1/2 h-1/2 mr-[2px] z-10" />
            </div>
          </div>
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
<button
  disabled={!hasGithub}
  onClick={() => window.open(source_code_link, "_blank")}
  title={hasGithub ? "View Source Code" : "Source Code Not Available"}
  className="
    black-gradient
    w-10 h-10
    rounded-full
    flex justify-center items-center
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
>
  <GithubLogo className="w-2/3 h-2/3 z-10" />
</button>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-bold text-[20px]">
            {name}
          </h3>
          <p className="mt-2 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[14px]">
            {truncateText(description, CHAR_LIMIT)}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

function Works() {
  return (
    <section className="xl:my-36 md:mx-36 p-8 " id="projects">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText"}>My work</p>
        <h2 className={"sectionHeadText"}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] max-w-3xl leading-[30px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          These projects showcase my practical skills and experience, each with
          descriptions and links to code repositories and live demos. They
          demonstrate my ability to handle complex challenges, adapt to
          different technologies, and oversee projects from start to finish.
        </motion.p>
      </div>

      <div className="md:mt-20 mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Works;
