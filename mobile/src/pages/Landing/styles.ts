import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
    background-color: #fff;
    margin: 20px 20px 0px 20px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    margin: 25px 0px;

    color: #32264D;
`;

export const Text = styled.Text`
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    text-align: center;

    width: 100%;
    color: #32264D;
    margin-bottom: 25px;
`;

export const ButtonsContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
`;
