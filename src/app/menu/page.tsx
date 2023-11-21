export const metadata = {
  title: "Menu",
}
import axios from 'axios'
import Link from 'next/link'
import AddMenu from './addMenu'
import DeleteMenu from './deleteMenu'
import UpdateMenu from './updateMenu'

type Menu = {
  id: number;
  jenis_id: string;
  nama_menu: string;
  harga: string;
  image: string;
  deskripsi: string;
};

const getMenu = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/menu");

  return res.data

}
const  MenuList = async () => {
  const Menu: Menu[] = await getMenu()
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddMenu />
      </div>
      <table className="table table-zebra">
        <thead>
          <tr className="bg-base-200">
            <th>No.</th>
            <th>Nama Menu</th>
            <th>harga</th>
            <th>image</th>
            <th>deskripsi</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Menu.map((Menu, index) => (
            <tr key={Menu.id}>
              <td>{index + 1}</td>
              <td>{Menu.nama_menu}</td>
              <td>{Menu.harga}</td>
              <td>{Menu.image}</td>
              <td>{Menu.deskripsi}</td>
              <td className="flex">
                <div className="mr-1">
                  <UpdateMenu {...Menu} />
                </div>
                  <DeleteMenu {...Menu}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuList;