"use client";
import React, { useState } from "react";
import { Create } from "@/api";
import { Button } from "./ui/button";
import { Copy, CopyCheck } from "lucide-react";
import Link from "next/link";

export default function Form() {
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [isCopy, setCopy] = useState<boolean>(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (name.length > 0 && desc.length > 0) {
      const data = await Create({ name, desc });
      setLink(data.link);
      setName("");
      setDesc("");
    } else {
      alert("vui lòng nhập đầy đủ thông tin");
    }
  };

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(link);
      setCopy(true);
    } catch (err) {
      alert("Lỗi copy");
    }
  };

  return (
    <form className="w-[600px] min-h-[200px] bg-white p-4 rounded-md flex flex-col gap-y-8">
      <div className="flex items-center justify-between relative">
        <label htmlFor="name" className="w-20">
          Tên:
        </label>
        <input
          type="text"
          className="flex-1 border-2 rounded px-4 py-2"
          placeholder="Nhập tên ..."
          onChange={(e) => setName(e.target.value)}
          value={name}
          maxLength={50}
        />
        <span className="absolute right-2 bottom-2 text-sm opacity-40">
          {name.length}/50
        </span>
      </div>
      <div className="flex items-center justify-between relative">
        <label htmlFor="name" className="w-20">
          Lời chúc:
        </label>
        <textarea
          className="flex-1 border-2 rounded px-4 py-2 min-h-[100px]"
          placeholder="Nhập lời chúc ..."
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          maxLength={200}
        />
        <span className="absolute right-2 bottom-2 text-sm opacity-40">
          {desc.length}/200
        </span>
      </div>
      <button
        className="bg-orange-600 text-white px-5 py-3 rounded-md"
        onClick={handleSubmit}
      >
        Tạo
      </button>

      {link && (
        <div className="flex items-center justify-center gap-4 ">
          <Link href={link} className="bg-orange-200 p-2 rounded">
            {link}
          </Link>
          <Button
            size="icon"
            onClick={handleCopy}
            variant={!isCopy ? "outline" : "default"}
          >
            {isCopy ? (
              <CopyCheck className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      )}
    </form>
  );
}
