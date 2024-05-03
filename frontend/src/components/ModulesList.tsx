import { IoIosArrowForward } from "react-icons/io"

const ModulesList = ({ image, name, hidden }) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center rad rounded-2xl p-4 gap-3">
                {image}
                <p className="">{name}</p>
            </div>
            {hidden ? <></> : <IoIosArrowForward />}
        </div>
    )
}

export default ModulesList



