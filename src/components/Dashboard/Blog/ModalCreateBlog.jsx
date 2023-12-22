import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import toast from "react-hot-toast";
import { createBlog } from "../../../service/blog/api";

export default function ModalCreateBlog({
  isModalOpen,
  handleCancel,
  handleGetBlog,
}) {
  const [imgPreview, setImgPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    file: null,
  });

  useEffect(() => {
    if (form.file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(form.file[0]);
    }
  }, [form.file]);

  const handleCreate = async (data) => {
    toast.loading("Loading...");
    try {
      const res = await createBlog({
        title: data.title,
        description: data.description,
        file: data.file[0],
      });
      toast.dismiss();
      toast.success("Blog Created");
      setForm({ title: "", description: "", file: null });
      setImgPreview(null);
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
    handleCreate(form);
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
        <div className="mb-3">
          <label className=" text-[#4A335F] font-semibold mb-2">Judul</label>
          <input
            className="w-full bg-white rounded border-2 border-[#4A335F] px-3 py-1"
            id="title"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            value={form?.title || ""}
          />
        </div>
        <div className="mb-3">
          <label className=" text-[#4A335F] font-semibold mb-2">Isi</label>
          <textarea
            rows={4}
            className="w-full bg-white rounded border-2 border-[#4A335F] px-3 py-1"
            id="description"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            value={form?.description || ""}
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label className=" text-[#4A335F] font-semibold mb-2 w-full">
            Foto
          </label>
          <label
            htmlFor="file"
            className="w-fit bg-zinc-300 px-3 py-1 text-[#4A335F] font-semibold cursor-pointer"
          >
            Choose Image
          </label>
          <input
            type="file"
            className="hidden"
            id="file"
            onChange={(e) => setForm({ ...form, file: e.target.files })}
            value={(form?.file && form?.file[0]) || ""}
          />
          {imgPreview && (
            <img
              src={imgPreview}
              alt="preview"
              className="w-[250px] h-[150px] object-contain mt-3"
            />
          )}
        </div>
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
            Tambah
          </button>
        </div>
      </form>
    </Modal>
  );
}
