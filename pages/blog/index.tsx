import {NOTION_DATEBASE_TIL,NOTION_TOKEN} from '../../config/index'
import axios from 'axios';
//TIL 로그 남기는곳
const Blog=()=>{
    return(
        <>
        </>
    )

}
export default Blog

export async function getServerSideProps() {
    const options = {
      method: 'POST',
      url: `https://api.notion.com/v1/databases/${NOTION_DATEBASE_TIL}/query`,
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