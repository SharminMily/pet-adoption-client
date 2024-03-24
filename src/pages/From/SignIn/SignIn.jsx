
/* eslint-disable no-unused-vars */
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialAccount from "../SocialAccount/SocialAccount";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {

  const { singIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();



  const onSubmit = data => {
    // console.log(data)
    singIn(data.email, data.password)
    .then(result => {
      const user = result.user;
      console.log(user);
      Swal.fire({
          title: "User Login Successful",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
        navigate(from, { replace: true })
  })

  }


  return (
    <div className="my-20 bg-gray-200 md:p-20">
      <div className="lg:flex justify-between gap-4">
        <div className="w-full">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/NK1V2Zz/giphy.gif"
            alt=""
          />
        </div>

        <div className="w-full ">
          <Card className="max-w-2xl mx-auto p-4 h-full">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">              
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput
                {...register("email", { required: true })}
                  id="email1"
                  type="email"
                  placeholder="@gmail.com"
                  required
                />
              </div>             

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput
                {...register("password", { required: true })} 
                 id="password1" type="password" required />
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>

              <button
                className="bg-[#b9bece]  font-semibold py-2 rounded-lg hover:bg-slate-300"
                type="submit"
              >
                Submit
              </button>
            </form>
            <p className="text-center">
           
             --------- Have a Account <Link className="text- font-semibold" to="/signUp">signUp ---------</Link>
            </p>

            <SocialAccount></SocialAccount>

          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignIn ;
