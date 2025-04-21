import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInSuccess } from '../redux/User/userSlice';

const FacebookLoginButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          console.log('Logged in:', response);

          const { userID, accessToken } = response.authResponse;

          // OPTIONAL: You could fetch user details from Facebook Graph API
          // For now, we'll just dispatch a dummy user object
          const fbUser = {
            _id: userID,
            name: 'Facebook User',
            email: '', // if you fetch it via Graph API
            token: accessToken,
          };

          // ✅ Dispatch login success
          dispatch(signInSuccess(fbUser));

          // ✅ Redirect to home
          navigate('/');
        } else {
          console.log('Login failed');
        }
      },
      { scope: 'public_profile,email' }
    );
  };

  return (
    <button
      onClick={handleLogin}
      className="flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-lg w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-white"
      >
        <path
          fill="currentColor"
          d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.499v-9.293h-3.142V12h3.142V9.534c0-3.128 1.868-4.856 4.762-4.856 1.383 0 2.765.104 3.548.15v3.866h-2.278c-1.786 0-2.254.845-2.254 2.146v2.661h4.508l-.594 3.293h-3.914v9.293h7.548c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"
        />
      </svg>
      <span>Login with Facebook</span>
    </button>
  );
};

export default FacebookLoginButton;
