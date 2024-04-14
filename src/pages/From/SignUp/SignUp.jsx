/* eslint-disable no-unused-vars */
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SignUp = () => {

  const axiosPublic = useAxiosPublic();

  const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    // console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        // console.log(loggedUser)

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            // create user entry in the date database
            const userInfo = {
              name: data.name,
              email: data.email,
              image: data.photoURL
            }
            // useAxiosPublic.post('/users', userInfo)
            //   .then(res => {
            //     if (res.data.insertedId) {
            //       console.log('user added to the database')
            //       reset();
            //       Swal.fire({
            //         position: "top-end",
            //         icon: "success",
            //         title: "User created successfully",
            //         showConfirmButton: false,
            //         timer: 1500
            //       });

            //     }
            //   })

            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  console.log('user added to the database')

                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });

                }
              })


          });
        navigate("/")

        // .then(() => {
        //     console.log('user profile info updated')
        //     reset();
        //     Swal.fire({
        //         position: 'top-end',
        //         icon: 'success',
        //         title: 'User created successfully.',
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        //     navigate('/');

        // })

      })
      .catch(error => console.log(error))


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
                  <Label htmlFor="Name" value="Your Name" />
                </div>
                <TextInput
                  {...register("name", { required: true })}
                  id="email1"
                  type="text"
                  placeholder="type your name"
                  required
                />
              </div>
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
                  <Label htmlFor="photoURL" value="Your PhotoURL" />
                </div>
                <TextInput
                  {...register("photoURL", { required: true })}
                  id="email1"
                  type="text"
                  placeholder="PhotoURL"
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
                className="border-[#DCE0EB] fint-bold bg-[#b5b9c7] font-semibold py-2 rounded-lg hover:bg-slate-300"
                type="submit"
              >
                Submit
              </button>
            </form>
            <p className="text-center">
              Create a Account <Link className="text- font-semibold text-lg" to="/signIn">signIn</Link>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
