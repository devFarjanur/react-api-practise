import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Get = () => {
    const getusers = useLoaderData();

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:9000/api/delete-user/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: `User deleted successfully`,
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 1000,
                    willClose: () => {
                        // Reload the page after deletion to fetch updated data
                        window.location.reload(); // Forces a page reload
                    }
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to delete user. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'Try Again',
                    timer: 3000,
                });
            }
        } catch (error) {
            console.error('Failed to delete user:', error);
            Swal.fire({
                title: 'Error!',
                text: `Error: ${error.message}`,
                icon: 'error',
                confirmButtonText: 'OK',
                timer: 3000,
            });
        }
    };

    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
                Get Method
            </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Join Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {getusers.length > 0 ? (
                        getusers.map((user) => (
                            <tbody key={user.id}>
                                <tr>
                                    <th>{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.created_at}</td>
                                    <td>
                                        <Link to={`/view-user/${user.id}`}>
                                            <button className="bg-blue-500 text-white p-2 rounded mr-2">
                                                View
                                            </button>
                                        </Link>
                                        <Link to={`/update-user/${user.id}`}>
                                            <button className="bg-yellow-500 text-white p-2 rounded mr-2">
                                                Update
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(user.id)}
                                            className="bg-red-500 text-white p-2 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    ) : (
                        <p>No User Found</p>
                    )}
                </table>
            </div>
        </div>
    );
};

export default Get;
