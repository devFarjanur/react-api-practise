import { useLoaderData } from "react-router-dom";

const Get = () => {
    const getusers = useLoaderData();

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
                        </tr>
                    </thead>
                    {getusers.length > 0 ? (getusers.map((user) => (
                        <tbody key={user.id}>
                            <tr>
                                <th>{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.created_at}</td>
                            </tr>
                        </tbody>
                    ))) : <p>No User Found</p>}

                </table>
            </div>
        </div>
    );
};

export default Get;
