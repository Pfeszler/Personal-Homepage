import React from "react"
import image from "../../assets/loadingImage.svg"
import { LoadingImage, LoadingText, StyledFailedPage } from "./styled";

const LoadingPage = ({ status }) => {
    return status === "loading" && (
        <StyledFailedPage>
            <LoadingText>
                Please wait, pages are being loaded...
            </LoadingText>
            <LoadingImage
                src={image}
            />
        </StyledFailedPage>
    );
};

export default LoadingPage