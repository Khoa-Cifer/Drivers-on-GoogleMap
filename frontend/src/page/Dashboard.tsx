import { RiHome2Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import userImage from "../assets/user.png"
import { Bar, Doughnut, Line } from "react-chartjs-2";

import revenueData from "../data/revenueData.json";
import sourceData from "../data/sourceData.json";
import { Chart as ChartJS, defaults } from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const Home = () => {
    return (
        <div className="flex">
            <div className="w-[75vw] m-[50px] rounded-3xl bg-white">
                <div className="py-4 px-[50px] flex justify-between rounded-t-3xl bg-[#C3F4FD]">
                    <div className="flex gap-2 items-center">
                        <RiHome2Line />
                        <p>Dashboard</p>
                    </div>
                    <div className="flex items-center gap-12">
                        <FaRegBell />
                        <img src={userImage} alt="" />
                    </div>
                </div>
                <div className="py-4 px-[50px]">
                    <p className="font-bold text-[66px] text-[#263071]">Dashboard</p>
                    <div className="App">
                        <div className="dataCard revenueCard">
                            <Line
                                data={{
                                    labels: revenueData.map((data) => data.label),
                                    datasets: [
                                        {
                                            label: "Revenue",
                                            data: revenueData.map((data) => data.revenue),
                                            backgroundColor: "#064FF0",
                                            borderColor: "#064FF0",
                                        },
                                        {
                                            label: "Cost",
                                            data: revenueData.map((data) => data.cost),
                                            backgroundColor: "#FF3030",
                                            borderColor: "#FF3030",
                                        },
                                    ],
                                }}
                                options={{
                                    elements: {
                                        line: {
                                        },
                                    },
                                    plugins: {
                                        title: {
                                            text: "Monthly Revenue & Cost",
                                        },
                                    },
                                }}
                            />
                        </div>

                        <div className="dataCard categoryCard">
                            <Doughnut
                                data={{
                                    labels: sourceData.map((data) => data.label),
                                    datasets: [
                                        {
                                            label: "Count",
                                            data: sourceData.map((data) => data.value),
                                            backgroundColor: [
                                                "rgba(43, 63, 229, 0.8)",
                                                "rgba(250, 192, 19, 0.8)",
                                                "rgba(253, 135, 135, 0.8)",
                                            ],
                                            borderColor: [
                                                "rgba(43, 63, 229, 0.8)",
                                                "rgba(250, 192, 19, 0.8)",
                                                "rgba(253, 135, 135, 0.8)",
                                            ],
                                        },
                                    ],
                                }}
                                options={{
                                    plugins: {
                                        title: {
                                            text: "Revenue Sources",
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;