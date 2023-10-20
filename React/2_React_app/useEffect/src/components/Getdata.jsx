import { useEffect, useState } from 'react'

function Getdata() {
    const [info, getInfo] = useState(null);

    useEffect(() => {
        async function loadData() {
            console.log("UE is called ");
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            console.log(data);

            //artifival delay to see the loader
            setTimeout(() => getInfo(data), 2000);
        }
        loadData()

    }, [])



    console.log("render");
    return (
        <>
            {
                info == null ? <h1>Data is loading.....</h1> : info.map(({ name, id })=> <li key={id}>{name}</li>)
    }
        </>
    )
}

export default Getdata