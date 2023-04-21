import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputText from "./inputtext";
import SubmitButtom from "./SubmitButtom";

const Forms = ({ forms }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: "onChange" });

  const getInput = (type) => {
    const {
      tagType,
      type: inputType,
      placeholder,
      toolTip,
      label,
      validations,
      name,
      id,
      className
    } = type;
    let input;
    const tags = {
      input: function () {
        input = (
          <InputText
            placeholder={placeholder}
            key={id}
            name={name}
            label={label}
            toolTip={toolTip}
            validations={validations}
            register={register}
            errors={errors}
            type={inputType}
          />
        );
      },
      button: function () {
        input = <SubmitButtom key={id} label={label} className={className} />;
      }
    };
    tags[tagType]();
    return input;
  };

  const { items } = forms;

  return (
    <form onSubmit={handleSubmit((data) => console.log("cgds", data))}>
      {items.map((item) => getInput(item))}
    </form>
  );
};

export default Forms;
