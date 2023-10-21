"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Axios } from "axios";
import { useState } from "react";
import Image from "next/image";

const Signup = () => {

  const [valid,setValid] = useState();

  const validNumber = (e) => {
    const valueee = e.target.value.replace(/\D/g, "");
    setValid(valueee)
  }
  const [user,setUser] = useState({
      name : "",
      phone: "",
  })

  const onSignUp = async () => {
    
  };
  return (
    <section className="flex bg-gray-50 min-h-screen  justify-center items-center">
      <div className=" bg-gray-100 w-[600px] flex rounded-2xl shadow-lg  p-5 items-center">
        <div className="md:w-1/2 ">
          <h2 class="font-bold text-2xl text-[#002D74]">ورود</h2>
          <p class="text-xs mt-4 text-[#002D74]">
            اگر ثبت نام نکردین لطفا ابتداثبت نام کنید
          </p>
          <form action="" className="flex flex-col gap-4 my-7">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="ایمیل"
              className="input input-bordered input-md w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="شماره تماس"
              className="input input-bordered input-md w-full max-w-xs"
              value={valid}
              onChange={validNumber}
            />
          </form>
          <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr class="border-gray-400" />
            <p class="text-center text-sm">OR</p>
            <hr class="border-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
