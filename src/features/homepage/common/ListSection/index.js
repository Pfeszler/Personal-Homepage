import React from "react"
import { List, ListHeader, ListItem, StyledListSection } from "./styled"

const ListSection = ({ title, list }) => (
    <StyledListSection>
        <ListHeader>
            {title}
        </ListHeader>
        <List>
            {list.map(item =>
                <ListItem>
                    {item}
                </ListItem>
            )}
        </List>
    </StyledListSection>
)

export default ListSection