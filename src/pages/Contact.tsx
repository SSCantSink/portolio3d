import React, {Suspense, useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {Canvas} from "@react-three/fiber";
import {Fox} from "../models/Fox.tsx";
import Loader from "../components/Loader.tsx";
import {useAlert} from "../hooks/useAlert.ts";
import Alert from "../components/Alert.tsx";

interface IContactForm {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {

    const formRef = useRef<HTMLFormElement>(null);

    const [form, setForm] = useState<IContactForm>({
        email: "",
        name: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false)
    const [currentAnimation, setCurrentAnimation] = useState("idle");

    const {alert, showAlert, hideAlert} = useAlert();

    const handleFocus = () => {
        setCurrentAnimation("walk");
    };
    const handleBlur = () => {
        setCurrentAnimation("idle");
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // to not reload the page on submit
        setIsLoading(true);
        setCurrentAnimation("hit");

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "KV",
                from_email: form.email,
                to_email: 'nostalgia.0145213@gmail.com',
                message: form.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then((_r) => {

            setIsLoading(false);

            showAlert("Message sent successfully", "success");

            setTimeout(() => {
                hideAlert();
                setCurrentAnimation("idle");
                setForm({
                    email: "",
                    name: "",
                    message: "",
                })
            }, 3000);
        }).catch((err) => {
            setIsLoading(false);
            setCurrentAnimation("idle");
            console.log(err);
            showAlert("I didn't receive your message");
        });

    }

    return (
        <section className='relative flex lg:flex-row flex-col max-container'>
            {alert.show && <Alert type={alert.type} text={alert.text} />}
            <div className='flex-1 min-w-[50%] flex flex-col'>
                <h1 className='head-text'>Get in Touch</h1>
                <form
                    ref={formRef}
                    className='flex w-full flex-col gap-7 mt-14'
                    onSubmit={handleSubmit}>
                    <label className='text-black-500 font-semibold' htmlFor='name'>
                        Name
                        <input
                            type='text'
                            name='name'
                            className="input"
                            placeholder='John'
                            required
                            value={form.name}
                            onChange={(event) => {
                                setForm({...form, name: event.target.value});
                            }}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className='text-black-500 font-semibold' htmlFor='name'>
                        Email
                        <input
                            type='email'
                            name='email'
                            className="input"
                            placeholder='john@gmail.com'
                            required
                            value={form.email}
                            onChange={(event) => {
                                setForm({...form, email: event.target.value});
                            }}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className='text-black-500 font-semibold' htmlFor='name'>
                        Your Message
                        <textarea
                            name='message'
                            rows={4}
                            className="textarea"
                            placeholder='Let me know how I can help you!'
                            required
                            value={form.message}
                            onChange={(event) =>{
                                setForm({...form, message: event.target.value});
                            }}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <button
                        type='submit'
                        className='btn'
                        disabled={isLoading}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        {isLoading ? ('Sending...') : ('Send Message')}
                    </button>
                </form>
            </div>
            <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
                <Canvas
                    camera={
                        {
                            position: [0, 0, 5],
                            fov: 75,
                            near: 0.1,
                            far: 1000,
                        }
                    }
                >
                    <directionalLight intensity={2.5} position={[0, 0, 1]} />
                    <ambientLight intensity={0.5} />
                    <Suspense fallback={<Loader />}>
                        <Fox
                            position={[0.5, 0.35, 0]}
                            rotation={[12.6, -0.6, 0]}
                            scale={[0.5, 0.5, 0.5]}
                            currentAnimation={currentAnimation}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
}

export default Contact;