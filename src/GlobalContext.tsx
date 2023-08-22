/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, createContext, useState } from "react";
import { Addon, Global, PersonalInfo, Plan } from "types/GlobalContext";

const GlobalContext = createContext<null | Global>(null);
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: "",
    email: "",
    phone: "",
  });
  const [planDuration, setPlanDuration] = useState<"Monthly" | "Yearly">(
    "Monthly"
  );
  const [plan, setPlan] = useState<Plan>({
    name: "Arcade",
    price: 9,
  });
  const [addsOn, setAddsOn] = useState<Addon[]>([]);

  const value = {
    personalInfo,
    setPersonalInfo,
    plan,
    setPlan,
    planDuration,
    setPlanDuration,
    addsOn,
    setAddsOn,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;
