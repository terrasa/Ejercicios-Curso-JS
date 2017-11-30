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