import styled from 'styled-components/native';

export const InputEntries = styled.TextInput`
    border-width:2px;
    border-color:${({ theme }) => theme.COLORS.CARD};
    background-color:${({ theme }) => theme.COLORS.PRIMARY};
    border-radius:5px;
    font-family:'monospace';
    font-size:14px;
    padding:5px;
    width:80%;
    min-height:40px;
    margin-bottom:10px;
    margin-top:10px;
`
