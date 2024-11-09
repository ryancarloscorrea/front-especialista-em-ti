import { Link, useLocation } from "react-router-dom";
import { liSubHeader } from "../styles/subHeader";

const pathQualNotebookComprar = "/";
const pathNotebookObersevao = "/notebookOberservacao";
const pathQualPcComprar = "/qualpccomprar";
const pathQuemSouEu = "/quemsoueu";

export const SubHeader = () => {
  const location = useLocation();
 

  return (
    <div className="bg-[#111111] border-t-2 border-yellow-400 text-white m-auto">
      <ul className="flex flex-row items-center justify-between px-[30rem] py-4">
        <li className={liSubHeader({active: pathQualNotebookComprar === location.pathname})}>
          <Link to={pathQualNotebookComprar}>Qual notebook comprar</Link>
        </li>
        <li className={liSubHeader({active: pathNotebookObersevao === location.pathname})}>
          <Link to={pathNotebookObersevao}>Notebok com observação</Link>
        </li>

        <li className={liSubHeader({active: pathQualPcComprar === location.pathname})}>
          <Link to={pathQualPcComprar}>Qual PC comprar</Link>
        </li>

        <li className={liSubHeader({active: pathQuemSouEu === location.pathname})}>
          <Link to={pathQuemSouEu}>Quem sou?</Link>
        </li>
      </ul>
    </div>
  );
};
