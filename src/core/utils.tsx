export const IDValidator = (email: string) => {
  if (!email || email.length <= 0)
    return 'El N° de documento no puede estar vacio'
  return ''
}

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'Contreseña no puede ser vació'

  return ''
}
