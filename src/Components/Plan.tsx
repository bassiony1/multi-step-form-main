import GlobalContext from "GlobalContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Global } from "types/GlobalContext";

const Plan = () => {
  const { plan, setPlan, planDuration, setPlanDuration, setAddsOn } =
    useContext(GlobalContext) as Global;

  return (
    <>
      <div className="grid grid-rows-layout h-full">
        <div className="h-full p-4 grid  grid-rows-1-auto my-auto gap-y-8">
          <div className="flex-start-col gap-2 ">
            <h1 className="w-full heading  text-2xl md:text-4xl text-center md:text-left">
              Select your plan
            </h1>
            <p className="w-full text-neutral-400 text-lg  text-center md:text-left">
              You have the option of monthly ot yearly billing.
            </p>
          </div>
          <div className="flex-center-col my-auto h-full gap-8">
            <div className="flex-center-col gap-4 w-full">
              {planDuration === "Monthly" ? (
                <div className="flex-center gap-8 flex-wrap w-full">
                  <div
                    className={`flex items-center sm:items-start flex-row gap-4 w-full sm:flex-col sm:w-auto  p-4 ring-1 rounded-md min-w-[150px] cursor-pointer ${
                      plan.name === "Arcade"
                        ? "ring-primary-300"
                        : "ring-neutral-400"
                    }`}
                    onClick={() => setPlan({ name: "Arcade", price: 9 })}
                  >
                    <div>
                      <img src="/images/icon-arcade.svg" alt="" />
                    </div>
                    <div className="flex-between w-full !items-start sm:flex-col">
                      <p className="text-md text-primary-400">Arcade</p>
                      <p className="text-sm text-neutral-400">$9/mo</p>
                    </div>
                  </div>
                  <div
                    className={`flex items-center sm:items-start flex-row gap-4 w-full sm:flex-col sm:w-auto  p-4 ring-1 rounded-md min-w-[150px] cursor-pointer ${
                      plan.name === "Advanced"
                        ? "ring-primary-300"
                        : "ring-neutral-400"
                    }`}
                    onClick={() => setPlan({ name: "Advanced", price: 12 })}
                  >
                    <div>
                      <img src="/images/icon-advanced.svg" alt="" />
                    </div>
                    <div className="flex-between w-full !items-start sm:flex-col">
                      <p className="text-md text-primary-400">Advanced</p>
                      <p className="text-sm text-neutral-400">$12/mo</p>
                    </div>
                  </div>
                  <div
                    className={`flex items-center sm:items-start flex-row gap-4 w-full sm:flex-col sm:w-auto  p-4 ring-1 rounded-md min-w-[150px] cursor-pointer ${
                      plan.name === "Pro"
                        ? "ring-primary-300"
                        : "ring-neutral-400"
                    }`}
                    onClick={() => setPlan({ name: "Pro", price: 15 })}
                  >
                    <div>
                      <img src="/images/icon-pro.svg" alt="" />
                    </div>
                    <div className="flex-between w-full !items-start sm:flex-col">
                      <p className="text-md text-primary-400">Pro</p>
                      <p className="text-sm text-neutral-400">$15/mo</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-center gap-8 flex-wrap w-full">
                  <div
                    className={`flex items-center sm:items-start flex-row gap-4 w-full sm:flex-col sm:w-auto  p-4 ring-1 rounded-md min-w-[150px] cursor-pointer ${
                      plan.name === "Arcade"
                        ? "ring-primary-300"
                        : "ring-neutral-400"
                    }`}
                    onClick={() => setPlan({ name: "Arcade", price: 90 })}
                  >
                    <div>
                      <img src="/images/icon-arcade.svg" alt="" />
                    </div>
                    <div className="flex-between w-full !items-start sm:flex-col">
                      <p className="text-md text-primary-400">Arcade</p>
                      <p className="text-sm text-primary-400">2 month free</p>
                      <p className="text-sm text-neutral-400">$90/yr</p>
                    </div>
                  </div>
                  <div
                    className={`flex items-center sm:items-start flex-row gap-4 w-full sm:flex-col sm:w-auto  p-4 ring-1 rounded-md min-w-[150px] cursor-pointer ${
                      plan.name === "Advanced"
                        ? "ring-primary-300"
                        : "ring-neutral-400"
                    }`}
                    onClick={() => setPlan({ name: "Advanced", price: 120 })}
                  >
                    <div>
                      <img src="/images/icon-advanced.svg" alt="" />
                    </div>
                    <div className="flex-between w-full !items-start sm:flex-col">
                      <p className="text-md text-primary-400">Advanced</p>
                      <p className="text-sm text-primary-400">2 month free</p>
                      <p className="text-sm text-neutral-400">$120/yr</p>
                    </div>
                  </div>
                  <div
                    className={`flex items-center sm:items-start flex-row gap-4 w-full sm:flex-col sm:w-auto  p-4 ring-1 rounded-md min-w-[150px] cursor-pointer ${
                      plan.name === "Pro"
                        ? "ring-primary-300"
                        : "ring-neutral-400"
                    }`}
                    onClick={() => setPlan({ name: "Pro", price: 150 })}
                  >
                    <div>
                      <img src="/images/icon-pro.svg" alt="" />
                    </div>
                    <div className="flex-between w-full !items-start sm:flex-col">
                      <p className="text-md text-primary-400">Pro</p>
                      <p className="text-sm text-primary-400">2 month free</p>
                      <p className="text-sm text-neutral-400">$150/yr</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full p-4  bg-neutral-200 h-[50px] rounded-lg flex-center gap-4">
              <p
                className={`text-md font-bold ${
                  planDuration === "Monthly"
                    ? "text-primary-400"
                    : "text-neutral-400"
                }`}
              >
                Monthly
              </p>
              <div
                className={`w-[80px] h-[30px] bg-primary-400 rounded-full flex items-center px-2 cursor-pointer ${
                  planDuration === "Monthly" ? "justify-start" : "justify-end"
                }`}
                onClick={() => {
                  setAddsOn([]);
                  setPlanDuration((pre) => {
                    if (pre === "Monthly") {
                      setPlan({ ...plan, price: plan.price * 10 });
                      return "Yearly";
                    } else {
                      setPlan({ ...plan, price: plan.price / 10 });

                      return "Monthly";
                    }
                  });
                }}
              >
                <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
              </div>
              <p
                className={`text-md font-bold ${
                  planDuration === "Yearly"
                    ? "text-primary-400"
                    : "text-neutral-400"
                }`}
              >
                Yearly
              </p>
            </div>
          </div>
        </div>
        <div className="hidden  md:flex-between">
          <Link
            to="/"
            className="btn shadow-inner btn-secondary !text-sm !px-4 !py-3 hover:text-primary-400 focus-within:ring-2 focus-within:ring-neutral-400"
          >
            Go Back
          </Link>
          <Link
            to="/adds-on"
            className="btn btn-primary !text-sm !px-4 !py-3 focus-within:ring-2 focus-within:ring-primary-300 focus-within:ring-offset-1"
          >
            Next Step
          </Link>
        </div>
      </div>
      <div className="md:hidden flex-between p-4 fixed bottom-0 left-0 bg-white w-full ">
        <Link
          to="/"
          className="btn shadow-inner btn-secondary hover:text-primary-400 !text-sm !px-4 !py-2 focus-within:ring-2 focus-within:ring-neutral-400"
        >
          Go Back
        </Link>
        <Link
          to="/adds-on"
          className="btn btn-primary !text-sm !px-4 !py-2 focus-within:ring-2 focus-within:ring-primary-300 focus-within:ring-offset-1"
        >
          Next Step
        </Link>
      </div>
    </>
  );
};

export default Plan;
