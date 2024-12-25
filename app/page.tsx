"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faHome,
  faUser,
  faContactBook,
  faFileContract,
  faBlog,
  faChalkboardTeacher,
  faClipboardList,
  faBook,
  faClipboardCheck,
  faPeopleArrows,
  faLanguage
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons/faLocationPin";
import { Dancing_Script } from "@next/font/google";
import { Great_Vibes } from "@next/font/google";

const dancingScript = Dancing_Script({
  weight: ["700"],
  subsets: ["latin"]
});
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"]
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 justify-center font-sans pt-10 pb-32">
      {" "}
      <div className="flex px-5 lg:px-24 md:px-12 sm:px-6 py-10 flex-col items-center">
        <div className="container flex flex-col gap-2  justify-center my-5">
          <h1 className="text-7xl lg:text-9xl text-white font-black tracking-tighter">
            Welcome.
          </h1>
          <hr className="bg-white w-full mb-5" />

          <Image
            height={500}
            width={500}
            alt="Dossou Toyo Amègnonna Marcel"
            src="/images/welcome.jpg"
            className="w-full my-6"
          />
          <h3 className="text-2xl lg:text-5xl text-white font-light items-start">
            I am DOSSOU Toyo Amègnonna Marcel and I am a{" "}
          </h3>
          <h1 className="text-5xl md:text-6xl lg:text-8xl text-white font-black tracking-tighter">
            Doctor in Economic Science.
          </h1>
          <div className="container text-white text-center font-black text-3xl md:text-5xl lg:text-7xl tracking-normal flex flex-col gap-10 justify-around w-full my-28 mx-auto">
            <p className={greatVibes.className}>
              &quot;There is no secret to success, it is the result of
              preparation, hard work, and learning from failure.&quot;
            </p>
          </div>

          <h1
            id="profil"
            className="text-7xl lg:text-9xl text-white font-black tracking-tighter"
          >
            Profile.
          </h1>
          <hr className="bg-white w-full mb-5" />
          <div className="container flex flex-col gap-2 justify-center my-2">
            <div className="container flex flex-col gap-10 justify-around w-full my-5 mx-auto">
              <h1 className="text-5xl text-white font-bold">About Me</h1>
              <div className="flex w-full mx-auto gap-6">
                <div className="container w-full h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 items-center justify-center lg:grid-cols-2 gap-5">
                  <Image
                    src="/images/Dossou Marcel.png"
                    alt="My Image"
                    height={500}
                    width={500}
                    objectFit="cover"
                    className="w-full"
                  />
                  <h3 className="text-white text-lg font-normal">
                    I am a Doctor in Economic Science, specialized in public
                    policy analysis and research on sustainable economic
                    development. My academic and professional background has
                    allowed me to develop deep expertise in the fields of
                    microeconomics, macroeconomics, and international economics.
                    Passionate about contemporary economic challenges, I strive
                    to provide solutions based on rigorous and innovative
                    analyses to promote equitable economic growth.
                    <br />
                    <br />
                    During my research, I have published several articles on the
                    effects of fiscal and monetary policies in developing
                    economies. My commitment to teaching and knowledge transfer
                    is reflected in my experience as a guest lecturer at various
                    universities, where I have trained the next generation of
                    economists.
                  </h3>
                </div>
              </div>
            </div>
            <div className="container text-white flex flex-col gap-8 h-auto">
              <h1 className="text-5xl text-white font-bold">My Journey</h1>
              <div className="container">
                <p className="font-normal text-lg">
                  My journey in economics began with a passion for understanding
                  the complex mechanisms underlying economic growth and
                  sustainable development. With a thesis on the impact of
                  monetary policies on emerging economies, I continued to
                  develop my expertise through research and collaborations with
                  international institutions.
                  <br />
                  <br />
                  Today, I apply my knowledge of applied economics to projects
                  aimed at solving economic inequalities, promoting inclusive
                  financial systems, and analyzing the effectiveness of public
                  policies in developing countries.
                </p>
              </div>
            </div>
          </div>
          <div className="container flex flex-col gap-10 justify-around w-full my-10 mx-auto">
            <h1 className="text-5xl text-white font-bold">My Experiences</h1>
            <div className="flex w-full mx-auto gap-6">
              <div className="container w-full text-white h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 items-center justify-center lg:grid-cols-2 gap-5">
                <p className="text-white text-lg font-normal">
                  Holding a PhD in economic sciences, I have dedicated my career
                  to analyzing economic dynamics and monetary policies in
                  emerging economies. My in-depth research on the interaction
                  between financial institutions and sustainable development has
                  allowed me to collaborate with various international
                  organizations. With several academic publications, I continue
                  to contribute to the advancement of knowledge in economics,
                  while applying my expertise to advise on economic growth and
                  governance issues.
                </p>
                <div className="container grid gap-5">
                  <div className="container border p-5 flex flex-col items-center justify-center rounded-md border-slate-500">
                    <span className="text-red-600 font-black text-4xl">
                      3+ years
                    </span>
                    <h3 className="font-bold text-2xl">Of Experience</h3>
                  </div>
                  <div className="container border p-5 flex flex-col items-center justify-center rounded-md border-slate-500">
                    <span className="text-red-600 font-black text-4xl">
                      10+
                    </span>
                    <h3 className="font-bold text-2xl">Mastered Skills</h3>
                  </div>
                  <div className="container border p-5 flex flex-col items-center justify-center rounded-md border-slate-500">
                    <span className="text-red-600 font-black text-4xl">15</span>
                    <h3 className="font-bold text-2xl">Completed Projects</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="bg-blue-500 p-3 w-1/2 text-white sm:w-1/2 md:w-1/4 lg:w-1/4 mx-auto focus:ring-2 focus:ring-blue-600 ring-offset-3 rounded my-6 ring-blue-600"
            onClick={() => window.open("/Marcel Dossou.pdf", "_blank")} // Link to the PDF file stored in public/Marcel Dossou.pdf
          >
            Download CV
          </button>

          <h1
            id="services"
            className="text-7xl lg:text-9xl text-white font-black tracking-tighter"
          >
            Services.
          </h1>
          <hr className="bg-white w-full mb-5" />

          <div className="container flex flex-col gap-2 justify-center my-5">
            <div className="container flex flex-col gap-10 justify-around w-full my-5 mx-auto">
              <h1 className="text-5xl text-white font-bold">My Services</h1>
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="container w-full h-auto flex-col flex gap-3 p-5 bg-gray-800 rounded-lg">
                  <FontAwesomeIcon
                    icon={faChalkboardTeacher}
                    className="text-white text-4xl"
                  />
                  <h3 className="text-white text-2xl font-bold">
                    Teaching and Training
                  </h3>
                  <p className="text-white text-xl font-light">
                    Lecturer at several academic institutions, teaching subjects
                    such as macroeconomics, microeconomics, and business
                    economics. Use of innovative teaching methods to engage
                    students and promote active learning.
                  </p>
                </div>
                <div className="container w-full h-auto flex-col flex gap-3 p-5 bg-gray-800 rounded-lg">
                  <FontAwesomeIcon
                    icon={faClipboardList}
                    className="text-white text-4xl"
                  />
                  <h3 className="text-white text-2xl font-bold">
                    Consulting and Research
                  </h3>
                  <p className="text-white text-xl font-light">
                    Consultant on research projects related to employment and
                    non-tax revenue forecasting. Development of in-depth studies
                    on graduate tracking and renewable energy development,
                    providing practical solutions to economic challenges.
                  </p>
                </div>
                <div className="container w-full h-auto flex-col flex gap-3 p-5 bg-gray-800 rounded-lg">
                  <FontAwesomeIcon
                    icon={faBook}
                    className="text-white text-4xl"
                  />
                  <h3 className="text-white text-2xl font-bold">
                    Academic Publications
                  </h3>
                  <p className="text-white text-xl font-light">
                    Author and co-author of several articles published in
                    renowned academic journals. Topics include tourism
                    economics, income inequality, and economic development,
                    contributing to research and the enrichment of knowledge in
                    the field.
                  </p>
                </div>
                <div className="container w-full h-auto flex-col flex gap-3 p-5 bg-gray-800 rounded-lg">
                  <FontAwesomeIcon
                    icon={faClipboardCheck}
                    className="text-white text-4xl"
                  />
                  <h3 className="text-white text-2xl font-bold">
                    Workshops and Seminars
                  </h3>
                  <p className="text-white text-xl font-light">
                    Active participation in community days and regional seminars
                    aimed at improving practices in the microfinance sector and
                    sharing knowledge on current economic topics.
                  </p>
                </div>
                <div className="container w-full h-auto flex-col flex gap-3 p-5 bg-gray-800 rounded-lg">
                  <FontAwesomeIcon
                    icon={faPeopleArrows}
                    className="text-white text-4xl"
                  />
                  <h3 className="text-white text-2xl font-bold">
                    Economic Policy Advice
                  </h3>
                  <p className="text-white text-xl font-light">
                    Expertise in analyzing and formulating recommendations on
                    economic policies aimed at improving governance and reducing
                    income inequality in various contexts.
                  </p>
                </div>
              </div>
            </div>
            <div className="container flex flex-col gap-10 justify-around w-full my-6 mx-auto p-5 bg-gray-800 rounded-lg shadow-lg">
              <h1 className="text-5xl text-white font-bold text-center">
                Notable Clients
              </h1>
              <p className="text-white text-lg text-center">
                Here are some institutions I have had the pleasure of working
                with:
              </p>
              <ul className="list-disc pl-6 text-white flex gap-3 font-light flex-wrap">
                <li className="hover:text-blue-400 transition duration-300 decoration-none list-none bg-slate-900 p-4 rounded-md">
                  University of Abomey-Calavi
                </li>
                <li className="hover:text-blue-400 transition duration-300 decoration-none list-none bg-slate-900 p-4 rounded-md">
                  Ministry of Economy and Finance
                </li>
                <li className="hover:text-blue-400 transition duration-300 decoration-none list-none bg-slate-900 p-4 rounded-md">
                  United Nations Development Organization
                </li>
                <li className="hover:text-blue-400 transition duration-300 decoration-none list-none bg-slate-900 p-4 rounded-md">
                  Applied Economics Research Center
                </li>
                <li className="hover:text-blue-400 transition duration-300 decoration-none list-none bg-slate-900 p-4 rounded-md">
                  Association of Graduate Students in Higher Education
                </li>
              </ul>
            </div>
          </div>

          <h1
            id="blog"
            className="text-7xl lg:text-9xl text-white font-black tracking-tighter mb-5"
          >
            Blog.
          </h1>
          <hr className="bg-white w-full mb-5" />
          <div className="container flex flex-col gap-2 justify-center my-5 transition delay-1000 duration-1000 ease-in">
            <div className="container flex flex-col gap-10 justify-around w-full my-5 mx-auto">
              <h1 className="text-5xl text-white font-bold">
                Discover my achievements
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link
                  href="https://doi.org/10.1111/1477-8947.12512"
                  className=""
                >
                  <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 delay-100 ease-in-out duration-300 hover:scale-110">
                    <Image
                      src="/images/blogItem.jpg"
                      alt="image"
                      height={500}
                      width={500}
                      objectFit="cover"
                      className="w-full"
                    />
                    <h1 className="text-2xl text-white font-bold">
                      The financial development and renewable energy consumption
                      nexus in Africa
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      2024, Natural Resources Forum
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Alinsato, A. S., Dossou, T. A. M., Dossou, P. K., N.
                      Kambaye, E., & Asongu, S. A. (2024). Does the quality of
                      governance matter?
                    </h3>
                  </div>
                </Link>
                <Link href="https://doi.org/10.1080/21568316.2024.2347211">
                  <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110 duration-300">
                    <Image
                      src="/images/blogItem.jpg"
                      alt="image"
                      height={500}
                      width={500}
                      objectFit="cover"
                      className="w-full"
                    />
                    <h1 className="text-2xl text-white font-bold">
                      Towards Efforts to Equalize Income in Africa: The Role of
                      Tourism Development
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      May 2, 2024, Tourism Planning & Development
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Toyo Amègnonna Marcel Dossou & Mesfin Welderufael Berhe
                      (2024)
                    </h3>
                  </div>
                </Link>

                <Link href="https://doi.org/10.1080/13683500.2024.2321336">
                  <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110 duration-300">
                    <Image
                      src="/images/blogItem.jpg"
                      alt="image"
                      height={500}
                      width={500}
                      objectFit="cover"
                      className="w-full"
                    />
                    <h1 className="text-2xl text-white font-bold">
                      Tourism and Income Inequality in Sub-Saharan African
                      Countries: The Role of Democracy
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      March 8, 2024, Current Issues in Tourism
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Wang Jiaqun, Kihumuro Jotham, Toyo Amègnonna Marcel
                      Dossou, et al.
                    </h3>
                  </div>
                </Link>

                <Link href="https://doi.org/10.1177/02666669231223136">
                  <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110 duration-300">
                    <Image
                      src="/images/blogItem.jpg"
                      alt="image"
                      height={500}
                      width={500}
                      objectFit="cover"
                      className="w-full"
                    />
                    <h1 className="text-2xl text-white font-bold">
                      Do Internet and Mobile Usage Affect the Democracy-Economic
                      Growth Nexus in Africa?
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      2024, Information Development
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Toyo Amègnonna Marcel Dossou, Kihumuro Jotham, et al.
                    </h3>
                  </div>
                </Link>

                <Link href="https://doi.org/10.1177/0958305X231215320">
                  <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110 duration-300">
                    <Image
                      src="/images/blogItem.jpg"
                      alt="image"
                      height={500}
                      width={500}
                      objectFit="cover"
                      className="w-full"
                    />
                    <h1 className="text-2xl text-white font-bold">
                      Can China’s Trade and Investment Facilitate Renewable
                      Energy Consumption in Africa?
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      2023, Energy & Environment
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Mesfin Welderufael Berhe, Toyo Amègnonna Marcel Dossou, et
                      al.
                    </h3>
                  </div>
                </Link>

                <Link href="https://doi.org/10.1111/issj.12476">
                  <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110 duration-300">
                    <Image
                      src="/images/blogItem.jpg"
                      alt="image"
                      height={500}
                      width={500}
                      objectFit="cover"
                      className="w-full"
                    />
                    <h1 className="text-2xl text-white font-bold">
                      Governance, Tourism, and Inclusive Growth in Africa
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      2023, International Social Science Journal
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Toyo Amègnonna Marcel Dossou, Simplice A. Asongu, et al.
                    </h3>
                  </div>
                </Link>
                <Link href="https://doi.org/10.1177/0958305X231215320">
                  <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110 duration-300">
                    <Image
                      src="/images/blogItem.jpg"
                      alt="image"
                      height={500}
                      width={500}
                      objectFit="cover"
                      className="w-full"
                    />
                    <h1 className="text-2xl text-white font-bold">
                      Tourism and the Mediterranean Experience Amidst
                      Environmental Issues
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      2023, International Journal of Energy Economics and Policy
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Bekun, F. V., Toyo Amègnonna Marcel Dossou, et al.
                    </h3>
                  </div>
                </Link>

                <Link href="https://doi.org/10.1177/13548166211043974">
                  <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110 duration-300">
                    <Image
                      src="/images/blogItem.jpg"
                      alt="image"
                      height={500}
                      width={500}
                      objectFit="cover"
                      className="w-full"
                    />
                    <h1 className="text-2xl text-white font-bold">
                      Exploring the linkage between tourism, governance quality,
                      and poverty reduction in Latin America
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      2021, Tourism Economics
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Toyo Amègnonna Marcel Dossou, et al.
                    </h3>
                  </div>
                </Link>

                <Link href="https://doi.org/10.1111/1467-8268.12511">
                  <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110 duration-300">
                    <Image
                      src="/images/blogItem.jpg"
                      alt="image"
                      height={500}
                      width={500}
                      objectFit="cover"
                      className="w-full"
                    />
                    <h1 className="text-2xl text-white font-bold">
                      Trade openness, FDI, and income inequality: Evidence from
                      sub-Saharan Africa
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      2021, African Development Review
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Xu, C., Han, M., Toyo Amègnonna Marcel Dossou, et al.
                    </h3>
                  </div>
                </Link>

                <Link href="https://doi.org/10.1080/13683500.2019.1676206">
                  <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110 duration-300">
                    <Image
                      src="/images/blogItem.jpg"
                      alt="image"
                      height={500}
                      width={500}
                      objectFit="cover"
                      className="w-full"
                    />
                    <h1 className="text-2xl text-white font-bold">
                      The relationship between tourism and sustainable economic
                      growth in the Republic of Benin
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      2020, Current Issues in Tourism
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Xuan Ming Pan & Toyo Amègnonna Marcel Dossou
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110 duration-300 my-3">
            <h1 className="text-2xl text-white font-bold">
              Workshop Participation
            </h1>
            <h3 className="text-sm text-white font-bold">
              June 18, 2024: Communal Days of Sanitation in the Microfinance
              Sector in Benin
            </h3>
          </div>

          <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110 duration-300 my-3">
            <h1 className="text-2xl text-white font-bold">References</h1>
            <div className="flex flex-col lg:flex-row ">
              <div className="text-white font-light">
                <h3 className="">Prof. Sèna Alastaire ALINSATO</h3>
                <p>Senior Lecturer in Economics (CAMES)</p>
                <p>Full Professor (CAMES)</p>
                <p>02 BP 2163 Gbégamey-Cotonou</p>
                <p>Tel: (00229) 97 87 17 00</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:alastaires@yahoo.fr"
                    className="text-blue-400"
                  >
                    alastaires@yahoo.fr
                  </a>
                </p>
              </div>

              <div className="text-white font-light">
                <h3>Prof. Simplice A. Asongu</h3>
                <p>African Governance and Development Institute</p>
                <p>P. O. Box 8413, Yaoundé, Cameroon</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:asongusimplice@yahoo.com"
                    className="text-blue-400"
                  >
                    asongusimplice@yahoo.com
                  </a>{" "}
                  /{" "}
                  <a
                    href="mailto:asongus@afridev.org"
                    className="text-blue-400"
                  >
                    asongus@afridev.org
                  </a>
                </p>
              </div>

              <div className="text-white font-light">
                <h3>Prof. Dr. Xu Chenghong</h3>
                <p>Professor of Economics</p>
                <p>
                  Southwestern University of Finance and Economics, Chengdu,
                  Sichuan, P. R. China
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:1090836173@qq.com" className="text-blue-400">
                    1090836173@qq.com
                  </a>
                </p>
                <p>Tel: +86-1348266234</p>
              </div>

              <div className="text-white font-light">
                <h3>Prof. Chen Ke</h3>
                <p>Professor of Economics</p>
                <p>Chongqing Jiaotong University</p>
                <p>
                  Email:{" "}
                  <a href="mailto:ckbest@163.com" className="text-blue-400">
                    ckbest@163.com
                  </a>
                </p>
                <p>Tel: +86-1363-7945-510</p>
              </div>
            </div>
          </div>

          <div className="container text-white font-medium mt-20">
            <p className="font-normal text-xl">
              In my research, I focus on key topics crucial for socio-economic
              development in Africa, especially governance, income inequality,
              and sustainable development. My study titled “Does E-governance
              reduce income inequality in sub-Saharan Africa?” explores the
              complex dynamics between e-governance and its impact on economic
              inequalities in the region. Through my work on foreign direct
              investment (FDI), such as in “Bridging Africa’s Income Inequality
              Gap: How Relevant Is China’s Outward FDI to Africa?”, I highlight
              the importance of these flows in the fight against inequality. By
              analyzing how governance quality affects renewable energy
              development, particularly in “Towards efforts to promote renewable
              energy development in Africa: Does governance quality matter?”, I
              address contemporary environmental and economic challenges
              affecting our continent. My research on remittances, such as
              “Remittances and Income Inequality in Africa,” also illustrates
              the crucial role of these financial flows in reducing inequality.
              I am also interested in how corruption may undermine tourism
              development, as shown in my study “Does corruption undermine
              tourism development in Africa?”. Furthermore, I explore
              Sino-African trade relations and their impact on carbon intensity
              in my research “The heterogeneous impact of Sino-African trade
              relations on Carbon intensity in Africa”. Through these works, I
              strive to propose practical solutions to the complex problems
              Africa faces. These significant contributions not only strengthen
              my academic expertise but also my commitment to sustainable
              development and economic equality, thus helping to establish my
              status as a doctor in my field.
            </p>
          </div>

          <div className="container text-white text-xl font-light text-center my-5">
            <p>
              Doctor of Economic Sciences, born January 16, 1990, in Atchannou
              (Athiémé), Benin.
            </p>
            <p>
              Laboratory of Public Economics, Faculty of Economics and
              Management, University of Abomey-Calavi.
            </p>
            <p>Tel: +229 97 96 14 17 | Email: dossoumarcel863@yahoo.fr</p>
          </div>

          <div className="flex flex-row items-center  justify-center text-white gap-3">
            <Link href="" className="hover:translate-y-2">
              <FontAwesomeIcon
                className="size-12 text-blue-600"
                icon={faFacebook}
              />
            </Link>
            <Link href="" className="hover:translate-y-2">
              {" "}
              <FontAwesomeIcon
                className="size-12 text-lime-600"
                icon={faWhatsapp}
              />
            </Link>
            <Link href="" className="hover:translate-y-2">
              {" "}
              <FontAwesomeIcon
                className="size-12 text-blue-500"
                icon={faLinkedin}
              />
            </Link>
          </div>
        </div>

        <hr className="bg-white w-full my-5" />

        <div className="container flex items-center justify-center">
          <h3 className="text-white text-md font-normal text-center">
            © <span className="text-blue-400">Portfolio.</span> All rights
            reserved. Created by{" "}
            <Link
              href="https://portfolio-cnkp.vercel.app"
              className="text-sky-400"
            >
              Ray Ague
            </Link>
          </h3>
        </div>

        <div className="container fixed bottom-5 left-auto items-center justify-around right-auto flex flex-row p-4 sm:p-2 backdrop-blur-2xl backdrop-brightness-200 rounded-3xl h-auto mx-2 sm:w-4/5 w-11/12 gap-1 lg:w-1/3 md:w-1/2">
          <Link
            href="/"
            className="bg-white rounded-full p-3 text-3xl tracking-tighter"
          >
            <FontAwesomeIcon className="size-8" icon={faHome} />
          </Link>
          <Link
            href="#profil"
            className="bg-white rounded-full p-3 text-3xl tracking-tighter"
          >
            <FontAwesomeIcon className="size-8" icon={faUser} />
          </Link>
          <Link
            href="#services"
            className="bg-white rounded-full p-3 text-3xl tracking-tighter"
          >
            <FontAwesomeIcon className="size-8" icon={faFileContract} />
          </Link>
          <Link
            href="#blog"
            className="bg-white rounded-full p-3 text-3xl tracking-tighter"
          >
            <FontAwesomeIcon className="size-8" icon={faBlog} />
          </Link>
          <Link
            href="/english"
            className="bg-white rounded-full p-3 text-3xl tracking-tighter"
          >
            <FontAwesomeIcon className="size-8" icon={faLanguage} />
          </Link>
        </div>
      </div>
    </main>
  );
}
