import Lottie from "lottie-react";
import errorAnimation from "../assets/Page Not Found 404.json"; // your error Lottie file

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center justify-items-center p-6"
      
    >
      <Lottie 
        animationData={errorAnimation} 
        loop={true} 
        className="max-w-2/5 md:max-w-2xl lg:max-w-4xl"
      />

      <h1 className="mt-5 text-3xl font-bold text-gray-700">
        Something went wrong!
      </h1>
      <p>
        Please try again or go back.
      </p>
    </div>
  );
};

export default ErrorPage;
