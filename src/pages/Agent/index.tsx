import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLoading } from '../../hooks/loading';

import api from '../../services/axios';
import Layout from '../../Layout';

import { Container, Champion, Details, Informations, Skills } from './styles';

const Agent: React.FC = () => {
  type Trole = {
    displayName: String;
  }
  type Tabilities = {
    displayName: String
    displayIcon: string;
  }
  type TChamp = {
    fullPortraitV2: string;
    displayName: String;
    fullPortrait: string;
    description: String;
    developerName: String;
    abilities: Tabilities[];
    role: Trole;
  }
  const { updateLoading } = useLoading();
  const [agent, setAgent ] = useState<TChamp>();
  const params = useParams();
  useEffect(() =>{
    const fetchData = async () =>{
      updateLoading(true)
      const response = await api.get(`/agents/${params.id}`)
      setAgent(response.data.data)
      updateLoading(false)
      console.log(response.data.data)
    }
    fetchData();
  }, [])
  return (
    <Layout title={agent?.displayName}>
      <Container>
        <Champion src={agent?.fullPortraitV2? agent.fullPortraitV2 : agent?.fullPortrait} />
          <Details>
            <h1>Agent Description</h1>
            <p>{agent?.description}</p>
            <Informations>
              <h1>Agent Information</h1>
              <br />
              <div>
                <span>Name: </span>
                <strong>{agent?.displayName}</strong>
              </div>
              <div>
                <span>Role: </span>
                <strong>{agent?.role.displayName}</strong>
              </div>
              <div>
                <span>Abilities: </span>
                <strong>{agent?.abilities[0].displayName}, {agent?.abilities[1].displayName}</strong>
              </div>
              <div>
                <span>Ultimate: </span>
                <strong>{agent?.abilities[3].displayName}</strong>
              </div>
              <div>
                <span>Developer: </span>
                <strong>{agent?.developerName}</strong>
              </div>
            </Informations>
            <Skills>
              {
                agent?.abilities?.map((e, i) =>(
                  i < 4 &&(
                    <div>
                      <img
                        src={e.displayIcon} 
                        alt="..." 
                      />
                      <h2>
                        {e.displayName}
                      </h2>
                    </div>
                  )
                ))
              }
            </Skills>
          </Details>
      </Container>
    </Layout>   
  );
}

export default Agent;