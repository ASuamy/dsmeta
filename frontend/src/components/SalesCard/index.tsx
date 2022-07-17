import './styles.css';
import NotificationButton from '../NotificationButton';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';
import { Sale } from '../../models/sale';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {

        const dmin = minDate.toISOString().slice(0, 10);
        const dmax = maxDate.toISOString().slice(0, 10);
    

        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`).then(response => {
            setSales(response.data.content);
        });
    }, [minDate, maxDate]);

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>

                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="dsmeta-col-id">ID</th>
                                <th className="dsmeta-col-data">Data</th>
                                <th>Vendedor</th>
                                <th className="dsmeta-col-visitas">Visitas</th>
                                <th className="dsmeta-col-vendas">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sales.map(sale => {
                                    return (
                                        <tr key={sale.id}>
                                            <td className="dsmeta-col-id">{sale.id}</td>
                                            <td className="dsmeta-col-data">{new Date(sale.date).toLocaleDateString()}</td>
                                            <td>{sale.sellerName}</td>
                                            <td className="dsmeta-col-visitas">{sale.visited}</td>
                                            <td className="dsmeta-col-vendas">{sale.deals}</td>
                                            <td>{sale.amount.toFixed(2)}</td>
                                            <td>
                                                <div className="dsmeta-btn-container">
                                                    <NotificationButton />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )

}

export default SalesCard;
