import React from "react";
// <========== images ==========>
import Image from "next/image";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
interface ChildProps {
  onChildClick: (value: string) => void;
  handleBtnChange: (value: boolean) => void;
}

const LoginForm: React.FC<ChildProps> = ({ onChildClick,handleBtnChange }) => {
  const [access,setAccess]=useState(false)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("enter the input values");
    } else if (formData.email && formData.password) {
      try {
        const response = await fetch("http://localhost:8000/user/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        
        console.log(response.status);

        if (response.status === 200) {
          const user = await response.json();

          localStorage.setItem("accessToken", user.accessToken);
          localStorage.setItem("refreshToken", user.refreshToken);

          // window.location.replace("/");
        } else if (response.status === 404) {
          setError("User not found. Please check your email and password.");
        } else {
          setError("Invalid email or password");
        }
      } catch (error) {
        console.error("Error:", error);
        setError("An error occurred while signing in.");
      }
    }
  };




  const loginModel = (val: string) => {
    onChildClick(val);
    handleBtnChange
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
          Login
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
              <GoogleIcon style={{ fontSize: "20" }} className="mr-2" />
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
              className="select-model border outline-none border-[#f1f1f1] rounded-xl px-[10px]"
              type="text"
              name="email"
              onChange={handleInputChange}
              placeholder="User Name or Email Address"
            />
            <input
              className="select-model border outline-none border-[#f1f1f1] rounded-xl"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-row justify-between mb-4 text-[#777777] text-[16px]">
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>Remember</span>
            </div>
            <div>
              <h3>Lost your password?</h3>
            </div>
          </div>
          <div className="flex justify-center text-[#777777]">
            <button
              type="button"
              onClick={handleSubmit}
              className=" bg-[#029e9d] text-white border text-16px border-[#f1f1f1] rounded-xl  w-full model-btn"
            >
              Login
            </button>
          </div>
        </form>
        <h3 className="text-center text-[#777777] text-[16px]">
          Don't have an account?{" "}
          <span
            className="text-[#029e9d]"
            onClick={() => {
              loginModel("reg");
            }}
          >
            Register
          </span>
        </h3>
      </div>
    </div>
  );
};

export default LoginForm;
