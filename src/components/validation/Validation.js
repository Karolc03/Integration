const validation = (userData) => {
  const errors = {};
  if (
    !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
      userData.email
    )
  ) {
    errors.email = "Invalid email";
  }
  if (!userData.email) {
    errors.email = "Ingrese email";
  }
  if (userData.email.length > 35) {
    errors.email = "Ingrese un email con menos de 35 caracteres";
  }
  if(!/.*\d+.*/.test(userData.password)){
    errors.password = "La contraseña debe tener al menos 1 caracter numerico";
  }
  if (userData.password.length < 6 || userData.password >10) {
    errors.password = "La contraseña debe tener minimo 6 caracteres y maximo 10 caracteres";
    
  }
  return errors;
};
export default validation;
