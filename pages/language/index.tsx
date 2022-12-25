import {NOTION_DATEBASE_PROGRAM,NOTION_TOKEN} from '../../config/index'
import axios from 'axios';
// 언어 및 프레임워크
const Language=()=>{
    return(
        <>
        </>
    )

}
export default Language

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