export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}
export interface Global {
  personalInfo: PersonalInfo;
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>;
  plan: Plan;
  setPlan: React.Dispatch<React.SetStateAction<Plan>>;
  addsOn: Addon[];
  setAddsOn: React.Dispatch<React.SetStateAction<Addon[]>>;
  planDuration: "Monthly" | "Yearly";
  setPlanDuration: React.Dispatch<React.SetStateAction<"Monthly" | "Yearly">>;
}

export interface Plan {
  name: string;
  price: number;
}

export interface Addon {
  name: string;
  price: number;
}
