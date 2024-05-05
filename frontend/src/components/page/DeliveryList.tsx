import { FaRegBell } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import DoughnutChart from "../common/DoughnutChart";
import userImage from "../../assets/user.png"
import { IoIosArrowForward } from "react-icons/io";
import DeliveryInfoCard from "../common/DeliveryInfoCard";

const DeliveryList = () => {
    return (
        <div className="flex">
            <div className="w-[75vw] m-[50px] rounded-3xl bg-white">
                <div className="py-4 px-[50px] flex justify-between rounded-t-3xl bg-[#C3F4FD]">
                    <div className="flex gap-2 items-center">
                        <RiHome2Line />
                        <p className="m-0">Dashboard</p>
                        <IoIosArrowForward className="mx-4" />
                        <p className="m-0">Pharmacy Deliveries</p>
                    </div>
                    <div className="flex items-center gap-12">
                        <FaRegBell />
                        <img src={userImage} alt="" />
                    </div>
                </div>
                <div className="py-4 px-[50px]">
                    <p className="font-bold text-[66px] text-[#263071]">Pharmacy Deliveries</p>
                    <div className="flex justify-end gap-4">
                        <button className="flex justify-between items-center w-[170px] rounded-2xl p-[16px] border">
                            This week
                            <MdOutlineKeyboardArrowDown />
                        </button>

                        <button className="flex justify-between items-center bg-[#01428E] px-[30px] rounded-[40px]">
                            <p className="text-white m-0">Export to excel</p>
                        </button>
                    </div>
                    <div className="grid grid-cols-3 gap-8 my-6">
                        <DeliveryInfoCard cardHeader={"Header"} cardData={"Text"} cardType={"Text"} bgColor={"#D3E2FF"} />
                        <DeliveryInfoCard cardHeader={"Header"} cardData={"Text"} cardType={"Text"} bgColor={"#DFFFCF"} />
                        <DeliveryInfoCard cardHeader={"Header"} cardData={"Text"} cardType={"Text"} bgColor={"#FDCDB8"} />
                    </div>
                    <div>
                        <div className="flex gap-6 justify-between mt-6">
                            <DoughnutChart />
                            <DoughnutChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default DeliveryList;