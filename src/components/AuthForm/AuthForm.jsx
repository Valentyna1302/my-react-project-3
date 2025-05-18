import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import s from "./AuthForm.module.css";

const AuthForm = ({
  fields,
  initialValues,
  validationSchema,
  onSubmit,
  buttonText,
  link,
  onPasswordChange,
  passwordValue,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleChange }) => (
        <Form className={s.form} autoComplete="off">
          <img className={s.logo} src="/images/logo.svg" alt="logo" />

          {fields.map(({ name, type = "text", placeholder }) => (
            <label key={name} className={s.labelWraper}>
              <Field
                className={s.input}
                name={name}
                type={type}
                placeholder={placeholder}
                autoComplete="off"
                onChange={(e) => {
                  handleChange(e);
                  if (name === "password" && onPasswordChange) {
                    onPasswordChange(e.target.value);
                  }
                }}
              />
              <ErrorMessage className={s.span} name={name} component="span" />
              {/* Додаємо індикатор сили пароля прямо під полем */}
              {name === "confirmPassword" && passwordValue && (
                <div className={s.barWrap}>
                  <ProgressBar password={passwordValue} />
                </div>
              )}
            </label>
          ))}

          <button className={s.button} type="submit">
            {buttonText}
          </button>

          {link && (
            <p className={s.text}>
              <Link to={link.to}>{link.text}</Link>
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
