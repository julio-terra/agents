import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../../hooks/loading';

import api from '../../services/axios';
import Layout from '../../Layout';

import { Wrapper, Champion } from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/custom-slick.css';


const Agents: React.FC = () => {
  type Champ = {
    uuid: String
    fullPortraitV2: string
    fullPortrait: string
  }
  type Champs = {
    data: Champ[]
  }
  const { updateLoading } = useLoading();
  const navigate = useNavigate();
  const [agents, setAgents] = useState<Champs>()
  useEffect(() =>{
    const fetchData = async () =>{
      updateLoading(true)
      const response = await api.get('/agents')
      setAgents(response.data)
      updateLoading(false)
    }
    fetchData()
  }, [])
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slides: 2, 
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <Layout title="Agents">
      <Slider {...settings}>
        {
          agents?.data?.map((e, i)=>(
            i !== 7 &&(
            <Wrapper>
              <Champion
                src={e.fullPortraitV2 ? e.fullPortraitV2: e.fullPortrait}
                alt=""
                onClick={() => navigate(`/agent/${e.uuid}`)}
              />
            </Wrapper>
            )
          ))
        } 
      </Slider>
    </Layout>
  )
}

export default Agents;
