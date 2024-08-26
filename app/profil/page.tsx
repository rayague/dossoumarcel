import { Console } from "console";
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
  // const clicked = {
  //     alert("Le CV est en cours de téléchargent");
  // }
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 justify-center font-sans pt-10 pb-32">
      <h3 className="text-3xl text-white mx-10">Logo</h3>
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
            <h1 className="text-5xl text-white font-bold">À Propos de moi</h1>
            <div className=" flex w-full mx-auto gap-6">
              <div className="container w-full h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 items-center justify-center lg:grid-cols-2  gap-5">
                <Image
                  src="/images/picture4.jpg"
                  alt="image"
                  height={500}
                  width={500}
                  objectFit="cover"
                  className="w-full"
                />
                <h3 className="text-white text-lg font-normal">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officia, provident Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Culpa,
                  voluptatibus! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Debitis ea quam veritatis, at deleniti cum
                  magnam architecto inventore tenetur, doloribus tempore quos
                  molestiae quasi hic? Fuga cupiditate at eligendi repellat.
                  <br /> <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  facilis rem molestiae adipisci sit possimus, accusantium,
                  magnam necessitatibus id dicta ab repudiandae provident
                  commodi odio harum suscipit omnis tempora ullam!
                  <br /> <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis quis mollitia quasi odio quia illo, minus fugit
                  quaerat repellendus, placeat dicta officiis saepe consequatur
                  provident laudantium, quae quibusdam officia cum?
                </h3>
              </div>
            </div>
          </div>
          <div className="container text-white flex flex-col gap-8 h-auto ">
            <h1 className="text-5xl text-white font-bold">Mon Parcours</h1>
            <div className="container ">
              <p className="font-normal text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci maxime dolores non maiores magnam! Minima voluptates
                magni, aperiam quo nostrum dolorum eaque nihil accusamus quis
                maiores atque, esse placeat odio? Mollitia fuga quis voluptatem
                fugit deleniti, aliquam cupiditate esse officiis odit corporis
                blanditiis, consequatur adipisci distinctio iure repudiandae
                temporibus dignissimos quod odio velit doloremque repellendus
                veritatis! Neque ut accusantium itaque ea, asperiores velit
                voluptate quam quisquam eos aspernatur cupiditate natus?
                Explicabo quaerat itaque distinctio vitae. Cum deleniti
                molestiae earum dolore praesentium! Est architecto facilis
                beatae nesciunt iusto quasi ad aliquid consequatur accusamus
                provident. Minus eaque fugit officiis temporibus pariatur. Ut!
              </p>
            </div>
          </div>
        </div>
        <div className="container flex flex-col gap-10 justify-around w-full my-10 mx-auto">
          <h1 className="text-5xl text-white font-bold">Mes Expériences</h1>
          <div className=" flex w-full mx-auto gap-6">
            <div className="container w-full text-white h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 items-center justify-center lg:grid-cols-2  gap-5">
              <p className="text-white text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia, provident Lorem ipsum dolor sit amet. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Culpa, voluptatibus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                ea quam veritatis, at deleniti cum magnam architecto inventore
                tenetur, doloribus tempore quos molestiae quasi hic? Fuga
                cupiditate at eligendi repellat.
              </p>
              <div className="container grid gap-5">
                <div className="container border p-5 flex flex-col items-center justify-center rounded-md border-slate-500">
                  <span className="text-red-600 font-black text-4xl">
                    23ans{" "}
                  </span>
                  <h3 className="font-bold text-2xl">D'expériences</h3>
                </div>
                <div className="container border p-5 flex flex-col items-center justify-center rounded-md border-slate-500">
                  <span className="text-red-600 font-black text-4xl">34</span>
                  <h3 className="font-bold text-2xl">Compétences</h3>
                </div>
                <div className="container border p-5 flex flex-col items-center justify-center rounded-md border-slate-500">
                  <span className="text-red-600 font-black text-4xl">23</span>
                  <h3 className="font-bold text-2xl">Projets accomplis</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="bg-blue-500 p-3 w-1/2 text-white sm:w-1/2 md:w-1/4 lg:w-1/4  mx-auto focus:ring-2 focus:ring-blue-600 ring-offset-3 rounded my-6 ring-blue-600"
          //   onClick={clicked}
        >
          Télécharger CV
        </button>
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
        <div className="container fixed bottom-5 left-auto items-center justify-around right-auto flex flex-row p-4 backdrop-blur-2xl backdrop-brightness-200 rounded-3xl h-auto mx-2 sm:w-3/4 w-10/12 gap-1 lg:w-1/3 md:w-1/2">
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
