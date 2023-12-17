import React, { useCallback, useEffect, useState } from "react";
import DashboardLayout from "../../components/Dashboard/Layout/Index";
import TopArea from "../../components/Dashboard/TopArea";
import { BiPencil } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import { getAllBlog } from "../../service/blog/api";
import toast from "react-hot-toast";
import ModalBlog from "../../components/Dashboard/Blog/ModalCreateBlog";
import ModalEditBlog from "../../components/Dashboard/Blog/ModalEditBlog";
import { Spin, Empty } from "antd";
export default function Blog() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetBlog = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getAllBlog();
      setData(res.data);
    } catch (error) {
      toast.error(error.message);
    }
    setIsLoading(false);
  }, [getAllBlog]);

  useEffect(() => {
    handleGetBlog();
  }, []);
  return (
    <DashboardLayout>
      <TopArea
        title="Blog"
        buttonTitle="Buat Blog"
        onClick={() => setIsModalOpen("create")}
      />
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="pr-6 pl-14 py-4">
                      Foto
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Judul
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Isi
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
                          {/* <div className="w-[158px] h-[88px] bg-zinc-300" /> */}
                          <img
                            src={item.FileName}
                            alt="blog"
                            className="w-[158px] h-[88px] object-contain"
                          />
                        </td>
                        <td className=" px-6 py-4 flex justify-start">
                          {item.Title}
                        </td>
                        <td className="text-start px-6 py-4 min-w-[200px]">
                          <div className="w-full h-full flex justify-start">
                            <p>{item.Description}</p>
                          </div>
                        </td>
                        <td className="flex flex-row justify-start gap-3 pl-6 pr-14 py-4">
                          <button
                            onClick={() => setIsModalOpen(item.Slug)}
                            className="bg-gray-700 rounded-lg text-white p-1.5"
                          >
                            <BiPencil size={20} />
                          </button>
                          <button className="bg-gray-700 rounded-lg text-white p-1.5">
                            <FaRegTrashAlt size={20} />
                          </button>
                          <ModalEditBlog
                            dataEdit={item}
                            isModalOpen={isModalOpen === item.Slug}
                            handleCancel={() => setIsModalOpen(false)}
                            handleGetBlog={handleGetBlog}
                            key={index}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {isLoading ? (
                <div className="mt-14 h-[200px]">
                  <Spin tip="Loading ..." size="large">
                    <div className="content" />
                  </Spin>
                </div>
              ) : isLoading == false && data?.length == 0 ? (
                <div className="flex justify-center items-center mt-8">
                  <Empty />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <ModalBlog
        isModalOpen={isModalOpen === "create"}
        handleCancel={() => setIsModalOpen(false)}
        handleGetBlog={handleGetBlog}
      />
    </DashboardLayout>
  );
}
