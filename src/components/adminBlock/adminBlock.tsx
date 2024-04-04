import AdminItem from '../adminItem/adminItem';
import s from './adminBlock.module.scss'
const info = {
    name: 'asdasd',
    phone: '12312312',
}


async function getData() {
    const res = await fetch('http://https://wwwyacheslav.netlify.app/api/listPeople')

    if (!res.ok) {
        // throw new Error('Failed to fetch data')
        console.log('something Wrong')
    }

    return res.json()
}


export default async function AdminBlock() {
    let clientsList = await getData();
    // console.log(ClientsList)
    return (<>
        <div className={s.container}>
            {clientsList.map((el:any)=> <AdminItem key={el.id} info={el} />) }
        </div>
    </>);
}

// export default AdminBlock;