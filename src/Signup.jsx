import React from "react";
import Forms from "./forms";

const SingnUpUser = () => {
  function isValidIranianNationalCode(value) {
    console.log("ehsan");
    if (!/^\d{10}$/.test(value)) return "کد ملی معتبر نمی باشد";
    const check = +value[9];
    const sum =
      value
        .split("")
        .slice(0, 9)
        .reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;
    const resault = sum < 2 ? check === sum : check + sum === 11;
    return resault ? true : "کد ملی معتبر نمی باشد";
  }
  const test = (value) => {
    if (value === "ehsan") {
      console.log(value === "ehsan");
      return "اسم نیاید احسان باشد";
    }
    return "اسم باید احسان باشد";
  };
  const forms = {
    items: [
      {
        id: 1,
        tagType: "input",
        type: "text",
        placeholder: "نام و نام خانوادگی  را وارد نمایید",
        label: "نام و نام خانوادگی",
        name: "fullname",
        validations: {
          required: {
            value: true,
            message: `نام و نام خانوادگی الزامی می باشد`
          },
          minLength: {
            value: 4,
            message: `نام باید بیش از 4 حرف باشد`
          },
          validate: test
        },
        toolTip: "نام و نام خانوادگی"
      },
      {
        id: 2,
        tagType: "input",
        type: "text",
        placeholder: "کد ملی را وارد نمایید",
        label: "کد ملی",
        name: "identifycode",
        validations: {
          required: {
            value: true,
            message: "کد ملی را وارد نمایید"
          },

          maxLength: {
            value: 10,
            message: "کد ملی باید 10 رقی باشد"
          },
          validate: isValidIranianNationalCode
        },
        toolTip: "کد ملی 10 رقمی و شامل عدد باشد"
      },
      {
        id: 3,
        tagType: "input",
        type: "text",
        placeholder: "آدرس ایمیل را وارد نمایید",
        label: "آدرس ایمیل",
        name: "emailaddress",
        validations: {
          required: {
            value: true,
            message: "وارد کردن ایمیل الزامی می باشد"
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "فرمت ایمیل صحیح نمی باشد"
          }
        },
        toolTip: "youremail@address.com"
      },
      {
        id: 4,
        tagType: "input",
        type: "password",
        placeholder: "کلمه عبور را وارد نمایید",
        label: "کلمه عبور",
        name: "password",
        validations: {
          required: {
            value: true,
            message: `کلمه عبور را لطفا پر نمایید`
          },
          minLength: {
            value: 8,
            message: `کلمه عبور باید بیش از 8 کلمه باشد`
          }
        },
        toolTip: "کلمه عبور باید بیش از 8 کلمه باشد"
      },
      {
        id: 5,
        tagType: "input",
        type: "password",
        placeholder: "کلمه عبور را وارد نمایید",
        label: "کلمه عبور",
        name: "passwordconfirm",
        validations: {
          required: {
            value: true,
            message: `کلمه عبور را لطفا پر نمایید`
          },
          minLength: {
            value: 8,
            message: `کلمه عبور باید بیش از 8 کلمه باشد`
          }
        },
        toolTip: "کلمه عبور باید بیش از 8 کلمه باشد"
      },

      {
        id: 6,
        tagType: "button",
        type: "submit",
        label: "ورود",
        className: "btn btn-primary"
      }
    ]
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="signup w-50 mt-3 p-2">
          <Forms forms={forms} />
        </div>
      </div>
    </div>
  );
};

export default SingnUpUser;
