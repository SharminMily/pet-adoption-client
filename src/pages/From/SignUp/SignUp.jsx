/* eslint-disable no-unused-vars */
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className="my-20 bg-gray-200 p-20">
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
                  <Label  htmlFor="Name" value="Your Name" />
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
                {...register("text", { required: true })} 
                  id="email1"
                  type="text"
                  placeholder="name@flowbite.com"
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
              <Button
                className="bg-fuchsia-900 hover:bg-fuchsia-950"
                type="submit"
              >
                Submit
              </Button>
            </form>
            <p>
              {" "}
              Have a Account <Link to="/signIn">signIn</Link>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
