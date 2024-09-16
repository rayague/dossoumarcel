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
      <div className="flex px-5 lg:px-24 md:px-12 sm:px-6 py-10 flex-col items-center">
        <div className="container flex flex-col gap-2 justify-center my-5">
          <h1 className="text-7xl lg:text-9xl text-white font-black tracking-tighter">
            Blog.
          </h1>
          <Image
            height={500}
            width={500}
            objectFit="cover"
            alt="image"
            src="/images/lg/pictureLg1.jpg"
            className="w-full my-6"
          />
          <div className="container flex flex-col gap-10 justify-around w-full my-16 mx-auto">
            <h1 className="text-5xl text-white font-bold">
              Découvrez mes projets
            </h1>
            <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-6">
              <Link href="">
                <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110">
                  <Image
                    src="/images/picture2.jpg"
                    alt="image"
                    height={500}
                    width={500}
                    objectFit="cover"
                    className="w-full"
                  />
                  <h1 className="text-2xl text-white font-bold">Title Here</h1>
                  <h3 className="text-sm text-white font-bold">
                    September 12, 2024
                  </h3>
                  <h3 className="text-white text-xl font-light">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia, provident Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                  </h3>
                </div>
              </Link>
              <Link href="">
                <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110">
                  <Image
                    src="/images/picture5.jpg"
                    alt="image"
                    height={500}
                    width={500}
                    objectFit="cover"
                    className="w-full"
                  />
                  <h1 className="text-2xl text-white font-bold">Title Here</h1>
                  <h3 className="text-sm text-white font-bold">
                    September 12, 2024
                  </h3>
                  <h3 className="text-white text-xl font-light">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia, provident Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                  </h3>
                </div>
              </Link>
              <Link href="">
                <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110">
                  <Image
                    src="/images/picture12.jpg"
                    alt="image"
                    height={500}
                    width={500}
                    objectFit="cover"
                    className="w-full"
                  />
                  <h1 className="text-2xl text-white font-bold">Title Here</h1>
                  <h3 className="text-sm text-white font-bold">
                    September 12, 2024
                  </h3>
                  <h3 className="text-white text-xl font-light">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia, provident Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                  </h3>
                </div>
              </Link>
              <Link href="">
                <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110">
                  <Image
                    src="/images/picture13.jpg"
                    alt="image"
                    height={500}
                    width={500}
                    objectFit="cover"
                    className="w-full"
                  />
                  <h1 className="text-2xl text-white font-bold">Title Here</h1>
                  <h3 className="text-sm text-white font-bold">
                    September 12, 2024
                  </h3>
                  <h3 className="text-white text-xl font-light">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia, provident Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                  </h3>
                </div>
              </Link>
              <Link href="">
                <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110">
                  <Image
                    src="/images/picture14.jpg"
                    alt="image"
                    height={500}
                    width={500}
                    objectFit="cover"
                    className="w-full"
                  />
                  <h1 className="text-2xl text-white font-bold">Title Here</h1>
                  <h3 className="text-sm text-white font-bold">
                    September 12, 2024
                  </h3>
                  <h3 className="text-white text-xl font-light">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia, provident Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                  </h3>
                </div>
              </Link>
              <Link href="">
                <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110">
                  <Image
                    src="/images/picture15.jpg"
                    alt="image"
                    height={500}
                    width={500}
                    objectFit="cover"
                    className="w-full"
                  />
                  <h1 className="text-2xl text-white font-bold">Title Here</h1>
                  <h3 className="text-sm text-white font-bold">
                    September 12, 2024
                  </h3>
                  <h3 className="text-white text-xl font-light">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officia, provident Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                  </h3>
                </div>
              </Link>
            </div>
          </div>
          <div className="container text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              iusto commodi qui exercitationem accusamus voluptatem laborum ipsa
              consequatur enim dolor iste at, eveniet, quod cum nemo expedita
              doloremque. Unde nihil totam officiis nobis et quam cum vel hic
              quos enim, nesciunt incidunt ea aperiam quod iure, aut dolores
              quas quibusdam cupiditate quisquam voluptates repellat, illum
              quidem nesciunt?
            </p>
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
