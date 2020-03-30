import React from 'react'
import {render} from 'react-dom'
import{Expression,HotTableContainer,HotTablePluings,RowFilter} from 'https://datassist-demo-rest-api.herokuapp.com/employees'

const data=[
    {'age':25,'childcount':0,'citizentship':'Amerikan','employer':'Daily Bugle','EmploymentStartDate':01-01-2019,'EmploymentTerminationDate':null,'firstname':'Peter',
        'Gender':'Erkek','HireDate':01-01-2019,'lastname':'parker','maritalstatus':'bekar','profession':'fotografu00e7u0131','retired':false,'salary':2000.0,'salarycurrency':'dolar','salaryperiod':'aylık'}
]
const columns[
    {data: 'age',type:'numeric', width:'150',readonly:'true'},
    {data: 'childcount',type:'numeric', width:'150',readonly:'true'},
    {data: 'citizentship',type:'text', width:'150',readonly:'true'},
    {data: 'employer',type:'text', width:'150',readonly:'true'},
    {data: 'EmploymentStartDate',type:'date', width:'150',readonly:'true'},
    {data: 'EmploymentTerminationDate',type:'text', width:'150',readonly:'true'},
    {data: 'firstname',type:'text', width:'150',readonly:'true'},
    {data: 'Gender',type:'text', width:'150',readonly:'true'},
    {data: 'HireDate',type:'date', width:'150',readonly:'true'},
    {data: 'lastname',type:'text', width:'150',readonly:'true'},
    {data: 'maritalstatus',type:'text', width:'150',readonly:'true'},
    {data: 'profession',type:'text', width:'150',readonly:'true'},
    {data: 'retired',type:'text', width:'150',readonly:'true'},
    {data: 'salary',type:'numeric', width:'150',readonly:'true'},
    {data: 'salaryperiod',type:'text', width:'150',readonly:'true'},
    {data: 'salaryperiod',type:'text', width:'150',readonly:'true'}
]
import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div className={App}>
                <div className="limiter">
                    <div className="container-table100">
                        <div className="wrap-table100">

                            <div className="table100 ver6 m-b-110" align="center">

                                <table id="ver6">
                <thead>
                <tr class="row100 head">


                    <th class="column100 column1" data-column="column1" ><input type="text"  id="myInput" onkeyup="myFunction()" placeholder="ARAMA" title="Type in a name"></th>
                    <th ><img width="70" height="90" align="center" src="https://vignette.wikia.nocookie.net/marveldatabase/images/f/f1/Amazing_Spider-Man_Vol_3_1_Granov_Variant_Textless.jpg/revision/latest?cb=20140316144029"/></th>
                    <th ><img width="70" height="90"  align="center" src="https://vignette.wikia.nocookie.net/forgottenrealms/images/a/a6/Drizzt-5e.png/revision/latest?cb=20171222032833"/></th>
                    <th ><img width="70" height="90" align="center"  src="https://vignette.wikia.nocookie.net/batman/images/7/72/Detective_Comics_Vol_2-19_Cover-1_Teaser.jpg/revision/latest?cb=20130116215324"/></th>
                    <th ><img width="70" height="90" align="center" src="https://vignette.wikia.nocookie.net/vikingstv/images/e/ed/Lagertha_5x19.jpg/revision/latest/scale-to-width-down/310?cb=20190131044613"/></th>


                </tr>
                </thead>
                <tbody>
                <tr class="row100">
                    <td class="column100 column1" data-column="column1"><b>Age</b></td>
                    <td class="column100 column2" data-column="column2">25</td>
                    <td class="column100 column3" data-column="column3">29</td>
                    <td class="column100 column4" data-column="column4">52</td>
                    <td class="column100 column5" data-column="column5">33</td>


                </tr>

                <tr class="row100">
                    <td class="column100 column1" data-column="column1"><b>Child Count</b></td>
                    <td class="column100 column2" data-column="column2">0</td>
                    <td class="column100 column3" data-column="column3">0</td>
                    <td class="column100 column4" data-column="column4">2</td>
                    <td class="column100 column5" data-column="column5">2</td>

                </tr>

                <tr class="row100">
                    <td class="column100 column1" data-column="column1"><b>Citizenship</b></td>
                    <td class="column100 column2" data-column="column2">Amerikan</td>
                    <td class="column100 column3" data-column="column3">Menzoberranzanl\u0131</td>
                    <td class="column100 column4" data-column="column4">Gothaml\u0131</td>
                    <td class="column100 column5" data-column="column5">Kattegatl\u0131</td>

                </tr>

                <tr class="row100">
                    <td class="column100 column1" data-column="column1"><b>Employer</b></td>
                    <td class="column100 column2" data-column="column2">Daily Bugle</td>
                    <td class="column100 column3" data-column="column3">Do'Urden House</td>
                    <td class="column100 column4" data-column="column4">Wayne Enterprises</td>
                    <td class="column100 column5" data-column="column5">House of Lothbrok</td>

                </tr>

                <tr class="row100">
                    <td class="column100 column1" data-column="column1"><b>EmploymentStartDate</b></td>
                    <td class="column100 column2" data-column="column2">01-01-2019</td>
                    <td class="column100 column3" data-column="column3">01-01-2010</td>
                    <td class="column100 column4" data-column="column4">01-01-2010</td>
                    <td class="column100 column5" data-column="column5">01-01-2006</td>

                </tr>

                <tr class="row100">
                    <td class="column100 column1" data-column="column1"><b>EmploymentTerminationDate</b></td>
                    <td class="column100 column2" data-column="column2">null</td>
                    <td class="column100 column3" data-column="column3">01-01-2016</td>
                    <td class="column100 column4" data-column="column4">01-01-2018</td>
                    <td class="column100 column5" data-column="column5">null</td>

                </tr>

                <tr class="row100">
                    <td class="column100 column1" data-column="column1"><b>FirstName</b></td>
                    <td class="column100 column2" data-column="column2">Peter</td>
                    <td class="column100 column3" data-column="column3">Drizzt</td>
                    <td class="column100 column4" data-column="column4">Bruce</td>
                    <td class="column100 column5" data-column="column5">Lagertha</td>

                </tr>

                <tr class="row100">
                    <td class="column100 column1" data-column="column1"><b>Gender</b></td>
                    <td class="column100 column2" data-column="column2">Erkek</td>
                    <td class="column100 column3" data-column="column3">Erkek</td>
                    <td class="column100 column4" data-column="column4">Erkek</td>
                    <td class="column100 column5" data-column="column5">Kadın</td>

                </tr>
                <tr class="row100">
                    <td class="column100 column1" data-column="column1"><b>HireDate</b></td>
                    <td class="column100 column2" data-column="column2">01-01-2019</td>
                    <td class="column100 column3" data-column="column3">01-01-2010</td>
                    <td class="column100 column4" data-column="column4">01-01-2010</td>
                    <td class="column100 column5" data-column="column5">01-01-2006</td>

                </tr>
                <tr class="row100">
                    <td class="column100 column1" data-column="column1"><b>LastName</b></td>
                    <td class="column100 column2" data-column="column2">Parker</td>
                    <td class="column100 column3" data-column="column3">Do'Urden</td>
                    <td class="column100 column4" data-column="column4">Wayne</td>
                    <td class="column100 column5" data-column="column5">Lothbrok</td>

                </tr>
                <tr class="row100">
                    <td class="column100 column1" data-column="column1"><b>MaritalStatus</b></td>
                    <td class="column100 column2" data-column="column2">Bekar</td>
                    <td class="column100 column3" data-column="column3">Bekar</td>
                    <td class="column100 column4" data-column="column4">Bekar</td>
                    <td class="column100 column5" data-column="column5">Evli</td>

                </tr>
                <tr class="row100">
                    <td class="column100 column1" data-column="column1"><b>Profession</b></td>
                    <td class="column100 column2" data-column="column2">Fotograf\u00e7\u0131</td>
                    <td class="column100 column3" data-column="column3">Avc\u0131</td>
                    <td class="column100 column4" data-column="column4">Şirket Sahibi</td>
                    <td class="column100 column5" data-column="column5">\u00c7ift\u00e7i</td>

                </tr>
                <tr class="row100">
                    <td class="column100 column1" data-column="column1"><b>Retired</b></td>
                    <td class="column100 column2" data-column="column2">False</td>
                    <td class="column100 column3" data-column="column3">False</td>
                    <td class="column100 column4" data-column="column4">True</td>
                    <td class="column100 column5" data-column="column5">False</td>

                </tr>
                <tr class="row100">
                    <td class="column100 column1" data-column="column1"><b>Salary</b></td>
                    <td class="column100 column2" data-column="column2">2000.0</td>
                    <td class="column100 column3" data-column="column3">1000.0</td>
                    <td class="column100 column4" data-column="column4">200000.0</td>
                    <td class="column100 column5" data-column="column5">1800.0</td>

                </tr>
                <tr class="row100">
                    <td class="column100 column1" data-column="column1"><b>SalaryCurrency</b></td>
                    <td class="column100 column2" data-column="column2">Dolar</td>
                    <td class="column100 column3" data-column="column3">Dolar</td>
                    <td class="column100 column4" data-column="column4">Dolar</td>
                    <td class="column100 column5" data-column="column5">Dolar</td>

                </tr>
                <tr class="row100">
                    <td class="column100 column1" data-column="column1"><b>SalaryPeriod</b></td>
                    <td class="column100 column2" data-column="column2">Aylık</td>
                    <td class="column100 column3" data-column="column3">Saatlik</td>
                    <td class="column100 column4" data-column="column4">Günlük</td>
                    <td class="column100 column5" data-column="column5">Aylık</td>

                </tr>

                </tbody>



            </table>
            </div>
        );
    }
}

export default App;