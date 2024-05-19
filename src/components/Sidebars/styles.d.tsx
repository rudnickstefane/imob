import styled from 'styled-components';

export const Sidebar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
    height: 100%;
    overflow: auto;
`;

export const SidebarItem = styled.a`
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    color: #000;
    display: block;

    &:hover {
        background-color: #555;
        color: white;
    }
`;