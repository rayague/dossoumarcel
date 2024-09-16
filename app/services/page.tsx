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
  faPeopleArrows
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
            Services.
          </h1>
          <Image
            height={500}
            width={500}
            objectFit="cover"
            alt="image"
            src="/images/picture7.jpg"
            className="w-full my-6"
          />
          <div className="container flex flex-col gap-10 justify-around w-full my-16 mx-auto">
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
                  microéconomie, et l'économie d'entreprise. Utilisation de
                  méthodes pédagogiques innovantes pour engager les étudiants et
                  favoriser l'apprentissage actif.
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
                  Consultant sur des projets de recherche liés à l'emploi et à
                  la prévision des recettes non fiscales. Élaboration d'études
                  approfondies sur le suivi des diplômés de l’enseignement
                  supérieur et le développement de l'énergie renouvelable,
                  apportant des solutions pratiques aux défis économiques.
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
                  revues académiques renommées. Les sujets incluent l'économie
                  touristique, l'inégalité des revenus, et le développement
                  économique, contribuant ainsi à la recherche et à
                  l'enrichissement des connaissances dans le domaine.
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
                  régionaux, visant à améliorer les pratiques dans le secteur de
                  la microfinance et à partager des connaissances sur des sujets
                  économiques d'actualité.
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
                  Expertise dans l'analyse et la formulation de recommandations
                  sur les politiques économiques, visant à améliorer la
                  gouvernance et à réduire l'inégalité des revenus dans divers
                  contextes.
                </p>
              </div>
            </div>
          </div>
          <div className="container flex flex-col gap-10 justify-around w-full my-6 mx-auto p-5 bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-5xl text-white font-bold text-center">
              Clients Notables
            </h1>
            <p className="text-white text-lg text-center">
              Voici quelques institutions pour lesquelles j'ai eu le plaisir de
              travailler :
            </p>
            <ul className="list-disc pl-6 text-white flex gap-3 font-light flex-wrap">
              <li className="hover:text-blue-400 transition duration-300 decoration-none list-none bg-slate-900 p-4 rounded-md">
                Université d'Abomey-Calavi
              </li>
              <li className="hover:text-blue-400 transition duration-300 decoration-none list-none bg-slate-900 p-4 rounded-md">
                Ministère de l'Économie et des Finances
              </li>
              <li className="hover:text-blue-400 transition duration-300 decoration-none list-none bg-slate-900 p-4 rounded-md">
                Organisation des Nations Unies pour le développement
              </li>
              <li className="hover:text-blue-400 transition duration-300 decoration-none list-none bg-slate-900 p-4 rounded-md">
                Centre de Recherche en Économie Appliquée
              </li>
              <li className="hover:text-blue-400 transition duration-300 decoration-none list-none bg-slate-900 p-4 rounded-md">
                Association des Étudiants Diplômés de l'Enseignement Supérieur
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-white w-full my-5" />
        <div className="container flex items-center justify-center">
          <h3 className="text-white text-md font-normal text-center">
            © <span className="text-blue-400">BlogPortFotlio.</span> Tous droits
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
