import React from 'react'
import { NavigationItem } from '../../../components/content/navigationItem';
// import { HeaderMacro } from '../../../components/headerMacro';
import {HeaderMacro} from '../../../components/headers/macroComponent'
// import { IoLogInOutline } from "react-icons/io5";

import BannerLogin from '../../../assets/img/banners/bannerLoginA.png'
// import LogoOfficial from '../../../assets/img/logos/official.png'

// import { Input } from '../../../components/inputs/simples';
import { Container, Content } from './styles';

export function Home() {
  return (
    <Container>
      <HeaderMacro title="Administre sua empresa facilmente."/>

      <Content>
        <NavigationItem title="Visualize seus dados" subTitle="em tempo real" path="/find/view" source={BannerLogin}/>
        
        <NavigationItem title="Cadastre novos dados" subTitle="com poucos clicks" path="/find/view" source={BannerLogin}/>
        
        <NavigationItem title="Acesse suas notificações" subTitle="para ficar informado" path="/find/view" source={BannerLogin}/>
        
        <NavigationItem title="Atualize sua conta" subTitle="com facilidade" path="/find/view" source={BannerLogin}/>
        
        <NavigationItem title="Novas funcionalidades" subTitle="em desenvolvimento" path="/find/view" source={BannerLogin}/>
        
        <NavigationItem title="Reporte algum bug" subTitle="e iremos corrigir" path="/find/view" source={BannerLogin}/>
      </Content>


    </Container>
  )
}

