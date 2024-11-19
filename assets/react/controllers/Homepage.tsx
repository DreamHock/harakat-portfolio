import ContactForm from "./components/common/ContactForm";
import Header from "./components/common/Header";
import NavbarItem from "./components/common/NavbarItem";
import NormalParagraph from "./components/common/NormalParagraph";
import NumberLabel from "./components/common/NumberLabel";
import PremiumTool from "./components/common/PremiumTool";
import SocialIcon from "./components/common/SocialIcon";
import WorkExperience from "./components/common/WorkExperience";
import Experience from "./components/icons/Experience";
import Fiverr from "./components/icons/Fiverr";
import Folder from "./components/icons/Folder";
import Homepage from "./components/icons/Homepage";
import Linkedin from "./components/icons/Linkedin";
import Thoughts from "./components/icons/Thoughts";
import Tools from "./components/icons/Tools";
import Upwork from "./components/icons/Upwork";

export default function Home() {
  return (
    <div>
      <header className="w-full flex justify-center items-center p-5 mb-5">
        <nav className="flex rounded-xl bg-neutral-900 py-3 px-6 gap-6">
          <NavbarItem content="home" link="/">
            <Homepage />
          </NavbarItem>
          {/* <NavbarItem content="projects">
            <Folder />
          </NavbarItem> */}
          <NavbarItem content="experience" link="https://localhost:8000/#experience">
            <Experience />
          </NavbarItem>
          <NavbarItem content="tools" link="https://localhost:8000/#tools">
            <Tools />
          </NavbarItem>
          <NavbarItem content="let's talk" link="#talk">
            <Thoughts />
          </NavbarItem>
        </nav>
      </header>
      <section className="w-full flex justify-center mb-20">
        <div className="flex gap-8">
          <div className="h-[500px] max-w-[280px] shadow-lg rounded-xl flex flex-col items-center bg-neutral-900 sticky top-8">
            <div className="bg-gradient-to-bl from-orange-600 to-slate-900 overflow-hidden min-h-[240px] mx-12 my-8 rounded-xl mb-6">
              <img
                src={process.env.APP_URL + "/images/yahya-image.png"}
                className="scale-150 relative top-5 drop-shadow-lg shadow-slate-950"
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-white font-bold text-2xl">YAHYA HARAKAT</p>
              <div className="h-full flex justify-end flex-col items-center mb-4">
                <p className="text-neutral-400 text-sm font-medium text-center mx-2 ">
                  A Passionate PHP Developer
                </p>
                <div className="flex gap-3 items-center">
                  <SocialIcon content="linkedin">
                    <Linkedin />
                  </SocialIcon>
                  <SocialIcon content="fiverr">
                    <Fiverr />
                  </SocialIcon>
                  <SocialIcon content="upwork">
                    <Upwork />
                  </SocialIcon>
                </div>
              </div>
              <div>
                <a
                  href="#talk"
                  className="bg-sky-400 text-neutral-900 text-md font-bold px-1 py-[0.5px] rounded"
                >
                  Let's Work Together
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-28">
            {/* brief */}
            <div className="">
              <Header primaryHeader="FULL STACK" secondaryHeader="DEVELOPER" />
              <div className="flex flex-col gap-4 w-[538px]">
                <NormalParagraph className="bg-neutral-900 p-6 rounded-lg">
                  based in Marrakech, Morocco. My main goal is to create
                  engaging experiences for users, with a fine balance of
                  technology and design.
                </NormalParagraph>

                <div className="flex justify-between">
                  <NumberLabel number="≈2" label="YEARS OF EXPERIENCE" />
                  <NumberLabel number="+5" label="PROJECTS COMPLETED" />
                  <NumberLabel number="+2" label="HAPPY CLIENTS" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8" id="experience">
              <Header primaryHeader="2 YEARS OF" secondaryHeader="EXPERIENCE" />
              <div className="flex flex-col gap-8 w-[650px]">
                <WorkExperience
                  company="Study + Projects"
                  job="Full Stack Developer Laravel + React"
                  description="I began programming as a hobby before 2021 and, that year, pursued formal training in web development at a center in Morocco. Over two years, I earned a full stack developer diploma and gained valuable hands-on experience through diverse projects."
                  duration="Sep 2021 - May 2023"
                />
                <WorkExperience
                  company="Make It Safe"
                  job="Backend Developer Symfony"
                  description="I contributed to backend development for the MakeItSafe platform using Symfony, collaborating closely with a skilled team of developers and implementing the latest Agile methodologies and project management technologies."
                  duration="Jul 2023 - Oct 2024"
                />
                <WorkExperience
                  company="Freelance"
                  job="Full Stack Developer"
                  description="As a full-stack developer with experience in PHP, Symfony, Laravel, and React, I’m here to transform your ideas into the digital world. Whether you need new features, bug fixes, or a fully developed web application, I’ll bring your vision to life. Let’s work together to create secure, high-performance solutions tailored to your needs."
                  duration="Oct 2024 - Present"
                />
              </div>
            </div>
            <div className=" flex flex-col gap-8" id="tools">
              <Header primaryHeader="PREMIUM" secondaryHeader="TOOLS" />
              <div className="grid gap-y-8 grid-cols-2 w-[650px]">
                <PremiumTool
                  imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhoVwuJmtF1Lu4t9WcsZ7fESV9KdIQ7pVHw&s"
                  tool="LARAVEL"
                  description="FULL STACK FRAMEWORK"
                />
                <PremiumTool
                  imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLwqamkplJY4uc5vhdGDT-Cbm1BQpzVgMCg&s"
                  tool="SYMFONY"
                  description="FULL STACK FRAMEWORK"
                />
                <PremiumTool
                  imgSrc="https://cdn.worldvectorlogo.com/logos/react-1.svg"
                  tool="REACTJS"
                  description="FRONTEND LIBRARY"
                  className="p-4"
                />
                <PremiumTool
                  imgSrc="https://img.icons8.com/m_sharp/512/FFFFFF/mysql-logo.png"
                  tool="MYSQL"
                  description="RDBMS"
                  className=" bg-[#005169] p-2"
                />
                <PremiumTool
                  imgSrc="https://i.pinimg.com/474x/ca/dd/fc/caddfc0001548e9397c5352ee4e807ae.jpg"
                  tool="AWS"
                  description="CLOUD DEPLOYEMENT"
                />
                <PremiumTool
                  imgSrc="https://static.vecteezy.com/system/resources/previews/021/608/790/non_2x/chatgpt-logo-chat-gpt-icon-on-black-background-free-vector.jpg"
                  tool="CHATGPT"
                  description="AI INTEGRATION"
                />
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <footer
        align="center"
        className=" text-lg font-medium p-20 text-neutral-400"
      >
        <span>Made by </span>
        <a className="text-orange-600" href="harakat.dev">
          harakat.dev{" "}
        </a>
        | <span>Powered by </span>
        <a className="text-orange-600" href="https://ux.symfony.com/">
          Symfony UX
        </a>
      </footer>
    </div>
  );
}
