import { object, ref } from "yup";
import { stringRequired } from "../../formik/schemas/base";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const registerSchema = object({
  firstName: stringRequired("Prénom"),
  lastName: stringRequired("Nom"),
  username: stringRequired(),
  email: stringRequired("Adresse mail").email("Adresse mail invalide"),
  password: stringRequired().matches(passwordRules, {
    message:
      "Le mot de passe doit contenir au moins 8 caractères, dont 1 chiffre, 1 minuscule, 1 majuscule et 1 symbole.",
  }),
  confirmPassword: stringRequired().oneOf(
    [ref("password")],
    "Les mots de passe doivent être identiques"
  ),
});

export interface RegisterValues {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default registerSchema;
