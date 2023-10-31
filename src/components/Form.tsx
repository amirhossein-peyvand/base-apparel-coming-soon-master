import arrow from "../assets/icon-arrow.svg";
import { FieldValues, useForm } from "react-hook-form";
import erroIcon from "../assets/icon-error.svg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "../sass/Form.scss";

const schema = z.object({
  email: z
    .string()
    .min(14, { message: "Please provide a valid email" })
    .max(40, { message: "Please provide a valid email" })
    .regex(/^(.+)@(.+)$/, { message: "Please provideee a valid email" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (event: FieldValues) => {
    console.log(event);
  };

  const onClick = () => {
    document.querySelector("button")?.classList.add("clicked");
  };

  if (errors.email) document.querySelector("form")?.classList.add("errorForm");

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email")}
          type="email"
          placeholder="Email Address"
        />
        {errors.email && (
          <img className="errorIcon" src={erroIcon} alt="erroIcon" />
        )}
        <button type="submit" className="btn" onClick={onClick}>
          <img src={arrow} alt="arrow" />
        </button>
      </form>
      {errors.email && <p className="err">{errors.email.message}</p>}
    </div>
  );
};

export default Form;
