import { nanoid } from "@reduxjs/toolkit";
import React from "react"
import { useSelector } from "react-redux";
import { selectPortfolio } from "../../../pageSlice";
import { Description, Label, Link, LinkContainer, ProjectTile, StyledSuccessPage, Title } from "./styled";

const SuccessPage = ({ status }) => {

    const portfolio = useSelector(selectPortfolio)

    return status === "success" && (
        <StyledSuccessPage>
            {portfolio.map(project =>
                <ProjectTile
                    key={nanoid()}
                >
                    <Title>
                        {project.name}
                    </Title>
                    <Description>
                        {project.description}
                    </Description>
                    <LinkContainer>
                        <Label>
                            demo:
                        </Label>
                        <Link
                            href={project.homepage}
                            target="_blank"
                            noDemo={project.homepage === "" || project.homepage === null}
                        >
                            {project.homepage ? project.homepage : "currently not avalible"}
                        </Link>
                    </LinkContainer>
                    <LinkContainer>
                        <Label>
                            code:
                        </Label>
                        <Link
                            href={project.svn_url}
                            target="_blank"
                        >
                            {project.svn_url}
                        </Link>
                    </LinkContainer>
                </ProjectTile>

            )}
        </StyledSuccessPage>
    );
};

export default SuccessPage