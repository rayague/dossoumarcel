import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
import { faLocationPin } from "@fortawesome/free-solid-svg-icons/faLocationPin";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 justify-center font-sans pt-10 pb-32">
      <h3 className="text-3xl text-white mx-10">Logo</h3>
      <div className="flex px-5 lg:px-24 md:px-12 sm:px-6 py-10 flex-col items-center">
        <div className="container flex flex-col gap-2 justify-center my-5">
          <h1 className="text-7xl lg:text-9xl text-white font-black tracking-tighter">
            Contact.
          </h1>
          <Image
            height={500}
            width={500}
            objectFit="cover"
            alt="image"
            src="/images/lg/pictureLg31.jpg"
            className="w-full my-6"
          />
          <div className="container flex flex-col gap-10 justify-around w-full mt-16 mx-auto">
            <h1 className="text-5xl text-white font-bold">
              Veiullez me contacter
            </h1>
            <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 text-white font-bold gap-6">
              <div className="bg-gray-700 rounded flex flex-row items-center justify-center p-8 gap-3">
                <FontAwesomeIcon className="size-8" icon={faLocationPin} />
                <p>Abomey-Calavi 02BP 2163, Gbégamey-Cotonou</p>
              </div>
              <div className="bg-gray-700 rounded flex flex-row items-center justify-center p-8 gap-3">
                <FontAwesomeIcon className="size-8" icon={faEnvelope} />

                <p>dossoumarcel863@yahoo.fr </p>
              </div>
              <div className="bg-gray-700 rounded flex flex-row items-center justify-center p-8 gap-3">
                <FontAwesomeIcon className="size-8" icon={faPhone} />
                <p>+229 97 96 14 17</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center mt-16 text-white gap-3">
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
              <Link href="" className="hover:translate-y-2">
                {" "}
                <FontAwesomeIcon
                  className="size-12 text-red-600"
                  icon={faInstagram}
                />
              </Link>
            </div>
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
