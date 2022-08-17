

fetch("./NewTable.json")
.then(function(response){
    return response.json();
})
.then(function(jsndata){
let dataout = document.querySelector("#data-output");


let out ="";


for(let tdata of jsndata){
out += `

<tr>
    <td>${tdata.machine_name}</td>
    <td>${tdata.machine_id}</td>
    <td>${tdata.current}</td>
    <td>${tdata.voltage}</td>
    <td>${tdata.power_factor}</td>
    <td>${tdata.active_power}</td>
    <td>${tdata.apparent_power}</td>
    <td>${tdata.reactive_power}</td>
    <td>${tdata.daily_energy}</td>
    <td>${tdata.monthly_energy}</td>
    <td>${tdata.yearly_energy}</td>
    <td>${tdata.idle_daily}</td>
    <td>${tdata.idle_monthly}</td>
    <td>${tdata.idle_yearly}</td>
</tr>
`;
}
dataout.innerHTML = out;
})
