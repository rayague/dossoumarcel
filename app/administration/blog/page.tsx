"use client";
import { SetStateAction, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFileContract,
  faContactBook,
  faBlog
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [activeContent, setActiveContent] = useState("Accueil");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = (content: SetStateAction<string>) => {
    setActiveContent(content);
  };

  const renderContent = () => {
    switch (activeContent) {
      case "Services":
        return <p>Ceci est le contenu de l&apos;accueil.</p>;
      case "Profil":
        // function setShowModal(arg0: boolean): void {
        //     throw new Error("Function not implemented.");
        // }

        return (
          <div className="relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17&apos;
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">White</td>
                  <td className="px-6 py-4">Laptop PC</td>
                  <td className="px-6 py-4">$1999</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">Black</td>
                  <td className="px-6 py-4">Accessories</td>
                  <td className="px-6 py-4">$99</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Google Pixel Phone
                  </th>
                  <td className="px-6 py-4">Gray</td>
                  <td className="px-6 py-4">Phone</td>
                  <td className="px-6 py-4">$799</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple Watch 5
                  </th>
                  <td className="px-6 py-4">Red</td>
                  <td className="px-6 py-4">Wearables</td>
                  <td className="px-6 py-4">$999</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case "Blog":
        return <p>Ceci est le contenu des messages.</p>;
      case "Paramètres":
        return <p>Ceci est le contenu des paramètres.</p>;
      case "Aide":
        return <p>Ceci est le contenu de l&apos;aide.</p>;
      default:
        return <p>Choisis une option dans la sidebar.</p>;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Administration</h2>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => handleButtonClick("Profil")}
              className={`w-full text-left py-2 px-4 rounded-lg ${
                activeContent === "Profil" ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              Profil
            </button>
          </li>
          <li>
            <button
              onClick={() => handleButtonClick("Services")}
              className={`w-full text-left py-2 px-4 rounded-lg ${
                activeContent === "Services"
                  ? "bg-gray-700"
                  : "hover:bg-gray-700"
              }`}
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => handleButtonClick("Messages")}
              className={`w-full text-left py-2 px-4 rounded-lg ${
                activeContent === "Messages"
                  ? "bg-gray-700"
                  : "hover:bg-gray-700"
              }`}
            >
              Blog
            </button>
          </li>
          <li>
            <button
              onClick={() => handleButtonClick("Paramètres")}
              className={`w-full text-left py-2 px-4 rounded-lg ${
                activeContent === "Paramètres"
                  ? "bg-gray-700"
                  : "hover:bg-gray-700"
              }`}
            >
              Paramètres
            </button>
          </li>
          <li>
            <button
              onClick={() => handleButtonClick("Aide")}
              className={`w-full text-left py-2 px-4 rounded-lg ${
                activeContent === "Aide" ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              Aide
            </button>
          </li>
        </ul>
      </div>

      {/* Contenu dynamique */}
      <div className="flex-1 bg-gray-100 p-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Contenu central</h2>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
