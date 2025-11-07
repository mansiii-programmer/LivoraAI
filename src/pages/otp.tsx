import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Otp() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const navigate = useNavigate();

  const handleChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Retrieve user role from localStorage
    const userRole = localStorage.getItem("userRole");

    // Redirect to appropriate dashboard
    switch (userRole) {
      case "donor":
        navigate("/donor-dashboard");
        break;
      case "recipient":
        navigate("/recipient-dashboard");
        break;
      case "hospital":
        navigate("/hospital-dashboard");
        break;
      case "coordinator":
        navigate("/coordinator-dashboard");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 w-[400px] text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Verify OTP</h2>
        <p className="text-gray-600 mb-6">
          We have sent a 6-digit OTP to your registered email/phone.
          Please enter it below to continue.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center text-lg font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Verify
          </button>
        </form>

        <button
          onClick={() => alert("OTP resent")}
          className="mt-4 text-blue-600 hover:underline"
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
}
