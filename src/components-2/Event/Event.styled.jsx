import styled from "@emotion/styled";

export const EventContainer = styled.div`
position: relative;
border: ${props=> `2px dashed ${props.theme.colors.black}`};
padding: 8px;
border-radius: 4px;
`;

export const EventTitle = styled.h2`
margin-top: 0;
font-size: 14px;
line-height: 24px;
font-weight: 700;
letter-spacing: 0.5px;
text-transform: uppercase;
`;

export const EventInfo = styled.p`
display: flex;
align-items: center;
margin-top: 0;
margin-bottom: 8px;
color: ${props=> `${props.theme.colors.primaryColor}`};
font-size:16px;
line-height: 24px;
font-weight: 400;
letter-spacing: 0.25px;

svg {
    display: block;
    margin-right: 8px;
    color: ${props=> `${props.theme.colors.secondaryColor}`};
}

&:hover, &:focus {
    background-color: ${props=> `${props.theme.colors.black}`};
    color: ${props=> `
    ${props.theme.colors.white}`};
    border-radius: 4px;
    svg {
        color: ${props=> `${props.theme.colors.white}`};
    }
}

`;


const setBgColor = props => {
switch (props.eventType) {
    case 'free':
        return 'var(--color-green)';
    case 'paid':
        return 'var(--color-blue)';
    case 'vip':
        return 'var(--color-red)';
    default:
        return '#000';
    }
};

export const Chip = styled.span`
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    background-color: #000;
    color: #fff;
    background-color: ${setBgColor}
`;

