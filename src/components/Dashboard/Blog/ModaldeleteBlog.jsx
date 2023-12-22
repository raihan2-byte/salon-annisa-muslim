import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import toast from "react-hot-toast";
import { createBlog, deleteBlog } from "../../../service/blog/api";

export default function ModalDeleteBlog({
  isModalOpen,
  handleCancel,
  handleGetBlog,
  dataEdit,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (data) => {
    toast.loading("Loading...");
    try {
      const res = await deleteBlog(data);
      toast.dismiss();
      toast.success("Blog Deleted");
      handleCancel();
      handleGetBlog();
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    handleDelete(dataEdit?.Slug);
    setIsLoading(false);
  };

  return (
    <Modal
      centered
      open={isModalOpen}
      className="py-8"
      closable={false}
      footer={false}
    >
      <form className="flex flex-col">
        <p className="md:text-2xl text-sm font-semibold text-center text-[#4A335F]">
          Apakah anda yakin ingin menghapus blog "{dataEdit?.Title}" ?
        </p>
        <div className="w-full flex flex-row gap-5 mt-8">
          <button
            className="w-full py-2 rounded-md text-[#4A335F] border-2 border-[#4A335F]"
            onClick={() => {
              handleCancel();
            }}
            type="button"
          >
            Batal
          </button>
          <button
            className={`w-full bg-[#4A335F] py-2 rounded-md text-white ${
              isLoading && "cursor-not-allowed"
            }`}
            type="button"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Hapus
          </button>
        </div>
      </form>
    </Modal>
  );
}
