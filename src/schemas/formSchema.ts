import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  nombreApellido: Yup.string()
    .required("El nombre y apellido es obligatorio")
    .min(3, "Debe tener al menos 3 caracteres"),

  email: Yup.string()
    .email("Email inválido")
    .required("El email es obligatorio"),

  password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(6, "Debe tener al menos 6 caracteres"),

  confirmarPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
    .required("Confirmar contraseña es obligatorio"),
});
