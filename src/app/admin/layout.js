import AdminNavbar from "@/components/AdminNavbar";

const layout = ({children})=>{
    return (  

    <main>
        <AdminNavbar />
        {children}
        </main>
    )
}

export default layout;