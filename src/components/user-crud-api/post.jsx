import { useState } from "react";

const Post = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:9000/api/post-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Log the raw response
            console.log('Raw Response:', response);

            if (response.ok) {
                // Parse JSON response if the status is OK
                const data = await response.json();
                console.log('Success Response:', data);
                setResponseMessage(`User Registered Successfully: ${data.message}`);
            } else {
                // Parse JSON error response
                const errorData = await response.json();
                console.log('Error Response:', errorData);
                setResponseMessage(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Network Error:', error);
            setResponseMessage(`Request Failed: ${error.message}`);
        }
    };


    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
                Post Method
            </h1>
            <div className="flex justify-center">
                <form className="w-72 mt-2 space-y-4" onSubmit={handleSubmit}>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            name="name"
                            className="grow"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="email"
                            name="email"
                            className="grow"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="password"
                            name="password"
                            className="grow"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit" className="btn btn-primary w-full mt-4">
                        Register
                    </button>
                </form>
            </div>
            {responseMessage && (
                <p className="text-center text-red-500 mt-4">{responseMessage}</p>
            )}
        </div>
    );
};

export default Post;