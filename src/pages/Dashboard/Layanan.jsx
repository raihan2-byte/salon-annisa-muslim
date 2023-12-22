import React, { useCallback, useEffect, useState } from "react";
import DashboardLayout from "../../components/Dashboard/Layout/Index";
import TopArea from "../../components/Dashboard/TopArea";
import { BiPencil } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import { getAllTreatment } from "../../service/treatment/api";
import toast from "react-hot-toast";

export default function Layanan(props) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetTreatment = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getAllTreatment();
      setData(res.data);
    } catch (error) {
      toast.error(error.message);
    }
    setIsLoading(false);
  }, [getAllTreatment]);

  useEffect(() => {
    handleGetTreatment();
  }, []);
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
                  {data &&
                    data.map((item, index) => (
                      <tr key={index} className="text-gray-700 font-medium">
                        <td className="whitespace-nowrap pr-6 pl-14 py-4 ">
                          {item.TreatmentName}
                        </td>
                        <td className="text-start px-6 py-4 min-w-[200px]">
                          <div className="w-full h-full flex justify-start">
                            <p>{item.Description}</p>
                          </div>
                        </td>
                        <td className=" px-6 py-4  justify-start">
                          {item.Price}
                        </td>
                        <td className=" px-6 py-4  justify-start">
                          {item.Slug}
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
                    ))}
                </tbody>
              </table>
              {isLoading ? (
                <div className="flex justify-center items-center h-[200px]">
                  <p className="text-gray-500">Loading...</p>
                </div>
              ) : isLoading == false && data?.length == 0 ? (
                <div className="flex justify-center items-center h-[200px]">
                  <p className="text-gray-500">Tidak ada data</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
