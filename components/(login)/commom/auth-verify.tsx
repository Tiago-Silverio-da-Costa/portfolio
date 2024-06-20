import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { parseJwt } from "./parseJwt"; // Adjust path as needed

const AuthVerify: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "");

    if (user) {
      const decodedJwt = parseJwt(user.accessToken);

      if (!decodedJwt) {
        return 
      }

      if (decodedJwt.exp * 1000 < Date.now()) {
        router.push("/logout"); // Example: Redirect to logout page
      }
    }
  }, []);

  return <div></div>;
};

export default AuthVerify;
