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
  faBlog
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 justify-center font-sans pt-10 pb-32">
      <div className="flex px-5 lg:px-24 md:px-12 sm:px-6 py-10 flex-col items-center">
        <div className="container flex flex-col gap-2 justify-center my-5">
          <h1 className="text-7xl lg:text-9xl text-white font-black tracking-tighter">
            Profil.
          </h1>
          <Image
            height={500}
            width={500}
            objectFit="cover"
            alt="image"
            src="/images/lg/pictureLg12.jpg"
            className="w-full my-6"
          />
          <div className="container flex flex-col gap-10 justify-around w-full my-16 mx-auto">
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
                  Je suis Docteur en Sciences Économiques, spécialisé dans
                  l'analyse des politiques publiques et la recherche sur le
                  développement économique durable. Mon parcours académique et
                  professionnel m'a permis de développer une expertise
                  approfondie dans les domaines de la microéconomie, la
                  macroéconomie et l'économie internationale. Passionné par les
                  défis économiques contemporains, je m'efforce d'apporter des
                  solutions basées sur des analyses rigoureuses et innovantes
                  pour favoriser une croissance économique équitable.
                  <br />
                  <br />
                  Au cours de mes recherches, j'ai publié plusieurs articles sur
                  les effets des politiques fiscales et monétaires dans les
                  économies en développement. Mon engagement envers
                  l'enseignement et la transmission du savoir se traduit par mon
                  expérience en tant que professeur invité dans diverses
                  universités, où j'ai formé la prochaine génération
                  d'économistes.
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
                croissance économique et le développement durable. Diplômé avec
                une thèse portant sur l'impact des politiques monétaires sur les
                économies émergentes, j'ai continué à développer mon expertise à
                travers des travaux de recherche et des collaborations avec des
                institutions internationales.
                <br />
                <br />
                Aujourd'hui, je mets mes connaissances en économie appliquée au
                service de projets visant à résoudre les inégalités économiques,
                à promouvoir des systèmes financiers inclusifs et à analyser
                l'efficacité des politiques publiques dans les pays en
                développement.
              </p>
            </div>
          </div>
        </div>
        <div className="container flex flex-col gap-10 justify-around w-full my-10 mx-auto">
          <h1 className="text-5xl text-white font-bold">Mes Expériences</h1>
          <div className="flex w-full mx-auto gap-6">
            <div className="container w-full text-white h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 items-center justify-center lg:grid-cols-2 gap-5">
              <p className="text-white text-lg font-normal">
                J'ai eu la chance de travailler sur plusieurs projets tels que
                la création de sites web pour des entreprises locales, le
                développement d'applications mobiles, et des projets personnels
                liés à l'environnement et à la mode durable. Ces expériences
                m'ont permis de renforcer mes compétences en développement et en
                gestion de projets.
              </p>
              <div className="container grid gap-5">
                <div className="container border p-5 flex flex-col items-center justify-center rounded-md border-slate-500">
                  <span className="text-red-600 font-black text-4xl">
                    3+ ans
                  </span>
                  <h3 className="font-bold text-2xl">D'expériences</h3>
                </div>
                <div className="container border p-5 flex flex-col items-center justify-center rounded-md border-slate-500">
                  <span className="text-red-600 font-black text-4xl">10+</span>
                  <h3 className="font-bold text-2xl">Compétences Maîtrisées</h3>
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

        <hr className="bg-white w-full my-5" />
        <div className="container flex items-center justify-center">
          <h3 className="text-white text-md font-normal text-center">
            © <span className="text-blue-400">Ray Portfolio</span>. Tous droits
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
            href="/profil"
            className="bg-white rounded-full p-3 text-3xl tracking-tighter"
          >
            <FontAwesomeIcon className="size-8" icon={faUser} />
          </Link>
          <Link
            href="/services"
            className="bg-white rounded-full p-3 text-3xl tracking-tighter"
          >
            <FontAwesomeIcon className="size-8" icon={faFileContract} />
          </Link>
          <Link
            href="/contact"
            className="bg-white rounded-full p-3 text-3xl tracking-tighter"
          >
            <FontAwesomeIcon className="size-8" icon={faContactBook} />
          </Link>
          <Link
            href="/blog"
            className="bg-white rounded-full p-3 text-3xl tracking-tighter"
          >
            <FontAwesomeIcon className="size-8" icon={faBlog} />
          </Link>
        </div>
      </div>
    </main>
  );
}
