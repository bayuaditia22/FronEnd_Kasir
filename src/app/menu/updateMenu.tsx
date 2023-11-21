"use client";
import { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Menu = {
  id: number;
  jenis_id: string;
  nama_menu: string;
  harga: string;
  image: string;
  deskripsi: string;
};

const API_URL = "http://127.0.0.1:8000/api";
const UpdateMenu = (Menu: Menu) => {
  const [modal, setModal] = useState(false);
  const [jenis_id, setJenis_id] = useState(Menu.jenis_id);
  const [nama_menu, setNamaMenu] = useState(Menu.nama_menu);
  const [harga, setHarga] = useState(Menu.harga);
  const [image, setImage] = useState(Menu.image);
  const [deskripsi, setDeskripsi] = useState(Menu.deskripsi);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);
    let endpoint = `${API_URL}/menu/${Menu.id}`;
    const data = { jenis_id:jenis_id , nama_menu:nama_menu, harga:harga, image:image, deskripsi:deskripsi};
    await axios.patch(endpoint, data);
    setJenis_id("");
    setNamaMenu("");
    setHarga("");
    setImage("");
    setDeskripsi("");
    router.refresh();
    setModal(false);
  };
  return (
    <div>
      <button className="btn btn-info btn-sm" onClick={handleChange}>
        Edit
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg"> Edit {Menu.nama_menu}</h3>
          <form onSubmit={handleUpdate}>
          <div className="form-control">
              <label className="label font-bold">Kategori ID</label>
              <input
                type="text"
                value={jenis_id}
                onChange={(e) => setJenis_id(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Kategori ID"
              />
              <label className="label font-bold">Nama Menu</label>
              <input
                type="text"
                value={nama_menu}
                onChange={(e) => setNamaMenu(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Nama Menu"
              />
              <label className="label font-bold">Harga</label>
              <input
                type="text"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Harga"
              />
              <label className="label font-bold">Image</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Image"
              />
              <label className="label font-bold">deskripsi</label>
              <input
                type="text"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Deskripsi"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Updating...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UpdateMenu;