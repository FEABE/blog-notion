import { Button } from '@nextui-org/react';
import {NOTION_DATEBASE_TIL,NOTION_DATEBASE_PROGRAM ,NOTION_DATEBASE_CLOUD,NOTION_TOKEN} from '../config/index'
import axios from 'axios';


const Home = ({DATATABLE}:any) => {
  console.log(DATATABLE[0].id)
  return (
  <>
    <Button>hi</Button>

  </>
  )
}

export default Home

export async function getServerSideProps() {
  const options = {
    method: 'POST',
    url: `https://api.notion.com/v1/databases/${NOTION_DATEBASE_PROGRAM}/query`,
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${NOTION_TOKEN}`
    },
    data: {page_size: 100}
  };


 const DATATABLE=(await axios.request(options)).data.results

  return {
    props: {DATATABLE}, 
  }
}