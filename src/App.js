import { useState } from "react";
import "./App.css";

function App() {
  // let money = 0;
  // let moneyInput = 0;
  const [money, setMoney] = useState(1000000);
  const [moneyInput, setMoneyInput] = useState(0);
  const [moneyInput2, setMoneyInput2] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTrue, setisOpenTrue] = useState(false);
  const [textPopUp, setTextPopUp] = useState("");
  const [classList, setClassList] = useState({
    className: "list absolute  w-[25rem] -translate-x-[27rem] space-y-1",
    status: false,
  });
  const [text2, setText2] = useState("");

  const [title, setTitle] = useState({
    title: "กรุณาเลือกบริการ",
    titleList: ["กรุณาเลือกบริการ", "เติมเงิน", "ถอนเงิน"],
    status: 0,
  });

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  const setBtnValue = (value) => {
    setMoneyInput(moneyInput * 10 + value);
  };
  const btnCancel = () => {
    setMoneyInput(0);
  };
  const btnBack = () => {
    setMoneyInput(Math.floor(moneyInput / 10));
  };
  const btnConfirm = () => {
    if (title.status !== 0) {
      if (title.status === 1) {
        if (moneyInput !== 0) {
          setTextPopUp("เงินเข้าเรียบร้อยฮะสุดหล่อ");
          setText2("จำนวนเงินที่เติม");
          setisOpenTrue(true);
          openPopup();
          setMoneyInput2(moneyInput);
          setMoney(money + moneyInput);
          setMoneyInput(0);
        } else {
          setTextPopUp("จำนวนเงินไม่ถูกต้อง");
          setisOpenTrue(false);
          openPopup();
        }
      } else if (title.status === 2) {
        if (moneyInput !== 0) {
          if (moneyInput > money) {
            setTextPopUp("เงินไม่พอนะจะ");
            setisOpenTrue(false);
            openPopup();
          } else {
            setTextPopUp("รอรับเงินได้เลย");
            setText2("จำนวนเงินที่ถอน");

            setisOpenTrue(true);
            openPopup();
            setMoneyInput2(moneyInput);
            setMoney(money - moneyInput);
            setMoneyInput(0);
          }
        } else {
          setTextPopUp("จำนวนเงินไม่ถูกต้อง");
          setisOpenTrue(false);
          openPopup();
        }
      }
    } else {
      setTextPopUp("กรุณาเลือกบริการ");
      setisOpenTrue(false);
      openPopup();
    }
  };
  const btnList = () => {
    if (classList.status === false) {
      setClassList({
        className: "fade-in absolute  w-[25rem] -translate-x-[27rem] space-y-1",
        status: true,
      });
    } else {
      setClassList({
        className:
          "fade-out absolute  w-[25rem] -translate-x-[27rem] space-y-1",
        status: false,
      });
    }
  };

  return (
    <div>
      <div className="h-screen bg-slate-700 flex justify-center items-center space-x-7 text-white ">
        <div>
          <div className="bg-slate-800   h-[38rem] w-[25rem] px-10 py-10 rounded-2xl shadow-2xl shadow-gray-800">
            <div className="pb-10">
              <div className="pb-5">{title.title}</div>
              <div className="flex justify-between pb-5 ">
                <h1>เลขบัญชี</h1>
                <h1>6304101307</h1>
              </div>
              <div className="flex justify-between pb-5">
                <h1>จำนวนเงิน</h1>
                <h1>{money.toLocaleString()}</h1>
              </div>
              <div className="flex justify-between py-5 px-5 bg-slate-900 rounded-xl">
                <label>กรอกเงิน</label>
                <div>
                  <h1>{moneyInput.toLocaleString()}</h1>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 grid-rows-4 gap-3  text-center  font-bold">
              <button
                className="bg-slate-900 rounded-md py-5 text-xl shadow-box"
                onClick={() => setBtnValue(7)}
              >
                7
              </button>
              <button
                className="bg-slate-900 rounded-md py-5 text-xl shadow-box"
                onClick={() => setBtnValue(8)}
              >
                8
              </button>
              <button
                className="bg-slate-900 rounded-md py-5 text-xl shadow-box"
                onClick={() => setBtnValue(9)}
              >
                9
              </button>
              <button
                className="bg-slate-900 rounded-md  py-5 flex justify-center items-center shadow-box"
                onClick={btnBack}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-caret-left-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </button>
              <button
                className="bg-slate-900 rounded-md py-5 text-xl shadow-box"
                onClick={() => setBtnValue(4)}
              >
                4
              </button>
              <button
                className="bg-slate-900 rounded-md py-5 text-xl shadow-box"
                onClick={() => setBtnValue(5)}
              >
                5
              </button>
              <button
                className="bg-slate-900 rounded-md py-5 text-xl shadow-box"
                onClick={() => setBtnValue(6)}
              >
                6
              </button>
              <button
                className="bg-green-800 rounded-md py-5 shadow-box"
                onClick={btnConfirm}
              >
                ยืนยัน
              </button>
              <button
                className="bg-slate-900 rounded-md py-5 text-xl shadow-box"
                onClick={() => setBtnValue(1)}
              >
                1
              </button>
              <button
                className="bg-slate-900 rounded-md py-5 text-xl shadow-box"
                onClick={() => setBtnValue(2)}
              >
                2
              </button>
              <button
                className="bg-slate-900 rounded-md py-5 text-xl shadow-box"
                onClick={() => setBtnValue(3)}
              >
                3
              </button>
              <button
                className="bg-red-500 rounded-md py-5 shadow-box"
                onClick={btnCancel}
              >
                ยกเลิก
              </button>
              <button
                className="bg-slate-900 rounded-md text-xl py-5 col-span-3 shadow-box"
                onClick={() => setBtnValue(0)}
              >
                0
              </button>
            </div>
          </div>
        </div>
        <div className="h-[38rem] relative">
          <button
            class=" w-14 h-14 flex justify-center items-center  bg-slate-800 rounded-2xl shadow-2xl shadow-gray-800"
            onClick={btnList}
          >
            <div className="space-y-1">
              <div class="w-7 h-1 bg-gray-400"></div>
              <div class="w-7 h-1 bg-gray-400"></div>
              <div class="w-7 h-1 bg-gray-400"></div>
            </div>
          </button>
          <div className={classList.className}>
            <div
              className="py-5 px-5 bg-red-800 rounded-lg"
              onClick={() => {
                setTitle({
                  title: title.titleList[1],
                  titleList: ["กรุณาเลือกบริการ", "เติมเงิน", "ถอนเงิน"],
                  status: 1,
                });
                btnList();
              }}
            >
              เติมเงิน
            </div>
            <div
              className="py-5 px-5 bg-red-800 rounded-lg"
              onClick={() => {
                setTitle({
                  title: title.titleList[2],
                  titleList: ["กรุณาเลือกบริการ", "เติมเงิน", "ถอนเงิน"],
                  status: 2,
                });
                btnList();
              }}
            >
              ถอนเงิน
            </div>
          </div>
        </div>
      </div>
      {/* popup */}
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white font-bold  ">
              <div className="bg-slate-800 p-10 rounded-lg rou text-center w-96 h-96 relative">
                <h1 className="text-3xl">{textPopUp}</h1>
                {isOpenTrue && (
                  <>
                    <div className="flex justify-between pt-10">
                      <div>{text2}</div>
                      <div>{moneyInput2.toLocaleString()}</div>
                    </div>
                    <div className="flex justify-between py-5">
                      <div>จำนวนเงินคงเหลือ</div>
                      <div>{money.toLocaleString()}</div>
                    </div>
                  </>
                )}
                <button
                  className="bg-blue-600 rounded-md  px-10 py-2 absolute bottom-5 left-1/3"
                  onClick={closePopup}
                >
                  ตกลง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    // <div></div>
  );
}

export default App;
