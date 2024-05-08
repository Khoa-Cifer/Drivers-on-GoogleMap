import { useEffect, useState } from "react";
import { createLocation } from "../config/ApiService";

const LocationRegister = () => {
    const [address, setAddress] = useState({
        latitude: null,
        longitude: null,
    });

    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const handleAddressChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (!isNaN(value)) {
            value = parseFloat(value);
        } else {
            value = "";
        }

        setAddress({ ...address, [name]: value })
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const success = await createLocation(email, address.latitude, address.longitude)
            if (success !== undefined) {
                setSuccessMessage("A new location was assigned successfully !")
                setAddress({
                    latitude: null,
                    longitude: null,
                });
                setErrorMessage("")
            } else {
                setErrorMessage("Error adding new room")
            }
            setRole("");

        } catch (error) {
            setErrorMessage(error.data)
        }
        setTimeout(() => {
            setSuccessMessage("")
            setErrorMessage("")
        }, 3000)
    }


    return (
        <div>
            <section className="container mt-5 mb-5">
                <h2 className="mt-5 mb-2">Input your location</h2>
                {successMessage && (
                    <div className="alert alert-success fade show"> {successMessage}</div>
                )}

                {errorMessage && <div className="alert alert-danger fade show"> {errorMessage}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="roomPrice" className="form-label">
                            Email
                        </label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmail}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="roomPrice" className="form-label">
                            Latitude
                        </label>
                        <input
                            required
                            type="number"
                            className="form-control"
                            id="latitude"
                            name="latitude"
                            value={address.latitude}
                            onChange={handleAddressChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="roomPrice" className="form-label">
                            Longitude
                        </label>
                        <input
                            required
                            type="number"
                            className="form-control"
                            id="longitude"
                            name="longitude"
                            value={address.longitude}
                            onChange={handleAddressChange}
                        />
                    </div>
                    <div className="d-grid gap-2 d-md-flex mt-2">
                        <button type="submit" className="btn btn-outline-primary ml-5">
                            Save
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default LocationRegister;
