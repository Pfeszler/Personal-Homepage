import React from "react"

const LoadingPage = ({ status }) => {
    return status === "loading" && (
        <div>
            Loading
        </div>
    );
};

export default LoadingPage