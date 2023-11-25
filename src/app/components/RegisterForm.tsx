"use client";
import React from "react";
// <========== images ==========>
import Image from "next/image";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useState } from "react";

interface ChildProps {
  onChildClick: (value: string) => void;
}

const RegisterForm: React.FC<ChildProps> = ({ onChildClick}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const loginModel = (val: string) => {
    onChildClick(val);
  };

  const handleChange = (e: any) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("http://localhost:8000/user/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("Signup successful");
        } else {
          alert("Signup failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const validateForm = (data: any) => {
    let errors: any = {};

    if (!data.username.trim()) {
      errors.username = "Username is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email address";
    }

    if (!data.password.trim()) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (!data.confirmPassword.trim()) {
      errors.confirmPassword = "Enter confirmpassword is required";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Password miss match";
    }

    return errors;
  };

  const isValidEmail = (email: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
          <div className=" flex flex-col gap-4 mb-4" id="reg-form">
            <input
              className="select-model border outline-none border-[#f1f1f1] rounded-lg px-[20px]"
              type="text"
              name="username"
              placeholder="User Name "
              onChange={handleChange}
            />
            <span>
              {" "}
              {errors.username ? (
                <span className="text-[13px] text-red-600">
                  <span>
                    <ErrorOutlineIcon style={{ fontSize: 13 }} />
                  </span>
                  {errors.username}
                </span>
              ) : null}
            </span>

            <input
              className="select-model border outline-none border-[#f1f1f1] rounded-lg px-[20px]"
              type="email"
              name="email"
              placeholder=" Email Address"
              onChange={handleChange}
            />
            <span>
              {errors.email ? (
                <span className="text-[13px] text-red-600">
                  <span>
                    <ErrorOutlineIcon style={{ fontSize: 13 }} />
                  </span>{" "}
                  {errors.email}
                </span>
              ) : null}
            </span>

            <input
              className="select-model border outline-none border-[#f1f1f1] rounded-lg px-[20px]"
              type="password"
              name="password"
              placeholder="Password"
              min={8}
              max={10}
              onChange={handleChange}
            />
            <span className="text-red-600">
              {errors.password ? (
                <span className="text-[13px] text-red-600">
                  <span>
                    <ErrorOutlineIcon style={{ fontSize: 13 }} />
                  </span>
                  {errors.password}
                </span>
              ) : null}
            </span>

            <input
              className="select-model border outline-none border-[#f1f1f1] rounded-lg px-[20px]"
              type="password"
              name="confirmPassword"
              typeof="re-password"
              placeholder="Re-enter Password"
              onChange={handleChange}
            />
            <span>
              {errors.password === errors.confirmPassword ? null : (
                <span className="text-[13px] text-red-600">
                  <span>
                    <ErrorOutlineIcon style={{ fontSize: 13 }} />
                  </span>{" "}
                  {errors.confirmPassword}
                </span>
              )}
            </span>
          </div>
          <div className=" mb-4 text-[#777777] text-[16px]">
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>I have read and accept the Terms and Privacy Policy?</span>
            </div>
          </div>
          <div className="flex justify-center text-[#777777]">
            <button
              onClick={handleSubmit}
              type="button"
              className="bg-[#029e9d] text-white border text-16px border-[#f1f1f1] rounded-xl  w-full model-btn"
            >
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
