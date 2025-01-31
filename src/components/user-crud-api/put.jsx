import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Put = () => {

    const user = useLoaderData();

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

        } catch (error) {
            console.error("Error updating error:", error);
            Swal.fire({
                title: "Error!",
                text: `Error: ${error.message}`,
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
                Put Method
            </h1>
            <div className="flex justify-center">
                <form className="w-72 mt-2 space-y-4" onSubmit={handleSubmit}>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            name="name"
                            className="grow"
                            placeholder="Name"
                            value={user.name}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="email"
                            name="email"
                            className="grow"
                            placeholder="Email"
                            value={user.email}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="password"
                            name="password"
                            className="grow"
                            placeholder="Password"
                            value={user.password}
                        />
                    </label>
                    <button type="submit" className="btn btn-primary w-full mt-4">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Put;