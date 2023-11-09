import React from "react";
import Layout from "../components/Layout";

export default function Blog() {
  return (
    <Layout>
      <div className="py-20 px-16">
        <div className=" text-gray-700 lg:text-5xl md:text-3xl text-xl font-bold tracking-wide mb-10">
          Blog & Informasi
        </div>
        <div className="flex flex-col gap-5">
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-md border border-black p-5 flex md:flex-row flex-col md:items-start items-center gap-5"
              >
                <div className="lg:min-w-[323px] md:max-w-none max-w-[250px] md:min-w-[223px] min-w-[170px] h-fit aspect-square bg-zinc-300 rounded-md" />
                <div className="flex flex-col gap-5">
                  <p className="text-gray-700 lg:text-[32px] md:text-2xl font-semibold">
                    Manfaat Creambath bagi Wanita{" "}
                  </p>
                  <p className="lg:text-base md:text-sm text-xs">
                    Rambut kusut dan sulit diatur bisa membuat Anda mengalami
                    bad hair day. Apalagi jika Anda sudah mencoba berbagai macam
                    cara untuk menata dan merapikannya, tetapi masih tidak
                    membuahkan hasil. Nah, salah satu manfaat creambath yang
                    bisa langsung Anda rasakan adalah melembutkan rambut. Untuk
                    mendapatkan manfaat ini, pilihlah krim yang mengandung
                    silika. Jika ingin memakai bahan alami, Anda bisa menggunaka
                    Kandungan nutrisi, seperti vitamin A, vitamin E, biotin,
                    protein, dan folat, pada kedua bahan alami tersebut dapat
                    merangsang pertumbuhan, menebalkan rambut, dan menjaga
                    kekuatan rambut. Selain itu, Anda juga bisa mencampurkan
                    telur atau lidah buaya dengan madu agar berkilau....
                  </p>
                  <p className="text-gray-700 text-xs">10 Oktober 2023 14:20</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
