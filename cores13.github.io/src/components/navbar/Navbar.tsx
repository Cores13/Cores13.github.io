import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

export const Navbar: React.FC = () => {
    return (
        <div className="demo-big-content">
        <Layout>
            <Header transparent title="Portfolio" scroll>
                <Navigation>
                    <a href="/">Home</a>
                    <a href="/resume">Resume</a>
                    <a href="/projects">Projects</a>
                    <a href="/aboutme">About Me</a>
                    <a href="/contactme">Contact Me</a>
                </Navigation>
            </Header>
            <Drawer title="Portfolio">
                <Navigation>
                    <a href="/">Home</a>
                    <a href="/resume">Resume</a>
                    <a href="/projects">Projects</a>
                    <a href="/aboutme">About Me</a>
                    <a href="/contactme">Contact Me</a>
                </Navigation>
            </Drawer>
            <Content />
        </Layout>
    </div>
    )
}
