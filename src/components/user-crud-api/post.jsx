import { useState } from "react";
import Swal from "sweetalert2"; 

const Post = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

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

            if (response.ok) {
                const data = await response.json();
                // Display success alert with timer and reload
                Swal.fire({
                    title: 'Success!',
                    text: `User Registered Successfully: ${data.message}`,
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 1000,
                    willClose: () => {
                        window.location.reload(); // Reload the page after the alert closes
                    }
                });
            } else {
                const errorData = await response.json();
                // Display error alert with timer
                Swal.fire({
                    title: 'Error!',
                    text: `Error: ${errorData.message}`,
                    icon: 'error',
                    confirmButtonText: 'Try Again',
                    timer: 3000, // 3 seconds delay
                    willClose: () => {
                        // Optionally reload or handle other things after closing
                    }
                });
            }
        } catch (error) {
            console.error('Network Error:', error);
            // Display network error alert with timer
            Swal.fire({
                title: 'Request Failed',
                text: `Error: ${error.message}`,
                icon: 'error',
                confirmButtonText: 'OK',
                timer: 3000, // 3 seconds delay
                willClose: () => {
                    // Optionally reload or handle other things after closing
                }
            });
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
        </div>
    );
};

export default Post;
