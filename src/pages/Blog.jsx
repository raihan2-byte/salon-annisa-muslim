import React, { useCallback, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Pagination } from "antd";
import { getAllBlog } from "../service/blog/api";
import toast from "react-hot-toast";

export default function Blog() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
    <Layout>
      <div className="py-20 px-16">
        <div className=" text-[#4A335F] lg:text-5xl md:text-3xl text-xl font-bold tracking-wide mb-10 font-syne">
          Blog & Informasi
        </div>
        <div className="flex flex-col gap-5">
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-md border border-black p-5 flex md:flex-row flex-col md:items-stretch items-center gap-5 "
              >
                <div className="lg:min-w-[323px] md:max-w-none max-w-[250px] md:min-w-[223px] min-w-[170px] h-fit aspect-square bg-zinc-300 rounded-md" />
                <div className=" flex flex-col justify-between">
                  <div className="flex flex-col gap-5">
                    <p className="text-[#4A335F] lg:text-[32px] md:text-2xl font-semibold font-poppins">
                      Manfaat Creambath bagi Wanita{" "}
                    </p>
                    <p className="lg:text-base md:text-sm text-xs font-poppins">
                      Rambut kusut dan sulit diatur bisa membuat Anda mengalami
                      bad hair day. Apalagi jika Anda sudah mencoba berbagai
                      macam cara untuk menata dan merapikannya, tetapi masih
                      tidak membuahkan hasil. Nah, salah satu manfaat creambath
                      yang bisa langsung Anda rasakan adalah melembutkan rambut.
                      Untuk mendapatkan manfaat ini, pilihlah krim yang
                      mengandung silika. Jika ingin memakai bahan alami, Anda
                      bisa menggunaka Kandungan nutrisi, seperti vitamin A,
                      vitamin E, biotin, protein, dan folat, pada kedua bahan
                      alami tersebut dapat merangsang pertumbuhan, menebalkan
                      rambut, dan menjaga kekuatan rambut. Selain itu, Anda juga
                      bisa mencampurkan telur atau lidah buaya dengan madu agar
                      berkilau....
                    </p>
                  </div>
                  <p className="text-gray-700 text-xs ">
                    10 Oktober 2023 14:20
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="w-full flex justify-center mt-10">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </Layout>
  );
}
