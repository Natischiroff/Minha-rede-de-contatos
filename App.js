import React from 'react' ;
import {ScrollView} from 'react-native';
import Titulo from './componentes/Titulo'
import Saudacao from './componentes/Saudacao';
import FotoPerfil from './componentes/FotoPerfil';
import CartaoUsuario from './componentes/CartaoUsuario';

export default function App(){
  return(<ScrollView>
<Titulo />
<Saudacao nome= 'Natalia' />
<FotoPerfil />


<CartaoUsuario
 nome='Emanuelly Campos Heerdt'
cargo="Desenvolvedora Front-End"
imagem='perfil01'
/>
 
 <CartaoUsuario
 nome='Marilene'
cargo='Designer UX/UI'
imagem='perfil01'
/>

<CartaoUsuario
 nome='Lucas'
descricao='Programador Mobile'
imagem='perfil01'
/>

<CartaoUsuario
 nome='Fernando'
descricao='Programador Mobile'
imagem='perfil01'
/>

<CartaoUsuario
 nome='Luana'
descricao='Programador Mobile'
imagem='perfil01'
/>
</ScrollView>
  )
}