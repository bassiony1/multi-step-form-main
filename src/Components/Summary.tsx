import GlobalContext from "GlobalContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Global } from "types/GlobalContext";
const Summary = () => {
  const { plan, planDuration, addsOn } = useContext(GlobalContext) as Global;

  return (
    <>
      <div className="grid grid-rows-layout h-full">
        <div className="h-full p-4 grid  grid-rows-1-auto my-auto gap-y-8">
          <div className="flex-start-col gap-2 ">
            <h1 className="w-full heading  text-2xl md:text-4xl text-center md:text-left">
              Finishing up
            </h1>
            <p className="w-full text-neutral-400 text-lg  text-center md:text-left">
              Double check everything looks OK before comfirming.
            </p>
          </div>
          <div className="flex-start-col justify-center my-auto h-full gap-8">
            <div className="flex-start-col  bg-neutral-200 w-full gap-8 p-4 rounded-md">
              <div className="relative flex-between items-center gap-2 w-full">
                {addsOn.length > 0 && (
                  <div className="absolute h-[1px] w-full -bottom-[5px] left-0 bg-neutral-300"></div>
                )}
                <div className="flex-start-col gap-1 ">
                  <p className="text-primary-400 font-bold text-sm sm:text-base">
                    {plan.name} ({planDuration})
                  </p>
                  <Link to="/plan" className="underline text-neutral-400">
                    Change
                  </Link>
                </div>
                <p className="text-primary-400 text-sm sm:text-base">
                  +${plan.price}/{planDuration === "Monthly" ? "mo" : "yr"}
                </p>
              </div>
              {addsOn.map((adds) => {
                return (
                  <div className="flex-between gap-2 w-full">
                    <p className="text-neutral-400 text-sm sm:text-base">
                      {adds.name}
                    </p>
                    <p className="text-primary-400 text-sm sm:text-base">
                      +${adds.price}/{planDuration === "Monthly" ? "mo" : "yr"}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex-between  w-full px-4">
              <p className="text-neutral-400 text-sm sm:text-base">
                Total{" "}
                {planDuration === "Monthly" ? "(per month)" : "(per year)"}
              </p>
              <p className="text-primary-300 text-sm sm:text-base">
                +$
                {addsOn.reduce((a, c) => {
                  return a + c.price;
                }, plan.price)}
                /{planDuration === "Monthly" ? "mo" : "yr"}
              </p>
            </div>
          </div>
        </div>
        <div className="hidden  md:flex-between">
          <Link
            to="/adds-on"
            className="btn shadow-inner btn-secondary hover:text-primary-400 !text-sm !px-4 !py-3 focus-within:ring-2 focus-within:ring-neutral-400"
          >
            Go Back
          </Link>
          <Link
            to="/complete"
            className="btn btn-primary !text-sm !px-4 !py-3 focus-within:ring-2 focus-within:ring-primary-300 focus-within:ring-offset-1"
          >
            Confirm
          </Link>
        </div>
      </div>
      <div className="md:hidden flex-between p-4 fixed bottom-0 left-0 bg-white w-full ">
        <Link
          to="/adds-on"
          className="btn shadow-inner btn-secondary hover:text-primary-400 !text-sm !px-4 !py-2 focus-within:ring-2 focus-within:ring-neutral-400"
        >
          Go Back
        </Link>
        <Link
          to="/complete"
          className="btn btn-primary !text-sm !px-4 !py-2 focus-within:ring-2 focus-within:ring-primary-300 focus-within:ring-offset-1"
        >
          Confirm
        </Link>
      </div>
    </>
  );
};

export default Summary;
