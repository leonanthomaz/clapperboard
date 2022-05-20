import React from "react";
import { RegisterMain } from "./RegisterStyles";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="login-register">
            <RegisterMain>
            <div className="register-body">
                <div className="register-box-main">
                    <div className="register-box">
                        <h2>Cadastrar</h2>
                        <i>Registre-se! É grátis!</i>
                        <div className="label-float">
                            <input type="text" placeholder=" "/>
                            <label>Nome</label>
                        </div>
                        <div className="label-float">
                            <input type="text" placeholder=" " required=""/>
                            <label>Nome de Usuário</label>
                        </div>
                        <div className="label-float">
                            <input type="password" placeholder=" " required=""/>
                            <label>Senha</label>
                        </div>
                        <div className="label-float">
                            <input type="password" placeholder=" " required=""/>
                            <label>Confirme a senha</label>
                        </div>
                        <Link className="btn" to="/">Entrar</Link>
                    </div>
                </div>
            </div>
            </RegisterMain>
        </div>
    )
}

export default Register;