import { useContext, useState } from "react";
import GlobalContext from "GlobalContext";
import { Global } from "types/GlobalContext";
import { useNavigate } from "react-router-dom";

const Personal = () => {
  const { personalInfo, setPersonalInfo } = useContext(GlobalContext) as Global;
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });
  const navgiate = useNavigate();

  const handleClick = () => {
    if (personalInfo.name === "") {
      setErrors({ name: true, email: false, phone: false });
      return;
    }
    if (personalInfo.email === "") {
      setErrors({ name: false, email: true, phone: false });
      return;
    }
    if (personalInfo.phone === "") {
      setErrors({ name: false, email: false, phone: true });
      return;
    }
    navgiate("plan");
  };

  return (
    <>
      <div className="grid grid-rows-layout h-full">
        <div className="h-full p-4 grid  grid-rows-1-auto my-auto gap-y-8">
          <div className="flex-start-col gap-2 ">
            <h1 className="w-full heading mt-10 text-2xl md:text-4xl text-center md:text-left">
              Personal Info
            </h1>
            <p className="w-full text-neutral-400 text-lg  text-center md:text-left">
              please provide your name, email address , and phone number.
            </p>
          </div>
          <form className="flex-start-col my-auto h-full gap-8">
            <div className="flex-start-col gap-2 w-full">
              <label
                htmlFor="name"
                className="text-primary-400 ml-1 text-sm font-bold"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="e.g. Mahmoud Bassiony"
                id="name"
                className={`w-full rounded-md text-sm border-none outline-none ring-1 ring-neutral-300 py-3 text-primary-400 font-bold placeholder:text-neutral-400 ${
                  errors.name && "!ring-secondary"
                }`}
                value={personalInfo.name}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="text-sm text-secondary font-bold">
                  This Field is Required
                </p>
              )}
            </div>
            <div className="flex-start-col gap-2 w-full">
              <label
                htmlFor="email"
                className="text-primary-400 ml-1 text-sm font-bold"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="e.g. mahmoudbassiony17@gmail.com"
                id="email"
                value={personalInfo.email}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, email: e.target.value })
                }
                className={`w-full rounded-md text-sm border-none outline-none ring-1 ring-neutral-300 py-3 text-primary-400 font-bold placeholder:text-neutral-400 ${
                  errors.email && "!ring-secondary"
                }`}
              />
              {errors.email && (
                <p className="text-sm text-secondary font-bold">
                  This Field is Required
                </p>
              )}
            </div>
            <div className="flex-start-col gap-2 w-full">
              <label
                htmlFor="phone"
                className="text-primary-400 ml-1 text-sm font-bold"
              >
                Phone Number
              </label>
              <input
                type="text"
                placeholder="e.g. 0251 0282 2428"
                id="phone"
                className={`w-full rounded-md text-sm border-none outline-none ring-1 ring-neutral-300 py-3 text-primary-400 font-bold placeholder:text-neutral-400 ${
                  errors.phone && "!ring-secondary"
                }`}
                value={personalInfo.phone}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, phone: e.target.value })
                }
              />
              {errors.phone && (
                <p className="text-sm text-secondary font-bold">
                  This Field is Required
                </p>
              )}
            </div>
          </form>
        </div>
        <div className="hidden  md:flex-between">
          <button
            type="button"
            onClick={handleClick}
            className="ml-auto btn btn-primary  !px-4 !py-2 focus-within:ring-2 focus-within:ring-primary-300 focus-within:ring-offset-1"
          >
            Next Step
          </button>
        </div>
      </div>
      <div className="md:hidden flex-between p-4 fixed bottom-0 left-0 bg-white w-full ">
        <button
          type="button"
          onClick={handleClick}
          className="ml-auto btn btn-primary !text-sm !px-4 !py-2 focus-within:ring-2 focus-within:ring-primary-300 focus-within:ring-offset-1"
        >
          Next Step
        </button>
      </div>
    </>
  );
};

export default Personal;
