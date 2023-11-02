import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../../icons/GoogleIcon";
import {
  signInWithGooglePopup,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { setUserLogIn, setUserName } from "../../store/features/user/userSlice";

type SignUpFormType = {
  email: string;
  password: string;
  confirmPassword: string;
};

const defaultFormFields: SignUpFormType = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp({ handleToggle }: { handleToggle: () => void }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formFields, setFormFields] =
    useState<SignUpFormType>(defaultFormFields);
  const { email, password, confirmPassword } = formFields;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const user = await createAuthUserWithEmailAndPassword(email, password);
      if (user) {
        dispatch(setUserLogIn(true));
        dispatch(setUserName(email));
        navigate("/");
        setFormFields(defaultFormFields);
      }
    } catch (error) {
      console.log("error creating user", error);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      if (user.displayName) {
        dispatch(setUserName(user.displayName));
        dispatch(setUserLogIn(true));
        navigate("/");
      }
    } catch (error) {
      console.log("Error in google sign in", error);
    }
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="flex flex-col md:bg-secondaryBg w-full h-full md:h-2/3 md:w-1/2 rounded-lg p-8 justify-start items-center gap-4 font-oneset md:justify-center">
      <h1 className="text-fontLight text-2xl font-bold">Sign Up</h1>
      <form
        className="flex flex-col gap-2 w-full md:w-4/5 items-center"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full h-10 rounded-lg p-2"
          placeholder="Email Address"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <input
          className="w-full h-10 rounded-lg p-2"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <input
          className="w-full h-10 rounded-lg p-2"
          placeholder="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <button
          className="w-full h-10 rounded-lg bg-yellow-300 text-black font-bold"
          type="submit"
        >
          Register
        </button>
      </form>
      <div className="flex flex-col gap-2 w-full md:w-4/5 items-center">
        <p className="text-[#CCCCCC]">- OR -</p>
        <button
          className="w-full h-10 rounded-lg bg-gray-300 text-black font-bold flex justify-center items-center gap-4"
          onClick={handleGoogleSignUp}
        >
          <GoogleIcon width="24px" /> Continue With Google
        </button>
        <div className="flex gap-2">
          <p className="text-[#CCCCCC]">Already have an account?</p>
          <p
            className="text-[#CCCCCC] font-bold cursor-pointer hover:underline"
            onClick={() => handleToggle()}
          >
            Sign In
          </p>
        </div>
      </div>
    </div>
  );
}
