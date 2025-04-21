import React from "react";
import { useFormik } from "formik";
import { formSchema } from "../../schemas/formSchema";
import Input from "../input/input";
import Button from "../button/button";
import styles from "./form.module.css";
import Swal from "sweetalert2";

const Form: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      nombreApellido: "",
      email: "",
      password: "",
      confirmarPassword: "",
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Datos enviados:", values);
      Swal.fire({
        title: "¡Formulario enviado!",
        text: "Tus datos fueron registrados correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      resetForm();
    },
  });

  return (
    <div className={styles.container}>
      <h2>Formulario de Registro</h2>
      <form onSubmit={formik.handleSubmit} noValidate>
        <Input
          label="Nombre y Apellido"
          name="nombreApellido"
          value={formik.values.nombreApellido}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          error={
            formik.touched.nombreApellido ? formik.errors.nombreApellido : ""
          }
        />

        <Input
          label="Correo"
          name="email"
          type="email"
          value={formik.values.email}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          error={formik.touched.email ? formik.errors.email : ""}
        />

        <Input
          label="Contraseña"
          name="password"
          type="password"
          value={formik.values.password}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          error={formik.touched.password ? formik.errors.password : ""}
        />

        <Input
          label="Confirmar Contraseña"
          name="confirmarPassword"
          type="password"
          value={formik.values.confirmarPassword}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          error={
            formik.touched.confirmarPassword
              ? formik.errors.confirmarPassword
              : ""
          }
        />

        <Button disabled={!formik.isValid || !formik.dirty}>Enviar</Button>
      </form>
    </div>
  );
};

export default Form;
