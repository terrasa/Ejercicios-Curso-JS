let campaign = {
    name: "Manolo first",
    title: "Prueba 1",
    subject: "Titulo",
    html: `
        <html>
            <p>ok</>
            </html>`,
        schedule:"6666",
        recipients: ["2","5"]
};

async function postEx(url, campaign){
    try{
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        const data = await fetch(url, {
            headers,
            method: 'POST',
            body: JSON.stringify(campaign)
        });
        const objJson = await data.json();
        console.log(objJson);
    }catch(error){
        console.log('error');
    }
}

postEx('http://192.168.1.67:3000/campaign', campaign)

// Igual cambiando POST por PUT 

let campaign = {
    name: "MODIFICACION PUT DONDE ESTAS....?",
    title: "PUT MODIFICADO TITLE",
};

async function putEx(url, campaign){
    try{
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        const data = await fetch(url, {
            headers,
            method: 'PUT',
            body: JSON.stringify(campaign)
        });
        //const objJson = await data.json();
        //console.log(objJson);
        console.log(data);
    }catch(error){
        console.log('error');
    }
}

putEx('http://192.168.1.67:3000/campaign/5a2066b2c49f6c47dbbfb80a ', campaign)

// Igual cambiando POST por GET 