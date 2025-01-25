const Post = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
                Post Method
            </h1>
            <div className="flex justify-center">
                <div className="w-72 mt-2 space-y-4">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" name="name" className="grow" placeholder="Name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" name="name" className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="password" name="password" className="grow" placeholder="Password" />
                    </label>
                    <button type="submit" className="btn btn-primary w-full mt-4">Register</button>
                </div>
            </div>
        </div>
    );
};

export default Post;