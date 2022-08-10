import style from './Login.module.scss'

import LoginCard from '../../components/LoginCard'
import Button from '@mui/material/Button';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Login() {


    return (
        <>
            <div className={style.background}>
                <h5 className={style.title}>Seja bem-vindo</h5>
                <div className={style.boxLogin}>
                    <div className={style.loginCard}>
                        <LoginCard/>
                    </div>
                </div>
                <Button
                    variant="contained"
                    startIcon={<ArrowBackIcon />}
                    className={style.buttonBack}
                    size='medium'
                >
                    VOLTAR AO INICIO
                </Button>
            </div>
        </>
    );
}

export default Login;