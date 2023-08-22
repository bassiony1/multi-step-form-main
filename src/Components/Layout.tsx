import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <main className="flex-center h-full px-4 py-20 bg-neutral-200">
      <div className="fixed top-0 left-0 z-[1] bg-[url(/images/bg-sidebar-mobile.svg)] h-[300px] w-full bg-cover pt-4 md:hidden">
        <div className="flex-center gap-8">
          <div
            className={`text-white font-bold p-2 border border-white w-[40px] h-[40px] rounded-full flex-center ${
              pathname === "/" && "bg-neutral-200 !text-primary-400"
            }`}
          >
            1
          </div>

          <div
            className={`text-white font-bold p-2 border border-white w-[40px] h-[40px] rounded-full flex-center ${
              pathname === "/plan" && "bg-neutral-200 !text-primary-400"
            }`}
          >
            2
          </div>

          <div
            className={`text-white font-bold p-2 border border-white w-[40px] h-[40px] rounded-full flex-center ${
              pathname === "/adds-on" && "bg-neutral-200 !text-primary-400"
            }`}
          >
            3
          </div>

          <div
            className={`text-white font-bold p-2 border border-white w-[40px] h-[40px] rounded-full flex-center ${
              (pathname === "/summary" || pathname === "/complete") &&
              "bg-neutral-200 !text-primary-400"
            }`}
          >
            4
          </div>
        </div>
      </div>

      <section className="container p-4 z-[2] shadow-xl h-full bg-white rounded-lg max-w-6xl grid grid-cols-1 md:grid-cols-layout gap-x-6">
        <div className="hidden md:flex-start-col h-full bg-[url(/images/bg-sidebar-desktop.svg)] bg-cover rounded-xl w-full px-6 py-12">
          <div className="flex-start-col gap-10">
            <div className="flex items-center flex-wrap gap-4 ">
              <div
                className={`text-white font-bold p-2 border border-white w-[40px] h-[40px] rounded-full flex-center ${
                  pathname === "/" && "bg-neutral-200 !text-primary-400"
                }`}
              >
                1
              </div>
              <div className="flex-start-col">
                <h2 className="text-sm  text-neutral-300 uppercase">Step 1</h2>
                <p className="text-md text-white font-bold uppercase">
                  Your Info
                </p>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-4 ">
              <div
                className={`text-white font-bold p-2 border border-white w-[40px] h-[40px] rounded-full flex-center ${
                  pathname === "/plan" && "bg-neutral-200 !text-primary-400"
                }`}
              >
                2
              </div>
              <div className="flex-start-col">
                <h2 className="text-sm  text-neutral-300 uppercase">Step 2</h2>
                <p className="text-md text-white font-bold uppercase">
                  Select Plan
                </p>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-4 ">
              <div
                className={`text-white font-bold p-2 border border-white w-[40px] h-[40px] rounded-full flex-center ${
                  pathname === "/adds-on" && "bg-neutral-200 !text-primary-400"
                }`}
              >
                3
              </div>
              <div className="flex-start-col">
                <h2 className="text-sm  text-neutral-300 uppercase">Step 3</h2>
                <p className="text-md text-white font-bold uppercase">
                  Add-ons
                </p>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-4 ">
              <div
                className={`text-white font-bold p-2 border border-white w-[40px] h-[40px] rounded-full flex-center ${
                  (pathname === "/summary" || pathname === "/complete") &&
                  "bg-neutral-200 !text-primary-400"
                }`}
              >
                4
              </div>
              <div className="flex-start-col">
                <h2 className="text-sm  text-neutral-300 uppercase">Step 4</h2>
                <p className="text-md text-white font-bold uppercase">
                  Summary
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 md:px-8 ">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default Layout;
