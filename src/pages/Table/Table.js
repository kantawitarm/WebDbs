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
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

import { useHistory } from "react-router-dom";

import Lottie from "react-lottie";

import './Table.css'

import * as loadingData from "../LoadingAnimation/loading.json";
import * as successData from "../LoadingAnimation/success.json";

const defaultLoading = {
    loop: true,
    autoplay: true,
    animationData: loadingData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const defaultSuccess = {
    loop: true,
    autoplay: true,
    animationData: successData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

export default class Table extends React.Component {

    constructor() {
        super();
        this.getDataTable = this.getDataTable.bind(this);
        // this.history = this.history.bind(this);
    }

    state = {
        success: false, //false
        loading: true,
        dataTable: null,
        

    }

    async componentDidMount() {

        fetch("http://localhost:4000/table")
        .then(async response => {
            const data = await response.json();
            this.setState({loading:false})
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            console.log(data.total)
            this.setState({ dataTable: data, errorMessage: null })
            setTimeout(() => {
                        this.setState({ success: true });
                    }, 1000); 
            
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });

        // const url = "http://localhost:4000/table";
        // const response = await fetch(url);


        // const data = await response.json();

        // await this.setState({ loading: false })
        // // console.log(data)
        // await this.setState({ dataTable: data });
        // setTimeout(() => {
        //     this.setState({ success: true });
        // }, 1000);
    }

    getDataTable = (Table_data) => {
        var dps = [];
        if (!this.state.loading) {

            // console.log(G_data[0][0].title)
            for (var i = 0; i < Object.keys(Table_data[0]).length; i++) {
                // console.log(Table_data[0][i].title)
                dps.push({
                    'id': i + 1, 'uuid': Table_data[0][i].uuid,'title': Table_data[0][i].title, 'country': Table_data[0][i].country,
                    'type': Table_data[0][i].type, 'published': Table_data[0][1].published.split('T')[0]
                })
            }

        }
        // dps = [];
        return dps;
    }

    
        
    render() {
        // const history = useHistory();
        const dataTemp = [{
            "id": 1,
            "title": "Book",
            "country": 'thailand',
            'type': 'a',
            'published': '2018-05-23',
        }, {
            "id": 2,
            "title": "Arm",
            "country": 'thailand',
            'type': 'b',
            'published': '2018-02-23',
        }, {
            "id": 3,
            "title": "XD",
            "country": 'thailand',
            'type': 'gf',
            'published': '2018-02-23',
        }, {
            "id": 4,
            "title": "Book",
            "country": 'Wowza',
            'type': 'xy',
            'published': '2019-02-23',
        }, {
            "id": 5,
            "title": "Book",
            "country": 'thailand',
            'type': 'b',
            'published': '2020-02-23',
        },
        ]

        const columns = [{
            dataField: 'id',
            text: '',
            // sort: true,
            // filter: textFilter()
        },{
            dataField: 'uuid',
            text: 'uuid',
            // sort: true,
            // filter: textFilter()
        },{
            dataField: 'title',
            text: 'title',
            // sort: true,
            // filter: textFilter()
        }, {
            dataField: 'country',
            text: 'country',
            // sort: true,
            // filter: textFilter()
        }, {
            dataField: 'type',
            text: 'type',
            // sort: true,
            // filter: textFilter()
        }, {
            dataField: 'published',
            text: 'published',
            // sort: true,
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
            }, {
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

        const rowEvents = {
            onClick: (e, row, rowIndex) => {
                
              console.log(row.uuid)
            //   history.push("/path");
            }
          };

        const { SearchBar, ClearSearchButton } = Search;

        return (
            <div>
                <h1 className='container-Header-text'>News & Blogs Articles 2017</h1>
                <div >
                    {!this.state.success ?
                        (

                            this.state.errorMessage == null ?
                            (<div style={{ display: "flex" }}>
                                {this.state.loading ?
                                    <Lottie options={defaultLoading} height={140} width={140} /> :
                                    <Lottie options={defaultSuccess} height={140} width={140} />
                                }
                            </div>):
                            (
                                <div style ={{textAlign: 'center'}}>
                                <h1>SORRY!</h1>
                                <p >Server down</p>
                                <p>Please contact (kantawit sakhet 082-8834901 )</p>
                                </div>
                            )
    


                        ) :
                        (

                            <div className='container-table'>
                                <ToolkitProvider
                                    bootstrap4
                                    keyField='id'
                                    data= {this.getDataTable(this.state.dataTable)}//{dataTemp}//
                                    columns={columns}
                                    search
                                >
                                    {
                                        props => (
                                            <dir>
                                                <SearchBar {...props.searchProps} />
                                                <ClearSearchButton {...props.searchProps} />

                                            
                                            <BootstrapTable classes='container-Font'
                                                striped // ตัวกำหนด สี สลับ ใน row
                                                hover // ตัว กำหนด ตอนชี้ เปลี่ยนสี พื้นหลัง
                                                keyField='id'
                                                filter={filterFactory()}
                                                pagination={pagination}
                                                bootstrap4={true}
                                                // selectRow={ { mode: 'checkbox', clickToSelect: true } }
                                                // data={dataTemp} //this.getDataTable(this.state.dataTable)
                                                {...props.baseProps}
                                                columns={columns}
                                                rowEvents={ rowEvents }
                                            // defaultSorted={defaultSortedBy}
                                            />

                                            </dir>

                                        )}
                                </ToolkitProvider>
                            </div>


                        )
                    }

                </div>





            </div>

        )

    }

}

// export default Table
