import { useEffect, useState } from "react";
import { createLocation, getRoleByEmail } from "../config/ApiService";

const LocationRegister = ({ email }) => {
    const [customerAddress, setCustomerAddress] = useState({
        latitude: null,
        longitude: null,
    });
    const [driverAddress, setDriverAddress] = useState({
        latitude: null,
        longitude: null,
    })

    const [role, setRole] = useState("");

    useEffect(() => {
        setTimeout(() => {
            getRoleByEmail(email).then((data) => {
                setRole(data);
            }).catch((error) => {
                console.log(error.message);
            });
        }, 1000);
    }, [])

    const handleAddressChange = async (e) => {
        const name = e.target.name;
        let value = e.target.value;
        getRoleByEmail(email).then((data) => {
            setRole(data);
        });
        if (!isNaN(value)) {
            value = parseFloat(value);
        } else {
            value = "";
        }

        if (role === "ROLE_DRIVER") {
            setDriverAddress({ ...driverAddress, [name]: value });
        } else {
            setCustomerAddress({ ...customerAddress, [name]: value });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (role === "ROLE_DRIVER") {
                const success = await createLocation(email, driverAddress.latitude, driverAddress.longitude)
            } else {
                const success = await createLocation(email, customerAddress.latitude, customerAddress.longitude)
            }
            setDriverAddress({
                latitude: null,
                longitude: null,
            })
            setCustomerAddress({
                latitude: null,
                longitude: null,
            })
        } catch (error) {
            console.log(error.data)
        }
    }


    return (
        <div>

        </div>
    )
}

export default LocationRegister;
