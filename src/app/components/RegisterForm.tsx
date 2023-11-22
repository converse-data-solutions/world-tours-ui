import React from "react";
// <========== images ==========>
import Image from "next/image";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";

interface ChildProps {
  onChildClick: (value: string) => void;
}

const RegisterForm: React.FC<ChildProps> = ({ onChildClick }) => {
  const loginModel = (val: string) => {
    onChildClick(val);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="lg:w-[50%]">
        <Image
          src="/images/footer-image/footer1.jpg"
          alt=""
          width={1000}
          height={1000}
          className="w-full h-[200px] lg:h-full rounded-xl"
        />
      </div>
      <div className="lg:w-[50%] px-[15px]">
        <h3 className="mb-4 pb-4 text-center Play-fair text-[22px] font-semibold">
          Register
        </h3>
        <div className="flex justify-between">
          <button className="text-[14px] bg-[#506DAB] rounded-xl text-white model-btn">
            <span>
              <FacebookOutlinedIcon
                style={{ fontSize: "20" }}
                className="mr-2"
              />
            </span>
            <span>Login with facebook</span>
          </button>
          <button className="text-[14px] bg-[#DD4B39] rounded-xl text-white model-btn">
            <span>
              <GoogleIcon style={{ fontSize: "18" }} className="mr-2" />
            </span>
            <span>Login with google</span>
          </button>
        </div>
        <div className="flex my-4">
          <div className="w-full self-center">
            <hr />
          </div>
          <h3 className="bg-white ">Or</h3>
          <div className="w-full self-center">
            <hr />
          </div>
        </div>
        <form action="" className="border-b border-dashed mb-4 pb-4">
          <div className=" flex flex-col gap-4 mb-4">
            <input
              className="select-model border border-[#f1f1f1] rounded-xl px-[10px]"
              type="text"
              placeholder="User Name "
            />
            <input
              className="select-model border border-[#f1f1f1] rounded-xl"
              type="password"
              placeholder=" Email Address"
            />
            <input
              className="select-model border border-[#f1f1f1] rounded-xl"
              type="password"
              placeholder="Password"
            />
            <input
              className="select-model border border-[#f1f1f1] rounded-xl"
              type="password"
              placeholder="Re-enter Password"
            />
          </div>
          <div className=" mb-4 text-[#777777] text-[16px]">
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>I have read and accept the Terms and Privacy Policy?</span>
            </div>
          </div>
          <div className="flex justify-center text-[#777777]">
            <button className="bg-[#029e9d] text-white border text-16px border-[#f1f1f1] rounded-xl  w-full model-btn">
              Register
            </button>
          </div>
        </form>
        <h3 className="text-center text-[#777777] text-[16px]">
          Already have an account?{" "}
          <span
            className="text-[#029e9d]"
            onClick={() => {
              loginModel("login");
            }}
          >
            Login
          </span>
        </h3>
      </div>
    </div>
  );
};

export default RegisterForm;
