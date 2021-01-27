import React from "react"

const SuccessPage = ({ status }) => {
    return status === "success" && (
        <div>
            success
        </div>
    );
};

export default SuccessPage