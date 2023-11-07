import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './Home.css';
import {useState} from 'react'
import  {useDadosContexto}  from'../context/CadastroContext'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" >
      {'©'}
      <Link target="value" fontSize="18px" color="inherit" href="https://www.instagram.com/ifrn_sga/">
      IFRN  (Campus São Gonçalo do Amarante)
      </Link>{''}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default function Home() {
  const { handleClick } = useDadosContexto();
  
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [curso, setCurso] = useState();
  const [ano, setAno] = useState();
  
  return (  
    <div className="div">
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'rgb(47, 45, 45)' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className="Registar" component="h1" variant="h5">
            Registrar Aluno
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 3 }}>
            <Grid container spacing={1.5}>
              <Grid item xs={12} sm={6}>
                <TextField onChange={(e)=> setNome(e.target.value)}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField onChange={(e)=> setSobrenome(e.target.value)}
                  autoFocus
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <select id="curso" onChange={(e)=>setCurso(e.target.value)} required autoFocus>
                <option value="">Curso *</option>
                <option value="Edificação">Edificação</option>
                <option value="Informática">Informática</option>
                <option value="Logística">Logística</option>
              </select>
              <Grid item xs={12} onChange={(e)=> setAno(e.target.value)}>
                <TextField
                  required
                  fullWidth
                  name="Turma"
                  label="Turma"
                  type="Turma"
                  id="Turma"
                  autoComplete="Turma"
                  
                />
              </Grid>
            </Grid>
            <Button id="btn"
              onClick={() => handleClick(nome, sobrenome, curso, ano)}
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}   
            >
              Registrar
            </Button>

          </Box>
        </Box>
        <Copyright sx={{ mt: 1 }} />
      </Container>
    </div>
  );
}