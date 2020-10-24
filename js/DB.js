class DB {
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    static save(newAccount) {
        return new Promise((resolve, reject) => {
            let xml = new XMLHttpRequest();
            xml.onreadystatechange = () => {
                if (xml.readyState == 4 && xml.status == 200) {
                    resolve(xml.responseText);
                }
            }
            xml.open('POST', 'save_data.php');
            xml.setRequestHeader("Content-type", "application/json");
            xml.send(JSON.stringify(newAccount));
        })
    }

    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;
    }

    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });

        const resData = await 'Resource Deleted...';
        return resData;
    }
}