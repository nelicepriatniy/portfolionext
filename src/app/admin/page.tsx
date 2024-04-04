import AdminItem from '@/components/adminItem/adminItem';
import s from './page.module.scss'
import AdminBlock from '@/components/adminBlock/adminBlock';


function AdminPage() {
    return ( 
        <>
        <div className={s.container + ' container'}>
            <AdminBlock />
        </div>
        </>
     );
}

export default AdminPage;