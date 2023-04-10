import styled from '@emotion/styled';
import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';

export const Auth = () => {
    const [clientIdField, setClientIdField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    return <Wrapper>
        <Form name='auth form'>
            <Form.Item label='Client ID'>
                <Input value={clientIdField} onChange={(e) => setClientIdField(e.target.value)} />
            </Form.Item>
            
            <Form.Item label='API Token'>
                <Input.Password value={passwordField} onChange={(e) => setPasswordField(e.target.value)} />
            </Form.Item>
        
            <Form.Item>
                <ButtonWrapper type='primary' htmlType='submit' onClick={() => {
                    if (clientIdField.length !== 0 && passwordField.length !== 0) {
                        localStorage.setItem('clientId', clientIdField);
                        localStorage.setItem('password', passwordField);
                    
                        document.location.href = '/';
                    }
                }}>
                    Войти
                </ButtonWrapper>
            </Form.Item>
        </Form>
    </Wrapper>
}

const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
`;

const ButtonWrapper = styled(Button)`
    width:  100%;
`;