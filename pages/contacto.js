import axios from 'axios'
import Swal from 'sweetalert2'
import { Formik } from 'formik'
import * as Yup from 'yup'
import SEO from 'components/SEO'

export default function ContactUs() {
    return (
        <>
            <SEO title='Contacto' />
            <div className='container text-center pb-5'>
                <div className='flex flex-col md:flex-row justify-center gap-16'>
                    <div className='md:w-6/12 mt-6'>
                        <img
                            src='/email.svg'
                            alt='Contactar con Dev-Flo'
                            className='w-full max-w-[250px] md:max-w-[440px] mx-auto'
                        />
                    </div>
                    <div className='md:w-7/12 md:text-left'>
                        <h1 className='text-5xl font-bold mb-5'>Contáctanos</h1>
                        <span className='block text-neutral-600 dark:text-neutral-400 text-lg font-medium mb-10'>
                            ¿Tienes alguna duda o sugerencia? ¡Solo escríbenos!
                        </span>
                        <Formik
                            initialValues={{
                                name: '',
                                surname: '',
                                email: '',
                                message: '',
                            }}
                            validationSchema={Yup.object().shape({
                                name: Yup.string()
                                    .min(2, 'Ese nombre es demasiado corto 🤨')
                                    .max(50, 'Ese nombre es demasiado largo 😱')
                                    .required('Necesitamos tu nombre'),
                                surname: Yup.string()
                                    .min(
                                        2,
                                        'Ese apellido es demasiado corto 🤨'
                                    )
                                    .max(
                                        50,
                                        'Ese apellido es demasiado largo 😱'
                                    )
                                    .required('Necesitamos tu apellido'),
                                email: Yup.string()
                                    .email('Eso no parece un email 🤨')
                                    .required('Necesitamos tu email'),
                                message:
                                    Yup.string().required('Escribe un mensaje'),
                            })}
                            onSubmit={async (
                                values,
                                { setSubmitting, resetForm }
                            ) => {
                                try {
                                    await axios.post('/api/emails', values)
                                    setSubmitting(false)
                                    Swal.fire({
                                        title: '¡Gracias!',
                                        text: 'Tu mensaje ha sido enviado 😃',
                                        icon: 'success',
                                        confirmButtonText: 'OK',
                                        confirmButtonColor: '#1e40af',
                                    })
                                } catch (error) {
                                    setSubmitting(false)
                                    Swal.fire({
                                        title: '¡Ups!',
                                        text: 'Algo salió mal 😥',
                                        icon: 'error',
                                        confirmButtonText: 'OK',
                                    })
                                } finally {
                                    resetForm()
                                }
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                            }) => (
                                <form
                                    onSubmit={handleSubmit}
                                    className='flex flex-col'
                                >
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='Nombre'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        className='w-full p-3 rounded-lg shadow dark:shadow-none dark:bg-[#1d1e24] mb-5 outline-none'
                                    />
                                    {errors.name && touched.name && (
                                        <div className='-mt-5 py-2 text-red-600'>
                                            {errors.name}
                                        </div>
                                    )}
                                    <input
                                        type='text'
                                        name='surname'
                                        placeholder='Apellido'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.surname}
                                        className='w-full p-3 rounded-lg shadow dark:shadow-none dark:bg-[#1d1e24] mb-5 outline-none'
                                    />
                                    {errors.surname && touched.surname && (
                                        <div className='-mt-5 py-2 text-red-600'>
                                            {errors.surname}
                                        </div>
                                    )}
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        className='w-full p-3 rounded-lg shadow dark:shadow-none dark:bg-[#1d1e24] mb-5 outline-none'
                                    />
                                    {errors.email && touched.email && (
                                        <div className='-mt-5 py-2 text-red-600'>
                                            {errors.email}
                                        </div>
                                    )}
                                    <textarea
                                        placeholder='Mensaje'
                                        name='message'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}
                                        className='w-full p-3 rounded-lg shadow dark:shadow-none dark:bg-[#1d1e24] mb-5 outline-none'
                                        rows={5}
                                    />
                                    {errors.message && touched.message && (
                                        <div className='-mt-5 py-2 text-red-600'>
                                            {errors.message}
                                        </div>
                                    )}

                                    <input
                                        type='submit'
                                        value='Enviar'
                                        disabled={isSubmitting}
                                        className='w-fit px-8 py-3 rounded-full shadow dark:shadow-none bg-blue-700 hover:bg-blue-600 dark:bg-blue-800 dark:hover:bg-blue-700 disabled:bg-neutral-500 dark:disabled:bg-neutral-600 disabled:cursor-auto transition-colors text-lg text-white cursor-pointer mb-4'
                                    />
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}
