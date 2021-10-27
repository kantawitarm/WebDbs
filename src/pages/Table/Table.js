import React from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import BootstrapTable from 'react-bootstrap-table-next';
// import { BootstrapTable, TableHeaderColumn, SizePerPageDropDown } from 'react-bootstrap-table';

import paginationFactory, {
    PaginationProvider,
    PaginationListStandalone,
    PaginationTotalStandalone,
    SizePerPageDropdownStandalone
  } from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import './Table.css'

export default class Table extends React.Component{

    constructor() {
		super();
		this.generateDataPoints = this.generateDataPoints.bind(this);
	}

    state ={
        loading: true,
        dataGraph: null,
    }

    async componentDidMount() {
        const url = "http://localhost:4000/graph";
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data)
        await this.setState({ dataGraph: data, loading: false });
      }

      generateDataPoints = (G_data) => {
        var dps = [];
        if (!this.state.loading) {

            // console.log('[  G_log   ]' + G_data[0][1].date.split('T')[0])
            for (var i = 0; i < Object.keys(G_data[0]).length; i++) {
                dps.push({ x: new Date(G_data[0][i].date), y: G_data[0][i].unit })
            }

        }

        return dps;
    }


    render(){
        const dataTemp = [{
            "id": 1,
            "name": "Book",
            "price": 18
        },
        {
            "id": 2,
            "name": "Mobile.....................................................................................",
            "price": 400
        },
        {
            "id": 3,
            "name": "PC",
            "price": 1000
        },
        {
            "id": 4,
            "name": "PS4",
            "price": 500
        },
        {
            "id": 5,
            "name": "Chromebook",
            "price": 500
        },
        {
            "id": 6,
            "name": "Chromebook",
            "price": 500
        },
        {
            "id": 7,
            "name": "Chromebook",
            "price": 500
        },
        {
            "id": 8,
            "name": "Chromebook",
            "price": 500
        },
        {
            "id": 9,
            "name": "Chromebook",
            "price": 500
        },
        {
            "id": 10,
            "name": "Chromebook",
            "price": 500
        },
        {
            "id": 11,
            "name": "Chromebook",
            "price": 500
        }]
    
        const columns = [{
            dataField: 'id',
            text: '',
            sort: true,
            // filter: textFilter()
        },
        {
            dataField: 'name',
            text: 'title',
            sort: true,
            // filter: textFilter()
        }, {
            dataField: 'price',
            text: 'country',
            sort: true,
            // filter: textFilter()
        }, {
            dataField: 'published',
            text: 'published',
            sort: true,
            // filter: textFilter()
        }
    ]
    
        const pagination = paginationFactory({
            page: 1,
            sizePerPage: 5,
            lastPageText: '>>',
            firstPageText: '<<',
            nextPageText: '>',
            prePageText: '<',
            showTotal: true,
            alwaysShowAllBtns: true,
            sizePerPageList: [{
                text: '5', value: 5
              },{
                text: '10', value: 10
              }, {
                text: '25', value: 25
              }, {
                text: '50', value: 50
              }],
            // onPageChange: function (page, sizePerPage) {
            //     console.log('page', page);
            //     console.log('sizePerPage', sizePerPage);
            // },
            // onSizePerPageChange: function (page, sizePerPage) {
            //     console.log('page', page);
            //     console.log('sizePerPage', sizePerPage);
            // }
        });
    
        // const options = {
        //     sizePerPageDropDown: renderSizePerPageDropDown
        //   };
    
        // const defaultSortedBy = [{
        //     dataField: "name",
        //     order: "asc"  // or desc
        // }];
    
        return (
            <div>
                <h1 className='container-Header-text'>News & Blog Articles 2017</h1>
             
    
    
                <div className ='container-table'> 
                    <BootstrapTable classes='container-Font'
                        // striped // ตัวกำหนด สี สลับ ใน row
                        hover // ตัว กำหนด ตอนชี้ เปลี่ยนสี พื้นหลัง
                        keyField='id'
                        filter={filterFactory()}
                        pagination={pagination}
                        bootstrap4={true}
                        // selectRow={ { mode: 'checkbox', clickToSelect: true } }
                        data={dataTemp}
                        columns={columns}
                        // defaultSorted={defaultSortedBy}
                        />
                </div>
    
            </div>
    
        )

    }
 
}

// export default Table
