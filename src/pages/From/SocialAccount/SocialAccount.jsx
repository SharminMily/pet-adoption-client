const SocialAccount = () => {
    return (
        <div>
            <div className="">
            <div>
                <button className="w-full px-10 p-2 text-center bg- border-4  rounded-lg border-fuchsia-900 hover:text-white hover:bg-fuchsia-900">
                    Google
                </button>
            </div>
            <div>
            <button className="w-full p-2 mt-3 text-center bg- border-4 px-10 hover:text-white rounded-lg border-fuchsia-900 hover:bg-fuchsia-900">
            Github
                </button>
               
            </div>           
            <div>
            <button className="w-full p-2 mt-3 text-center bg- border-4 px-10 hover:text-white rounded-lg border-fuchsia-900 hover:bg-fuchsia-900">
            Facebook
                </button>
               
            </div>           
            </div>
        </div>
    );
};

export default SocialAccount;