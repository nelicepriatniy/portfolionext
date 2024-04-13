import AdminItem from '../adminItem/adminItem';
import s from './adminBlock.module.scss'
import AdminLogin from '@/components/adminLogin/AdminLogin'

async function getData() {
    const res = await fetch('https://wwwyacheslav.netlify.app/api/listPeople')

    if (!res.ok) {
        // throw new Error('Failed to fetch data')
        console.log('something Wrong')
    }

    return res.json()
}
async function getDataIsAdmin() {
    const res = await fetch('https://wwwyacheslav.netlify.app/api/proffiles')

    if (!res.ok) {
        // throw new Error('Failed to fetch data')
        console.log('something Wrong')
    }

    return res.json()
}


export default async function AdminBlock() {
    let clientsList = await getData();

    async function isAdmin() {
        if (await getDataIsAdmin()) {
            return (
                <div className={s.container}>
                    {clientsList.map((el: any) => <AdminItem key={el.id} info={el} />)}
                </div>
            )
        } else {
            return (
                <AdminLogin />
            )
        }
        
    }
    isAdmin()
    return (
        isAdmin()
    )
    // return (<>
    //     {/* <div className={s.container}>
    //         {clientsList.map((el: any) => <AdminItem key={el.id} info={el} />)}
    //     </div> */}
    //     {/* {isAdmin()} */}
    //             <div className={s.container}>
    //                 {clientsList.map((el: any) => <AdminItem key={el.id} info={el} />)}
    //             </div>
    // </>);
}

// export default AdminBlock;