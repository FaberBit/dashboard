import React from 'react';

import { HeaderMacro } from '../../../components/headers/macroComponent'
import { NavigationItem } from '../../../components/content/navigationItem';


import { Container, Content } from './styles';

import DataImg from '../../../assets/img/banners/data.svg'
import NewImg from '../../../assets/img/banners/new.svg'
import NotifyImg from '../../../assets/img/banners/notify.svg'
import ProfileImg from '../../../assets/img/banners/profile.svg'
import FeatureImg from '../../../assets/img/banners/feature.svg'
import BugImg from '../../../assets/img/banners/bug.svg'

export function Home() {
  return (
    <Container>
      <HeaderMacro title="Administre sua empresa facilmente."/>

      <Content>
        <NavigationItem title="Visualize seus dados" subTitle="em tempo real" path="/find/view" source={DataImg}/>
        
        <NavigationItem title="Cadastre novos dados" subTitle="com poucos clicks" path="/find/new" source={NewImg}/>
        
        <NavigationItem title="Acesse suas notificações" subTitle="para ficar informado" path="/find/view" source={NotifyImg}/>
        
        <NavigationItem title="Atualize sua conta" subTitle="com facilidade" path="/find/view" source={ProfileImg}/>
        
        <NavigationItem title="Novas funcionalidades" subTitle="em desenvolvimento" path="/find/view" source={FeatureImg}/>
        
        <NavigationItem title="Reporte algum bug" subTitle="e iremos corrigir" path="/find/view" source={BugImg}/>
      </Content>


    </Container>
  )
}

