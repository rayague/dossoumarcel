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
        <div className="container flex flex-col gap-2 justify-center my-5 transition delay-1000 duration-1000 ease-in">
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
              Découvrez mes réalisations
            </h1>
            <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-6">
              <Link href="https://doi.org/10.1111/1477-8947.12512" className="">
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
                    Wang Jiaqun, Kihumuro Jotham, Toyo Amègnonna Marcel Dossou,
                    et al.
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
                    Can China’s Trade and Investment Facilitate Renewable Energy
                    Consumption in Africa?
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
                    The heterogeneous impact of Sino-African trade relations on
                    Carbon intensity in Africa
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
                    Towards the quest to reduce income inequality in Africa: is
                    there a synergy between tourism development and governance?
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
          <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110 duration-300">
            <h1 className="text-2xl text-white font-bold">
              Participation aux Ateliers
            </h1>
            <h3 className="text-sm text-white font-bold">
              18 juin 2024 : Journées Communales d’assainissement du secteur de
              la microfinance au Bénin
            </h3>
          </div>

          <div className="container w-full h-auto flex-col border-gray-700 flex gap-3 border p-4 rounded-md bg-slate-900 shadow-lg shadow-black hover:bg-slate-700 ease-in-out delay-100 hover:scale-110 duration-300">
            <h1 className="text-2xl text-white font-bold">Références</h1>
            <div className="flex flex-row">
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
            <p className="font-light text-xl">
              Dans ma recherche, je me consacre à des sujets cruciaux pour le
              développement socio-économique en Afrique, en particulier la
              gouvernance, les inégalités de revenus et le développement
              durable. Mon étude intitulée « Does E-governance reduce income
              inequality in sub-Saharan Africa ? » explore les dynamiques
              complexes entre la gouvernance électronique et son impact sur les
              inégalités économiques dans la région. À travers mes travaux sur
              le rôle des investissements directs étrangers, comme dans «
              Bridging Africa’s Income Inequality Gap: How Relevant Is China’s
              Outward FDI to Africa ? », je mets en lumière l&apos;importance de
              ces flux dans la lutte contre les inégalités. En analysant comment
              la qualité de la gouvernance influence le développement des
              énergies renouvelables, notamment dans « Towards efforts to
              promote renewable energy development in Africa: Does governance
              quality matter ? », j&apos;aborde les défis environnementaux et
              économiques contemporains qui affectent notre continent. Mes
              recherches sur les transferts de fonds, telles que « Remittances
              and Income Inequality in Africa », illustrent également le rôle
              crucial de ces flux financiers dans la réduction des inégalités.
              Je m&apos;intéresse également à la manière dont la corruption peut
              miner le développement touristique, comme le montre mon étude «
              Does corruption undermine tourism development in Africa ? ». En
              outre, j’explore les relations commerciales sino-africaines et
              leur influence sur l&apos;intensité carbone dans ma recherche sur
              « The heterogeneous impact of Sino-African trade relations on
              Carbon intensity in Africa ». À travers ces travaux, je
              m&apos;efforce de proposer des solutions pratiques aux problèmes
              complexes auxquels l&apos;Afrique est confrontée. Ces
              contributions significatives renforcent non seulement mon
              expertise académique, mais aussi mon engagement envers le
              développement durable et l&apos;égalité économique, contribuant
              ainsi à établir mon statut de docteur dans mon domaine.
            </p>
          </div>
        </div>
        <hr className="bg-white w-full my-5" />
        <div className="container flex items-center justify-center">
          <h3 className="text-white text-md font-normal text-center">
            © <span className="text-blue-400">PortFotlio.</span> Tous droits
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
