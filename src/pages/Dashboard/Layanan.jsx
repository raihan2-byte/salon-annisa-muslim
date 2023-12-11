import React from "react";
import DashboardLayout from "../../components/Dashboard/Layout/Index";
import TopArea from "../../components/Dashboard/TopArea";
import { BiPencil } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Layanan(props) {
  return (
    <DashboardLayout>
      <TopArea title="Layanan" buttonTitle="Buat Layanan" />
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="pr-6 pl-14 py-4">
                      Nama Layanan
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Deskripsi
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Harga
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Kategori Layanan
                    </th>
                    <th scope="col" className="pl-6 pr-14 py-4">
                      Edit/Hapus
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-gray-700 font-medium">
                    <td className="whitespace-nowrap pr-6 pl-14 py-4 ">
                      Creambath
                    </td>
                    <td className="text-start px-6 py-4 min-w-[200px]">
                      <div className="w-full h-full flex justify-start">
                        <p>
                          Creambath bertujuan untuk memelihara kulit kepala dan
                          batang rambut agar selalu dalam keadaan bersih dan
                          sehat. Perawatan yang teratur dapat mencegah...
                        </p>
                      </div>
                    </td>
                    <td className=" px-6 py-4  justify-start">Rp. 50.000</td>
                    <td className=" px-6 py-4  justify-start">
                      Perawatan Rambut
                    </td>
                    <td className="flex flex-row justify-start gap-3 pl-6 pr-14 py-4">
                      <button className="bg-gray-700 rounded-lg text-white p-1.5">
                        <BiPencil size={20} />
                      </button>
                      <button className="bg-gray-700 rounded-lg text-white p-1.5">
                        <FaRegTrashAlt size={20} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
