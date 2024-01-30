//traer configuración de la base de datos
import { pool } from "../db.js";

//controlador de rutas
//traer todas las tareas
export const getArqueos = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM `registro_arqueo_servired` ORDER BY `fechavisita` DESC "
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// export const updateArqueo = async (req, res) => {
//   try {
//     const result = await pool.query(
//       "UPDATE registro_arqueo_servired SET ? WHERE id = ?",
//       [req.body, req.params.id]
//     );
//     res.json(result);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };

//traer una tarea
export const getArqueo = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT s.supervisor, IF(s.supervisor = b.login, b.nombre, '') AS nombre_supervisor, s.id, s.ip, s.nombres, s.documento, s.sucursal, s.puntodeventa, s.ventabruta, s.baseefectivo, s.totalingreso, s.chancesabonados, s.chancespreimpresos, s.premiospagados, s.efectivocajafuerte, s.totalegresos, s.totalbilletes, s.totalmonedas, s.totalarqueo, s.sobrantefaltante, " +
        "s.canti_billete_cienmil, s.total_billete_cienmil, s.canti_billete_cincuentamil, s.total_billete_cincuentamil, s.canti_billete_veintemil, s.total_billete_veintemil, s.canti_billete_diezmil, s.total_billete_diezmil, s.canti_billete_cincomil, s.total_billete_cincomil, s.canti_billete_dosmil, s.total_billete_dosmil, s.canti_billete_mil, s.total_billete_mil, " +
        "s.canti_moneda_mil, s.total_moneda_mil, s.canti_moneda_quinientos, s.total_moneda_quinientos, s.canti_moneda_docientos, s.total_moneda_docientos, s.canti_moneda_cien, s.total_moneda_cien, s.canti_moneda_cincuenta, s.total_moneda_ciencuenta, " +
        "s.total_efectivo, s.total_premios_pagados, s.entrega_colocador, s.sobrantefaltante_caja, s.colocador_cajafuerte, s.rollos_bnet, s.rollos_fisicos, s.diferencia, " +
        "s.nombre_juego, s.cantidad_bnet, s.cantidad_fisicos, s.cantidad_faltante, s.cantidad_tiquete, s.descargado, " +
        "s.nombre_juego2, s.cantidad_bnet2, s.cantidad_fisicos2, s.cantidad_faltante2, s.cantidad_tiquete2, s.descargado2, " +
        "s.nombre_juego3, s.cantidad_bnet3, s.cantidad_fisicos3, s.cantidad_faltante3, s.cantidad_tiquete3, s.descargado3, " +
        "s.nombre_juego4, s.cantidad_bnet4, s.cantidad_fisicos4, s.cantidad_faltante4, s.cantidad_tiquete4, s.descargado4, " +
        "s.totaldescargados, s.totalvalor, s.requisito1, s.observacion1, s.requisito2, s.observacion2, s.requisito3, s.observacion3, s.requisito4, s.observacion4, s.requisito5, s.observacion5, s.requisito6, s.observacion6, s.requisito7, " +
        "s.observacion7, s.requisito8, s.observacion8, s.requisito9, s.observacion9, s.requisito10, s.observacion10, s.requisito11, s.observacion11, s.requisito12, s.observacion12, s.requisito13, s.observacion13, s.requisito14, s.observacion14, s.requisito15, s.observacion15, s.requisito16, s.observacion16, s.requisito17, s.observacion17, s.requisito18, s.observacion18, " +
        "s.requisito19, s.observacion19, s.requisito20, s.observacion20, s.requisito21, s.observacion21, s.requisito22, s.observacion22, s.requisito23, s.observacion23, s.requisito24, s.observacion24, s.requisito25, s.observacion25, s.requisito26, " +
        "s.observacion26, s.requisito27, s.observacion27, s.requisito28, s.observacion28, s.requisito29, s.requisito30, s.fechavisita, s.horavisita, s.firma_auditoria, s.firma_colocadora, s.latitud, s.longitud, s.imagen_observacion, s.nombre_observacion " +
        "FROM appseguimiento.registro_arqueo_servired s " +
        "INNER JOIN bdpersona.tbusuario b ON s.supervisor = b.login WHERE s.id = ?",
      [req.params.id]
    );
    if (result.length === 0) {
      return res.status(404).json({ message: "no hay arqueos" });
    }
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
