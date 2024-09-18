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
    <main className="flex min-h-screen flex-col bg-slate-950 justify-center font-sans pt-10 pb-32 ease-in delay-150">
      {" "}
      <div className="flex px-5 lg:px-24 md:px-12 sm:px-6 py-10 flex-col items-center">
        <div className="container flex flex-col gap-2  justify-center my-5">
          <h1 className="text-7xl lg:text-9xl text-white font-black tracking-tighter">
            Acceuil.
          </h1>
          <Image
            height={500}
            width={500}
            alt="Dossou Toyo Amègnonna Marcel"
            src="/images/pexels-tima-miroshnichenko-7567227.jpg"
            className="w-full my-6"
          />
          <h3 className="text-2xl lg:text-5xl text-white font-light items-start">
            Je suis DOSSOU Toyo Amègnonna Marcel et suis un{" "}
          </h3>
          <h1 className="text-7xl lg:text-8xl text-white font-black tracking-tighter">
            Docteur en Science Économique.
          </h1>
          <div className="container text-white text-center font-black text-3xl md:text-5xl lg:text-7xl tracking-normal flex flex-col gap-10 justify-around w-full my-28 mx-auto">
            <p className={greatVibes.className}>
              &quot;Il n&apos;y a pas de secret pour réussir, c&apos;est le
              résultat de la préparation, du travail et de l&apos;apprentissage
              de l&apos;échec.&quot;
            </p>
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
            <Link href="" className="hover:translate-y-2">
              {" "}
              <FontAwesomeIcon
                className="size-12 text-red-600"
                icon={faInstagram}
              />
            </Link>
          </div>
        </div>

        <hr className="bg-white w-full my-5" />

        <div className="container flex items-center justify-center">
          <h3 className="text-white text-md font-normal text-center">
            © <span className="text-blue-400">BlogPortfolio.</span> Tous droits
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
