import React from 'react'
import { NavigationItem } from '../../../components/content/navigationItem';
// import { HeaderMacro } from '../../../components/headerMacro';
import {HeaderMacro} from '../../../components/headers/macroComponent'
// import { IoLogInOutline } from "react-icons/io5";

import BannerLogin from '../../../assets/img/banners/bannerLoginA.png'
// import LogoOfficial from '../../../assets/img/logos/official.png'

// import { Input } from '../../../components/inputs/simples';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <HeaderMacro title="Administre sua empresa facilmente."/>

      <NavigationItem title="Visualize seus dados" subTitle="em tempo real" path="/find/view" source={BannerLogin}/>
    </Container>
  )
}

