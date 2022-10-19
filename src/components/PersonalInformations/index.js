import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../Title';

export default function PersonalInformations() {
  return (
    <React.Fragment>
      <Title>Informações Pessoais</Title>
      <Typography component="p" variant="p" mb='5px'>
        Nome: Danilo Teofilo
      </Typography>
      <Typography component="p" variant="p" mb='5px'>
        Nascimento: 29/03/1992
      </Typography>
      <Typography component="p" variant="p" mb='5px'>
        Naturalidade: Fortaleza, CE
      </Typography>
      <Typography component="p" variant="p" mb='10px'>
        Stacks: HTML, CSS, JS, REACT, GIT e SCRUM
      </Typography>
      <Typography component="h4" variant="p">
        No mapa marquei alguns lugares que já tive a oportunidade de conhecer. 
      </Typography>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-end', height:'100%' }}>
        <Typography color="text.secondary">
          Para contato ou mais informações:
        </Typography>
        <div>
          <Link color="primary" open href="https://www.linkedin.com/in/danilo-domingos-fonseca-teofilo-287477162/" target='_blank' sx={{width:100, mr:"10%"}} >
            Linkedin
          </Link>
          <Link color="primary" href="https://github.com/daniloteofilo" target='_blank'>
            Github
          </Link>
        </div>
      </div>
      
    </React.Fragment>
  );
}
