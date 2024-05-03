import { RiHome3Line } from "react-icons/ri";
import ModulesList from "../components/ModulesList";
import { FaList, FaQuestionCircle, FaRegBuilding, FaRegUserCircle } from "react-icons/fa";
import { RiHandbagLine } from "react-icons/ri";
import { CiHospital1, CiMail } from "react-icons/ci";
import { TbSeo, TbWallpaper } from "react-icons/tb";
import { LuUserSquare2 } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import { IoLayersOutline } from "react-icons/io5";
import { LiaFileVideoSolid } from "react-icons/lia";
import { PiQuotes } from "react-icons/pi";

const FeaturesList = () => {
    return (
        <div>
            <div className="flex items-center rad rounded-2xl bg-[#C3F4FD] p-4 gap-3">
                <RiHome3Line />
                <p>Dashboard</p>
            </div>
            <div className="my-14">
                <div>
                    <p className="text-[#01428E] text-sm">ADMIN USERS</p>
                    <div className="flex items-center rad rounded-2xl p-4 gap-3">
                        <FaRegUserCircle />
                        <p>Admin Users</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p className="text-[#01428E] text-sm">MODULES</p>
                    <ModulesList image={<RiHandbagLine />} name={"Jobs"} hidden={false} />
                    <ModulesList image={<CiMail />} name={"Invoices"} hidden={false} />
                    <ModulesList image={<FaRegBuilding />} name={"Companies"} hidden={false} />
                    <ModulesList image={<TbWallpaper />} name={"Transaction Logs"} hidden={false} />
                    <ModulesList image={<LuUserSquare2 />} name={"User Profiles"} hidden={false} />
                    <ModulesList image={<FaList />} name={"C.M.S"} hidden={false} />
                    <ModulesList image={<MdManageHistory />} name={"Manage Blogs"} hidden={false} />
                    <ModulesList image={<TbSeo />} name={"S.E.O"} hidden={true} />
                    <ModulesList image={<FaQuestionCircle />} name={"FAQs"} hidden={true} />
                    <ModulesList image={<LiaFileVideoSolid />} name={"Home Page Videos"} hidden={false} />
                    <ModulesList image={<PiQuotes />} name={"Testimonials"} hidden={false} />
                    <ModulesList image={<IoLayersOutline />} name={"Sliders"} hidden={false} />
                    <ModulesList image={<CiHospital1 />} name={"Pharmacy"} hidden={false} />
                </div>
            </div>
        </div>
    )
}

export default FeaturesList;