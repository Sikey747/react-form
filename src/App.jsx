import { useState } from "react";
import Input from "./ui/Input/Input.jsx";
import Textaria from "./ui/Textaria/Textaria.jsx";
import RadioGroup from "./ui/RadioGroup/RadioGroup.jsx";
import Checkbox from "./ui/Checkbox/Checkbox.jsx";
import Button from "./ui/Button/Button.jsx";
import Rating from "./ui/Raiting/Raiting.jsx";
import Switch from "./ui/Switch/Switch.jsx";
import Select from "./ui/Select/Select.jsx";
import DatePicker from "./ui/DatePicker/DatePicker.jsx";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import dayjs from "dayjs";

function App() {
  /* ---------------------------------- value --------------------------------- */
  const dataSex = ["Female", "Male", "Other"];
  const datachecbox = ["S", "L", "M", "XL", "XXL"];
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const today = dayjs();
  /* ---------------------------------- state --------------------------------- */
  const [result, setResult] = useState(null);
    /* ----------------------------- validation shema ---------------------------- */
const schema = yup.object({
      name: yup
        .string()
        .min(2, "Minimum 2 characters")
        .required("The 'Name' field is required"),
      secondName: yup
        .string()
        .min(2, "Minimum 2 characters")
        .required("The 'Second Name' field is required"),
      password: yup
        .string()
        .matches(
          /(?=.*[0-9])(?=.*[!@#$%^&*)(?/+_,.":{}|~<>])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/,
          "The password is not strong enough"
        )
        .required("The 'Password' field is required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords do not match")
        .required("The 'Confirm Password' field is required"),
      email: yup
        .string()
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3.[0-9]{1,3.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "It's not a valid email address"
        )
        .required("The 'Email' field is required"),
      tel: yup.string().required("The 'Telephone' field is required"),
      price: yup.string().required("The 'Price' field is required"),
      about: yup.string(),
      gender: yup.string().required("The 'Gender' field is required"),
      type: yup.array().required("Select at least one type"),
      rating: yup.number().positive().required("The 'Rating' field is required"),
      color: yup.boolean().required("Choose a color"),
      film: yup.object().required("Select a film"),
      date: yup.date().required("The 'Date' field is required"),
    });
  /* --------------------------- connect form options -------------------------- */
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  /* ----------------------------- transform data after validation ----------------------------- */
  const onSubmit = (data) => {
    if (data.date) {
      data.date = dayjs(data.date).toDate();
    } else {
      today;
    }

    if (data.film && typeof data.film === "object") {
      data.film = data.film.value;
    }

    if (data.price) {
      data.price = +data.price;
    }

    if (data.rating) {
      data.rating = +data.rating;
    }

    if (typeof data.tel === "string") {
      data.tel = data.tel.replace(/\D/g, "");
      data.tel = +data.tel;
    }
    if (typeof data.price === "string") {
      data.price = data.price.replace(/\D/g, "");
    }
    console.log(data);
    return setResult(data)
  };
  /* ------------------------------- render html ------------------------------ */
  return (
    <>
    <div className="__container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Example validation Form from react-hook-form + MUI + custom input/component + react-select </h1>
        <div className="input-error">
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <Input
                placeholder="Name"
                id={name}
                value={value}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
                inputRef={ref}
                error={errors.name}
              />
            )}
          />
          {errors.name?.message && <p>{errors.name?.message}</p>}
        </div>
        <div className="input-error">
          <Controller
            name="secondName"
            control={control}
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <Input
                placeholder="Second Name"
                id={name}
                value={value}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
                inputRef={ref}
                error={errors.secondName}
              />
            )}
          />
          {errors.secondName?.message && <p>{errors.secondName?.message}</p>}
        </div>
        <div className="input-error">
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <Input
                placeholder="Password"
                id={name}
                value={value}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
                inputRef={ref}
                error={errors.password}
                type="password"
                icon
              />
            )}
          />
          {errors.password?.message && <p>Ошибка</p>}
        </div>
        <div className="input-error">
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <Input
                placeholder="Confirm Password"
                id={name}
                value={value}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
                inputRef={ref}
                error={errors.confirmPassword}
                type="password"
                icon
              />
            )}
          />
          {errors.confirmPassword?.message && (
            <p>{errors.confirmPassword?.message}</p>
          )}
        </div>
        <div className="input-error">
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <Input
                placeholder="Email"
                id={name}
                value={value}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
                inputRef={ref}
                error={errors.email}
                type="email"
                icon
              />
            )}
          />
          {errors.email?.message && <p>{errors.email?.message}</p>}
        </div>
        <div className="input-error">
          <Controller
            name="tel"
            control={control}
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <Input
                placeholder="+38 (###) ### ## ##"
                id={name}
                value={value}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
                inputRef={ref}
                error={errors.tel}
                type="tel"
                icon
                mask
              />
            )}
          />
          {errors.tel?.message && <p>{errors.tel?.message}</p>}
        </div>
        <div className="input-error">
          <Controller
            name="price"
            control={control}
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <Input
                placeholder="Price"
                id={name}
                value={value}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
                inputRef={ref}
                error={errors.price}
                type="price"
                icon
                mask
              />
            )}
          />
          {errors.price?.message && <p>{errors.price?.message}</p>}
        </div>
        <div className="input-error">
          <Controller
            name="about"
            control={control}
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <Textaria
                placeholder="About"
                id={name}
                value={value}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
                inputRef={ref}
                error={errors.about}
              />
            )}
          />
          {errors.about?.message && <p>{errors.about?.message}</p>}
        </div>
        <div className="input-error">
          <Controller
            name="gender"
            control={control}
            render={({ field: { onChange, onBlur, value, name } }) => (
              <RadioGroup
                title="Gender"
                defaultValue={dataSex[0]}
                data={dataSex}
                value={value}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
                error={errors.gender}
              />
            )}
          />
          {errors.gender?.message && <p>{errors.gender?.message}</p>}
        </div>
        <div className="input-error">
          <Controller
            name="type"
            control={control}
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <Checkbox
                data={datachecbox}
                title="Type"
                value={value}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
                inputRef={ref}
                error={errors.type}
              />
            )}
          />
          {errors.type?.message && <p>{errors.type?.message}</p>}
        </div>
        <div className="input-error">
          <Controller
            name="rating"
            control={control}
            render={({ field: { onChange, onBlur, value = 2.25, name } }) => (
              <Rating
                id="rating"
                value={value}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
                error={errors.rating}
              />
            )}
          />
          {errors.rating?.message && <p>{errors.rating?.message}</p>}
        </div>
        <div className="input-error">
          <Controller
            name="color"
            control={control}
            render={({ field: { onChange, onBlur, value, name } }) => (
              <Switch
                id="color"
                title="Color"
                value={value}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
                error={errors.color}
              />
            )}
          />
          {errors.color?.message && <p>{errors.color?.message}</p>}
        </div>
        <div className="input-error">
          <Controller
            name="film"
            control={control}
            render={({ field: { onChange, onBlur, value, name } }) => (
              <Select
                id="film"
                options={options}
                placeholder="Select an option..."
                value={value}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
                error={errors.film}
              />
            )}
          />
          {errors.film?.message && <p>{errors.film?.message}</p>}
        </div>
        <div className="input-error">
          <Controller
            name="date"
            control={control}
            render={({ field: { onChange, onBlur, value = today, name } }) => (
              <DatePicker
                id="date"
                value={value}
                onChange={onChange}
                name={name}
                onBlur={onBlur}
                error={errors.date}
              />
            )}
          />
          {errors.date?.message && <p className="er">{errors.date?.message}</p>}
        </div>
        {result && (
        <div className="result">
          <h2>Answer:</h2>
          <p>Name: {result.name}</p>
          <p>Second Name: {result.secondName}</p>
          <p>Email: {result.email}</p>
          <p>Tel: {result.tel}</p>
          <p>Price: {result.price}</p>
          <p>About: {result.about}</p>
          <p>Gender: {result.gender}</p>
          <p>Type: {result.type && result.type.join(", ")}</p>
          <p>Rating: {result.rating}</p>
          <p>Color: {result.color ? "Yes" : "No"}</p>
          <p>Film: {result.film && result.film.value}</p>
          <p>Date: {result.date && dayjs(result.date).format("YYYY-MM-DD")}</p>
        </div>
      )}
        <Button type="submit">Send</Button>
      </form>
      </div>
    </>
  );
}

export default App;