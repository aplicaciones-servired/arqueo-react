import { Buffer } from "buffer";
import { useNavigate } from "react-router-dom";
import { SlMagnifier } from "react-icons/sl";

function ArqueoCard({ arqueo }) {
  const navigate = useNavigate();
  try {
    // Para mostrar las imágenes
    const firma_auditoria =
      arqueo.firma_auditoria &&
      Buffer.from(arqueo.firma_auditoria.data).toString("base64");

    const firma_colocadora =
      arqueo.firma_colocadora &&
      Buffer.from(arqueo.firma_colocadora.data).toString("base64");

    // Función para obtener solo la fecha
    const getFormattedDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    };

    return (
      <tr className="border border-slate-600 text-sm">
        <td className="border border-slate-600">{arqueo.supervisor}</td>
        <td className="border border-slate-600">{arqueo.nombre_supervisor}</td>
        <td className="border border-slate-600">{arqueo.nombres}</td>
        <td className="border border-slate-600">{arqueo.ip}</td>
        <td className="border border-slate-600">{arqueo.documento}</td>

        <td className="border border-slate-600">{arqueo.sucursal}</td>
        <td className="border border-slate-600">{arqueo.puntodeventa}</td>
        <td className="border border-slate-600">{arqueo.ventabruta}</td>
        <td className="border border-slate-600">{arqueo.baseefectivo}</td>
        <td className="border border-slate-600">{arqueo.totalingreso}</td>

        <td className="border border-slate-600">
          {arqueo.fechavisita && (
            <span>{getFormattedDate(arqueo.fechavisita)}</span>
          )}
        </td>
        <td className="border border-slate-600">{arqueo.horavisita}</td>

        <td className="border border-slate-600">
          {firma_auditoria ? (
            <img
              src={`data:image/png;base64,${firma_auditoria}`}
              width={100}
              alt="Firma Auditoria"
            />
          ) : (
            "Arqueo sin firma"
          )}
        </td>

        <td className="border border-slate-600">
          {firma_colocadora ? (
            <img
              src={`data:image/png;base64,${firma_colocadora}`}
              width={100}
              alt="Firma Colocadora"
            />
          ) : (
            "Arqueo sin firma"
          )}
        </td>

        <td className="">
          <button>
            {" "}
            <SlMagnifier
              className="w-8 h-8 text-blue-500"
              onClick={() => navigate(`/ver/${arqueo.id}`)}
            />
          </button>
        </td>
      </tr>
    );
  } catch (error) {
    console.log(error);
    return null; // Devolver null si hay un error
  }
}

export default ArqueoCard;
