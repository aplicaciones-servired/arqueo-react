// eslint-disable-next-line no-unused-vars
import { Form, Formik } from "formik";
import { useArqueo } from "../context/arqueoProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Buffer } from "buffer";
import { BottonExportItems } from "../components/XportExcel.jsx";

function ArqueoForm() {
  const { getArqueo } = useArqueo();

  const [arqueo, setArqueos] = useState({
    supervisor: "",
    nombres: "",
    nombre_supervisor: "",
    documento: "",
    ip: "",
    sucursal: "",
    puntodeventa: "",
    ventabruta: "",
    baseefectivo: "",
    totalingreso: "",
    chancesabonados: "",
    chancespreimpresos: "",
    premiospagados: "",
    efectivocajafuerte: "",
    totalegresos: "",
    totalbilletes: "",
    totalmonedas: "",
    totalarqueo: "",
    sobrantefaltante: "",
    canti_billete_cienmil: "",
    total_billete_cienmil: "",
    canti_billete_cincuentamil: "",
    total_billete_cincuentamil: "",
    canti_billete_veintemil: "",
    total_billete_veintemil: "",
    canti_billete_diezmil: "",
    total_billete_diezmil: "",
    canti_billete_cincomil: "",
    total_billete_cincomil: "",
    canti_billete_dosmil: "",
    total_billete_dosmil: "",
    canti_billete_mil: "",
    total_billete_mil: "",
    canti_moneda_mil: "",
    total_moneda_mil: "",
    canti_moneda_quinientos: "",
    total_moneda_quinientos: "",
    canti_moneda_docientos: "",
    total_moneda_docientos: "",
    canti_moneda_cien: "",
    total_moneda_cien: "",
    canti_moneda_cincuenta: "",
    total_moneda_ciencuenta: "",
    total_efectivo: "",
    total_premios_pagados: "",
    entrega_colocador: "",
    sobrantefaltante_caja: "",
    colocador_cajafuerte: "",
    rollos_bnet: "",
    rollos_fisicos: "",
    diferencia: "",
    nombre_juego: "",
    cantidad_bnet: "",
    cantidad_fisicos: "",
    cantidad_faltante: "",
    cantidad_tiquete: "",
    descargado: "",
    nombre_juego2: "",
    cantidad_bnet2: "",
    cantidad_fisicos2: "",
    cantidad_faltante2: "",
    cantidad_tiquete2: "",
    descargado2: "",
    nombre_juego3: "",
    cantidad_bnet3: "",
    cantidad_fisicos3: "",
    cantidad_faltante3: "",
    cantidad_tiquete3: "",
    descargado3: "",
    nombre_juego4: "",
    cantidad_bnet4: "",
    cantidad_fisicos4: "",
    cantidad_faltante4: "",
    cantidad_tiquete4: "",
    descargado4: "",
    totaldescargados: "",
    totalvalor: "",
    requisito1: "",
    observacion1: "",
    requisito2: "",
    observacion2: "",
    requisito3: "",
    observacion3: "",
    requisito4: "",
    observacion4: "",
    requisito5: "",
    observacion5: "",
    requisito6: "",
    observacion6: "",
    requisito7: "",
    observacion7: "",
    requisito8: "",
    observacion8: "",
    requisito9: "",
    observacion9: "",
    requisito10: "",
    observacion10: "",
    requisito11: "",
    observacion11: "",
    requisito12: "",
    observacion12: "",
    requisito13: "",
    observacion13: "",
    requisito14: "",
    observacion14: "",
    requisito15: "",
    observacion15: "",
    requisito16: "",
    observacion16: "",
    requisito17: "",
    observacion17: "",
    requisito18: "",
    observacion18: "",
    requisito19: "",
    observacion19: "",
    requisito20: "",
    observacion20: "",
    requisito21: "",
    observacion21: "",
    requisito22: "",
    observacion22: "",
    requisito23: "",
    observacion23: "",
    requisito24: "",
    observacion24: "",
    requisito25: "",
    observacion25: "",
    requisito26: "",
    observacion26: "",
    requisito27: "",
    observacion27: "",
    requisito28: "",
    observacion28: "",
    requisito29: "",
    requisito30: "",
    imagen_observacion: "",
    nombre_observacion: "",
    firma_auditoria: "",
    firma_colocadora: "",
    fechavisita: "",
    horavisita: "",
    latitud: "",
    longitud: "",
  });

  const params = useParams();
  const naviage = useNavigate();

  useEffect(() => {
    const loadArqueos = async () => {
      if (params.id) {
        const arqueosData = await getArqueo(params.id);
        if (arqueosData && arqueosData.length > 0) {
          const primerArqueo = arqueosData[0];
          setArqueos({
            supervisor: primerArqueo.supervisor,
            nombres: primerArqueo.nombres,
            nombre_supervisor: primerArqueo.nombre_supervisor,
            documento: primerArqueo.documento,
            ip: primerArqueo.ip,
            sucursal: primerArqueo.sucursal,
            baseefectivo: primerArqueo.baseefectivo,
            totalingreso: primerArqueo.totalingreso,
            chancesabonados: primerArqueo.chancesabonados,
            chancespreimpresos: primerArqueo.chancespreimpresos,
            premiospagados: primerArqueo.premiospagados,
            efectivocajafuerte: primerArqueo.efectivocajafuerte,
            totalegresos: primerArqueo.totalegresos,
            totalbilletes: primerArqueo.totalbilletes,
            totalmonedas: primerArqueo.totalmonedas,
            totalarqueo: primerArqueo.totalarqueo,
            sobrantefaltante: primerArqueo.sobrantefaltante,
            canti_billete_cienmil: primerArqueo.canti_billete_cienmil,
            total_billete_cienmil: primerArqueo.total_billete_cienmil,
            canti_billete_cincuentamil: primerArqueo.canti_billete_cincuentamil,
            total_billete_cincuentamil: primerArqueo.total_billete_cincuentamil,
            canti_billete_veintemil: primerArqueo.canti_billete_veintemil,
            total_billete_veintemil: primerArqueo.total_billete_veintemil,
            canti_billete_diezmil: primerArqueo.canti_billete_diezmil,
            total_billete_diezmil: primerArqueo.total_billete_diezmil,
            canti_billete_cincomil: primerArqueo.canti_billete_cincomil,
            total_billete_cincomil: primerArqueo.total_billete_cincomil,
            canti_billete_dosmil: primerArqueo.canti_billete_dosmil,
            total_billete_dosmil: primerArqueo.total_billete_dosmil,
            canti_billete_mil: primerArqueo.canti_billete_mil,
            total_billete_mil: primerArqueo.total_billete_mil,
            canti_moneda_mil: primerArqueo.canti_moneda_mil,
            total_moneda_mil: primerArqueo.total_moneda_mil,
            canti_moneda_quinientos: primerArqueo.canti_moneda_quinientos,
            total_moneda_quinientos: primerArqueo.total_moneda_quinientos,
            canti_moneda_docientos: primerArqueo.canti_moneda_docientos,
            total_moneda_docientos: primerArqueo.total_moneda_docientos,
            canti_moneda_cien: primerArqueo.canti_moneda_cien,
            total_moneda_cien: primerArqueo.total_moneda_cien,
            canti_moneda_cincuenta: primerArqueo.canti_moneda_cincuenta,
            total_moneda_ciencuenta: primerArqueo.total_moneda_ciencuenta,
            total_efectivo: primerArqueo.total_efectivo,
            total_premios_pagados: primerArqueo.total_premios_pagados,
            entrega_colocador: primerArqueo.entrega_colocador,
            sobrantefaltante_caja: primerArqueo.sobrantefaltante_caja,
            colocador_cajafuerte: primerArqueo.colocador_cajafuerte,
            rollos_bnet: primerArqueo.rollos_bnet,
            rollos_fisicos: primerArqueo.rollos_fisicos,
            diferencia: primerArqueo.diferencia,
            nombre_juego: primerArqueo.nombre_juego,
            cantidad_bnet: primerArqueo.cantidad_bnet,
            cantidad_fisicos: primerArqueo.cantidad_fisicos,
            cantidad_faltante: primerArqueo.cantidad_faltante,
            cantidad_tiquete: primerArqueo.cantidad_tiquete,
            descargado: primerArqueo.descargado,
            nombre_juego2: primerArqueo.nombre_juego2,
            cantidad_bnet2: primerArqueo.cantidad_bnet2,
            cantidad_fisicos2: primerArqueo.cantidad_fisicos2,
            cantidad_faltante2: primerArqueo.cantidad_faltante2,
            cantidad_tiquete2: primerArqueo.cantidad_tiquete2,
            descargado2: primerArqueo.descargado2,
            nombre_juego3: primerArqueo.nombre_juego3,
            cantidad_bnet3: primerArqueo.cantidad_bnet3,
            cantidad_fisicos3: primerArqueo.cantidad_fisicos3,
            cantidad_faltante3: primerArqueo.cantidad_faltante3,
            cantidad_tiquete3: primerArqueo.cantidad_tiquete3,
            descargado3: primerArqueo.descargado3,
            nombre_juego4: primerArqueo.nombre_juego4,
            cantidad_bnet4: primerArqueo.cantidad_bnet4,
            cantidad_fisicos4: primerArqueo.cantidad_fisicos4,
            cantidad_faltante4: primerArqueo.cantidad_faltante4,
            cantidad_tiquete4: primerArqueo.cantidad_tiquete4,
            descargado4: primerArqueo.descargado4,
            totaldescargados: primerArqueo.totaldescargados,
            totalvalor: primerArqueo.totalvalor,
            requisito1: primerArqueo.requisito1,
            observacion1: primerArqueo.observacion1,
            requisito2: primerArqueo.requisito2,
            observacion2: primerArqueo.observacion2,
            requisito3: primerArqueo.requisito3,
            observacion3: primerArqueo.observacion3,
            requisito4: primerArqueo.requisito4,
            observacion4: primerArqueo.observacion4,
            requisito5: primerArqueo.requisito5,
            observacion5: primerArqueo.observacion5,
            requisito6: primerArqueo.requisito6,
            observacion6: primerArqueo.observacion6,
            requisito7: primerArqueo.requisito7,
            observacion7: primerArqueo.observacion7,
            requisito8: primerArqueo.requisito8,
            observacion8: primerArqueo.observacion8,
            requisito9: primerArqueo.requisito9,
            observacion9: primerArqueo.observacion9,
            requisito10: primerArqueo.requisito10,
            observacion10: primerArqueo.observacion10,
            requisito11: primerArqueo.requisito11,
            observacion11: primerArqueo.observacion11,
            requisito12: primerArqueo.requisito12,
            observacion12: primerArqueo.observacion12,
            requisito13: primerArqueo.requisito13,
            observacion13: primerArqueo.observacion13,
            requisito14: primerArqueo.requisito14,
            observacion14: primerArqueo.observacion14,
            requisito15: primerArqueo.requisito15,
            observacion15: primerArqueo.observacion15,
            requisito16: primerArqueo.requisito16,
            observacion16: primerArqueo.observacion16,
            requisito17: primerArqueo.requisito17,
            observacion17: primerArqueo.observacion17,
            requisito18: primerArqueo.requisito18,
            observacion18: primerArqueo.observacion18,
            requisito19: primerArqueo.requisito19,
            observacion19: primerArqueo.observacion19,
            requisito20: primerArqueo.requisito20,
            observacion20: primerArqueo.observacion20,
            requisito21: primerArqueo.requisito21,
            observacion21: primerArqueo.observacion21,
            requisito22: primerArqueo.requisito22,
            observacion22: primerArqueo.observacion22,
            requisito23: primerArqueo.requisito23,
            observacion23: primerArqueo.observacion23,
            requisito24: primerArqueo.requisito24,
            observacion24: primerArqueo.observacion24,
            requisito25: primerArqueo.requisito25,
            observacion25: primerArqueo.observacion25,
            requisito26: primerArqueo.requisito26,
            observacion26: primerArqueo.observacion26,
            requisito27: primerArqueo.requisito27,
            observacion27: primerArqueo.observacion27,
            requisito28: primerArqueo.requisito28,
            observacion28: primerArqueo.observacion28,
            requisito29: primerArqueo.requisito29,
            requisito30: primerArqueo.requisito30,
            //imagen_observacion: primerArqueo.imagen_observacion,
            nombre_observacion: primerArqueo.nombre_observacion,
            //firma_auditoria: primerArqueo.firma_auditoria,
            // firma_colocadora: primerArqueo.firma_colocadora,
            fechavisita: primerArqueo.fechavisita,
            horavisita: primerArqueo.horavisita,
            latitud: primerArqueo.latitud,
            longitud: primerArqueo.longitud,

            imagen_observacion:
              primerArqueo.imagen_observacion &&
              Buffer.from(primerArqueo.imagen_observacion.data).toString(),

            firma_auditoria:
              primerArqueo.firma_auditoria &&
              Buffer.from(primerArqueo.firma_auditoria.data).toString("base64"),

            firma_colocadora:
              primerArqueo.firma_colocadora &&
              Buffer.from(primerArqueo.firma_colocadora.data).toString(
                "base64"
              ),
          });
        } else {
          // Manejar el caso en que la respuesta no es válida o está vacía
          console.error("La respuesta de getArqueo no es válida o está vacía.");
        }
      }
    };
    loadArqueos();
  }, []);

  return (
    <div className="max-w-full bg-slate-100">
      <Formik
        initialValues={arqueo}
        enableReinitialize={true}
        useParams
        onSubmit={async (values) => {
          console.log(values);
          naviage("/");
        }}
      >
        {({ values }) => (
          <Form className="bg-white max-w-6xl rounded-md p-4 mx-auto mt-10">
            <div className=" bg-blue-500 h-20  rounded-lg ">
              <h1 className="font-bold uppercase text-white text-2xl translate-y-5 translate-x-3">
                arqueo
              </h1>
              <BottonExportItems datos={values} />
            </div>

            <label className="block text-center mt-5 uppercase">
              supervisor
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="supervisor"
              disabled
              defaultValue={values.supervisor} // Utiliza defaultValue en lugar de value
            />

            <label className="block text-center mt-5 uppercase">
              nombre supervisor
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="nombre_supervisor"
              disabled
              defaultValue={values.nombre_supervisor}
            />

            <label className="block text-center mt-5 uppercase">
              documento
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="documento"
              disabled
              defaultValue={values.documento}
            />

            <label className="block text-center mt-5 uppercase">ip</label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="ip"
              disabled
              defaultValue={values.ip}
            />

            <label className="block text-center mt-5 uppercase">nombres</label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="nombres"
              disabled
              defaultValue={values.nombres}
            />

            <label className="block text-center mt-5 uppercase">
              sucursal{" "}
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="sucursal "
              disabled
              defaultValue={values.sucursal}
            />

            <label className="block text-center mt-5 uppercase">
              punto de venta
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="puntodeventa"
              disabled
              defaultValue={values.puntodeventa} // Utiliza defaultValue en lugar de value
            />

            <label className="block text-center mt-5 uppercase">
              venta bruta
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="ventabruta"
              disabled
              defaultValue={values.ventabruta}
            />

            <label className="block text-center mt-5 uppercase">
              basee fectivo
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="baseefectivo"
              disabled
              defaultValue={values.baseefectivo}
            />

            <label className="block text-center mt-5 uppercase">
              total ingreso
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="totalingreso"
              disabled
              defaultValue={values.totalingreso}
            />

            <label className="block text-center mt-5 uppercase">
              chances abonados
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="chancesabonados"
              disabled
              defaultValue={values.chancesabonados}
            />

            <label className="block text-center mt-5 uppercase">
              chances preimpresos
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="chancespreimpresos "
              disabled
              defaultValue={values.chancespreimpresos}
            />

            <label className="block text-center mt-5 uppercase">
              premios pagados
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="premiospagados"
              disabled
              defaultValue={values.premiospagados} // Utiliza defaultValue en lugar de value
            />

            <label className="block text-center mt-5 uppercase">
              efectivo caja fuerte
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="efectivocajafuerte"
              disabled
              defaultValue={values.efectivocajafuerte} // Utiliza defaultValue en lugar de value
            />

            <label className="block text-center mt-5 uppercase">
              total egresos
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="totalegresos"
              disabled
              defaultValue={values.totalegresos} // Utiliza defaultValue en lugar de value
            />

            <label className="block text-center mt-5 uppercase">
              total billetes
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="totalbilletes"
              disabled
              defaultValue={values.totalbilletes} // Utiliza defaultValue en lugar de value
            />

            <label className="block text-center mt-5 uppercase">
              total monedas
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="totalmonedas"
              disabled
              defaultValue={values.totalmonedas} // Utiliza defaultValue en lugar de value
            />

            <label className="block text-center mt-5 uppercase">
              total arqueo
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="totalarqueo"
              disabled
              defaultValue={values.totalarqueo} // Utiliza defaultValue en lugar de value
            />

            <label className="block text-center mt-5 uppercase">
              sobran tefaltante
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="sobrantefaltante"
              disabled
              defaultValue={values.sobrantefaltante} // Utiliza defaultValue en lugar de value
            />

            <label className="block text-center mt-5 uppercase">
              cantidad billete cienmil
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="canti_billete_cienmil"
              disabled
              defaultValue={values.canti_billete_cienmil} // Utiliza defaultValue en lugar de value
            />

            <label className="block text-center mt-5 uppercase">
              total billete cienmil
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="total_billete_cienmil"
              disabled
              defaultValue={values.total_billete_cienmil} // Utiliza defaultValue en lugar de value
            />

            <label className="block text-center mt-5 uppercase">
              canti billete cincuentamil
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="canti_billete_cincuentamil"
              disabled
              defaultValue={values.canti_billete_cincuentamil} // Utiliza defaultValue en lugar de value
            />

            <label className="block text-center mt-5 uppercase">
              total billete cincuentamil
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              name="total_billete_cincuentamil"
              disabled
              defaultValue={values.total_billete_cincuentamil} // Utiliza defaultValue en lugar de value
            />

            <label className="block text-center mt-5 uppercase">
              cantidad billetes de veintemil
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.canti_billete_veintemil}
              name="canti_billete_veintemil"
            />

            <label className="block text-center mt-5 uppercase">
              total billetes de veintemil
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.total_billete_veintemil}
              name="total_billete_veintemil"
            />

            <label className="block text-center mt-5 uppercase">
              cantidad billetes de diezmil
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.canti_billete_diezmil}
              name="canti_billete_diezmil"
            />

            <label className="block text-center mt-5 uppercase">
              total billetes de diezmil
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.total_billete_diezmil}
              name="total_billete_diezmil"
            />

            <label className="block text-center mt-5 uppercase">
              cantidad billetes de cincomil
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.canti_billete_cincomil}
              name="canti_billete_cincomil"
            />

            <label className="block text-center mt-5 uppercase">
              total billetes de cincomil
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.total_billete_cincomil}
              name="total_billete_cincomil"
            />

            <label className="block text-center mt-5 uppercase">
              cantidad billetes de dosmil
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.canti_billete_dosmil}
              name="canti_billete_dosmil"
            />

            <label className="block text-center mt-5 uppercase">
              total billete de dosmil
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.total_billete_dosmil}
              name="total_billete_dosmil"
            />

            <label className="block text-center mt-5 uppercase">
              cantidad billetes de mil
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.canti_billete_mil}
              name="canti_billete_mil"
            />

            <label className="block text-center mt-5 uppercase">
              total billetes de mil
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.total_billete_mil}
              name="total_billete_mil"
            />

            <label className="block text-center mt-5 uppercase">
              cantidad monedas de mil
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.canti_moneda_mil}
              name="canti_moneda_mil"
            />

            <label className="block text-center mt-5 uppercase">
              total monedas de mil
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.total_moneda_mil}
              name="total_moneda_mil"
            />

            <label className="block text-center mt-5 uppercase">
              cantidad monedasde quinientos
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.canti_moneda_quinientos}
              name="canti_moneda_quinientos"
            />

            <label className="block text-center mt-5 uppercase">
              total monedas de quinientos
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.total_moneda_quinientos}
              name="total_moneda_quinientos"
            />

            <label className="block text-center mt-5 uppercase">
              cantidad monedas de docientos
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.canti_moneda_docientos}
              name="canti_moneda_docientos"
            />

            <label className="block text-center mt-5 uppercase">
              total monedas de docientos
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.total_moneda_docientos}
              name="total_moneda_docientos"
            />

            <label className="block text-center mt-5 uppercase">
              cantidad monedas de cien
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.canti_moneda_cien}
              name="canti_moneda_cien"
            />

            <label className="block text-center mt-5 uppercase">
              total monedas de cien
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.total_moneda_cien}
              name="total_moneda_cien"
            />

            <label className="block text-center mt-5 uppercase">
              canti monedas de cincuenta
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.canti_moneda_cincuenta}
              name="canti_moneda_cincuenta"
            />

            <label className="block text-center mt-5 uppercase">
              total monedas de ciencuenta
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.total_moneda_ciencuenta}
              name="total_moneda_ciencuenta"
            />

            <label className="block text-center mt-5 uppercase">
              total efectivo
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.total_efectivo}
              name="total_efectivo"
            />

            <label className="block text-center mt-5 uppercase">
              total premioss de pagados
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.año_total_premios_pagadosla}
              name="año_total_premios_pagadosla"
            />

            <label className="block text-center mt-5 uppercase">
              entrega colocador
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.entrega_colocador}
              name="entrega_colocador"
            />

            <label className="block text-center mt-5 uppercase">
              sobrante faltante de caja
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.sobrantefaltante_caja}
              name="sobrantefaltante_caja"
            />

            <label className="block text-center mt-5 uppercase">
              colocador caja fuerte
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.colocador_cajafuerte}
              name="colocador_cajafuerte"
            />

            <label className="block text-center mt-5 uppercase">
              rollos bnet
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.rollos_bnet}
              name="rollos_bnet"
            />

            <label className="block text-center mt-5 uppercase">
              rollos fisicos
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.rollos_fisicos}
              name="rollos_fisicos"
            />

            <label className="block text-center mt-5 uppercase">
              diferencia
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.diferencia}
              name="diferencia"
            />

            {values.nombre_juego && (
              <>
                <label className="block text-center mt-5 uppercase">
                  nombre del juego1{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.nombre_juego}
                  name="nombre_juego"
                />
              </>
            )}

            {values.cantidad_bnet && (
              <>
                <label className="block text-center mt-5 uppercase">
                  cantidad en bnet1{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.cantidad_bnet}
                  name="cantidad_bnet"
                />
              </>
            )}

            {values.cantidad_fisicos && (
              <>
                <label className="block text-center mt-5 uppercase">
                  cantidad en fisicos1{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.cantidad_fisicos}
                  name="cantidad_fisicos"
                />
              </>
            )}

            {values.cantidad_faltante && (
              <>
                <label className="block text-center mt-5 uppercase">
                  cantidad faltante a descargar1{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.cantidad_faltante}
                  name="cantidad_faltante"
                />
              </>
            )}

            {values.cantidad_tiquete && (
              <>
                <label className="block text-center mt-5 uppercase">
                  {" "}
                  valor del tiquete1{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.cantidad_tiquete}
                  name="cantidad_tiquete"
                />
              </>
            )}

            {values.descargado && (
              <>
                <label className="block text-center mt-5 uppercase">
                  valor descargado por juego1{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.descargado}
                  name="descargado"
                />
              </>
            )}

            {values.nombre_juego2 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  nombre del juego2{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.nombre_juego2}
                  name="nombre_juego2"
                />
              </>
            )}

            {values.cantidad_bnet2 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  cantidad en bnet2{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.cantidad_bnet2}
                  name="cantidad_bnet"
                />
              </>
            )}

            {values.cantidad_fisicos2 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  cantidad en fisicos2{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.cantidad_fisicos2}
                  name="cantidad_fisicos"
                />
              </>
            )}

            {values.cantidad_faltante2 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  cantidad faltante a descargar2{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.cantidad_faltante2}
                  name="cantidad_faltante"
                />
              </>
            )}

            {values.cantidad_tiquete2 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  {" "}
                  valor del tiquete2{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.cantidad_tiquete2}
                  name="cantidad_tiquete"
                />
              </>
            )}

            {values.descargado2 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  valor descargado por juego2{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.descargado2}
                  name="descargado"
                />
              </>
            )}

            {values.nombre_juego3 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  nombre del juego3{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.nombre_juego3}
                  name="nombre_juego2"
                />
              </>
            )}

            {values.cantidad_bnet3 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  cantidad en bnet3{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.cantidad_bnet3}
                  name="cantidad_bnet"
                />
              </>
            )}

            {values.cantidad_fisicos3 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  cantidad en fisicos3{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.cantidad_fisicos3}
                  name="cantidad_fisicos"
                />
              </>
            )}

            {values.cantidad_faltante3 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  cantidad faltante a descargar3{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.cantidad_faltante3}
                  name="cantidad_faltante"
                />
              </>
            )}

            {values.cantidad_tiquete3 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  {" "}
                  valor del tiquete3{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.cantidad_tiquete3}
                  name="cantidad_tiquete"
                />
              </>
            )}

            {values.descargado3 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  valor descargado por juego3{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.descargado3}
                  name="descargado"
                />
              </>
            )}

            {values.nombre_juego4 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  nombre del juego4{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.nombre_juego4}
                  name="nombre_juego2"
                />
              </>
            )}

            {values.cantidad_bnet4 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  cantidad en bnet4{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.cantidad_bnet4}
                  name="cantidad_bnet"
                />
              </>
            )}

            {values.cantidad_fisicos4 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  cantidad en fisicos4{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.cantidad_fisicos4}
                  name="cantidad_fisicos"
                />
              </>
            )}

            {values.cantidad_faltante4 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  cantidad faltante a descargar4{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.cantidad_faltante4}
                  name="cantidad_faltante"
                />
              </>
            )}

            {values.cantidad_tiquete3 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  {" "}
                  valor del tiquete4{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.cantidad_tiquete3}
                  name="cantidad_tiquete"
                />
              </>
            )}

            {values.descargado4 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  valor descargado por juego4{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.descargado4}
                  name="descargado"
                />
              </>
            )}

            <label className="block text-center mt-5 uppercase">
              {" "}
              total cantidad descargados{" "}
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.totaldescargados}
              name="totaldescargados"
            />

            <label className="block text-center mt-5 uppercase">
              valor total descargado{" "}
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.totalvalor}
              name="totalvalor"
            />

            {values.requisito1 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  ¿El punto de venta tiene puertacerrada con candado y/o seguro?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito1}
                  name="requisito1"
                />
              </>
            )}

            {values.observacion1 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion1}
                  name="observacion1"
                />
              </>
            )}

            {values.requisito2 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  ¿Tiene elementos de aseo, sillas en buen estado?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito2}
                  name="requisito2"
                />
              </>
            )}

            {values.observacion2 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion2}
                  name="observacion2"
                />
              </>
            )}

            {values.requisito3 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  ¿Tiene aviso de videovigilancia y camaras?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito3}
                  name="requisito3"
                />
              </>
            )}

            {values.observacion3 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion3}
                  name="observacion3"
                />
              </>
            )}

            {values.requisito4 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  ¿El Colocador cuenta con prendas emblematicas y presentación
                  adecuada?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito4}
                  name="requisito4"
                />
              </>
            )}

            {values.observacion4 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion4}
                  name="observacion4"
                />
              </>
            )}

            {values.requisito5 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  ¿El usuario del colocador corresponde a la cedula del mismo?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito5}
                  name="requisito4"
                />
              </>
            )}

            {values.observacion5 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion5}
                  name="observacion5"
                />
              </>
            )}

            {values.requisito6 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  ¿La versión del aplicativo BNET esta actualizada?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito6}
                  name="requisito6"
                />
              </>
            )}

            {values.observacion6 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion6}
                  name="observacion6"
                />
              </>
            )}

            {values.requisito7 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  ¿El colocador ofrece los productos y servicios comercializados
                  por la empresa al 100%?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito7}
                  name="requisito7"
                />
              </>
            )}

            {values.observacion7 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion7}
                  name="observacion7"
                />
              </>
            )}

            {values.requisito8 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  ¿La publicidad exhibida en el punto de venta se encuentra
                  actualizada?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito8}
                  name="requisito8"
                />
              </>
            )}

            {values.observacion8 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion8}
                  name="observacion8"
                />
              </>
            )}

            {values.requisito9 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿El colocador solicita el documento de identificación al
                  cliente?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito9}
                  name="requisito9"
                />
              </>
            )}
            {values.observacion9 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion9}
                  name="observacion9"
                />
              </>
            )}

            {values.requisito10 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿El uso del sistema biométrico esta activo?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito10}
                  name="requisito10"
                />
              </>
            )}
            {values.observacion10 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion10}
                  name="observacion10"
                />
              </>
            )}

            {values.requisito11 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿El colocador conoce de Supervoucher, y esta en
                  funcionamiento?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito11}
                  name="requisito11"
                />
              </>
            )}
            {values.observacion11 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito11}
                  name="observacion11"
                />
              </>
            )}

            {values.requisito12 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿El Colocador conoce el procedimiento que debe realizar a
                  remitentes y destinatarios menores de edad?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito12}
                  name="requisito12"
                />
              </>
            )}
            {values.observacion12 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion12}
                  name="observacion12"
                />
              </>
            )}

            {values.requisito13 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿El colocador conoce los reportes de operaciones en efectivo
                  (R.O.E) firmas, huellas. (Transacciones &gt;=$10.000.000)?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito13}
                  name="requisito13"
                />
              </>
            )}
            {values.observacion9 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion13}
                  name="observacion13"
                />
              </>
            )}

            {values.requisito14 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿Tiene aviso externo que indica Vigilado y Controlado Mintic y
                  Colaborador Autorizado?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito14}
                  name="requisito14"
                />
              </>
            )}
            {values.observacion14 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion14}
                  name="observacion14"
                />
              </>
            )}

            {values.requisito15 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿Tiene cuadro Banner con la marca SuperGIROS (aviso de canales
                  de comunicación)?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito15}
                  name="requisito15"
                />
              </>
            )}
            {values.observacion15 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito15}
                  name="observacion15"
                />
              </>
            )}

            {values.requisito16 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿Tiene afiche normativo visible o tarifario con las
                  condiciones del servicio?{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito16}
                  name="requisito16"
                />
              </>
            )}
            {values.observacion16 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion16}
                  name="observacion16"
                />
              </>
            )}

            {values.requisito17 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿Cuenta con sticker tirilla electronica CRC ?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito17}
                  name="requisito17"
                />
              </>
            )}
            {values.observacion17 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion17}
                  name="observacion17"
                />
              </>
            )}

            {values.requisito18 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿Tiene normativa Giros Internacionales, camara o lector five y
                  Sticker de pagos internacionales?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito18}
                  name="requisito18"
                />
              </>
            )}
            {values.observacion18 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion18}
                  name="observacion18"
                />
              </>
            )}

            {values.requisito19 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿El Supervisor Comercial realiza las visitas constantemente,
                  da buen trato y suministra los insumos a tiempo? Cantidad de
                  visitas del Supervisor Comercial al mes?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito19}
                  name="requisito19"
                />
              </>
            )}
            {values.observacion19 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion19}
                  name="observacion19"
                />
              </>
            )}

            {values.requisito20 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿Las recargas efectuadas por el Colocador se trasmiten a
                  través de la red propia de la empresa?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito20}
                  name="requisito20"
                />
              </>
            )}
            {values.observacion20 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion20}
                  name="observacion20"
                />
              </>
            )}

            {values.requisito21 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿La lotería física tiene impreso el nombre de la empresa, de
                  no ser asi reportar inmediatamente?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito21}
                  name="requisito21"
                />
              </>
            )}
            {values.observacion21 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion21}
                  name="observacion21"
                />
              </>
            )}

            {values.requisito22 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿El punto de venta tiene caja fuerte y caja digital? el
                  responsable tiene conocimiento sobre las bases de efectivo
                  asignadas para caja auxiliar y caja digital?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito22}
                  name="requisito22"
                />
              </>
            )}
            {values.observacion22 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion22}
                  name="observacion22"
                />
              </>
            )}

            {values.requisito23 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿Se cumple con los topes de efectivo establecidos para la caja
                  digital y caja auxiliar (ptos de venta con giros)?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito23}
                  name="requisito23"
                />
              </>
            )}
            {values.observacion23 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion23}
                  name="observacion23"
                />
              </>
            )}

            {values.requisito24 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿El colocador tiene conocimiento sobre los montos máximos para
                  pago de premios?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito24}
                  name="requisito24"
                />
              </>
            )}
            {values.observacion24 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion24}
                  name="observacion24"
                />
              </>
            )}

            {values.requisito25 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿El colocador conoce los requisitos para pago de premios?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito25}
                  name="requisito25"
                />
              </>
            )}
            {values.observacion25 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion25}
                  name="observacion25"
                />
              </>
            )}

            {values.requisito26 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿Tiene buzon de PQR, formato de gane y de giros?{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito26}
                  name="requisito26"
                />
              </>
            )}
            {values.observacion26 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion26}
                  name="observacion26"
                />
              </>
            )}

            {values.requisito27 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿El Colocador cuenta con las bases acerca del SARL, SARLAFT,
                  SARO?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito27}
                  name="requisito27"
                />
              </>
            )}
            {values.observacion27 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  observacion{" "}
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.observacion27}
                  name="observacion27"
                />
              </>
            )}

            {values.requisito28 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿El Colocador conoce la definición de operación inusual y
                  operación sospechosa?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito28}
                  name="requisito28"
                />
              </>
            )}
            {values.requisito29 && (
              <>
                <label className="block text-center mt-5 uppercase">
                  VERIFICACION INSUMOS PARA PREVENCION DE COVID 19
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito29}
                  name="requisito29"
                />
              </>
            )}

            {values.requisito30 && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  ¿Tapabocas?
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.requisito30}
                  name="requisito30"
                />
              </>
            )}

            <label className="block text-center mt-5 uppercase">
              fecha visita
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.fechavisita}
              name="fechavisita"
            />

            <label className="block text-center mt-5 uppercase">
              hora visita
            </label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.horavisita}
              name="horavisita"
            />

            <label className="block text-center mt-5 uppercase">latitud</label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.latitud}
              name="latitud"
            />

            <label className="block text-center mt-5 uppercase">longitud</label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.longitud}
              name="longitud"
            />

            <label className="block text-center mt-5 uppercase">longitud</label>
            <input
              className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
              type="text"
              disabled
              defaultValue={values.longitud}
              name="longitud"
            />

            {values.nombre_observacion && (
              <>
                {" "}
                <label className="block text-center mt-5 uppercase">
                  nombre de la observacion
                </label>
                <input
                  className="px-2 py-1 w-full text-center mt-2 bg-slate-300 rounded-full border cursor-not-allowed"
                  type="text"
                  disabled
                  defaultValue={values.nombre_observacion}
                  name="nombre_observacion"
                />
              </>
            )}

            <div className="flex justify-between mt-5">
              <div className="text-center">
                {values.imagen_observacion && (
                  <>
                    {" "}
                    <h4 className="block uppercase">Imagen Observación</h4>
                    <img
                      src={`data:image/png;base64,${values.imagen_observacion}`}
                      className="w-96 h-max mt-2"
                      name="imagen_observacion"
                    />
                  </>
                )}
              </div>

              <div className="text-center ml-5">
                {values.firma_auditoria && (
                  <>
                    {" "}
                    <h4 className="block uppercase">Firma Auditor</h4>
                    <img
                      src={`data:image/png;base64,${values.firma_auditoria}`}
                      className="w-30 h-20 mt-2"
                      name="firma_auditoria"
                    />
                  </>
                )}
              </div>

              <div className="text-center ml-5">
                {values.firma_auditoria && (
                  <>
                    {" "}
                    <h4 className="block uppercase">Firma Colocadora</h4>
                    <img
                      src={`data:image/png;base64,${values.firma_colocadora}`}
                      className="w-30 h-20 mt-2"
                      name="firma_colocadora"
                    />
                  </>
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ArqueoForm;
