import GlobalContext from "GlobalContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Global } from "types/GlobalContext";

const AddsOn = () => {
  const { addsOn, setAddsOn, planDuration } = useContext(
    GlobalContext
  ) as Global;

  return (
    <>
      <div className="grid grid-rows-layout h-full">
        <div className="h-full p-4 grid  grid-rows-1-auto my-auto gap-y-8">
          <div className="flex-start-col gap-2 ">
            <h1 className="w-full heading  text-2xl md:text-4xl text-center md:text-left">
              Pick add-ons
            </h1>
            <p className="w-full text-neutral-400 text-lg  text-center md:text-left">
              Add-ons help enhance your gaming experience.
            </p>
          </div>
          <div className="flex-start-col my-auto h-full gap-8">
            {planDuration === "Monthly" ? (
              <>
                <label
                  htmlFor="online-service"
                  className={`w-full px-4 py-4 flex-between gap-6 ring-1 cursor-pointer  rounded-md ${
                    addsOn?.find((a) => a.name === "Online Services")
                      ? "bg-neutral-200 ring-primary-300"
                      : "ring-neutral-400"
                  }`}
                >
                  <input
                    id="online-service"
                    type="checkbox"
                    checked={
                      addsOn?.find((a) => a.name === "Online Services")
                        ? true
                        : false
                    }
                    className="!ring-offset-1 !text-primary-300 p-2 rounded-sm"
                    onChange={() => {
                      if (addsOn.find((ad) => ad.name === "Online Services")) {
                        setAddsOn(
                          addsOn.filter((a) => a.name !== "Online Services")
                        );
                      } else {
                        setAddsOn([
                          ...addsOn,
                          {
                            name: "Online Services",
                            price: 1,
                          },
                        ]);
                      }
                    }}
                  />
                  <div className="flex flex-col flex-1 mr-auto">
                    <h2 className="text-primary-400 font-bold text-sm">
                      Online Services
                    </h2>
                    <p className="text-neutral-400 text-sm">
                      Access to multiplayer games
                    </p>
                  </div>
                  <p className="text-sm text-primary-300">+$1/mo</p>
                </label>
                <label
                  htmlFor="larger-storage"
                  className={`w-full px-4 py-4 flex-between gap-6 ring-1 cursor-pointer  rounded-md ${
                    addsOn?.find((a) => a.name === "Larger Storage")
                      ? "bg-neutral-200 ring-primary-300"
                      : "ring-neutral-400"
                  }`}
                >
                  <input
                    id="larger-storage"
                    type="checkbox"
                    checked={
                      addsOn?.find((a) => a.name === "Larger Storage")
                        ? true
                        : false
                    }
                    className="!ring-offset-1 !text-primary-300 p-2 rounded-sm"
                    onChange={() => {
                      if (addsOn.find((ad) => ad.name === "Larger Storage")) {
                        setAddsOn(
                          addsOn.filter((a) => a.name !== "Larger Storage")
                        );
                      } else {
                        setAddsOn([
                          ...addsOn,
                          {
                            name: "Larger Storage",
                            price: 2,
                          },
                        ]);
                      }
                    }}
                  />
                  <div className="flex flex-col flex-1 mr-auto">
                    <h2 className="text-primary-400 font-bold text-sm">
                      Larger Storage
                    </h2>
                    <p className="text-neutral-400 text-sm">
                      Extra 1TB of cloud save
                    </p>
                  </div>
                  <p className="text-sm text-primary-300">+$2/mo</p>
                </label>
                <label
                  htmlFor="customizable-profile"
                  className={`w-full px-4 py-4 flex-between gap-6 ring-1 cursor-pointer  rounded-md ${
                    addsOn?.find((a) => a.name === "Customizable Profile")
                      ? "bg-neutral-200 ring-primary-300"
                      : "ring-neutral-400"
                  }`}
                >
                  <input
                    id="customizable-profile"
                    type="checkbox"
                    checked={
                      addsOn?.find((a) => a.name === "Customizable Profile")
                        ? true
                        : false
                    }
                    className="!ring-offset-1 !text-primary-300 p-2 rounded-sm"
                    onChange={() => {
                      if (
                        addsOn.find((ad) => ad.name === "Customizable Profile")
                      ) {
                        setAddsOn(
                          addsOn.filter(
                            (a) => a.name !== "Customizable Profile"
                          )
                        );
                      } else {
                        setAddsOn([
                          ...addsOn,
                          {
                            name: "Customizable Profile",
                            price: 2,
                          },
                        ]);
                      }
                    }}
                  />
                  <div className="flex flex-col flex-1 mr-auto">
                    <h2 className="text-primary-400 font-bold text-sm">
                      Customizable Profile
                    </h2>
                    <p className="text-neutral-400 text-sm">
                      Custom theme on your profile
                    </p>
                  </div>
                  <p className="text-sm text-primary-300">+$2/mo</p>
                </label>
              </>
            ) : (
              <>
                <label
                  htmlFor="online-service"
                  className={`w-full px-4 py-4 flex-between gap-6 ring-1 cursor-pointer  rounded-md ${
                    addsOn?.find((a) => a.name === "Online Services")
                      ? "bg-neutral-200 ring-primary-300"
                      : "ring-neutral-400"
                  }`}
                >
                  <input
                    id="online-service"
                    type="checkbox"
                    className="!ring-offset-1 !text-primary-300 p-2 rounded-sm"
                    checked={
                      addsOn?.find((a) => a.name === "Online Services")
                        ? true
                        : false
                    }
                    onChange={() => {
                      if (addsOn.find((ad) => ad.name === "Online Services")) {
                        setAddsOn(
                          addsOn.filter((a) => a.name !== "Online Services")
                        );
                      } else {
                        setAddsOn([
                          ...addsOn,
                          {
                            name: "Online Services",
                            price: 10,
                          },
                        ]);
                      }
                    }}
                  />
                  <div className="flex flex-col flex-1 mr-auto">
                    <h2 className="text-primary-400 font-bold text-sm">
                      Online Services
                    </h2>
                    <p className="text-neutral-400 text-sm">
                      Access to multiplayer games
                    </p>
                  </div>
                  <p className="text-sm text-primary-300">+$10/yr</p>
                </label>
                <label
                  htmlFor="larger-storage"
                  className={`w-full px-4 py-4 flex-between gap-6 ring-1 cursor-pointer  rounded-md ${
                    addsOn?.find((a) => a.name === "Larger Storage")
                      ? "bg-neutral-200 ring-primary-300"
                      : "ring-neutral-400"
                  }`}
                >
                  <input
                    id="larger-storage"
                    type="checkbox"
                    checked={
                      addsOn?.find((a) => a.name === "Larger Storage")
                        ? true
                        : false
                    }
                    className="!ring-offset-1 !text-primary-300 p-2 rounded-sm"
                    onChange={() => {
                      if (addsOn.find((ad) => ad.name === "Larger Storage")) {
                        setAddsOn(
                          addsOn.filter((a) => a.name !== "Larger Storage")
                        );
                      } else {
                        setAddsOn([
                          ...addsOn,
                          {
                            name: "Larger Storage",
                            price: 20,
                          },
                        ]);
                      }
                    }}
                  />
                  <div className="flex flex-col flex-1 mr-auto">
                    <h2 className="text-primary-400 font-bold text-sm">
                      Larger Storage
                    </h2>
                    <p className="text-neutral-400 text-sm">
                      Extra 1TB of cloud save
                    </p>
                  </div>
                  <p className="text-sm text-primary-300">+$20/yr</p>
                </label>
                <label
                  htmlFor="customizable-profile"
                  className={`w-full px-4 py-4 flex-between gap-6 ring-1 cursor-pointer  rounded-md ${
                    addsOn?.find((a) => a.name === "Customizable Profile")
                      ? "bg-neutral-200 ring-primary-300"
                      : "ring-neutral-400"
                  }`}
                >
                  <input
                    id="customizable-profile"
                    type="checkbox"
                    checked={
                      addsOn?.find((a) => a.name === "Customizable Profile")
                        ? true
                        : false
                    }
                    className="!ring-offset-1 !text-primary-300 p-2 rounded-sm"
                    onChange={() => {
                      if (
                        addsOn.find((ad) => ad.name === "Customizable Profile")
                      ) {
                        setAddsOn(
                          addsOn.filter(
                            (a) => a.name !== "Customizable Profile"
                          )
                        );
                      } else {
                        setAddsOn([
                          ...addsOn,
                          {
                            name: "Customizable Profile",
                            price: 20,
                          },
                        ]);
                      }
                    }}
                  />
                  <div className="flex flex-col flex-1 mr-auto">
                    <h2 className="text-primary-400 font-bold text-sm">
                      Customizable Profile
                    </h2>
                    <p className="text-neutral-400 text-sm">
                      Custom theme on your profile
                    </p>
                  </div>
                  <p className="text-sm text-primary-300">+$20/yr</p>
                </label>
              </>
            )}
          </div>
        </div>
        <div className="hidden  md:flex-between">
          <Link
            to="/plan"
            className="btn shadow-inner btn-secondary hover:text-primary-400 !text-sm !px-4 !py-3 focus-within:ring-2 focus-within:ring-neutral-400"
          >
            Go Back
          </Link>
          <Link
            to="/summary"
            className="btn btn-primary !text-sm !px-4 !py-3 focus-within:ring-2 focus-within:ring-primary-300 focus-within:ring-offset-1"
          >
            Next Step
          </Link>
        </div>
      </div>
      <div className="md:hidden flex-between p-4 fixed bottom-0 left-0 bg-white w-full ">
        <Link
          to="/plan"
          className="btn shadow-inner btn-secondary hover:text-primary-400 !text-sm !px-4 !py-2 focus-within:ring-2 focus-within:ring-neutral-400"
        >
          Go Back
        </Link>
        <Link
          to="/summary"
          className="btn btn-primary !text-sm !px-4 !py-2 focus-within:ring-2 focus-within:ring-primary-300 focus-within:ring-offset-1"
        >
          Next Step
        </Link>
      </div>
    </>
  );
};

export default AddsOn;
