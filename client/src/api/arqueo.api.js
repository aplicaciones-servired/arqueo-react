//url para comunicarsse con el backend

import axios from "axios";

export const getArqueosRequest = async () =>
  await axios.get("http://localhost:4000/arqueos");

export const getArqueoRequest = async (id) =>
  await axios.get(`http://localhost:4000/arqueos/${id}`);

export const updateArqueoRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/arqueos/${id}`, newFields);

