import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormWrp = styled(Form)`
    margin-bottom: 10px;
`;

export const LabelFilter = styled.label`
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
`;

export const InputFilter = styled(Field)`
    width: 100%;
    font-size: 18px;
    background-color: #cfdbdb;
    border: none;

    &:focus-visible {
        outline: none;
    }

    &:hover,
    &:focus {
        background-color: #90d4d4;
    }
`;

export const InputError = styled.span`
    font-size: 12px;
    font-weight: 700;
    color: red;
`;
