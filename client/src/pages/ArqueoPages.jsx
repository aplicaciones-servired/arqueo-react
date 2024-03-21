import { useEffect, useState } from "react";
import ArqueoCard from "../components/ArqueoCard";
import { useArqueo } from "../context/arqueoProvider";
import ReactPaginate from "react-paginate";
import { BottonExportItems } from "../components/ExportFechaExcel";
import { exportarAExcel } from "../components/Export";

function ArqueoPages() {
  const { arqueos, loadArqueos } = useArqueo();
  const [currentPage, setCurrentPage] = useState(0);
  const [busqueda, setBusqueda] = useState("");
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const itemsPerPage = 10;

  useEffect(() => {
    loadArqueos();
  }, []);

  const exportarRegistros = () => {
    // Verificar que las fechas de inicio y fin estén definidas
    if (!fechaInicio || !fechaFin) {
      alert("Fechas de inicio y fin deben ser seleccionadas");
      return;
    }

    // Convertir las cadenas de texto de las fechas a objetos de tipo Date
    const fechaInicioObj = new Date(fechaInicio);
    const fechaFinObj = new Date(fechaFin);

    // Filtrar arqueos por las fechas seleccionadas
    const registrosFiltrados = arqueos.filter((arqueo) => {
      const fechaArqueo = new Date(arqueo.fechavisita);
      return fechaArqueo >= fechaInicioObj && fechaArqueo <= fechaFinObj;
    });

    // Llamar a la función de exportación a Excel
    exportarAExcel(registrosFiltrados);
  };

  function renderMain() {
    const offset = currentPage * itemsPerPage;
    const currentPageItems = (
      resultadosBusqueda.length > 0 ? resultadosBusqueda : arqueos
    )
      .slice(offset, offset + itemsPerPage)
      .map((arqueo) => <ArqueoCard arqueo={arqueo} key={arqueo.id} />);

    return (
      <section className="rounded-lg w-full flex flex-col mt-24">
        <table className="text-center -mt-16">
          <thead className="bg-blue-500 text-sm">
            <tr className="border border-slate-600">
              <th className="border border-slate-600">Supervisor</th>
              <th className="border border-slate-600">Nombre Supervisor</th>
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
              <th className="border border-slate-600">ver</th>
            </tr>
          </thead>
          <tbody>{currentPageItems}</tbody>
        </table>
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          pageCount={Math.ceil(arqueos.length / itemsPerPage)}
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

  const handleChange = (e) => {
    const terminoBusqueda = e.target.value;
    setBusqueda(terminoBusqueda);

    // Filtrar arqueos y almacenar los resultados en el estado de resultadosBusqueda
    const resultados = arqueos.filter((arqueo) =>
      arqueo.fechavisita.toString().toLowerCase().includes(terminoBusqueda)
    );
    setResultadosBusqueda(resultados);
  };

  return (
    <section>
      <h1 className="flex  translate-y-3 translate-x-12 text-center font-bold uppercase mt-3">
        busqueda por fecha
      </h1>
      <div className="flex justify-normal translate-y-3 translate-x-12 ">
        <input
          type="date"
          className="p-1 rounded-lg border-4 border-emerald-500"
          value={busqueda}
          onChange={handleChange}
        />
      </div>
      <BottonExportItems datos={arqueos} />

      <div className="flex justify-end -translate-y-14 -translate-x-12">
        {/* Input para seleccionar la fecha de inicio */}
        <h1 className=" -translate-y-6 translate-x-56 text-center font-bold uppercase ">
          exportar por fecha
        </h1>
        <input
          type="date"
          className="p-1 rounded-lg border-4 border-emerald-500 mt-3"
          value={fechaInicio}
          onChange={(e) => setFechaInicio(e.target.value)}
        />
        {/* Input para seleccionar la fecha de fin */}
        <input
          type="date"
          className="p-1 rounded-lg border-4 border-emerald-500 mt-3"
          value={fechaFin}
          onChange={(e) => setFechaFin(e.target.value)}
        />
        {/* Botón para exportar registros */}
        <button
          onClick={exportarRegistros}
          className="flex translate-y-16 -translate-x-56 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg "
        >
          Exportar a Excel
        </button>
      </div>
      {renderMain()}
    </section>
  );
}

export default ArqueoPages;
