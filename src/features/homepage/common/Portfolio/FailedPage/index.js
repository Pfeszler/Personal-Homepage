import React from "react"

const FailedPage = ({ status }) => {
    return status === "failed" && (
        <div>
            Failed
        </div>
    );
};

export default FailedPage