import React from 'react';
import useForm from '../useForm';
import validate from '../ValidationForm';
import Logo from '../components/Logo';
import Button from '../subcomponents/Button';
import MsgError from '../subcomponents/Msg-erro'
import Link from '../subcomponents/Link';
import Panel from '../subcomponents/Panel';
import Label from '../subcomponents/Label';
import Title from '../subcomponents/Title';
import Input from '../subcomponents/Input';

export default function Login() {

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(Login, validate);

    return (
        <>
            <Logo />
            <form onSubmit={handleSubmit} noValidate>
            <Panel width="500px" height="600px" left="720px" top="30px" />
            <Title text="Entrar" left="780px" top="130px" fontSize="35px" />
            
                <Label label="E-mail" left="780px" top="220px" fontSize="15px" />
                <Input left="780px" top="240px"
                    placeholder="nome@email.com"
                    className={`input ${errors.email}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ''}
                    height="40px"
                    width="380px"
                    required />
                {errors.email && (
                    <MsgError left="780px" top="280px" text={errors.email} />
                )}
                <Label label="Senha" left="780px" top="320px" fontSize="15px" />
                <Input left="780px" top="340px"
                    placeholder="••••••••••"
                    className={`input ${errors.password}`}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password || ''}
                    height="40px"
                    width="380px" required />
                {errors.password && (
                    <MsgError left="780px" top="380px" text={errors.password} />
                )}

                <Link left="780px" top="430px"
                    href="/reset-password"
                    text="Recuperar senha"
                    fontSize="15px"
                />

                <Button left="780px" top="450px"
                    text="Entrar"
                    height="50px"
                    width="380px"
                    type="submit" />
                    
                <Label label="Ainda não tem uma conta?"
                    left="825px" top="540px" fontSize="15px" />
                <Link left="1035px" top="540px"
                    href="/new-register"
                    text="Cadastrar"
                    fontSize="15px" />
            </form>
        </>
    )
}