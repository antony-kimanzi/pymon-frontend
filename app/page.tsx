import CodeBlock from "@/components/CodeBlock";
import CopyBlock from "@/components/CopyBlock";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const exampleCode = `
from pymon import monitor

@monitor("nightly-backup")
def backup_database():
    # Your existing code
    db.backup()
    print("Backup complete")

if __name__ == "__main__":
    backup_database()
`;

export default function Home() {
  return (
    <div className="flex flex-col h-auto w-full flex-1 bg-[#0F172A] font-sans">
      <div className="sticky flex flex-row justify-center top-0 z-50">
        <Navbar />
      </div>
      <main className="flex flex-col justify-center items-center text-white">
        <div className="flex flex-col items-center gap-4 pt-40 pb-12">
          <span className="font-sans text-5xl font-semibold">
            <span className="text-primary">Monitor</span> your Python jobs with
            one decorator.
          </span>
          <p className="font-sans text-white text-lg font-light w-[50%] text-center">
            Get instant alerts when your scripts fail. No complex setup, no
            infrastructure changes—just wrap your function and sleep easy
            knowing your jobs are running smoothly.
          </p>
          <div className="w-[50%] mt-10">
            <CodeBlock code={exampleCode} />
          </div>
          <div className="flex flex-row gap-32 mt-16">
            <div className="flex flex-row items-center gap-2">
              <button className="font-sans text-lg font-medium bg-transparent border-b border-white py-0.2 hover:border-primary hover:text-primary transition duration-300 delay-150">
                Get Started Free{" "}
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#ffffff"
                id="Arrow-Line-Up-Right-Light--Streamline-Phosphor"
                height="16"
                width="16"
              >
                <desc>
                  Arrow Line Up Right Light Streamline Icon:
                  https://streamlinehq.com
                </desc>
                <path
                  d="M15.84 14.67234375c0 0.2763625 -0.22405625 0.5004125 -0.500425 0.500425H0.660425c-0.385225 0 -0.62599375 -0.417025 -0.43338125 -0.75064375 0.08939375 -0.1548375 0.2545875 -0.25021875 0.43338125 -0.2502125h14.67915c0.27636875 0.0000125 0.500425 0.2240625 0.500425 0.50043125ZM3.99659375 11.1693625c0.13268125 -0.00011875 0.259875 -0.05291875 0.3536375 -0.14679375L12.83744375 2.5361875v6.79828125c0 0.385225 0.417025 0.62599375 0.75064375 0.43338125 0.15483125 -0.08939375 0.2502125 -0.2546 0.2502125 -0.43338125V1.3276625c0 -0.27638125 -0.22405 -0.50043125 -0.500425 -0.50043125H5.3310625c-0.385225 0 -0.62599375 0.417025 -0.43338125 0.75064375 0.08939375 0.15483125 0.2546 0.2502125 0.43338125 0.2502125h6.79828125L3.6429625 10.3153c-0.27223125 0.27256875 -0.1473125 0.73761875 0.22485625 0.83709375 0.04200625 0.011225 0.08529375 0.01693125 0.128775 0.01696875Z"
                  strokeWidth="0.0625"
                ></path>
              </svg>
            </div>
            <div className="flex flex-row items-center gap-2">
              {" "}
              <button className="font-sans text-lg font-medium bg-transparent border-b border-white py-0.2 hover:border-primary hover:text-primary transition duration-300 delay-150">
                View on Github{" "}
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="24"
                width="24"
              >
                <g id="logo-github">
                  <path
                    id="Subtract"
                    fill="#ffffff"
                    d="M12 2c5.5228 0 10 4.47715 10 10 0 4.5716 -3.0686 8.4239 -7.2578 9.6162v-3.0117c0 -0.7275 -0.1595 -1.4465 -0.4678 -2.1055 2.1883 -0.7822 4.2783 -2.4447 4.2783 -4.4355 0 -1.2663 -0.4671 -2.75174 -1.5127 -3.63186V6l-2.9462 0.98828c-0.6589 -0.16036 -1.3628 -0.24706 -2.0938 -0.24707 -0.731 0 -1.4349 0.08673 -2.09375 0.24707L6.95996 6v2.43164c-1.04555 0.88009 -1.51163 2.36566 -1.51172 3.63186 0 1.9907 2.08913 3.6533 4.27735 4.4355 -0.26358 0.5635 -0.41862 1.1711 -0.45801 1.7901 -0.13854 0.0283 -0.25191 0.0415 -0.34473 0.04 -0.20756 -0.0033 -0.36606 -0.06 -0.51953 -0.1562 -1.11532 -0.7 -1.54401 -1.9835 -3.05566 -2.1543 -0.19076 -0.0214 -0.3474 0.1371 -0.34766 0.3291 0 0.1922 0.15921 0.3423 0.34473 0.3925 1.44216 0.39 1.42755 3.2266 3.54785 3.2598 0.11976 0.0019 0.24101 -0.0069 0.36426 -0.0186v1.6348C5.06807 20.4236 2 16.5713 2 12 2 6.47715 6.47715 2 12 2"
                    strokeWidth="1"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-6 mt-8">
            <div className="flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="24"
                width="24"
              >
                <g id="check-box-fill">
                  <path
                    id="Union"
                    fill="#ffffff"
                    d="M19 3c1.1046 0 2 0.89543 2 2v14c0 1.1046 -0.8954 2 -2 2H5c-1.10457 0 -2 -0.8954 -2 -2V5c0 -1.10457 0.89543 -2 2 -2zm-2.793 5.79297c-0.3905 -0.39053 -1.0235 -0.39053 -1.414 0L10.5 13.0859 9.20703 11.793c-0.39052 -0.3906 -1.02354 -0.3906 -1.41406 0 -0.39053 0.3905 -0.39053 1.0235 0 1.414l2 2c0.39053 0.3906 1.02353 0.3906 1.41403 0l5 -5c0.3906 -0.39049 0.3906 -1.02351 0 -1.41403"
                    strokeWidth="1"
                  ></path>
                </g>
              </svg>
              <span className="font-sans text-lg font-medium">
                Free monitors
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="24"
                width="24"
              >
                <g id="check-box-fill">
                  <path
                    id="Union"
                    fill="#ffffff"
                    d="M19 3c1.1046 0 2 0.89543 2 2v14c0 1.1046 -0.8954 2 -2 2H5c-1.10457 0 -2 -0.8954 -2 -2V5c0 -1.10457 0.89543 -2 2 -2zm-2.793 5.79297c-0.3905 -0.39053 -1.0235 -0.39053 -1.414 0L10.5 13.0859 9.20703 11.793c-0.39052 -0.3906 -1.02354 -0.3906 -1.41406 0 -0.39053 0.3905 -0.39053 1.0235 0 1.414l2 2c0.39053 0.3906 1.02353 0.3906 1.41403 0l5 -5c0.3906 -0.39049 0.3906 -1.02351 0 -1.41403"
                    strokeWidth="1"
                  ></path>
                </g>
              </svg>
              <span className="font-sans text-lg font-medium">Python 3.8+</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-24">
          <h3 className="font-sans text-4xl font-semibold">How it works</h3>
          <div className="flex flex-row items-center justify-center gap-6 mt-12">
            <span className="font-sans text-xl font-medium">
              Add the decorator
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="Right-Arrow--Streamline-Guidance-Free"
              height="24"
              width="24"
            >
              <desc>Right Arrow Streamline Icon: https://streamlinehq.com</desc>
              <path
                stroke="#ffffff"
                d="M0 12h24c-0.9556 0 -2.1449 -0.5752 -3.1238 -1.1738 -1.3073 -0.7994 -2.4471 -1.8469 -3.4016 -3.04558C16.7331 6.8496 16 5.74152 16 5m8 7c-0.9556 0 -2.1449 0.5752 -3.1238 1.1738 -1.3073 0.7994 -2.4471 1.8469 -3.4016 3.0456C16.7331 17.1504 16 18.2585 16 19"
                strokeWidth="1"
              ></path>
            </svg>
            <span className="font-sans text-xl font-medium">
              Get a ping URL
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="Right-Arrow--Streamline-Guidance-Free"
              height="24"
              width="24"
            >
              <desc>Right Arrow Streamline Icon: https://streamlinehq.com</desc>
              <path
                stroke="#ffffff"
                d="M0 12h24c-0.9556 0 -2.1449 -0.5752 -3.1238 -1.1738 -1.3073 -0.7994 -2.4471 -1.8469 -3.4016 -3.04558C16.7331 6.8496 16 5.74152 16 5m8 7c-0.9556 0 -2.1449 0.5752 -3.1238 1.1738 -1.3073 0.7994 -2.4471 1.8469 -3.4016 3.0456C16.7331 17.1504 16 18.2585 16 19"
                strokeWidth="1"
              ></path>
            </svg>
            <span className="font-sans text-xl font-medium">We alert you</span>
          </div>
          <div>
            <div className="flex flex-col gap-4 mt-4">
              <span className="font-sans text-xl text-primary font-medium">
                1. Install
              </span>
              <div className="w-auto">
                <CopyBlock text="pip install pymon" />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <span className="font-sans text-xl text-primary font-medium">
                2. Decorate
              </span>
              <div className="w-auto">
                <CopyBlock text="@monitor def job()" />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <span className="font-sans text-xl text-primary font-medium">
                3. Relax
              </span>
              <div className="flex flex-row gap-2 items-center">
                <span className="font-sans text-lg text-white font-light">
                  We alert on failure
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#02A94A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  id="Checkbox--Streamline-Tabler"
                  height="24"
                  width="24"
                >
                  <desc>
                    Checkbox Streamline Icon: https://streamlinehq.com
                  </desc>
                  <path d="m9 11 3 3 8 -8" strokeWidth="2"></path>
                  <path
                    d="M20 12v6a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2V6a2 2 0 0 1 2 -2h9"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-36">
          <h3 className="font-sans text-4xl font-semibold">Features</h3>
          <div className="flex flex-row justify-center items-center gap-16 mt-12">
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-6">
                <svg
                  viewBox="-0.655 -0.655 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Number-1-Square--Streamline-Iconoir"
                  height="21"
                  width="21"
                >
                  <desc>
                    Number 1 Square Streamline Icon: https://streamlinehq.com
                  </desc>
                  <path
                    d="M0.9390489166666668 18.157215541666666V1.5327844583333334c0 -0.3279205416666667 0.265815 -0.5937355416666666 0.5937355416666666 -0.5937355416666666h16.624431083333334c0.3279205416666667 0 0.5937355416666666 0.265815 0.5937355416666666 0.5937355416666666v16.624431083333334c0 0.3279205416666667 -0.265815 0.5937355416666666 -0.5937355416666666 0.5937355416666666H1.5327844583333334c-0.3279205416666667 0 -0.5937355416666666 -0.265815 -0.5937355416666666 -0.5937355416666666Z"
                    stroke="#ffffff"
                    strokeWidth="1.31"
                  ></path>
                  <path
                    d="M10.834586583333333 13.80318225V5.88681775l-2.9686777083333333 2.9685956666666664"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.31"
                  ></path>
                </svg>
                <span className="font-sans text-white text-lg font-medium">
                  One decorator
                </span>
              </div>
              <div className="flex flex-row gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 21"
                  height="21"
                  width="21"
                >
                  <g id="Bolt">
                    <path
                      id="Union"
                      fill="#ffffff"
                      d="M13.118175 2.7335174999999996 12.3662 8.75H15.75c0.3409 0 0.6505625 0.19818750000000002 0.7938000000000001 0.5075875 0.14315 0.3094875 0.0935375 0.6740999999999999 -0.1273125 0.9339749999999999l-7.4375 8.75L8.717511250000001 19.25H6.8658275l0.875 -6.125H4.3749825c-0.33368125000000004 0 -0.63819 -0.1901375 -0.7852775000000001 -0.48965 -0.14697375000000001 -0.299425 -0.11085375 -0.65625 0.09314375 -0.9202375L11.1202875 2.0900862499999997 11.3827 1.75h1.8585zM6.156605000000001 11.375H8.75c0.253575 0 0.49516249999999995 0.1099875 0.661325 0.3016125 0.166075 0.191625 0.240975 0.44625000000000004 0.2051 0.6972875000000001l-0.5357624999999999 3.7452625000000004L13.858162499999999 10.5H11.375c-0.25095 0 -0.490175 -0.1075375 -0.65625 -0.2956625 -0.16616250000000002 -0.188125 -0.24307499999999999 -0.43881249999999994 -0.211925 -0.6878375l0.562275 -4.499775z"
                      strokeWidth="0.875"
                    ></path>
                  </g>
                </svg>
                <span className="font-sans text-white text-lg font-medium">
                  Works with Cron/Celery
                </span>
              </div>
              <div className="flex flex-row gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  id="Brand-Python--Streamline-Tabler"
                  height="24"
                  width="24"
                >
                  <desc>
                    Brand Python Streamline Icon: https://streamlinehq.com
                  </desc>
                  <path
                    d="M12 9H5a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M12 15h7a2 2 0 0 0 2 -2V9a2 2 0 0 0 -2 -2h-3"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M8 9V5a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4"
                    strokeWidth="2"
                  ></path>
                  <path d="m11 6 0 0.01" strokeWidth="2"></path>
                  <path d="m13 18 0 0.01" strokeWidth="2"></path>
                </svg>
                <span className="font-sans text-white text-lg font-medium">
                  Python 3.8+
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="-0.44 -0.44 21 21"
                  id="Pencil-Clipboard--Streamline-Cyber"
                  height="21"
                  width="21"
                >
                  <desc>
                    Pencil Clipboard Streamline Icon: https://streamlinehq.com
                  </desc>
                  <path
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M10.863961666666667 2.095833333333333H14.670833333333334v3.3533333333333335"
                    strokeWidth="0.88"
                  ></path>
                  <path
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M14.670833333333334 14.670833333333334v5.03H0.4191666666666667v-17.605h3.738128333333333"
                    strokeWidth="0.88"
                  ></path>
                  <path
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M2.934166666666667 14.670833333333334h5.03"
                    strokeWidth="0.88"
                  ></path>
                  <path
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M2.934166666666667 11.3175h5.03"
                    strokeWidth="0.88"
                  ></path>
                  <path
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M2.934166666666667 7.964166666666667h8.383333333333333"
                    strokeWidth="0.88"
                  ></path>
                  <path
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="m11.736666666666668 0.4191666666666667 -1.3094766666666668 2.515h-5.868333333333334L3.3533333333333335 0.4191666666666667h8.383333333333333Z"
                    strokeWidth="0.88"
                  ></path>
                  <path
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M10.479166666666668 12.994166666666667v1.6766666666666667h1.6766666666666667l6.706666666666667 -6.706666666666667 -1.6766666666666667 -1.6766666666666667 -6.706666666666667 6.706666666666667Z"
                    strokeWidth="0.88"
                  ></path>
                </svg>
                <span className="font-sans text-white text-lg font-medium">
                  Stack traces in alerts
                </span>
              </div>
              <div className="flex flex-row gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="-0.655 -0.655 21 21"
                  id="Alarm-Bell-Ring--Streamline-Ultimate"
                  height="21"
                  width="21"
                >
                  <desc>
                    Alarm Bell Ring Streamline Icon: https://streamlinehq.com
                  </desc>
                  <path
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.5903109625 3.499889295833334c-0.8517401750000001 0.4729784125 -1.5537953291666666 1.1753125083333333 -2.026429166666667 2.0272495833333335"
                    strokeWidth="1.31"
                  ></path>
                  <path
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.901989583333333 1.230625c-0.8741539583333333 0.248537025 -1.6702944958333332 0.7163550166666667 -2.312836625 1.3590448208333334C1.9466026250000001 3.2323596250000004 1.478965125 4.0285986125 1.230625 4.90281"
                    strokeWidth="1.31"
                  ></path>
                  <path
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.691875 14.7675h12.30625"
                    strokeWidth="1.31"
                  ></path>
                  <path
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.998125 14.7675S14.7675 13.696035833333333 14.7675 9.845c0 -3.076554295833333 -2.1019075 -5.798696795833333 -4.9225 -5.798696795833333S4.9225 6.768445704166666 4.9225 9.845c0 3.87154625 -1.230625 4.9225 -1.230625 4.9225"
                    strokeWidth="1.31"
                  ></path>
                  <path
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.075625 17.22875c0 0.32636175 -0.12962583333333333 0.63943275 -0.3604090416666667 0.8702159583333333S10.17136175 18.459375 9.845 18.459375c-0.32636175 0 -0.63943275 -0.12962583333333333 -0.8702159583333333 -0.3604090416666667S8.614375 17.555111750000002 8.614375 17.22875"
                    strokeWidth="1.31"
                  ></path>
                  <path
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.845 4.046295000000001V2.46125"
                    strokeWidth="1.31"
                  ></path>
                  <path
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.099680833333334 3.499889295833334c0.42308887500000003 0.23622257083333337 0.8117202499999999 0.5293820583333333 1.1551466666666665 0.8712825000000001 0.3424419166666667 0.34318849583333333 0.6356588333333334 0.7322136708333333 0.8712825000000001 1.1559670833333333"
                    strokeWidth="1.31"
                  ></path>
                  <path
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.788010416666665 1.230625c0.8741539583333333 0.248537025 1.6702862916666665 0.7163550166666667 2.312836625 1.3590448208333334 0.6425503333333333 0.6426898041666667 1.1101878333333333 1.4389287916666667 1.3585279583333334 2.3131401791666666"
                    strokeWidth="1.31"
                  ></path>
                </svg>
                <span className="font-sans text-white text-lg font-medium">
                  Email + Slack
                </span>
              </div>
              <div className="flex flex-row gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 21"
                  id="Fastforward-Clock--Streamline-Core"
                  height="21"
                  width="21"
                >
                  <desc>
                    Fastforward Clock Streamline Icon: https://streamlinehq.com
                  </desc>
                  <g id="fastforward-clock--time-clock-reset-stopwatch-circle-measure-loading">
                    <path
                      id="Vector 1560 (Stroke)"
                      fill="#ffffff"
                      fillRule="evenodd"
                      d="M10.5 4.125a1.125 1.125 0 0 1 1.125 1.125v5.362500000000001l3.204 1.923a1.125 1.125 0 1 1 -1.158 1.929l-3.75 -2.25A1.125 1.125 0 0 1 9.375 11.25v-6A1.125 1.125 0 0 1 10.5 4.125Z"
                      clipRule="evenodd"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      id="Union"
                      fill="#ffffff"
                      fillRule="evenodd"
                      d="M2.25 10.5a8.25 8.25 0 0 1 14.73 -5.1075l-1.4489999999999998 1.4475a0.75 0.75 0 0 0 0.5295 1.281H20.25a0.75 0.75 0 0 0 0.75 -0.75V3.18a0.75 0.75 0 0 0 -1.281 -0.5309999999999999l-1.1400000000000001 1.1415a10.5 10.5 0 1 0 2.1405000000000003 9.129000000000001 1.125 1.125 0 0 0 -2.19 -0.516A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                      strokeWidth="1.5"
                    ></path>
                  </g>
                </svg>
                <span className="font-sans text-white text-lg font-medium">
                  90-day history
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-36 mb-24">
          <h3 className="font-sans text-4xl font-semibold">
            Ready to get started?
          </h3>
          <div className="flex flex-row items-center justify-center gap-4 mt-12">
            <div className="w-auto">
              <CopyBlock text="pip install pymon" />
            </div>
            <span className="font-sans text-slate-400 font-light text-lg">
              then
            </span>
            <button className="w-[275px] font-sans text-primary-dark font-medium text-md bg-white border border-primary px-6 py-2 hover:pointer hover:text-white hover:bg-primary-dark hover:border-primary-dark transition delay-150 duration-300 rounded-xs">
              Sign up free
            </button>
          </div>
        </div>
      </main>
      <div className="w-full h-auto">
        <Footer />
      </div>
    </div>
  );
}
