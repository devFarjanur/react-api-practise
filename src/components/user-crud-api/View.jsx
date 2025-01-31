import { useLoaderData } from "react-router-dom";

const View = () => {
    const user = useLoaderData();

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-sm mx-auto mt-8 p-6 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">User Details</h2>
            <div>
                <strong className="block mb-2">Name:</strong>
                <p>{user.name}</p>
            </div>
            <div>
                <strong className="block mb-2">Email:</strong>
                <p>{user.email}</p>
            </div>
            <div>
                <strong className="block mb-2">Join Date:</strong>
                <p>{user.created_at}</p>
            </div>
        </div>
    );
};

export default View;