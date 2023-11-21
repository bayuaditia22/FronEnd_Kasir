
export const metadata = {
    title: "Pelanggan",
  };
  import AddPelanggan from "./addPelanggan";
  import DeletePelanggan from "./deletePelanggan";
  import EditPelanggan from "./updatePelanggan";
  import axios from "axios";
  import Link from "next/link";
  import React from "react";
  
  type Pelanggan = {
    id: number;
    nama: string;
    email: string;
    nomor_telepon: string;
    alamat: string;
  };
  const getPelanggan = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/pelanggan");
    return res.data
  };
  const PelangganList = async () => {
    const pelanggan: Pelanggan[] = await getPelanggan();
    return (
      <div className="py-10 px-10">
         <div className="py-2"></div>
        <div className="py-2">
          <AddPelanggan/>
        </div>
        <table className="table table-zebra">
          <thead>
              <tr className="bg-base-200">
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Nomor Telepon</th>
                <th>Alamat</th>
                <th>Action</th>
              </tr>
          </thead>
        <tbody>
          {pelanggan && pelanggan.map((pelanggan, index) => (
            <tr key={pelanggan.id}>
              <td>{index + 1}</td>
              <td>{pelanggan.nama}</td>
              <td>{pelanggan.email}</td>
              <td>{pelanggan.nomor_telepon}</td>
              <td>{pelanggan.alamat}</td>
              <td className=" flex">
              <EditPelanggan {... pelanggan} />
                <DeletePelanggan {... pelanggan} />
                <div className="mr-1"> 
                </div>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  };
  export default PelangganList;