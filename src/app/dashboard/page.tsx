/** @format */
import { buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { useState } from "react";

const Dashboard = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) redirect("/auth-callback?origin=dashboard");


  return (
    <div className="flex justify-center flex-col items-center mt-5">
      <p>Hi {user?.email}!</p>
    </div>
  );
};

export default Dashboard;
