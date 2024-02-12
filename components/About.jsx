import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services, socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "@/constants/styles";
import Link from "next/link";
import EmailIcon from "./../public/assets/icons/email.svg";
import Image from "next/image";

const ServiceCard = ({ index, title, icon }) => (
	<Tilt className="lg:w-[250px] w-full">
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450
				}}
				className="dark:bg-bgSecondaryDark bg-bgSecondaryLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
			>
				<div className="w-16 h-16 object-contain relative">{icon}</div>
				<h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[20px] font-bold text-center w-[80%]">
					{title}
				</h3>
			</div>
		</motion.div>
	</Tilt>
);

const About = () => {
	return (
		<div className="xl:my-36 w-2/3 ml-36 p-8" id="about">
			<motion.div
				variants={textVariant()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
			>
				<p className={"sectionSubText"}>Introduction</p>
				<h2 className={"sectionHeadText"}>Overview.</h2>
			</motion.div>

			<motion.div
				variants={fadeIn("", "", 0.1, 1)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className="mt-4 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] w-full leading-[30px] flex flex-col justify-between gap-4"
			>
				<div>
					Hello! I&apos;m Ashutosh Jha, a passionate web developer
					and problem solver. Currently, I&apos;m the Tech Team Lead
					at GDSC MVJCE, and I&apos;m pursuing a B.E. degree in
					Computer Science and Engineering at MVJ College Of
					Engineering in Bengaluru, India, with an expected graduation
					year of 2025. I&apos;m a software developer with experience
					in TypeScript, TailwindCSS, and JavaScript. I specialize in
					frameworks such as React, Node.js, Next.js,
					React-Three-Fiber, and Three.js. My knowledge extends to
					fundamental data structures and algorithms, making me
					well-versed in frontend web development.
					<br className="sm:block hidden" />
					Let&apos;s collaborate to bring your ideas to life!
				</div>
				<div>
					<Link
						href="mailto:Ashutoshsharma77607@gmail.com"
						target="_blank"
						rel="noreferrer"
						className="hover:text-primary transition-all duration-100 ease-in flex items-center gap-2"
					>
						<EmailIcon className="w-[30px] h-[30px]" />
						&nbsp;Ashutoshsharma77607@gmail.com
					</Link>
				</div>
				<div className="flex gap-5 items-center">
					{socials.map((social) => (
						<Link
							href={social.link}
							target="_blank"
							key={social.id}
							className="w-8 h-8"
						>
							{social.icon}
						</Link>
					))}
				</div>
				<Link
					href="document/Ashutosh-resume.pdf"
					target="_blank"
					rel="noreferrer"
					className="w-fit"
				>
					<div className="btn w-fit bg-tertiary text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
						<div className="original bg-primary text-white px-7 py-2">
							Resume
						</div>
						<div className="letters">
							<span>R</span>
							<span>e</span>
							<span>s</span>
							<span>u</span>
							<span>m</span>
							<span>e</span>
						</div>
					</div>
				</Link>
			</motion.div>

			<div className="mt-14 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</div>
	);
};

export default About;
