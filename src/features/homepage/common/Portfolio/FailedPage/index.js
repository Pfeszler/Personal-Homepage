import React from "react"
import icon from "../../assets/failedIcon.svg"
import { Button } from "../../Button/Button";
import { FailedDescription, FailedHeader, Icon, StyledFailedPage } from "./styled";

const FailedPage = ({ status }) => {
    return status === "failed" && (
        <StyledFailedPage>
            <Icon
                src={icon}
            />
            <FailedHeader>
                Ooops! Something went wrong...
            </FailedHeader>
            <FailedDescription>
                Sorry, failed to load GitHub projects.
                <br/>
                You can check them directly on GitHub.
            </FailedDescription>
            <Button
                as="a"
                href="https://github.com/Pfeszler"
                target="_blank"
            >
                Go to GitHub
            </Button>
        </StyledFailedPage>
    );
};

export default FailedPage