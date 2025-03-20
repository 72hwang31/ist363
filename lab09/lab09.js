endpoint = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=cloud_cover,temperature_2m,precipitation&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch'

        function reportResults (response){
            if (response != 'error'){
                const myData = JSON.parse(response);
                console.log(myData);
                browserData1 = myData.current.precipitation +" " + myData.current_units.precipitation;
                browserData2 = myData.current.temperature_2m + " " + myData.current_units.temperature_2m;
                browserData3 = '';
                if (myData.current.cloud_cover < 50){
                    browserData3 = '☀️';
                } else {
                    browserData3 = '☁️';
                }
            }
            document.getElementById('liveprecip').innerHTML=browserData1;
            document.getElementById('livetemp').innerHTML=browserData2;
            document.getElementById('livecloud').innerHTML=browserData3;
        }

        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange',()=>{
            if (request.readyState === 4 && request.status === 200){
                reportResults(request.responseText);
            }else if (request.readyState === 4){
                reportResults('error');
            }
        })
        request.open('GET', endpoint);
        request.send();