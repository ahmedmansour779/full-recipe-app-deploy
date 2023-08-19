import { Container } from '@mantine/core'
import React from 'react'
import { FaHamburger, FaPizzaSlice } from "react-icons/fa"
import { GiChopsticks, GiNoodles } from "react-icons/gi"
import { NavLink } from 'react-router-dom'
import { Item, List } from '../styles/category'

export default function Category() {
    return (
        <Container size="xl">
            <List>
                <NavLink to={"/cuisine/Italian"}>
                    <Item>
                        <FaPizzaSlice fontSize={"1.5rem"} />
                        <h5>Italian</h5>
                    </Item>
                </NavLink>
                <NavLink to={"/cuisine/American"}>
                    <Item>
                        <FaHamburger fontSize={"1.5rem"} />
                        <h5>American</h5>
                    </Item>
                </NavLink>
                <NavLink to={"/cuisine/Thai"}>
                    <Item>
                        <GiNoodles fontSize={"1.5rem"} />
                        <h5>Thai</h5>
                    </Item>
                </NavLink>
                <NavLink to={"/cuisine/Japanese"}>
                    <Item>
                        <GiChopsticks fontSize={"1.5rem"} />
                        <h5>Japanese</h5>
                    </Item>
                </NavLink>
            </List >
        </Container>
    )
}
