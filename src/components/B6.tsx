import React, { useCallback, useState } from 'react'
interface FormData {
    email: string;
    password: string;
}

export default function B6() {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: ''
    });

    const handleSubmit = useCallback((e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); 
    }, [formData]);

    const handleChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
    }));
    }, []);

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Email:</label>
            <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            />
        </div>
        <div>
            <label>Password:</label>
            <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            />
        </div>
        <button type="submit">Submit</button>
    </form>
    </>
  )
}
