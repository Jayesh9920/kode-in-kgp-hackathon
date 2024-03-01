const Landing = () => {

    const careerGoals = [
        "Select Career Goal",
        "Software Development",
        "Data Science / Analytics",
        "Finance / Consulting",
        "Management",
        "Quantitative Trading",
        "Embedded system",
        "Core"
    ];


    return (
        <>
            <section className="bg-white dark:bg-gray-900 p-0" style={{ height: "100%" }}>
                <div className="py-2 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Sign In</h2>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                                Sign in to your account to continue your learning journey and access all of the latest features.
                            </p>
                            <div className="mb-5 flex">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-60">Your Institute email</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@kgpian.iitkgp.ac.in" required />
                            </div>
                            <div className="mb-5 flex">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-60">Enter Your Roll</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20ME10031" required />
                            </div>
                            <div className="mb-5 flex">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-60">Password</label>
                                <input type="password" id="passowrd" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required />
                            </div>
                            <button href="#" className="text-white dark:text-black bg-blue-600 dark:bg-blue-500 hover:underline font-medium text-lg inline-flex items-center">Sign In
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>




                        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Sign Up</h2>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                                Sign in to your account to continue your learning journey and access all of the latest features.
                            </p>
                            <div className="mb-5 flex">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-60">Your Institute email</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@kgpian.iitkgp.ac.in" required />
                            </div>
                            <div className="mb-5 flex">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-60">Enter Your Roll</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20ME10031" required />
                            </div>
                            <div className="mb-5 flex">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-60">Password</label>
                                <input type="password" id="passowrd" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required />
                            </div>
                            <div className="mb-5 flex">
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-60">Confirm Password</label>
                                <input type="password" id="confirm-password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required />
                            </div>
                            <div className="mb-5 flex">
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-60">Current CGPA</label>
                                <input type="number" id="cgpa" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9.2" required />
                            </div>
                            <div className="mb-5 flex">
                            <label htmlFor="goals" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-60">Select Career Goals</label>
                            <select name="careerGoal" id="goals" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {careerGoals.map((goal, index) => (
                                    <option key={index} value={goal} className="p-3 rounded-xl m-3">{goal}</option>
                                ))}
                            </select>
                            </div>
                            <button href="#" className=" text-white dark:text-black bg-blue-600 dark:bg-blue-500 hover:underline font-medium text-lg inline-flex items-center">Sign Up
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


export default Landing;