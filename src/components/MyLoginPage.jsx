import { set, useForm } from "react-hook-form";
import "../../src/App.css";

const MyLoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(data)
    });
    let res = await r.text();
    console.log(data, res);
  }
  return (
    <div className="login-bg container h-[100vh] flex items-center justify-center background z-1">
      <div className="z-2 login-mainbox w-full h-full flex items-center justify-center  ">

        <form
          className=" flex gap-2 bg-white w-[60%] h-[90%] z-100 opacity-full rounded-3xl shadow-2xl shadow-white "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="side-box text-white w-1/2 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-white">New Here?</h1>
            <div className="py-4 w-2/3 text-center">
            <span>Sign Up And Discover a New World Here.</span>
            </div>
            <button className="bg-blue-500 shadow-lg shadow-blue-500/50 px-5 py-1 rounded-lg">Sign Up</button>
          </div>
          <div className="login-box w-1/2 flex flex-col justify-center items-center gap-6">
            <div className="writingbox text-center flex flex-col gap-4 justify-center items-center">
              <h1 className="text-3xl font-bold text-black">LogIn to Your Account</h1>
              <span className="text-sm">Login Using Social Network</span>
              <div className="social-box w-3/4 flex justify-between">
                <div className="social w-12 h-12 rounded-[48px] bg-red-500">box</div>
                <div className="social w-12 h-12 rounded-[48px] bg-red-500">box</div>
                <div className="social w-12 h-12 rounded-[48px] bg-red-500">box</div>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-center">
              
          <input
            className="border border-black p-2 w-60 rounded-lg"
            placeholder="Email Address/Username"
            type="username"
            {...register("username", {required: {value: true, message:"Field Required"}, minLength: {value: 3, message: "Minimum 3 characters required"}, maxLength: {value: 50, message: "Maximum 20 characters allowed"}})}
            />
          {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
            </div>
          <div className="flex flex-col gap-1 text-center">

          <input
            className="border border-black p-2 w-60 rounded-lg"
            placeholder="Password"
            type="password"
            {...register("password", { required: {value: true, message: "Required Field."}  , minLength: {value: 6, message: "Minimum 6 characters required"}, maxLength: {value: 20, message: "Maximum 20 characters allowed"},})}
            />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>

          <input disabled={isSubmitting}
            className=" bg-indigo-500 shadow-lg shadow-indigo-500/50 px-5 py-1 rounded-md text-white"
            type="submit"
          />
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default MyLoginPage;
