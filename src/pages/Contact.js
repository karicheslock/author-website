import {Link} from 'react-router-dom';
import emailjs from 'emailjs-com';
import {init} from '@emailjs/browser';
init('Mbwt4vW-MzWmgu5fi');

const SERVICE_ID = 'service_ob5cpyo';
const TEMPLATE_ID = 'template_2f814ki';
const USER_ID = 'Mbwt4vW-MzWmgu5fi';

export default function Contact() {
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                alert('Message sent');
            })
        e.target.reset();
    }


    return (
        
        <div className='px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap bg-green-900 h-screen'>
            <form
                netlify='true'
                name='contact'
                onSubmit={handleSubmit}
                className='lg:w-3/5 md:w-2/3 flex flex-col mx-auto w-full md:py-8 mt-8 md:mt-0 border-8 rounded border-amber-900 px-8 bg-amber-50'
            >
                <h2 className='text-amber-900 sm:text-4xl mb-1 font-bold font-mono text-8xl'>
                    Contact Me
                </h2>
                <div className='relative mb-4'>
                    <label htmlFor='name' className='leading-7 text-sm text-green-700'>
                        Name
                    </label>
                    <input 
                        type='text'
                        id='name'
                        name='from_name'
                        className='w-full bg-amber-50 rounded border border-amber-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-900 text-base outline-none text-green-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                        required                         
                    />
                </div>
                <div className='relative mb-4'>
                    <label htmlFor='email' className='leading-7 text-sm text-green-700'>
                        Email    
                    </label>
                    <input 
                        type='email'
                        id='email'
                        name='reply_to'
                        className='w-full bg-amber-50 rounded border border-amber-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-900 text-base outline-none text-green-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                        required
                    /> 
                </div>
                <div className='relative mb=4'>
                    <label htmlFor='message' className='leading-7 text-sm text-green-700'>
                        Message
                    </label>
                    <textarea 
                        id='message'
                        name='message'
                        className='w-full bg-amber-50 rounded border border-amber-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-900 h-32 text-base outline-none text-green-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                        required
                    />
                </div>
                <button
                    type='submit'
                    className='text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-amber-900 rounded text-lg mt-12'
                >
                    Submit
                </button>
                <Link to="/" className='mx-auto mt-12 bg-amber-900 text-amber-50 px-4 py-2 rounded hover:bg-green-800'>Back to Home Page</Link>
            </form> 
        </div>
        
    )
}
