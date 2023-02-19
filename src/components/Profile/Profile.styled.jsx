import styled from 'styled-components';

export const ProfileContainer = styled.div`
display: inline-block;
width: 240px;

`;

export const ProfileInfo = styled.div`
text-align: center;

.name {
    font-weight: 900;
}
`;

export const Stats = styled.div`

.stats {

display: flex; 
width: 100%;
justify-content: space-between;
}

.quantity {
    font-weight: 900;
}

li {
    border: 1px solid gray;
    list-style-type: none;
}
`;
