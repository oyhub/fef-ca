import { yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import useDocumentTitle from '../components/hooks/useDocumentTitle.tsx';

type formData = {
  name: string;
  subject: string;
  email: string;
  message: string;
}

const schema = yup
  .object({
    name: yup
      .string()
      .min(3, 'Name should be at least 3 characters')
      .required('Please enter your full name'),
    subject: yup
      .string()
      .min(3, 'Subject should be at least 3 characters')
      .required('Please enter a subject'),
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Please enter a valid email'),
    message: yup
      .string()
      .min(3, 'Message should be at least 3 characters')
      .required('Please enter a message')
  });

export function ContactPage() {
  useDocumentTitle('Contact | Blue Lion');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmit(formData: formData) {
    console.log(formData)
  }

  return (
    <div className="sm:grid sm:grid-cols-2">
      <div className="mb-8">
        <h1 className="font-heading font-semibold text-2xl uppercase text-primary mb-5">Contact us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deserunt ducimus maxime necessitatibus nobis optio quasi reprehenderit repudiandae tempora voluptatum.</p>
      </div>
      <div>
        <form className="bg-primary text-white p-5 pt-8 pb-10" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="uppercase mb-5">Contact form</h2>
          <div className="mb-4">
            <label className="block uppercase text-sm" htmlFor="name">Full name:</label>
            <input { ...register('name') } id="name" className="w-full p-1 text-black "/>
            <p className="text-red-300">{ errors.name?.message }</p>
          </div>
          <div className="mb-4">
            <label className="block uppercase text-sm" htmlFor="subject">Subject:</label>
            <input { ...register('subject') } id="subject" className="w-full p-1 text-black "/>
            <p className="text-red-300">{ errors.subject?.message }</p>
          </div>
          <div className="mb-4">
            <label className="block uppercase text-sm" htmlFor="email">Email:</label>
            <input { ...register('email') } id="email" className="w-full p-1 text-black "/>
            <p className="text-red-300">{ errors.email?.message }</p>
          </div>
          <div>
            <label className="block uppercase text-sm" htmlFor="message">Message:</label>
            <textarea {...register('message')} id="message" className="w-full h-32 p-1 text-black"></textarea>
            <p className="text-red-300">{ errors.message?.message }</p>
          </div>
          <button className="bg-white text-primary px-5 py-3 rounded uppercase font-semibold mt-2 w-full hover:bg-blue-100 hover:underline">Submit form</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage;