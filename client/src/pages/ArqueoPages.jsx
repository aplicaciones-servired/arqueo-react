import { useEffect, useState } from "react";
import ArqueoCard from "../components/ArqueoCard";
import { useArqueo } from "../context/arqueoProvider";
import ReactPaginate from "react-paginate";

function ArqueoPages() {
  const { arqueos, loadArqueos } = useArqueo();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    loadArqueos();
  }, []);

  function renderMain() {
  

    const offset = currentPage * itemsPerPage;
    const currentPageItems = arqueos
      .slice(offset, offset + itemsPerPage)
      .map((arqueo) => <ArqueoCard arqueo={arqueo} key={arqueo.id} />);

    return (
      <section className="rounded-lg w-full flex flex-col">
        <table className="text-center mt-5">
          <thead className="bg-blue-500 text-sm">
            <tr className="border border-slate-600">
              <th className="border border-slate-600">Supervisor</th>
              <th className="border border-slate-600">Nombre Completo</th>
              <th className="border border-slate-600">IP</th>
              <th className="border border-slate-600">Documento</th>
              <th className="border border-slate-600">Sucursal</th>
              <th className="border border-slate-600">punto de venta</th>
              <th className="border border-slate-600">Venta Bruta</th>
              <th className="border border-slate-600">Base Efectivo</th>
              <th className="border border-slate-600">Total Ingreso</th>
              <th className="border border-slate-600">Fecha Visita</th>
              <th className="border border-slate-600">Hora Visita</th>
              <th className="border border-slate-600">Firma Auditor</th>
              <th className="border border-slate-600">Firma Colocadora</th>
              <th className="border border-slate-600">Opc</th>
            </tr>
          </thead>
          <tbody>{currentPageItems}</tbody>
        </table>
        <ReactPaginate previousLabel={"Anterior"} nextLabel={"Siguiente"} pageCount={Math.ceil(arqueos.length / itemsPerPage)} 
          onPageChange={({ selected }) => setCurrentPage(selected)}
          containerClassName={"flex items-center justify-center mt-4 space-x-2"} // Estilos de contenedor
          pageClassName={"bg-gray-400 px-3 py-2 rounded-full"} // Estilos de cada página
          breakClassName={"text-gray-600 "} // Estilos de los puntos suspensivos
          previousClassName={"bg-blue-500 text-white px-3 py-2 rounded-full"} // Estilos del botón Anterior
          nextClassName={"bg-blue-500 text-white px-3 py-2 rounded-full"} // Estilos del botón Siguiente
          activeClassName={"bg-blue-700 text-white"} // Estilos de la página activa
        />
      </section>
    );
  }

  return (
    <section>
      <h1 className="text-center font-bold uppercase mt-9">arqueos</h1>
      {renderMain()}
    </section>
  );
}

export default ArqueoPages;
