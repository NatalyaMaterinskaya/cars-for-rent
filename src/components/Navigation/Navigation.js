import React from "react";

import { List, ListItem, Nav, LinkItem, Header } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Header>
      <Nav>
        <List>
          <ListItem>
            <LinkItem to="/">Home</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem to="/catalog">Сatalog of cars</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem to="/favorites">Favorites</LinkItem>
          </ListItem>
        </List>
      </Nav>
    </Header>
  );
};
