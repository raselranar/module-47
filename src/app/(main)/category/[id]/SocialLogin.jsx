"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const SocialLogin = () => {
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="">
      <h2 className="text-lg mb-2">Social Icons</h2>

      <div className="flex w-full max-w-xs flex-col gap-3">
        <Button
          onClick={handleGoogleSignIn}
          className="w-full"
          variant="tertiary">
          <Icon icon="devicon:google" />
          Login in with Google
        </Button>
        <Button className="w-full" variant="tertiary">
          <Icon icon="mdi:github" />
          Sign in with GitHub
        </Button>
      </div>
    </div>
  );
};
export default SocialLogin;
