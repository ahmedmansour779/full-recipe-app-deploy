import { Container } from '@mantine/core';
import { IconToolsKitchen2 } from '@tabler/icons-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import theme from '../styles/config';
import { Contact, HeaderNav, Section } from '../styles/elements';
import Search from './Search';

export default function Header() {
    return (
        <>
            <HeaderNav id='header'>
                <Container size="xl">
                    <NavLink to={"/Full-Recipe-App"}>
                        <div>
                            <IconToolsKitchen2 size={45} strokeWidth={1} color={`${theme.primary}`} />
                            <h3 style={{
                                fontFamily: 'Pacifico'
                            }}>Delicious</h3>
                        </div>
                    </NavLink>
                    <Section className='section-in-header'>
                        <Search />
                        <section style={{ display: "flex", gap: "1rem" }}>
                            <NavLink to={"/Contact"}>
                                <Contact>Contact us</Contact>
                            </NavLink>
                            <NavLink to={"/AboutUs"}>
                                <Contact>AboutUs</Contact>
                            </NavLink>
                        </section>
                    </Section>
                </Container>
            </HeaderNav>
        </>
    )
}
