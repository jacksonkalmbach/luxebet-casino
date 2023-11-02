import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import GoogleIcon from "../../icons/GoogleIcon";

import { setUserLogIn, setUserName } from "../../store/features/user/userSlice";
import { guestUsernames } from "../../utils/guest/guestUsernames";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

type SignInFormType = {
  email: string;
  password: string;
};

const defaultFormFields: SignInFormType = {
  email: "",
  password: "",
};

export default function SignIn({ handleToggle }: { handleToggle: () => void }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formFields, setFormFields] =
    useState<SignInFormType>(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleGuestLogin = () => {
    dispatch(setUserLogIn(true));
    dispatch(
      setUserName(
        guestUsernames[Math.floor(Math.random() * guestUsernames.length)]
      )
    );
    navigate("/");
  };

  const handleSubmit = async () => {
    console.log("sign in");
    try {
      const user = await signInAuthUserWithEmailAndPassword(email, password);
      if (user) {
        console.log(user);
        dispatch(setUserLogIn(true));
        dispatch(setUserName(email));
        navigate("/");
      }
    } catch (error) {
      console.log("Error signing in with email and password", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      dispatch(setUserLogIn(true));
      if (user.displayName) {
        dispatch(setUserName(user.displayName));
      }
      navigate("/");
    } catch (error) {
      console.log("Error signing in with Google", error);
    }
  };

  return (
    <div className="flex flex-col md:bg-secondaryBg w-full h-full md:h-2/3 md:w-1/2 rounded-lg p-8 justify-start items-center gap-4 font-oneset md:justify-center">
      <h1 className="text-fontLight text-2xl font-bold">Sign In</h1>
      <form
        className="flex flex-col gap-2 w-full md:w-4/5 items-center"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full h-10 rounded-lg p-2"
          placeholder="Email Address"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          className="w-full h-10 rounded-lg p-2"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button
          className="w-full h-10 rounded-lg bg-yellow-300 text-black font-bold"
          type="submit"
        >
          Login
        </button>
        <p
          className="text-fontLight hover:underline cursor-pointer"
          onClick={handleGuestLogin}
        >
          Continue as guest
        </p>
        <p className="text-[#CCCCCC]">- OR -</p>
      </form>
      <div className="flex flex-col gap-2 w-full md:w-4/5 items-center">
        <button
          className="w-full h-10 rounded-lg bg-gray-300 text-black font-bold flex justify-center items-center gap-4"
          onClick={handleGoogleSignIn}
        >
          <GoogleIcon width="24px" /> Sign In With Google
        </button>
        <div className="flex gap-2">
          <p className="text-[#CCCCCC]">Don't have an account?</p>
          <p
            className="text-[#CCCCCC] font-bold cursor-pointer hover:underline"
            onClick={() => handleToggle()}
          >
            Sign Up
          </p>
        </div>
      </div>
    </div>
  );
}
