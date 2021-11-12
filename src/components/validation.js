import * as Yup from 'yup'

export const schema = Yup.object({
  bankName: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, 'введите ввалидное название'),
  phone: Yup.string()
    .matches(/^(?:\([2-9]\d{2}\) ?|[2-9]\d{2}(?:-?| ?))[2-9]\d{2}[- ]?\d{4}$/, 'введите валдный номер'),
  email: Yup.string()
    .matches(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/, 'введите валидный email'),
})
