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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 justify-center font-sans pt-10 pb-32">
      <h3 className="text-3xl text-white mx-10">Logo</h3>
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
            <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3  gap-6">
              <div className="container w-full h-auto flex-col flex gap-3">
                <h3 className="text-white text-2xl font-bold">Service 1</h3>
                <p className="text-white text-xl font-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officia, provident Lorem ipsum dolor sit amet Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Dolor, commodi?.
                </p>
              </div>
              <div className="container w-full h-auto flex-col flex gap-3">
                <h3 className="text-white text-2xl font-bold">Service 2</h3>

                <p className="text-white text-xl font-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officia, provident Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="container w-full h-auto flex-col flex gap-3">
                <h3 className="text-white text-2xl font-bold">Service 3</h3>

                <p className="text-white text-xl font-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officia, provident Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Culpa,
                  voluptatibus!
                </p>
              </div>
              <div className="container w-full h-auto flex-col flex gap-3">
                <h3 className="text-white text-2xl font-bold">Service 4</h3>
                <p className="text-white text-xl font-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officia, provident Lorem ipsum dolor sit amet Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Dolor, commodi?.
                </p>
              </div>
              <div className="container w-full h-auto flex-col flex gap-3">
                <h3 className="text-white text-2xl font-bold">Service 5</h3>
                <p className="text-white text-xl font-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officia, provident Lorem ipsum dolor sit amet Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Dolor, commodi?.
                </p>
              </div>
            </div>
          </div>
          <div className="container flex flex-col gap-10 justify-around w-full my-6 mx-auto">
            <h1 className="text-5xl text-white font-bold">Nos Clients</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              amet ratione harum accusantium, alias sed necessitatibus
              reprehenderit dolor culpa nobis, praesentium magnam, quidem
              similique repellat quam voluptatum provident perferendis debitis?
            </p>
            <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3  gap-3">
              <div className="container w-full h-auto flex-col flex gap-3">
                <Image
                  height={500}
                  width={500}
                  objectFit="cover"
                  alt="image"
                  src="/images/picture7.jpg"
                  className="w-full my-6"
                />
              </div>
              <div className="container w-full h-auto flex-col flex gap-3">
                <Image
                  height={500}
                  width={500}
                  objectFit="cover"
                  alt="image"
                  src="/images/picture8.jpg"
                  className="w-full my-6"
                />
              </div>
              <div className="container w-full h-auto flex-col flex gap-3">
                <Image
                  height={500}
                  width={500}
                  objectFit="cover"
                  alt="image"
                  src="/images/picture9.jpg"
                  className="w-full my-6"
                />
              </div>
              <div className="container w-full h-auto flex-col flex gap-3">
                <Image
                  height={500}
                  width={500}
                  objectFit="cover"
                  alt="image"
                  src="/images/picture10.jpg"
                  className="w-full my-6"
                />
              </div>
              <div className="container w-full h-auto flex-col flex gap-3">
                <Image
                  height={500}
                  width={500}
                  objectFit="cover"
                  alt="image"
                  src="/images/picture11.jpg"
                  className="w-full my-6"
                />
              </div>
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
