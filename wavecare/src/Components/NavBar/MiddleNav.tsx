"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function MiddleNav() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full bg-[var(--prima)] border-b border-gray-300 relative">
      <div className="flex items-center justify-between py-3 px-[8%] lg:px-[16%]">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl lg:text-5xl font-bold Playfair-display text-black"
        >
          Wave<span className="text-[var(--second)]">Care</span>
        </Link>

       { /* Search box */}
                <div className="relative mx-0 ms-6 flex flex-1 flex-col rounded-lg bg-white lg:max-w-2xl">
                    <div className="flex items-center">
                        <input 
                        type="text"
                        placeholder="Busque por um produto"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1 rounded-l-lg px-4 py-4 outline-none"
                        />

                        <button className="cursor-pointer px-3 text-2xl">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>

        {/* Contato */}
                <div className='flex items-center gap-2 ml-6'>
                    <Image
                        src='/wave.png'
                        alt='Suporte'
                        width={40}
                        height={40}
                    />

                    <div className='flex flex-col'>
                        <h2 className='text-xs font-semibold'>SUPORTE</h2>
                        <h1 className='font-semibold'>12 9999-4444</h1>
                    </div>
                </div>
                

      </div>
    </div>
  );
}