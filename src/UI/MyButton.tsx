import styled from 'styled-components';

type theme = 'light' | 'dark';
type MyButton = {
    children: JSX.Element | string;
    variant: theme;
    onClick?: (e: any) => void;
}

export const Button = styled.button<MyButton>`
    cursor: pointer;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    background-color: ${p => p.variant === 'light' ? 'lightblue' : 'black'};
    color: ${p => p.variant === 'dark' ? 'white' : 'black'};
    padding: 1rem;
    border: 3px solid ${p => p.theme.colors.background};
`;

export default function MyButton(props: MyButton) {
    return <Button {...props}>{props.children}</Button>
}