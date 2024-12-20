import Image from "next/image";

import ListBot from "./components/ListBot";

const HomePage = () => {
  return (
    <div>
      <div className="grid grid-cols-3 px-4">
        <div className="flex items-center">
          <div className="relative w-full">
            <div className="absolute left-5 top-1/2 -z-10 h-full -translate-y-1/2">
              <Image
                src="/assets/bg-profile.png"
                alt="Profile"
                fill
                className="!static h-10 w-auto"
              />
            </div>
            <div className="ralative flex items-center gap-2">
              <div className="h-11 w-11 rounded-full bg-purple-400"></div>
              <div>Hello</div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/assets/logo.png"
            alt="Logo"
            fill
            className="!static h-20 w-auto"
          />
        </div>
        <div className="flex items-center">
          <div className="relative w-full">
            <div className="absolute left-5 top-1/2 -z-10 h-8 -translate-y-1/2">
              <Image
                src="/assets/bg-balance.png"
                alt="Balance"
                fill
                className="!static h-8 w-auto"
              />
            </div>
            <div className="ralative flex items-center gap-2">
              <div className="h-11 w-11">
                <Image
                  src="/assets/coin.png"
                  alt="Coin"
                  fill
                  className="!static h-11 w-auto"
                />
              </div>
              <div>20000</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex">
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent to-primary/50"></div>
          <div className="h-0.5 w-full bg-gradient-to-l from-transparent to-primary/50"></div>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 flex h-full w-full">
            <div className="h-full w-full bg-gradient-to-r from-transparent to-primary/10"></div>
            <div className="h-full w-full bg-gradient-to-l from-transparent to-primary/10"></div>
          </div>
          <div className="relative flex items-center justify-between p-4">
            <div>Total bots: 12</div>
            <div className="h-1 w-1 rounded-full bg-primary"></div>
            <div>Playing: 244</div>
            <div className="h-1 w-1 rounded-full bg-primary"></div>
            <div>Prize total: 12,978</div>
          </div>
        </div>
        <div className="flex">
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent to-primary/35"></div>
          <div className="h-0.5 w-full bg-gradient-to-l from-transparent to-primary/35"></div>
        </div>
      </div>

      <div className="p-4">
        <ListBot />
      </div>
    </div>
  );
};

export default HomePage;
