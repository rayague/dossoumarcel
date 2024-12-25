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
            Acceiul.
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
            Je suis DOSSOU Toyo Amègnonna Marcel et je suis un{" "}
          </h3>
          <h1 className="text-5xl md:text-6xl lg:text-8xl text-white font-black tracking-tighter">
            Docteur en Science Économique.
          </h1>
          <div className="container text-white text-center font-black text-3xl md:text-5xl lg:text-7xl tracking-normal flex flex-col gap-10 justify-around w-full my-28 mx-auto">
            <p className={greatVibes.className}>
              &quot;Il n&apos;y a pas de secret pour réussir, c&apos;est le
              résultat de la préparation, du travail et de l&apos;apprentissage
              de l&apos;échec.&quot;
            </p>
          </div>

          <h1
            id="profil"
            className="text-7xl lg:text-9xl text-white font-black tracking-tighter"
          >
            Profil.
          </h1>
          <hr className="bg-white w-full mb-5" />
          <div className="container flex flex-col gap-2 justify-center my-2">
            <div className="container flex flex-col gap-10 justify-around w-full my-5 mx-auto">
              <h1 className="text-5xl text-white font-bold">À Propos de Moi</h1>
              <div className="flex w-full mx-auto gap-6">
                <div className="container w-full h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 items-center justify-center lg:grid-cols-2 gap-5">
                  <Image
                    src="/images/Dossou Marcel.png"
                    alt="Mon Image"
                    height={500}
                    width={500}
                    objectFit="cover"
                    className="w-full"
                  />
                  <h3 className="text-white text-lg font-normal">
                    Je suis Docteur en Sciences Économiques, spécialisé en
                    analyse des politiques publiques et la recherche sur le
                    développement économique durable. Mon parcours académique et
                    professionnel m&apos;a permis de développer une expertise
                    approfondie dans les domaines de la microéconomie, la
                    macroéconomie et l&apos;économie internationale. Passionné
                    par les défis économiques contemporains, je m&apos;efforce
                    d&apos;apporter des solutions basées sur des analyses
                    rigoureuses et innovantes pour favoriser une croissance
                    économique équitable.
                    <br />
                    <br />
                    Au cours de mes recherches, j&apos;ai publié plusieurs
                    articles sur les effets des politiques fiscales et
                    monétaires dans les économies en développement. Mon
                    engagement envers l&apos;enseignement et la transmission du
                    savoir se traduit par mon expérience en tant que Docteur
                    invité dans diverses universités, où j&apos;ai formé la
                    prochaine génération d&apos;économistes.
                  </h3>
                </div>
              </div>
            </div>
            <div className="container text-white flex flex-col gap-8 h-auto">
              <h1 className="text-5xl text-white font-bold">Mon Parcours</h1>
              <div className="container">
                <p className="font-normal text-lg">
                  Mon parcours en économie a commencé par une passion pour la
                  compréhension des mécanismes complexes qui sous-tendent la
                  croissance économique et le développement durable. Diplômé
                  avec une thèse portant sur l&apos;impact des politiques
                  monétaires sur les économies émergentes, j&apos;ai continué à
                  développer mon expertise à travers des travaux de recherche et
                  des collaborations avec des institutions internationales.
                  <br />
                  <br />
                  Aujourd&apos;hui, je mets mes connaissances en économie
                  appliquée au service de projets visant à résoudre les
                  inégalités économiques, à promouvoir des systèmes financiers
                  inclusifs et à analyser l&apos;efficacité des politiques
                  publiques dans les pays en développement.
                </p>
              </div>
            </div>
          </div>
          <div className="container flex flex-col gap-10 justify-around w-full my-10 mx-auto">
            <h1 className="text-5xl text-white font-bold">Mes Expériences</h1>
            <div className="flex w-full mx-auto gap-6">
              <div className="container w-full text-white h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 items-center justify-center lg:grid-cols-2 gap-5">
                <p className="text-white text-lg font-normal">
                  Titulaire d&apos;un doctorat en sciences économiques,
                  j&apos;ai consacré ma carrière à l&apos;analyse des dynamiques
                  économiques et des politiques monétaires dans les économies
                  émergentes. Mes recherches approfondies sur l&apos;interaction
                  entre les institutions financières et le développement durable
                  m&apos;ont permis de collaborer avec diverses organisations
                  internationales. Fort de plusieurs publications académiques,
                  je continue de contribuer à l&apos;avancement des
                  connaissances en économie, tout en appliquant mon expertise
                  pour conseiller sur des questions de croissance économique et
                  de gouvernance.
                </p>
                <div className="container grid gap-5">
                  <div className="container border p-5 flex flex-col items-center justify-center rounded-md border-slate-500">
                    <span className="text-red-600 font-black text-4xl">
                      3+ ans
                    </span>
                    <h3 className="font-bold text-2xl">D&apos;expériences</h3>
                  </div>
                  <div className="container border p-5 flex flex-col items-center justify-center rounded-md border-slate-500">
                    <span className="text-red-600 font-black text-4xl">
                      10+
                    </span>
                    <h3 className="font-bold text-2xl">
                      Compétences Maîtrisées
                    </h3>
                  </div>
                  <div className="container border p-5 flex flex-col items-center justify-center rounded-md border-slate-500">
                    <span className="text-red-600 font-black text-4xl">15</span>
                    <h3 className="font-bold text-2xl">Projets accomplis</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="bg-blue-500 p-3 w-1/2 text-white sm:w-1/2 md:w-1/4 lg:w-1/4 mx-auto focus:ring-2 focus:ring-blue-600 ring-offset-3 rounded my-6 ring-blue-600"
            onClick={() => window.open("/Marcel Dossou.pdf", "_blank")} // Lien vers le fichier PDF stocké dans public/Marcel Dossou.pdf
          >
            Télécharger CV
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
              <h1 className="text-5xl text-white font-bold">Mes Services</h1>
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="container w-full h-auto flex-col flex gap-3 p-5 bg-gray-800 rounded-lg">
                  <FontAwesomeIcon
                    icon={faChalkboardTeacher}
                    className="text-white text-4xl"
                  />
                  <h3 className="text-white text-2xl font-bold">
                    Enseignement et Formation
                  </h3>
                  <p className="text-white text-xl font-light">
                    Chargé de cours dans plusieurs institutions académiques,
                    enseignant des matières telles que la macroéconomie, la
                    microéconomie, et l&apos;économie d&apos;entreprise.
                    Utilisation de méthodes pédagogiques innovantes pour engager
                    les étudiants et favoriser l&apos;apprentissage actif.
                  </p>
                </div>
                <div className="container w-full h-auto flex-col flex gap-3 p-5 bg-gray-800 rounded-lg">
                  <FontAwesomeIcon
                    icon={faClipboardList}
                    className="text-white text-4xl"
                  />
                  <h3 className="text-white text-2xl font-bold">
                    Consultation et Recherche
                  </h3>
                  <p className="text-white text-xl font-light">
                    Consultant sur des projets de recherche liés à l&apos;emploi
                    et à la prévision des recettes non fiscales. Élaboration
                    d&apos;études approfondies sur le suivi des diplômés de
                    l&apos;enseignement supérieur et le développement de
                    l&apos;énergie renouvelable, apportant des solutions
                    pratiques aux défis économiques.
                  </p>
                </div>
                <div className="container w-full h-auto flex-col flex gap-3 p-5 bg-gray-800 rounded-lg">
                  <FontAwesomeIcon
                    icon={faBook}
                    className="text-white text-4xl"
                  />
                  <h3 className="text-white text-2xl font-bold">
                    Publications Académiques
                  </h3>
                  <p className="text-white text-xl font-light">
                    Auteur et co-auteur de plusieurs articles publiés dans des
                    revues académiques renommées. Les sujets incluent
                    l&apos;économie touristique, l&apos;inégalité des revenus,
                    et le développement économique, contribuant ainsi à la
                    recherche et à l&apos;enrichissement des connaissances dans
                    le domaine.
                  </p>
                </div>
                <div className="container w-full h-auto flex-col flex gap-3 p-5 bg-gray-800 rounded-lg">
                  <FontAwesomeIcon
                    icon={faClipboardCheck}
                    className="text-white text-4xl"
                  />
                  <h3 className="text-white text-2xl font-bold">
                    Ateliers et Séminaires
                  </h3>
                  <p className="text-white text-xl font-light">
                    Participation active à des journées communales et séminaires
                    régionaux, visant à améliorer les pratiques dans le secteur
                    de la microfinance et à partager des connaissances sur des
                    sujets économiques d&apos;actualité.
                  </p>
                </div>
                <div className="container w-full h-auto flex-col flex gap-3 p-5 bg-gray-800 rounded-lg">
                  <FontAwesomeIcon
                    icon={faPeopleArrows}
                    className="text-white text-4xl"
                  />
                  <h3 className="text-white text-2xl font-bold">
                    Conseils en Politique Économique
                  </h3>
                  <p className="text-white text-xl font-light">
                    Expertise dans l&apos;analyse et la formulation de
                    recommandations sur les politiques économiques, visant à
                    améliorer la gouvernance et à réduire l&apos;inégalité des
                    revenus dans divers contextes.
                  </p>
                </div>
              </div>
            </div>
            <div className="container flex flex-col gap-10 justify-around w-full my-6 mx-auto p-5 bg-gray-800 rounded-lg shadow-lg">
              <h1 className="text-5xl text-white font-bold text-center">
                Clients Notables
              </h1>
              <p className="text-white text-lg text-center">
                Voici quelques institutions pour lesquelles j&apos;ai eu le
                plaisir de travailler :
              </p>
              <ul className="list-disc pl-6 text-white flex gap-3 font-light flex-wrap">
                <li className="hover:text-blue-400 transition duration-300 decoration-none list-none bg-slate-900 p-4 rounded-md">
                  Université d&apos;Abomey-Calavi
                </li>
                <li className="hover:text-blue-400 transition duration-300 decoration-none list-none bg-slate-900 p-4 rounded-md">
                  Ministère de l&apos;Économie et des Finances
                </li>
                <li className="hover:text-blue-400 transition duration-300 decoration-none list-none bg-slate-900 p-4 rounded-md">
                  Organisation des Nations Unies pour le développement
                </li>
                <li className="hover:text-blue-400 transition duration-300 decoration-none list-none bg-slate-900 p-4 rounded-md">
                  Centre de Recherche en Économie Appliquée
                </li>
                <li className="hover:text-blue-400 transition duration-300 decoration-none list-none bg-slate-900 p-4 rounded-md">
                  Association des Étudiants Diplômés de l&apos;Enseignement
                  Supérieur
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
                Découvrez mes réalisations
              </h1>
              <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
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
                  <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110  duration-300">
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
                <Link href="https://doi.org/10.1016/j.renene.2023.119403">
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
                      Foreign Direct Investment and Renewable Energy Development
                      in Sub-Saharan Africa
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      2023, Renewable Energy
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Toyo Amègnonna Marcel Dossou, Kambaye, E. N., et al.
                    </h3>
                  </div>
                </Link>
                <Link href="https://doi.org/10.32479/ijeep.14826">
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
                <Link href="https://doi.org/10.1080/13683500.2023.2214351">
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
                      The Impact of Tourism Development on Social Welfare in
                      Africa
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      2023, Current Issues in Tourism
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Xuanming Pan, Toyo Amègnonna Marcel Dossou, et al.
                    </h3>
                  </div>
                </Link>
                <Link href="https://doi.org/10.1007/s11205-023-03120-x">
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
                      Income Inequality in Africa: Urbanization and Governance
                      Quality
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      2023, Social Indicators Research
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Toyo Amègnonna Marcel Dossou
                    </h3>
                  </div>
                </Link>
                <Link href="https://doi.org/10.1177/02666669231170396">
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
                      Moderating Effect of ICT on Governance Quality and Income
                      Inequality
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      2023, Information Development
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Toyo Amègnonna Marcel Dossou, et al.
                    </h3>
                  </div>
                </Link>
                <Link href="https://doi.org/10.1016/j.mulfin.2023.100798">
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
                      Towards Inclusive Growth in Africa: Remittances and
                      Financial Development
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      2023, Journal of Multinational Financial Management
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Ofori, K., Gbolonyo, E., Toyo Amègnonna Marcel Dossou, et
                      al.
                    </h3>
                  </div>
                </Link>
                <Link href="https://doi.org/10.1016/j.tmp.2023.101086">
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
                      Efforts to Lessen Income Inequality in Asia: Tourism and
                      Governance Quality
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      2023, Tourism Management Perspectives
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Toyo Amègnonna Marcel Dossou, et al.
                    </h3>
                  </div>
                </Link>
                <Link href="https://doi.org/10.1016/j.resglo.2022.100084">
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
                      Remittances and Income Inequality in Africa: Financial
                      Development Thresholds for Economic Policy
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      2022, Research in Globalization
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Ofori, K., Gbolonyo, E., Toyo Amègnonna Marcel Dossou, &
                      Richard, K.
                    </h3>
                  </div>
                </Link>

                <Link href="https://doi.org/10.1177/0958305X2211202">
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
                      Towards efforts to promote renewable energy development in
                      Africa: Does governance quality matter?
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      2022, Energy & Environment
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Xuanming Pan, Toyo Amègnonna Marcel Dossou, et al.
                    </h3>
                  </div>
                </Link>

                <Link href="https://doi.org/10.1080/13683500.2022.2069553">
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
                      Does corruption undermine tourism development in Africa?
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      2022, Current Issues in Tourism
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Chenghong Xu, Toyo Amègnonna Marcel Dossou, et al.
                    </h3>
                  </div>
                </Link>

                <Link href="https://doi.org/10.1016/j.jenvman.2022.115233">
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
                      The heterogeneous impact of Sino-African trade relations
                      on Carbon intensity in Africa
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      2022, Journal of Environmental Management
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Huang, J., Toyo Amègnonna Marcel Dossou, et al.
                    </h3>
                  </div>
                </Link>

                <Link href="https://doi.org/10.1080/13683500.2021.2021157">
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
                      Towards the quest to reduce income inequality in Africa:
                      is there a synergy between tourism development and
                      governance?
                    </h1>
                    <h3 className="text-sm text-white font-bold">
                      2022, Current Issues in Tourism
                    </h3>
                    <h3 className="text-white text-xl font-light">
                      Isaac Kwesi Ofori, Toyo Amègnonna Marcel Dossou, et al.
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
            <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110 duration-300 my-3">
              <h1 className="text-2xl text-white font-bold">
                Participation aux Ateliers
              </h1>
              <h3 className="text-sm text-white font-bold">
                18 juin 2024 : Journées Communales d’assainissement du secteur
                de la microfinance au Bénin
              </h3>
            </div>

            <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110 duration-300 my-3">
              <h1 className="text-2xl text-white font-bold">Références</h1>
              <div className="flex flex-col lg:flex-row ">
                <div className="text-white font-light">
                  <h3 className="">Prof. Sèna Alastaire ALINSATO</h3>
                  <p>
                    Maitre de Conférences Agrégé des Facultés de Sciences
                    Économiques (CAMES)
                  </p>
                  <p>Professeur Titulaire des Universités (CAMES)</p>
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
                    <a
                      href="mailto:1090836173@qq.com"
                      className="text-blue-400"
                    >
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
                Dans ma recherche, je me consacre à des sujets cruciaux pour le
                développement socio-économique en Afrique, en particulier la
                gouvernance, les inégalités de revenus et le développement
                durable. Mon étude intitulée « Does E-governance reduce income
                inequality in sub-Saharan Africa ? » explore les dynamiques
                complexes entre la gouvernance électronique et son impact sur
                les inégalités économiques dans la région. À travers mes travaux
                sur le rôle des investissements directs étrangers, comme dans «
                Bridging Africa’s Income Inequality Gap: How Relevant Is China’s
                Outward FDI to Africa ? », je mets en lumière l&apos;importance
                de ces flux dans la lutte contre les inégalités. En analysant
                comment la qualité de la gouvernance influence le développement
                des énergies renouvelables, notamment dans « Towards efforts to
                promote renewable energy development in Africa: Does governance
                quality matter ? », j&apos;aborde les défis environnementaux et
                économiques contemporains qui affectent notre continent. Mes
                recherches sur les transferts de fonds, telles que « Remittances
                and Income Inequality in Africa », illustrent également le rôle
                crucial de ces flux financiers dans la réduction des inégalités.
                Je m&apos;intéresse également à la manière dont la corruption
                peut miner le développement touristique, comme le montre mon
                étude « Does corruption undermine tourism development in Africa
                ? ». En outre, j’explore les relations commerciales
                sino-africaines et leur influence sur l&apos;intensité carbone
                dans ma recherche sur « The heterogeneous impact of Sino-African
                trade relations on Carbon intensity in Africa ». À travers ces
                travaux, je m&apos;efforce de proposer des solutions pratiques
                aux problèmes complexes auxquels l&apos;Afrique est confrontée.
                Ces contributions significatives renforcent non seulement mon
                expertise académique, mais aussi mon engagement envers le
                développement durable et l&apos;égalité économique, contribuant
                ainsi à établir mon statut de docteur dans mon domaine.
              </p>
            </div>
          </div>
          <div className="container text-white text-xl font-light text-center my-5">
            <p>
              Docteur en Science Économique, né le 16 janvier 1990 à Atchannou
              (Athiémé), Bénin.
            </p>
            <p>
              Laboratoire d&apos;Économie Publique, Faculté des Sciences
              Économiques et de Gestion, Université d&apos;Abomey-Calavi.
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
            © <span className="text-blue-400">Portfolio.</span> Tous droits
            réservés. Réalisé par{" "}
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
            href="/"
            className="bg-white rounded-full p-3 text-3xl tracking-tighter"
          >
            <FontAwesomeIcon className="size-8" icon={faLanguage} />
          </Link>
        </div>
      </div>
    </main>
  );
}
