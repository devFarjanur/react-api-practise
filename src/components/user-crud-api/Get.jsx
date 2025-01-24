import { useLoaderData } from "react-router-dom";

const Get = () => {
    const getusers = useLoaderData();
    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
                Get Method Practice
            </h1>
            <div className="flex flex-wrap justify-center gap-5">
                {/* {users.length > 0 ? (
                    users.map((user) => (
                        <div
                            key={user.id}
                            className="card bg-base-100 w-96 shadow-xl p-4"
                        >
                            <div className="card-body">
                                <h2 className="card-title text-blue-700">{user.name}</h2>
                                <p>Email: {user.email}</p>
                                <p>Phone: {user.phone}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No users found.</p>
                )} */}

                {/* {users.length > 0 ? (users.map((user) => ())) : (<p className="text-center text-gray-500">No users found.</p>)} */}

                {getusers.length < 0 ? (getusers.map((user) => (
                    <div key={user.id}>

                    </div>
                ))) : (<p>No user found</p>)}
            </div>
        </div>
    );
};

export default Get;
