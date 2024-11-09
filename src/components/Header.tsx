import { FaTelegram } from "react-icons/fa";

import { MdOutlineWhatsapp } from "react-icons/md";

export const Header = () => {
  return (
    <header>
      <div className="bg-black flex px-[15rem] py-[1rem] justify-between items-center">
        <img src="https://especialistaemti.com.br/wp-content/uploads/2024/10/logo-site-black-friday.png" />
        <div>
          <ul className="text-white flex flex-row space-x-[2rem]">
            <a href="https://bit.ly/especialistaemti" target="_blank">
              <li className="flex items-center gap-x-[1rem] hover:bg-yellow-400 hover:cursor-pointer rounded-[0.5rem] p-[8px]  hover:text-black">
                <MdOutlineWhatsapp size={48} />
                <p className="font-bold">Grupo de ofertas</p>
              </li>
            </a>
            <a href="https://t.me/especialistaemti" target="_blank">
              <li className="flex items-center gap-x-[1rem]  hover:bg-yellow-400 hover:cursor-pointer rounded-[0.5rem] p-[8px]  hover:text-black">
                <FaTelegram size={48} />
                <p className="font-bold text-">Grupo de ofertas</p>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
};
